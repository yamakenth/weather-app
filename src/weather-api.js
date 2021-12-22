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
// take in coordinate from current weather obj
// return data 
async function getForecast(coord) {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely,hourly,alerts&appid=${API_KEY}`;
  try {
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    return data;
  } catch(err) {
    console.log(err);
  }
}

// parse raw data to extract only requried fields 
// take in currentWeather and forecast data
// return new obj of objs
function parseJSON(currentWeather, forecast) {
  const current = {
    feels_like: currentWeather.main.feels_like,
    humidity: currentWeather.main.humidity,
    pressure: currentWeather.main.pressure,
    temp: currentWeather.main.temp,
    tempMax: currentWeather.main.temp_max,
    tempMin: currentWeather.main.temp_min,
    weatherDescription: currentWeather.weather[0].description,
    weatherIcon: currentWeather.weather[0].icon,
    windSpeed: currentWeather.wind.speed
  }
  
  const daily = [];
  forecast.daily.forEach(day => {
    const dayObj = {
      dt: day.dt,
      temp: day.temp.day,
      weatherDescription: day.weather[0].description,
      weatherIcon: day.weather[0].icon
    }
    daily.push(dayObj);
  });
  
  return {
    city: currentWeather.name,
    country: currentWeather.sys.country,
    current,
    daily
  };
}

// get weather from city name input 
// take in city name 
// return data
async function getWeather(cityName) {
  const currentWeather = await getCurrentWeather(cityName);
  const forecast = await getForecast(currentWeather.coord);
  const weather = parseJSON(currentWeather, forecast);
  return weather;
}

export { getWeather };