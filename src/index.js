import { getWeather } from './weather-api';

getWeather('London').then(data => console.log(data));