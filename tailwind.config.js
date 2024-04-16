// ========================
// Importing Typography Modules
// ========================
// Functions for generating responsive font sizes and typographic scales
const { generateResponsiveBaseFontSize, generateTypographicScale } = require('./src/swell-scales/typo-scale/typography');
const typographyConfig = require('./src/swell-scales/typo-scale/typography-controller.json');

// ========================
// Importing Font Pairing Modules
// ========================
// Utility for adding Google Fonts links dynamically to the document
const { addGoogleFontsLink } = require('./src/swell-scales/font-pairing/fonts');
// Configuration for font choices based on selected pairings
const fontChoice = require('./src/swell-scales/font-pairing/fontChoice.json');
const fontFamily = require(`./src/swell-scales/font-pairing/pairing-list/${fontChoice.chosenPair}`);

// ========================
// Importing Color Palette System Modules
// ========================
// Configuration for color palettes, including definitions for swatches
// const colorData = require('./src/swell-scales/color-palette/palette-controller.json');

// Apply Google Fonts link if in a browser environment
if (typeof document !== "undefined") {
  addGoogleFontsLink(fontFamily.fontUrl);
}

// Generate base font sizes for responsiveness based on the configuration
const responsiveBaseFontSize = generateResponsiveBaseFontSize(
  typographyConfig.responsiveBaseFontSize.baseSize,
  typographyConfig.responsiveBaseFontSize.incrementFactor
);

// Create a custom typographic scale from configuration
const customFontSizeScale = generateTypographicScale(
  typographyConfig.customFontSizeScale.f0,  // Initial font size
  typographyConfig.customFontSizeScale.r,   // Scaling ratio
  typographyConfig.customFontSizeScale.n,   // Steps below the base size
  typographyConfig.customFontSizeScale.count // Total number of steps in the scale
);

// Processing color swatches from palette data
// Disabled by default, uncomment to use
// const colors = colorData.reduce((acc, palette) => {
//   acc[palette.paletteName] = palette.swatches.reduce((swatchAcc, swatch) => {
//     swatchAcc[swatch.name.substring(palette.paletteName.length + 1)] = swatch.color;
//     return swatchAcc;
//   }, {});
//   return acc;
// }, {});

// Tailwind CSS configuration module
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: customFontSizeScale,
      fontFamily: {
        'paragraph': fontFamily.paragraph.fontfamily.replace(/['"]+/g, ''),
        'paragraph-weight': fontFamily.paragraph.fontweight || 'normal',
        'paragraph-lineheight': fontFamily.paragraph.lineheight,
        'heading': fontFamily.heading.fontfamily.replace(/['"]+/g, ''),
        'heading-weight': fontFamily.heading.fontweight || 'normal',
        'heading-lineheight': fontFamily.heading.lineheight,
        'heading-transform': fontFamily.heading.texttransform || 'none',
      },
      // Uncomment to use colors configuration in Tailwind's theme
      // colors: colors,
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
          textTransform: theme('fontFamily.heading-transform'),
        },
      };
      addUtilities(newFontUtilities, ['responsive']);
    },
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
};
