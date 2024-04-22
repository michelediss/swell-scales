const fs = require('fs');

// Funzione per caricare la configurazione dei colori da un file JSON
function loadColors() {
  const colorData = JSON.parse(fs.readFileSync('./src/swell-scales/color-palette/palette-controller.json', 'utf8'));
  let colorConfig = {
    textColors: {},
    backgroundColors: {},
    borderColors: {},
    buttonColors: {},
    gradients: {}
  };

  // Elabora ogni sezione di colore nel JSON
  Object.entries(colorData.controller).forEach(([key, value]) => {
    if (key.startsWith('text')) {
      colorConfig.textColors[key] = value;
    } else if (key.startsWith('bg')) {
      colorConfig.backgroundColors[key] = value;
    } else if (key.startsWith('border')) {
      colorConfig.borderColors[key] = value;
    } else if (key.startsWith('button')) {
      colorConfig.buttonColors[key] = value;
    } else if (key.startsWith('gradient')) {
      colorConfig.gradients[key] = `background-image: ${value};`;
    }
  });

  return colorConfig;
}

// Esporta la configurazione dei colori per l'utilizzo in Tailwind CSS
module.exports = loadColors;
