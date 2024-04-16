// typography.js
function generateResponsiveBaseFontSize(baseSize, incrementFactor, customBreakpoints = {}) {
    const defaultBreakpoints = {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    };
    const breakpoints = { ...defaultBreakpoints, ...customBreakpoints };
    let responsiveBaseFontSize = {
      'html': { fontSize: `${baseSize}px` },
    };
  
    Object.entries(breakpoints).forEach(([key, value], index) => {
      let size = baseSize * Math.pow(incrementFactor, index + 1);
      size = Math.round(size * 100) / 100;
      responsiveBaseFontSize[`@media (min-width: ${value})`] = {
        'html': { fontSize: `${size}px` },
      };
    });
  
    return responsiveBaseFontSize;
  }
  
  function generateTypographicScale(f0, r, n, count) {
    const scaleNamesAboveBase = ['base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'];
    const scaleNamesBelowBase = ['xs', 'sm'];
    let scale = {};
  
    for (let i = 0; i <= count; i++) {
      let size = f0 * Math.pow(r, i);
      size = Math.round(size * 100) / 100;
      let scaleName = scaleNamesAboveBase[i] ? scaleNamesAboveBase[i] : `scale-${i + 1}`;
      scale[scaleName] = `${size}rem`;
    }
  
    for (let i = 1; i <= scaleNamesBelowBase.length; i++) {
      let size = f0 / Math.pow(r, i);
      size = Math.round(size * 100) / 100;
      scale[scaleNamesBelowBase[scaleNamesBelowBase.length - i]] = `${size}rem`;
    }
  
    return scale;
  }
  
  module.exports = { generateResponsiveBaseFontSize, generateTypographicScale };
  