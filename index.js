// Import stylesheets
import './style.css';
import UAParser from 'ua-parser-js';

const appDiv = document.getElementById('app');
const parser = new UAParser();
const devicePlatform = parser.getOS()?.name;
const redirects = {
  'Android': 'https://www.google.com/search?q=android',
  'Mac OS': 'https://www.google.com/search?q=macos',
  'iOS': 'https://www.google.com/search?q=ios',
  'default': 'https://www.google.com/search?q=help',
};

window.location = redirects[devicePlatform] || redirects['default'];
