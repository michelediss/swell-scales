// Importazioni necessarie
const { addGoogleFontsLink } = require('./src/tailwindConf/fontPairing/fonts');
const { generateResponsiveBaseFontSize, generateTypographicScale } = require('./src/tailwindConf/typoScale/typography');
const fontChoice = require('./src/tailwindConf/fontPairing/fontChoice.json');
const fontFamily = require(`./src/tailwindConf/fontPairing/pairingList/${fontChoice.chosenPair}`);
const typographyConfig = require('./src/tailwindConf/typoScale/typography-controller.json');
const colorData = require('./src/tailwindConf/colorPalette/palette-controller.json');

// Applicazione della configurazione dei font
if (typeof document !== "undefined") {
  addGoogleFontsLink(fontFamily.fontUrl);
}

// Configurazione della tipografia e dei breakpoint responsivi
const responsiveBaseFontSize = generateResponsiveBaseFontSize(
  typographyConfig.responsiveBaseFontSize.baseSize,
  typographyConfig.responsiveBaseFontSize.incrementFactor
);

// Configurazione della scala tipografica
const customFontSizeScale = generateTypographicScale(
  typographyConfig.customFontSizeScale.f0,
  typographyConfig.customFontSizeScale.r,
  typographyConfig.customFontSizeScale.n,
  typographyConfig.customFontSizeScale.count
);

// Formattazione valori swatches
const colors = colorData.reduce((acc, palette) => {
  acc[palette.paletteName] = palette.swatches.reduce((swatchAcc, swatch) => {
    swatchAcc[swatch.name.substring(palette.paletteName.length + 1)] = swatch.color;
    return swatchAcc;
  }, {});
  return acc;
}, {});

module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: customFontSizeScale,
      colors: colors,
      fontFamily: {
        'paragraph': fontFamily.paragraph.fontfamily.replace(/['"]+/g, ''),
        'paragraph-weight': fontFamily.paragraph.fontweight || 'normal',
        'paragraph-lineheight': fontFamily.paragraph.lineheight,
        'heading': fontFamily.heading.fontfamily.replace(/['"]+/g, ''),
        'heading-weight': fontFamily.heading.fontweight || 'normal',
        'heading-lineheight': fontFamily.heading.lineheight,
        'heading-transform': fontFamily.heading.texttransform || 'none', // Aggiungi questa riga
      },
    },
  },
  plugins: [
    function({ addBase }) {
      addBase(responsiveBaseFontSize);
    },
    function({ addUtilities, theme }) {
      const newFontUtilities = {
        '.font-paragraph': {
          fontFamily: theme('fontFamily.paragraph'),
          fontWeight: theme('fontFamily.paragraph-weight'),
          lineHeight: theme('fontFamily.paragraph-lineheight'),
        },
        '.font-heading': {
          fontFamily: theme('fontFamily.heading'),
          fontWeight: theme('fontFamily.heading-weight'),
          lineHeight: theme('fontFamily.heading-lineheight'),
          textTransform: theme('fontFamily.heading-transform'), // Applica il text-transform
        },
      };

      addUtilities(newFontUtilities, ['responsive']);
    },
  ],
};
