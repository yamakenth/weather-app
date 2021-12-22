import './style.css';
import BackgroundImage from './img/background.png';
import SearchIcon from './img/magnifying-glasses.png';

console.log('hello');

const hello = document.createElement('h1');
hello.textContent = 'yeehaw';
document.querySelector('body').appendChild(hello);

const backgroundImg = document.createElement('img');
backgroundImg.src = BackgroundImage;
backgroundImg.style.height = '200px';
document.querySelector('body').appendChild(backgroundImg);

const searchIcon = document.createElement('img');
searchIcon.src = SearchIcon;
searchIcon.style.height = '50px';
document.querySelector('body').appendChild(searchIcon);
