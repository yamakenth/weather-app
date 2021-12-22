// free API key
const API_KEY = '1ea5dd769f80aec18e48a9cb93379a09'; 

// get current weather data 
// take in city name 
// return data 
async function getCurrentWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  try {
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    return data;
  } catch(err) {
    console.log(err);
  }
}

// get forecast weather data 
// take in current weather obj
// return data 
async function getForecast(obj) {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${obj.lat}&lon=${obj.lon}&exclude=minutely,hourly,alerts&appid=${API_KEY}`;
  
  console.log(url);
}

// get weather from city name input 
// take in city name 
// return data
async function getWeather(cityName) {
  const currentWeather = await getCurrentWeather(cityName);
  const forecast = await getForecast(currentWeather);

  return forecast;
}

export { getWeather };