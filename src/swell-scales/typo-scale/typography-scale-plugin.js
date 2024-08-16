const plugin = require('tailwindcss/plugin');
const fs = require('fs');
const path = require('path');

// Percorso al file JSON unificato
const configPath = path.resolve(__dirname, '../input.json');
let config;

try {
  const inputData = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  config = inputData.typographyScaleConfig; // Estrai la configurazione della scala tipografica
} catch (error) {
  console.error('Errore nella lettura del file JSON:', error);
}

module.exports = plugin(function({ addBase, addUtilities }) {
  if (!config) {
    console.error('Configurazione non trovata o errore nella lettura del JSON.');
    return;
  }

  const { responsiveBaseFontSize, customFontSizeScale } = config;

  const scaleNamesAboveBase = [
    "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"
  ];

  const scaleNamesBelowBase = [
    "xs", "sm"
  ];

  const baseSize = responsiveBaseFontSize.baseSize; // Mantieni baseSize in px
  const ratio = customFontSizeScale.r;

  console.log('Valore di r:', ratio);

  function pow(base, exponent) {
    return Math.pow(base, exponent);
  }

  function generateTypographicScale(baseFontSize, ratio, scaleNamesAboveBase, scaleNamesBelowBase) {
    const scale = {};

    scaleNamesAboveBase.forEach((name, i) => {
      const size = (baseFontSize * pow(ratio, i)).toFixed(4); 
      scale[name] = `${(size / baseFontSize).toFixed(4)}rem`;
    });

    scaleNamesBelowBase.forEach((name, i) => {
      const size = (baseFontSize / pow(ratio, scaleNamesBelowBase.length - i)).toFixed(4); 
      scale[name] = `${(size / baseFontSize).toFixed(4)}rem`;
    });

    return scale;
  }

  addBase({
    'html': {
      fontSize: `${baseSize}px`,
    },
  });

  const scale = generateTypographicScale(baseSize, ratio, scaleNamesAboveBase, scaleNamesBelowBase);

  console.log('Custom Typography Scale:', scale);

  const utilities = Object.keys(scale).reduce((acc, name) => {
    acc[`.text-${name}`] = { fontSize: scale[name] };
    return acc;
  }, {});

  addUtilities(utilities, { variants: ['responsive'] });
});
