// typography.js

/**
 * Generates a responsive base font size map based on a base size, an increment factor,
 * and optional custom breakpoints.
 * @param {number} baseSize - The base font size in pixels.
 * @param {number} incrementFactor - The factor by which the font size increases at each breakpoint.
 * @param {object} customBreakpoints - Optional custom breakpoints to override the defaults.
 * @returns {object} A map of media queries with corresponding html font sizes.
 */
function generateResponsiveBaseFontSize(baseSize, incrementFactor, customBreakpoints = {}) {
  // Default breakpoints as commonly used in responsive design
  const defaultBreakpoints = {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  };

  // Combine default and custom breakpoints
  const breakpoints = { ...defaultBreakpoints, ...customBreakpoints };
  let responsiveBaseFontSize = {
    'html': { fontSize: `${baseSize}px` },
  };

  // Calculate and assign font sizes for each breakpoint
  Object.entries(breakpoints).forEach(([key, value], index) => {
    let size = baseSize * Math.pow(incrementFactor, index + 1);
    size = Math.round(size * 100) / 100;  // Round to two decimal places
    responsiveBaseFontSize[`@media (min-width: ${value})`] = {
      'html': { fontSize: `${size}px` },
    };
  });

  return responsiveBaseFontSize;
}

/**
 * Generates a typographic scale based on a base font size, a scaling ratio, and a count of steps.
 * @param {number} f0 - The base font size.
 * @param {number} r - The scaling ratio.
 * @param {number} n - Number of steps below the base size.
 * @param {number} count - Total number of steps in the scale.
 * @returns {object} A map of typographic sizes using scale names.
 */
function generateTypographicScale(f0, r, n, count) {
  const scaleNamesAboveBase = ['base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'];
  const scaleNamesBelowBase = ['xs', 'sm'];
  let scale = {};

  // Calculate sizes above the base size
  for (let i = 0; i <= count; i++) {
    let size = f0 * Math.pow(r, i);
    size = Math.round(size * 100) / 100;  // Round to two decimal places
    let scaleName = scaleNamesAboveBase[i] ? scaleNamesAboveBase[i] : `scale-${i + 1}`;
    scale[scaleName] = `${size}rem`;
  }

  // Calculate sizes below the base size
  for (let i = 1; i <= scaleNamesBelowBase.length; i++) {
    let size = f0 / Math.pow(r, i);
    size = Math.round(size * 100) / 100;  // Round to two decimal places
    scale[scaleNamesBelowBase[scaleNamesBelowBase.length - i]] = `${size}rem`;
  }

  return scale;
}

// Export the functions to be used in other parts of the application
module.exports = { generateResponsiveBaseFontSize, generateTypographicScale };
