import { 
  clearDisplay, 
  createForecast, 
  createHeader, 
  createTodaysView, 
  errMsgContol,
  toggleTempHighlight
} from './ui-element';
import { getWeather } from './weather-api';
import './style.css';

// class constant 
const DEFAULT_CITY = 'London';
const DEFAULT_TEMP_UNIT = 'c';

// data of current city 
let currentCityData;

// create header section 
createHeader(DEFAULT_TEMP_UNIT);
// get data for london on page load 
getWeather(DEFAULT_CITY).then(data => {
  currentCityData = data;
  createTodaysView(currentCityData, DEFAULT_TEMP_UNIT);
  createForecast(currentCityData, DEFAULT_TEMP_UNIT);
});

// querySelectors 
const locationInput = document.querySelector('.location-input-form');
const inputField = document.querySelector('.location-input');
const tempToggles = document.querySelectorAll('.toggle-button')

// eventListener on location input 
locationInput.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = inputField.value;
  const currentTempUnit = document.querySelector('.toggle-button.active').value;
  getWeather(city)
    .then(data => {
      if (data !== undefined) {
        currentCityData = data;
        errMsgContol(0);
        clearDisplay();
        createTodaysView(currentCityData, currentTempUnit);
        createForecast(currentCityData, currentTempUnit);
        inputField.value = '';
      } else {
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
  });
});