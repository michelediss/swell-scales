// Directly import the JSON file that contains configuration data
const inputData = require('../input.json');

// Extract the font pairing configuration from the imported JSON data
const fontChoice = inputData.fontPairingConfig;
const fontFamily = require(`./pairing-list/${fontChoice.chosenPair}`); // Load the specific font pairing configuration based on the chosen pair

// Function to add a Google Fonts link to the document head
function addGoogleFontsLink(url) {
  if (typeof document !== 'undefined') { // Ensure this is running in a browser environment
    const link = document.createElement('link'); // Create a new link element
    link.href = url; // Set the link's href attribute to the Google Fonts URL
    link.rel = 'stylesheet'; // Set the link's relation to stylesheet
    document.head.appendChild(link); // Append the link element to the document head
  }
}

// Plugin function to generate CSS classes for font families
const fontFamilyPlugin = ({ addUtilities }) => {
  // Create new utilities for the paragraph and heading font classes
  const newFontUtilities = {
    '.font-paragraph': {
      fontFamily: fontFamily.paragraph.fontfamily.replace(/['"]+/g, ''), // Use the font family specified for paragraphs, stripping any quotes
      fontWeight: fontFamily.paragraph.fontweight || 'normal', // Set the font weight, defaulting to 'normal' if not specified
      lineHeight: fontFamily.paragraph.lineheight, // Set the line height for paragraphs
    },
    '.font-heading': {
      fontFamily: fontFamily.heading.fontfamily.replace(/['"]+/g, ''), // Use the font family specified for headings, stripping any quotes
      fontWeight: fontFamily.heading.fontweight || 'normal', // Set the font weight for headings, defaulting to 'normal' if not specified
      lineHeight: fontFamily.heading.lineheight, // Set the line height for headings
      textTransform: fontFamily.heading.texttransform || 'none', // Set text transformation for headings, defaulting to 'none'
    },
  };

  // Add the generated utilities to the utility-first CSS framework with responsive variants
  addUtilities(newFontUtilities, ['responsive']);
};

// Export the plugin and utility functions
module.exports = {
  fontFamilyPlugin, // Export the font family plugin for generating CSS classes
  addGoogleFontsLink, // Export the function to add Google Fonts links
  fontFamily, // Export the loaded font family configuration
};
