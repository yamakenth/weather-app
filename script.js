const API_KEY = '1ea5dd769f80aec18e48a9cb93379a09';
const DEFAULT_CITY = 'London';

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  try {
    const response = await fetch(url, { mode: 'cors' });
    const json = await response.json();
    if (json.cod === '400') {
      throw new Error('City not found!');
    }
    console.log(parseJSON(json));
  } catch(err) {
    console.log(err);
  }
}

function parseJSON(obj) {
  const picked = {
    city: obj.name,
    country: obj.sys.country,
    feels_like: obj.main.feels_like,
    humidity: obj.main.humidity,
    pressure: obj.main.pressure,
    temp: obj.main.temp,
    tempMax: obj.main.temp_max,
    tempMin: obj.main.temp_min,
    weatherDescription: obj.weather[0].description,
    weaterIcon: obj.weather[0].icon,
    windSpeed: obj.wind.speed
  }

  return picked;
}

getWeather(DEFAULT_CITY);

const locationSubmissionForm = document.querySelector('.location-submission-container');
locationSubmissionForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const city = document.querySelector('.location-submission').value;
  getWeather(city);

});
