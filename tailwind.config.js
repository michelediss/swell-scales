const typographyScalePlugin = require('./src/swell-scales/typo-scale/typography-scale-plugin');
const { fontFamilyPlugin } = require('./src/swell-scales/font-pairing/font-pairing-plugin');
const colorsPlugin = require('./src/swell-scales/color-generator/color-assignment');

module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  plugins: [
    typographyScalePlugin,
    colorsPlugin,
    fontFamilyPlugin, 
  ],
};
