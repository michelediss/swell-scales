// fonts.js

/**
 * Inserts a Google Fonts link into the HTML document's head section if running in a browser environment.
 * This function dynamically creates and appends a 'link' element to include a font stylesheet.
 * 
 * @param {string} url - The URL of the Google Fonts stylesheet.
 */
function addGoogleFontsLink(url) {
  // Check if 'document' is defined, indicating script is running in a browser
  if (typeof document !== "undefined") {
    // Create a 'link' element to link external stylesheet
    const link = document.createElement('link');
    link.href = url; // Set the href attribute to the provided URL
    link.rel = 'stylesheet'; // Define relationship as a stylesheet
    document.head.appendChild(link); // Append the link element to the document's head
  } else {
    // Log an error if this function is not executed in a browser environment
    console.error('This function needs to be run in a browser environment');
  }
}

// Export the addGoogleFontsLink function to be used in other parts of the application
module.exports = { addGoogleFontsLink };
