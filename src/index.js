import { createHeader } from './ui-element';
import { getWeather } from './weather-api';
import './style.css';

getWeather('London').then(data => console.log(data));

createHeader();
