// Importa direttamente il file JSON
const inputData = require('../input.json');

// Estrai la configurazione del font pairing
const fontChoice = inputData.fontPairingConfig;
const fontFamily = require(`./pairing-list/${fontChoice.chosenPair}`);

// Funzione per aggiungere il link ai Google Fonts
function addGoogleFontsLink(url) {
  if (typeof document !== 'undefined') {
    const link = document.createElement('link');
    link.href = url;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
}

// Plugin per generare le classi delle famiglie di font
const fontFamilyPlugin = ({ addUtilities }) => {
  const newFontUtilities = {
    '.font-paragraph': {
      fontFamily: fontFamily.paragraph.fontfamily.replace(/['"]+/g, ''),
      fontWeight: fontFamily.paragraph.fontweight || 'normal',
      lineHeight: fontFamily.paragraph.lineheight,
    },
    '.font-heading': {
      fontFamily: fontFamily.heading.fontfamily.replace(/['"]+/g, ''),
      fontWeight: fontFamily.heading.fontweight || 'normal',
      lineHeight: fontFamily.heading.lineheight,
      textTransform: fontFamily.heading.texttransform || 'none',
    },
  };

  addUtilities(newFontUtilities, ['responsive']);
};

module.exports = {
  fontFamilyPlugin,
  addGoogleFontsLink,
  fontFamily,
};
