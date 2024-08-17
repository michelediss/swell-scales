// Import color scheme and color system configurations from JSON files
const colorScheme = require("./color-scheme.json");
const colorSystem = require("./color-system.json");

// Function to dynamically generate CSS classes using the color-scheme.json
function generateClasses() {
  const classes = {};

  // Generate classes for text colors
  for (const [key, value] of Object.entries(colorSystem.color)) {
    const [scheme, tone] = value.split("-"); // Split the color scheme and tone (e.g., 'primary-500')
    const color = colorScheme[scheme] && colorScheme[scheme][tone]; // Get the corresponding color from the color scheme
    if (color) {
      classes[`.text-${key}`] = { color: color }; // Create a CSS class for text color
    }
  }

  // Generate classes for border colors
  for (const [key, value] of Object.entries(colorSystem.color)) {
    const [scheme, tone] = value.split("-"); // Split the color scheme and tone (e.g., 'primary-500')
    const color = colorScheme[scheme] && colorScheme[scheme][tone]; // Get the corresponding color from the color scheme
    if (color) {
      classes[`.brd-${key}`] = { 'border-color': color }; // Create a CSS class for text color
    }
  }

  // Generate classes fill colors
  for (const [key, value] of Object.entries(colorSystem.color)) {
    const [scheme, tone] = value.split("-"); // Split the color scheme and tone (e.g., 'primary-500')
    const color = colorScheme[scheme] && colorScheme[scheme][tone]; // Get the corresponding color from the color scheme
    if (color) {
      classes[`.fill-${key}`] = { fill: color }; // Create a CSS class for text color
    }
  }

  // Generate classes for background colors
  for (const [key, value] of Object.entries(colorSystem.bg)) {
    const [scheme, tone] = value.split("-"); // Split the background scheme and tone
    const color = colorScheme[scheme] && colorScheme[scheme][tone]; // Get the corresponding color from the color scheme
    if (color) {
      classes[`.bg-${key}`] = { "background-color": color }; // Create a CSS class for background color
    }
  }

  // Generate classes for button colors, including hover states
  const btnConfig = colorSystem.btn;
  if (btnConfig) {
    // Base color for the button
    const [schemeBase, toneBase] = btnConfig["bg"].split("-"); // Split the base button background scheme and tone
    const baseColor =
      colorScheme[schemeBase] && colorScheme[schemeBase][toneBase]; // Get the corresponding base color
    if (baseColor) {
      classes[".btn-bg"] = { "background-color": baseColor }; // Create a CSS class for the button base color
    }

    // Color for the hover state
    const [schemeHover, toneHover] = btnConfig["bg-hover"].split("-"); // Split the hover button background scheme and tone
    const hoverColor =
      colorScheme[schemeHover] && colorScheme[schemeHover][toneHover]; // Get the corresponding hover color
    if (hoverColor) {
      classes[".btn-bg:hover"] = { "background-color": hoverColor }; // Create a CSS class for the button hover state
    }
  }

  return classes; // Return the generated classes
}

// Main function to add the generated classes to Tailwind CSS
module.exports = function ({ addUtilities }) {
  const classes = generateClasses();
  console.log(classes); // Log the generated classes for debugging
  addUtilities(classes, ["responsive", "hover"]); // Add the utilities to Tailwind with responsive and hover variants
};

// Function to retrieve the selected color palette from the color system
function getSelectedPalette() {
  const textColors = {};
  const bgColors = {};
  const buttonColors = {};

  // Populate textColors with colors from the color system
  for (const [key, value] of Object.entries(colorSystem.color)) {
    const [scheme, tone] = value.split("-");
    const color = colorScheme[scheme] && colorScheme[scheme][tone];
    if (color) {
      textColors[key] = color; // Store the color in the textColors object
    }
  }

  // Populate bgColors with colors from the color system
  for (const [key, value] of Object.entries(colorSystem.bg)) {
    const [scheme, tone] = value.split("-");
    const color = colorScheme[scheme] && colorScheme[scheme][tone];
    if (color) {
      bgColors[key] = color; // Store the color in the bgColors object
    }
  }

  // Populate buttonColors with colors from the color system
  for (const [key, value] of Object.entries(colorSystem.btn)) {
    const [scheme, tone] = value.split("-");
    const color = colorScheme[scheme] && colorScheme[scheme][tone];
    if (color) {
      buttonColors[key] = color; // Store the color in the buttonColors object
    }
  }

  return {
    "text-color": textColors, // Return the collected text colors
    "bg-color": bgColors, // Return the collected background colors
    "button-color": buttonColors, // Return the collected button colors
  };
}

// Export the function to retrieve the selected palette
module.exports.getSelectedPalette = getSelectedPalette;
