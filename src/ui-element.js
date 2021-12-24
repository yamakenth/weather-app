import { fromUnixTime, format } from 'date-fns';
import { Kelvin } from 'node-temperature-converter';
import SearchIcon from './img/magnifying-glasses.png';

// html body element 
const body = document.querySelector('body');
const content = document.createElement('div');
content.classList.add('content');

// create header section 
// take in no parameters 
// return no results 
function createHeader(tempUnit) {
  // > header 
  const header = document.createElement('div');
  header.classList.add('header');
  // >> location input container 
  const cityInput = createInputContainer();
  // >> temp toggle container 
  const tempToggle = createTempToggleContainer();
  // append child to parent 
  header.appendChild(cityInput);
  header.appendChild(tempToggle);
  body.appendChild(header);
  // highlight default temp unit 
  document.querySelector(`#${tempUnit}`).classList.add('active');

  function createInputContainer() {
    // > container 
    const container = document.createElement('div');
    container.classList.add('location-input-container');
    // >> form 
    const form = createForm();
    // >> erorr message 
    const errorMsg = document.createElement('p');
    errorMsg.classList.add('error-message');
    errorMsg.textContent = 'Your city was not found. Please try again.';
    // append child to parent 
    container.appendChild(form);
    container.appendChild(errorMsg);
    return container;
  }

  function createForm() {
    // > form 
    const form = document.createElement('form');
    form.classList.add('location-input-form');
    // >> iput 
    const input = document.createElement('input');
    input.type = 'text';
    input.classList.add('location-input');
    input.placeholder = 'Search city';
    input.autofocus = true;
    // >> button 
    const button = document.createElement('button');
    button.type = 'submit';
    // >>> img 
    const img = document.createElement('img');
    img.src = SearchIcon;
    // append child to parent 
    button.appendChild(img);
    form.appendChild(input);
    form.appendChild(button);
    return form;
  }

  function createTempToggleContainer() {
    // > container 
    const container = document.createElement('div');
    container.classList.add('temp-toggle-container');
    // >> button 
    const cButton = document.createElement('button');
    cButton.type = 'button';
    cButton.classList.add('toggle-button');
    cButton.id = 'c';
    cButton.value = 'c';
    cButton.textContent = '˚C';
    // >> p
    const slash = document.createElement('p');
    slash.textContent = '/';
    // >> button
    const fButton = document.createElement('button');
    fButton.type = 'button';
    fButton.classList.add('toggle-button');
    fButton.id = 'f';
    fButton.value = 'f';
    fButton.textContent = '˚F';
    // append child to parent 
    container.appendChild(cButton);
    container.appendChild(slash);
    container.appendChild(fButton);
    return container
  }
}

// create todays view display 
// take in data 
// return no results 
function createTodaysView(data, tempUnit) {
  // > todays view 
  const todaysView = document.createElement('div');
  todaysView.classList.add('todays-view');
  // >> location name 
  const locationName = createLocationNameContainer();
  // >> temperature 
  const currentTemp = createCurrentTemp();
  // >> description 
  const description = createDescriptionContainer();
  // >> facts 
  const facts = createFactsContainer();
  // append child to parent 
  todaysView.appendChild(locationName);
  todaysView.appendChild(currentTemp);
  todaysView.appendChild(description);
  todaysView.appendChild(facts);
  content.appendChild(todaysView);
  body.appendChild(content);

  // location name div 
  function createLocationNameContainer() {
    // > container 
    const container = document.createElement('div');
    container.classList.add('location-name-container');
    // >> icon 
    const icon = document.createElement('img');
    icon.src = `http://openweathermap.org/img/wn/${data.current.weatherIcon}@2x.png`;
    // >> name 
    const name = document.createElement('h1');
    name.textContent = `${data.city}, ${data.country}`;
    // append child to parent 
    container.appendChild(icon);
    container.appendChild(name);
    return container;
  }

  // current temp 
  function createCurrentTemp() {
    // > h1
    const temp = document.createElement('h1');
    temp.classList.add('current-temp');
    temp.textContent = `${convertTemp(data.current.temp, tempUnit)}˚`;
    return temp;
  }

  // description
  function createDescriptionContainer() {
    // > container 
    const container = document.createElement('div');
    container.classList.add('description-container');
    // >> desc 
    const desc = document.createElement('h3');
    desc.classList.add('weather-description');
    desc.textContent = data.current.weatherDescription;
    // >> high
    const high = document.createElement('h3');
    high.classList.add('max-temp');
    high.textContent = `H: ${convertTemp(data.current.tempMax, tempUnit)}˚`;
    // >> low 
    const low = document.createElement('h3');
    low.classList.add('low-temp');
    low.textContent = `L: ${convertTemp(data.current.tempMin, tempUnit)}˚`;
    // append child to parent 
    container.appendChild(desc);
    container.appendChild(high);
    container.appendChild(low);
    return container;
  }

  // facts 
  function createFactsContainer() {
    // > container 
    const container = document.createElement('div');
    container.classList.add('facts-container');
    // >> fact div
    const feelsLike = createFactsDiv(`${convertTemp(data.current.feels_like, tempUnit)}˚`, 'Feels Like');
    const pressure = createFactsDiv(`${data.current.pressure}hPa`, 'Pressure');
    const humidity = createFactsDiv(`${data.current.humidity}%`, 'Humidity');
    const windSpeed = createFactsDiv(`${data.current.windSpeed}m/s`, 'Wind Speed');
    // append child to parent 
    container.appendChild(feelsLike);
    container.appendChild(pressure);
    container.appendChild(humidity);
    container.appendChild(windSpeed);
    return container;
  }

  // helper function to create facts div 
  function createFactsDiv(dataFact, dataLabel) {
    // > facts div 
    const container = document.createElement('div');
    container.classList.add('fact-section');
    // >> fact
    const fact = document.createElement('h3');
    fact.textContent = dataFact;
    // >> title 
    const title = document.createElement('h3');
    title.textContent = dataLabel;
    // append child to parent 
    container.appendChild(fact);
    container.appendChild(title);
    return container;
  }
}

// create forecast section 
// take in data 
// return no results 
function createForecast(data, tempUnit) {
  // > container 
  const container = document.createElement('div');
  container.classList.add('forecast');
  createAndAppendDailyForecast();
  // append child to parent 
  content.appendChild(container);
  body.appendChild(content);

  // create daily forecast 
  function createAndAppendDailyForecast() {
    for (let i = 1; i < data.daily.length; i++) {
      const day = data.daily[i];
      // >> daily forecast 
      const dailyForecast = document.createElement('div');
      dailyForecast.classList.add('daily-forecast');
      // >>> date 
      const date = document.createElement('h3');
      const dayOfWeek = format(fromUnixTime(day.dt), 'iii');
      date.textContent = dayOfWeek;
      // >>> weather icon 
      const weatherIcon = document.createElement('img');
      weatherIcon.src = `http://openweathermap.org/img/wn/${day.weatherIcon}@2x.png`;
      // >>> temp 
      const temp = document.createElement('h3');
      temp.textContent = `${convertTemp(day.temp, tempUnit)}˚`;
      // >>> weather description
      const weatherDesc = document.createElement('h3');
      weatherDesc.textContent = day.weatherDescription;
      // append child to parent  
      dailyForecast.appendChild(date);
      dailyForecast.appendChild(weatherIcon);
      dailyForecast.appendChild(temp);
      dailyForecast.appendChild(weatherDesc);
      container.appendChild(dailyForecast);
    }
  }
}

// clear display 
// take in no parameters 
// return no results 
function clearDisplay() {
  document.querySelector('.todays-view').remove();
  document.querySelector('.forecast').remove();
  document.querySelector('.query-time').remove();
}

// display/hide error message below input 
// take in control (1/0)
// return no results 
function errMsgContol(control) {
  const errMsg = document.querySelector('.error-message');
  if (control === 1) {
    errMsg.classList.add('active');
  } else if (control === 0) {
    errMsg.classList.remove('active');
  }
}

// convert temperature for display 
// take in temp in Kelvin in unit to convert to
// return converted temp 
function convertTemp(k, unit) {
  const kelvin = new Kelvin(k);
  if (unit === 'c') {
    return Math.round(kelvin.toCelsius());
  } else if (unit === 'f') {
    return Math.round(kelvin.toFahrenheit());
  }
}

// toggle active temp button 
// take in id of html element 
// return no result 
function toggleTempHighlight(toggle) {
  if (toggle.id === 'f') {
    document.querySelector('#c').classList.remove('active');
  } else {
    document.querySelector('#f').classList.remove('active');
  }
  toggle.classList.add('active');
}

// create section to display query time 
// take in query time in ms 
// return no results 
function createQueryTime(time) {
  const p = document.createElement('p');
  p.classList.add('query-time');
  p.textContent = `The query took ${time}ms`
  body.appendChild(p);
}

export { 
  createHeader, 
  createTodaysView, 
  createForecast, 
  createQueryTime,
  clearDisplay,
  errMsgContol,
  toggleTempHighlight
};