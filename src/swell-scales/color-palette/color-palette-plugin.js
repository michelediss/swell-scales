const plugin = require('tailwindcss/plugin');

// Importa direttamente i file JSON
const paletteList = require('./color-palette-list.json');
const colorChoose = require('./color-palette-config.json');

// Trova la palette selezionata
const selectedPalette = paletteList.find(palette => palette.index === colorChoose.index);

if (!selectedPalette) {
  console.error('Palette selezionata non trovata.');
} else {
  console.log('Palette selezionata:', selectedPalette);
}

module.exports = plugin(function({ addUtilities }) {
  if (!selectedPalette) return;

  const utilities = {};

  // Colori del testo
  Object.entries(selectedPalette.colors['text-color']).forEach(([key, value]) => {
    // Genera la classe per il colore del testo
    utilities[`.${key}`] = { color: value };
    
    // Genera la classe per il colore del bordo senza il prefisso 'text-' e solo se la chiave non contiene 'heading'
    if (!key.includes('heading')) {
      const borderKey = key.replace('text-', ''); // Rimuove 'text-' dal nome della chiave
      utilities[`.brd-${borderKey}`] = { borderColor: value };
    }
  });

  // Colori di sfondo
  Object.entries(selectedPalette.colors['bg-color']).forEach(([key, value]) => {
    utilities[`.${key}`] = { backgroundColor: value };
  });

  // Colori dei bottoni con hover
  Object.entries(selectedPalette.colors['button-color']).forEach(([key, value]) => {
    if (key.includes('hover')) {
      utilities[`.${key.replace('-hover', '')}:hover`] = { backgroundColor: value };
    } else {
      utilities[`.${key}`] = { backgroundColor: value };
    }
  });

  // Gradienti
  Object.entries(selectedPalette.colors['gradient']).forEach(([key, value]) => {
    utilities[`.bg-${key}`] = { background: value };
  });

  addUtilities(utilities, ['responsive', 'hover']);
});

module.exports.selectedPalette = selectedPalette;
