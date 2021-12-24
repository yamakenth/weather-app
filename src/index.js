import { 
  clearDisplay, 
  createForecast, 
  createHeader, 
  createQueryTime, 
  createTodaysView, 
  errMsgContol,
  loadingMsgContol,
  toggleTempHighlight
} from './ui-element';
import { getWeather } from './weather-api';
import './style.css';

// class constant 
const DEFAULT_CITY = 'London';
const DEFAULT_TEMP_UNIT = 'c';

// global data
let currentCityData;
let queryTime;

// create header section 
createHeader(DEFAULT_TEMP_UNIT);
// get data for london on page load 
loadingMsgContol(1);
getWeather(DEFAULT_CITY).then(data => {
  currentCityData = data.weather;
  queryTime = data.apiCallTime;
  createTodaysView(currentCityData, DEFAULT_TEMP_UNIT);
  createForecast(currentCityData, DEFAULT_TEMP_UNIT);
  loadingMsgContol(0);
  createQueryTime(queryTime);
});

// querySelectors 
const locationInput = document.querySelector('.location-input-form');
const inputField = document.querySelector('.location-input');
const tempToggles = document.querySelectorAll('.toggle-button')

// eventListener on location input 
locationInput.addEventListener('submit', (e) => {
  e.preventDefault();
  loadingMsgContol(1);
  errMsgContol(0);
  const city = inputField.value;
  const currentTempUnit = document.querySelector('.toggle-button.active').value;
  getWeather(city)
    .then(data => {
      if (data !== undefined) {
        currentCityData = data.weather;
        queryTime = data.apiCallTime;
        clearDisplay();
        createTodaysView(currentCityData, currentTempUnit);
        createForecast(currentCityData, currentTempUnit);
        inputField.value = '';
        loadingMsgContol(0);
        createQueryTime(queryTime);
      } else {
        loadingMsgContol(0);
        errMsgContol(1);
      }
    });
  inputField.focus();
});

// eventListener to temp toggles
tempToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    errMsgContol(0);
    toggleTempHighlight(toggle);
    const newTempUnit = toggle.value;
    clearDisplay();
    createTodaysView(currentCityData, newTempUnit);
    createForecast(currentCityData, newTempUnit);
    inputField.value = '';
    createQueryTime(queryTime);
  });
});