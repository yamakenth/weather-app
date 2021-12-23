import { createHeader, createTodaysView } from './ui-element';
import { getWeather } from './weather-api';
import './style.css';

// class constant 
const DEFAULT_CITY = 'London';

// create header section 
createHeader();
// get data for london on page load 
getWeather(DEFAULT_CITY).then(data => {
  console.log(data);
  createTodaysView(data)
});



// eventListener on location input 
const locationInput = document.querySelector('.location-input-form');
locationInput.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputField = document.querySelector('.location-input');
  const city = inputField.value;
  getWeather(city).then(data => console.log(data));
  inputField.value = '';
  inputField.focus();
});