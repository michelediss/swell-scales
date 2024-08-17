// Import the createApp function from the Vue.js framework
import { createApp } from 'vue';

// Import the main App component from the specified file
import App from './App.vue';

// Import custom functions and data from a font-pairing plugin
import { addGoogleFontsLink, fontFamily } from './swell-scales/font-pairing/font-pairing-plugin';

// Import the Tailwind CSS styles
import './assets/styles/tailwind.css';

// Load the Google Fonts stylesheet by adding a link element to the document head
addGoogleFontsLink(fontFamily.fontUrl);

// Create a new Vue.js application instance using the main App component and mount it to the DOM element with the ID 'app'
createApp(App).mount('#app');
