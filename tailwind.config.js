// ========================
// Importing required modules and configurations
// ========================
const { generateResponsiveBaseFontSize, generateTypographicScale } = require('./src/swell-scales/typo-scale/typography');
const typographyConfig = require('./src/swell-scales/typo-scale/typography-controller.json');
const { addGoogleFontsLink } = require('./src/swell-scales/font-pairing/fonts');
const fontChoice = require('./src/swell-scales/font-pairing/fontChoice.json');
const fontFamily = require(`./src/swell-scales/font-pairing/pairing-list/${fontChoice.chosenPair}`);
const colors = require('./src/swell-scales/color-palette/colors');  // Import colors from the colors.js file

// Apply Google Fonts link if in a browser environment
if (typeof document !== "undefined") {
  addGoogleFontsLink(fontFamily.fontUrl);
}

// Generate base font sizes and custom typographic scale
const responsiveBaseFontSize = generateResponsiveBaseFontSize(
  typographyConfig.responsiveBaseFontSize.baseSize,
  typographyConfig.responsiveBaseFontSize.incrementFactor
);
const customFontSizeScale = generateTypographicScale(
  typographyConfig.customFontSizeScale.f0,
  typographyConfig.customFontSizeScale.r,
  typographyConfig.customFontSizeScale.n,
  typographyConfig.customFontSizeScale.count
);

// Tailwind CSS configuration module
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      text: customFontSizeScale,
      fontFamily: {
        'paragraph': fontFamily.paragraph.fontfamily.replace(/['"]+/g, ''),
        'paragraph-weight': fontFamily.paragraph.fontweight || 'normal',
        'paragraph-lineheight': fontFamily.paragraph.lineheight,
        'heading': fontFamily.heading.fontfamily.replace(/['"]+/g, ''),
        'heading-weight': fontFamily.heading.fontweight || 'normal',
        'heading-lineheight': fontFamily.heading.lineheight,
        'heading-transform': fontFamily.heading.texttransform || 'none',
      },
      colors: {
        '1': '#353535',
        '2': '#b5aa75',
        '3': '#aeccd1',
        '3b': '#42636f',
        '4': '#131313',
        '5': '#b6a452',
        '6': '#fae16c',
        '7': '#fffdf5',
        '8': '#fdeea6',
        '9': '#c9c5ad',
        '10': '#001d2e',
        '12': '#c2b67e',
        '13': '#a19766',
        '14': 'linear-gradient(to right, rgba(0, 29, 46, 1) 0%, rgba(0, 28, 45, 1) 35%, rgba(0, 27, 43, 1) 78%, rgba(0, 27, 42, 1) 100%)',
        '15': 'linear-gradient(to right, rgba(0, 29, 46, 0.75) 0%, rgba(0, 28, 45, 0.8) 35%, rgba(0, 27, 43, 0.93) 78%, rgba(0, 27, 42, 0.94) 100%)',
      },
      backgroundColor: theme => ({
        'five': theme('colors.five'), // Questi colori saranno disponibili solo per lo sfondo
        'six': theme('colors.six'),
        'seven': theme('colors.seven')
      }) 
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
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
          textTransform: theme('fontFamily.heading-transform'),
        },
      };
      addUtilities(newFontUtilities, ['responsive']);
    },
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
};
