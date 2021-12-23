import { createHeader } from './ui-element';
import { getWeather } from './weather-api';

getWeather('London').then(data => console.log(data));

createHeader();
