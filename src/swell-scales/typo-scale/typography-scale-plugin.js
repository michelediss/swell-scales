// Import the required modules: Tailwind CSS plugin function, file system (fs), and path utilities
const plugin = require('tailwindcss/plugin');
const fs = require('fs');
const path = require('path');

// Define the path to the unified JSON configuration file
const configPath = path.resolve(__dirname, '../input.json');
let config;

try {
  // Read and parse the JSON configuration file to extract the typography scale configuration
  const inputData = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  config = inputData.typographyScaleConfig; // Extract the typography scale configuration
} catch (error) {
  // Log an error message if there is an issue reading or parsing the JSON file
  console.error('Error reading JSON file:', error);
}

// Export the Tailwind CSS plugin
module.exports = plugin(function({ addBase, addUtilities }) {
  if (!config) {
    // Log an error message and exit if the configuration could not be loaded
    console.error('Configuration not found or error reading JSON.');
    return;
  }

  // Extract responsive base font size and custom scale ratio from the configuration
  const { responsiveBaseFontSize, customFontSizeScale } = config;

  // Define the names of the scale levels above and below the base font size
  const scaleNamesAboveBase = [
    "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"
  ];

  const scaleNamesBelowBase = [
    "xs", "sm"
  ];

  // Get the base font size in pixels from the configuration
  const baseSize = responsiveBaseFontSize.baseSize; // Keep baseSize in px
  const ratio = customFontSizeScale.r; // Get the custom scale ratio

  console.log('Value of r:', ratio); // Log the scale ratio for debugging

  // Helper function to calculate the power of a base number
  function pow(base, exponent) {
    return Math.pow(base, exponent);
  }

  // Function to generate a typographic scale based on the base font size, ratio, and scale names
  function generateTypographicScale(baseFontSize, ratio, scaleNamesAboveBase, scaleNamesBelowBase) {
    const scale = {};

    // Generate font sizes for the scale levels above the base size
    scaleNamesAboveBase.forEach((name, i) => {
      const size = (baseFontSize * pow(ratio, i)).toFixed(4); 
      scale[name] = `${(size / baseFontSize).toFixed(4)}rem`; // Convert the size to rem units
    });

    // Generate font sizes for the scale levels below the base size
    scaleNamesBelowBase.forEach((name, i) => {
      const size = (baseFontSize / pow(ratio, scaleNamesBelowBase.length - i)).toFixed(4); 
      scale[name] = `${(size / baseFontSize).toFixed(4)}rem`; // Convert the size to rem units
    });

    return scale; // Return the generated scale
  }

  // Add a base font size to the HTML element, setting it to the baseSize from the configuration
  addBase({
    'html': {
      fontSize: `${baseSize}px`,
    },
  });

  // Generate the complete typographic scale
  const scale = generateTypographicScale(baseSize, ratio, scaleNamesAboveBase, scaleNamesBelowBase);

  console.log('Custom Typography Scale:', scale); // Log the generated scale for debugging

  // Create utility classes for each scale level
  const utilities = Object.keys(scale).reduce((acc, name) => {
    acc[`.text-${name}`] = { fontSize: scale[name] }; // Add a utility class for the font size
    return acc;
  }, {});

  // Add the generated utilities to Tailwind, making them responsive
  addUtilities(utilities, { variants: ['responsive'] });
});
