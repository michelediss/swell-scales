import { createApp } from 'vue';
import App from './App.vue';
import { addGoogleFontsLink, fontFamily } from './swell-scales/font-pairing/font-pairing-plugin';
import './assets/styles/tailwind.css';

// Carica il link ai Google Fonts
addGoogleFontsLink(fontFamily.fontUrl);

createApp(App).mount('#app');
