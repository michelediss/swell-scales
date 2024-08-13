// typography-scale.js
const plugin = require('tailwindcss/plugin');
const fs = require('fs');
const path = require('path');

// Percorso al file JSON di configurazione
const configPath = path.resolve(__dirname, './typography-scale-config.json');
let config;

try {
  config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
} catch (error) {
  console.error('Errore nella lettura del file JSON:', error);
}

module.exports = plugin(function({ addBase, addUtilities }) {
  if (!config) {
    console.error('Configurazione non trovata o errore nella lettura del JSON.');
    return;
  }

  const { responsiveBaseFontSize, customFontSizeScale } = config;

  // Definizione delle scale dei nomi direttamente nel file JS
  const scaleNamesAboveBase = [
    "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"
  ];

  const scaleNamesBelowBase = [
    "xs", "sm"
  ];

  const baseSize = responsiveBaseFontSize.baseSize; // Mantieni baseSize in px
  const ratio = customFontSizeScale.r;

  // Debug: verifica che il valore di `r` sia corretto
  console.log('Valore di r:', ratio);

  // Funzione per replicare il comportamento della funzione `pow` in SCSS
  function pow(base, exponent) {
    return Math.pow(base, exponent);
  }

  // Funzione per generare la scala tipografica
  function generateTypographicScale(baseFontSize, ratio, scaleNamesAboveBase, scaleNamesBelowBase) {
    const scale = {};

    // Genera le dimensioni sopra la base
    scaleNamesAboveBase.forEach((name, i) => {
      const size = (baseFontSize * pow(ratio, i)).toFixed(4); // Calcola la dimensione e arrotonda a 4 decimali
      scale[name] = `${(size / baseFontSize).toFixed(4)}rem`; // Converti in rem rispetto alla dimensione base e arrotonda
    });

    // Genera le dimensioni sotto la base
    scaleNamesBelowBase.forEach((name, i) => {
      const size = (baseFontSize / pow(ratio, scaleNamesBelowBase.length - i)).toFixed(4); // Inverti l'ordine del calcolo
      scale[name] = `${(size / baseFontSize).toFixed(4)}rem`; // Converti in rem rispetto alla dimensione base e arrotonda
    });

    return scale;
  }

  // Imposta il font-size di base nel tag html in px
  addBase({
    'html': {
      fontSize: `${baseSize}px`,
    },
  });

  // Generazione della scala tipografica
  const scale = generateTypographicScale(baseSize, ratio, scaleNamesAboveBase, scaleNamesBelowBase);

  // Debug: stampa la scala generata per verificare le dimensioni
  console.log('Custom Typography Scale:', scale);

  // Creazione delle classi tipografiche
  const utilities = Object.keys(scale).reduce((acc, name) => {
    acc[`.text-${name}`] = { fontSize: scale[name] };
    return acc;
  }, {});

  // Aggiunta delle classi con addUtilities
  addUtilities(utilities, { variants: ['responsive'] });
});
