const fs = require('fs');
const chroma = require('chroma-js');

// Funzione per leggere i dati dal file JSON
function getColorInput() {
  const data = fs.readFileSync('src/tailwindConf/colorPalette/color-input.json', 'utf8');
  return JSON.parse(data).color;
}

// Funzione per generare un singolo colore secondario in base allo schema scelto
function getSecondaryHue(hue, schemeType) {
  switch (schemeType) {
    case 'complementary':
      return (hue + 180) % 360;
    case 'triadic1':
      return (hue + 120) % 360;
    case 'triadic2':
      return (hue - 120 + 360) % 360;
    case 'analogous1':
      return (hue + 30) % 360;
    case 'analogous2':
      return (hue - 30 + 360) % 360;
    case 'split1':
      return (hue + 150) % 360;
    case 'split2':
      return (hue - 150 + 360) % 360;
    case 'square1':
      return (hue + 90) % 360;
    case 'square2':
      return (hue - 90 + 360) % 360;
    default:
      return hue; // Default è il colore primario
  }
}

function generateColorScales(colorInput, schemeType = 'complementary') {
  const hue = chroma(colorInput).get('hsl.h');
  const secondaryHue = getSecondaryHue(hue, schemeType);
  
  let palettes = [
    { paletteName: "primary", swatches: [] },
    { paletteName: "secondary", swatches: [] },
    { paletteName: "gray", swatches: [] }
  ];

  // Aggiungi swatches "white" e "black"
  palettes.forEach(palette => {
    palette.swatches.push({name: `${palette.paletteName}-white`, color: chroma.hsl(hue, 0.1, 0.95).hex()});
    palette.swatches.push({name: `${palette.paletteName}-black`, color: chroma.hsl(hue, 0.1, 0.05).hex()});
  });

  // Aggiungi swatches da "100" a "900"
  for (let i = 1; i <= 9; i++) {
    let lightness = 1 - (i / 10);
    palettes[0].swatches.push({name: `primary-${i}00`, color: chroma.hsl(hue, chroma(colorInput).get('hsl.s'), lightness).hex()});
    palettes[1].swatches.push({name: `secondary-${i}00`, color: chroma.hsl(secondaryHue, chroma(colorInput).get('hsl.s'), lightness).hex()});
    palettes[2].swatches.push({name: `gray-${i}00`, color: chroma.hsl(hue, 0.05, lightness).hex()});
  }

  return palettes;
}

// Uso della funzione getColorInput per ottenere il colore dal file JSON
let colorInput = getColorInput();
let schemeType = 'triadic1'; // Scegli il tipo di schema qui (ad esempio, 'triadic1', 'triadic2')
let colorScales = generateColorScales(colorInput, schemeType);

// Scrive l'output in un file JSON
const output = JSON.stringify(colorScales, null, 2);
fs.writeFileSync('src/tailwindConf/colorPalette/palette-controller.json', output, 'utf8');

// Stampa a console per verifica
console.log("Color Scales:", colorScales);
