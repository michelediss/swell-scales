// fonts.js
function addGoogleFontsLink(url) {
  if (typeof document !== "undefined") { // Assicurati che 'document' sia definito
    const link = document.createElement('link');
    link.href = url;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  } else {
    console.error('This function needs to be run in a browser environment');
  }
}

module.exports = { addGoogleFontsLink };
