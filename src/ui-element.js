import SearchIcon from './img/magnifying-glasses.png';

const body = document.querySelector('body');

// create header section 
// take in no parameters 
// return no results 
function createHeader() {
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

  function createInputContainer() {
    // > container 
    const container = document.createElement('div');
    container.classList.add('location-input-container');
    // >> form 
    const form = createForm();
    // >> erorr message 
    const errorMsg = document.createElement('p');
    errorMsg.classList.add('error-message');
    errorMsg.textContent = '';
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
    const fButton = document.createElement('button');
    fButton.type = 'button';
    fButton.id = 'f-toggle';
    fButton.textContent = '˚F';
    // >> p
    const slash = document.createElement('p');
    slash.textContent = '/';
    // >> button 
    const cButton = document.createElement('button');
    cButton.type = 'button';
    cButton.id = 'c-toggle';
    cButton.textContent = '˚C';
    // append child to parent 
    container.appendChild(fButton);
    container.appendChild(slash);
    container.appendChild(cButton);
    return container
  }
}

// craete todays view display 
// take in data 
// return no results 
function createTodaysView(data) {
  // > todays view 
  const todaysView = document.createElement('div');
  todaysView.classList.add('todays-view');
  // >> location name 
  const locationName = createLocationNameContainer();
  // >> temperature 
  const currentTemp = createCurrentTemp();
  // >> description 
  // >> facts 
  // append child to parent 
  todaysView.appendChild(locationName);
  todaysView.appendChild(currentTemp);
  body.appendChild(todaysView);

  // location name div 
  function createLocationNameContainer() {
    // > container 
    const container = document.createElement('div');
    container.classList.add('location-name-container');
    // >> icon 
    const icon = document.createElement('img');
    icon.src = `http://openweathermap.org/img/wn/${data.current.weatherIcon}@2x.png`
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
    temp.textContent = `${data.current.temp}˚`;
    return temp;
  }
}

export { createHeader, createTodaysView };