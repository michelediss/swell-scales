// Import custom plugins for typography scale, font family, and color assignment
const typographyScalePlugin = require('./src/swell-scales/typo-scale/typography-scale-plugin');
const { fontFamilyPlugin } = require('./src/swell-scales/font-pairing/font-pairing-plugin');
const colorsPlugin = require('./src/swell-scales/color-generator/color-assignment');

module.exports = {
  // Define the paths to all content files that Tailwind CSS should scan for class names
  content: [
    './public/**/*.html', // Include all HTML files in the public directory
    './src/**/*.{vue,js,ts,jsx,tsx}', // Include all Vue, JavaScript, TypeScript, and JSX/TSX files in the src directory
  ],
  
  // Register custom plugins with Tailwind CSS
  plugins: [
    typographyScalePlugin, // Plugin for generating a custom typography scale
    colorsPlugin, // Plugin for generating and assigning custom colors
    fontFamilyPlugin,  // Plugin for handling custom font pairings
  ],
};
