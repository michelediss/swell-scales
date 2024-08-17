// Import the 'fs' module for file system operations and 'Hsluv' for color conversion
const fs = require('fs');
const Hsluv = require('hsluv').Hsluv;
const path = require('path');

// Read and parse the input data from 'input.json', resolving the correct path
const inputData = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../input.json'), 'utf8'));

// Extract the color configuration from the input data
const colorConfig = inputData.colorConfig;

// Create an instance of the Hsluv class for converting from HEX to HSLuv
let conv = new Hsluv();

// Set the input HEX color on the instance and convert it to HSLuv
conv.hex = colorConfig.input;
conv.hexToHsluv();

// Extract the H, S, L values from the converted HSLuv color
const hue = conv.hsluv_h;
const saturation = conv.hsluv_s;
const lightness = conv.hsluv_l;

// Define thresholds and factors for adjusting the primary color's saturation and lightness
const saturationThreshold = 66;
const lightnessTarget = 66;
const deltaFactor = 0.5; // Factor for gradually increasing saturation

// Calculate the adjusted primary saturation based on the threshold
let primarySaturation = saturation < saturationThreshold 
    ? saturation + (saturationThreshold - saturation) * deltaFactor 
    : saturation;

// Set the primary lightness to the target value
let primaryLightness = lightnessTarget;

// Convert the adjusted primary HSLuv values back to HEX
conv.hsluv_h = hue;
conv.hsluv_s = primarySaturation;
conv.hsluv_l = primaryLightness;
conv.hsluvToHex();
const primary = conv.hex; // Store the primary color in HEX

// Determine the secondary hue based on the specified method in the color configuration
let secondaryHue;

switch (colorConfig.method) {
    case 'complementary':
        secondaryHue = (hue + 180) % 360;
        break;
    case 'split1':
        secondaryHue = (hue + 150) % 360;
        break;
    case 'split2':
        secondaryHue = (hue + 210) % 360;
        break;
    case 'triadic1':
        secondaryHue = (hue + 120) % 360;
        break;
    case 'triadic2':
        secondaryHue = (hue + 240) % 360;
        break;
    case 'tetradic1':
        secondaryHue = (hue + 90) % 360;
        break;
    case 'tetradic2':
        secondaryHue = (hue + 180) % 360;
        break;
    case 'tetradic3':
        secondaryHue = (hue + 270) % 360;
        break;
    default:
        secondaryHue = hue; // Default to the original hue if no method is specified
}

// Convert the secondary HSLuv values to HEX
conv.hsluv_h = secondaryHue;
conv.hsluv_s = primarySaturation;
conv.hsluv_l = primaryLightness;
conv.hsluvToHex();
const secondary = conv.hex; // Store the secondary color in HEX

// Function to generate grayscale shades with slight influence from the primary hue
const generateGray = (hue, baseSaturation = 20, baseLightness = 50) => {
    const shades = {};
    const lightnessSteps = [95, 85, 75, 65, 55, 50, 40, 35, 30, 20, 10]; // Limited lightness range
    const keys = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];

    for (let i = 0; i < lightnessSteps.length; i++) {
        let adjustedSaturation = baseSaturation * (1 - lightnessSteps[i] / 100); // Adjust saturation based on lightness
        let adjustedHue = hue; // Keep the primary hue
        
        if (adjustedSaturation < 5) {
            adjustedHue = 0; // If saturation is very low, shift color towards neutral gray
        }

        conv.hsluv_h = adjustedHue;
        conv.hsluv_s = adjustedSaturation;
        conv.hsluv_l = lightnessSteps[i];
        conv.hsluvToHex();
        shades[keys[i]] = conv.hex; // Store the generated shade in HEX
    }

    return shades;
};

// Function to generate color shades for a given hue, saturation, and base lightness
const generateShades = (hue, saturation, baseLightness) => {
    const shades = {};
    const lightnessSteps = [95, 85, 70, 60, 50, 50, 30, 20, 15, 10, 5]; // Corrected order from light to dark
    const keys = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];

    for (let i = 0; i < lightnessSteps.length; i++) {
        conv.hsluv_h = hue;
        conv.hsluv_s = saturation;
        conv.hsluv_l = lightnessSteps[i];
        conv.hsluvToHex();
        shades[keys[i]] = conv.hex; // Store the generated shade in HEX
    }

    return shades;
};

// Generate the primary, secondary, and gray palettes
const primaryPalette = generateShades(hue, primarySaturation, primaryLightness);
const secondaryPalette = generateShades(secondaryHue, primarySaturation, primaryLightness);
const grayPalette = generateGray(hue); // Use the generateGray function for grayscale

// Save the generated color scheme to a JSON file
const colorScheme = {
    "primary": primaryPalette,
    "secondary": secondaryPalette,
    "gray": grayPalette
};

fs.writeFileSync('color-scheme.json', JSON.stringify(colorScheme, null, 2));

console.log('Color scheme generated and saved to color-scheme.json');
