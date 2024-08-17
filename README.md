# Welcome to SwellScales

Swell Scales is a Tailwind CSS-based design system inspired by the natural rhythms and patterns of ocean waves. This project provides a unique approach to creating scalable typography and color schemes, offering a structured yet flexible system that helps developers and designers create harmonious, aesthetically pleasing web applications.

## Introduction
Swell Scales is designed to reflect the fluidity and dynamism of the ocean, providing tools for managing typography and color palettes that emulate the ebb and flow of the sea. The system enables a consistent and visually appealing design language, making it easier to build cohesive user interfaces.

The system includes:
- **Typographic Scale Plugin:** generates a consistent typographic hierarchy based on configurable parameters, allowing you to fine-tune the typography in your project. This plugin ensures that your typography scales dynamically with screen size, maintaining readability and visual harmony.
- **Font Pairing Plugin:** simplifies the process of selecting complementary fonts, with 50 predefined pairings of google font, designed to enhance readability and style. This tool helps you quickly find the perfect font combinations to elevate your design.
- **Color Generator Plugin:** a powerful tool that automates the creation of cohesive, semantic color schemes based on a primary color input. This generator allows for dynamic color scheme creation, tailored to the specific needs of your project.

## Project Structure
The project is organized as follows:

```
┌── App.vue
├── assets
│   └── styles
│       └── tailwind.css
├── components
│   └── TypographyScaleTest.vue
├── main.js
└── swell-scales
    ├── color-generator
    │   ├── color-assignment.js
    │   ├── color-generator.js
    │   ├── color-scheme.json
    │   └── color-system.json
    ├── font-pairing
    │   ├── font-pairing-plugin.js
    │   └── pairing-list
    │       └── [various font pairing JSON files]
    ├── input.json
    └── typo-scale
        └── typography-scale-plugin.js
```

### Key Directories and Files
**swell-scales/color-generator/:** contains the logic and configuration for generating semantic color palettes dynamically.<br>
**swell-scales/font-pairing/:** manages font pairings with configuration files and plugins.<br>
**swell-scales/typo-scale/:** contains configuration and plugins for typography scaling.<br>
**swell-scales/input.json:** a unified configuration file for typography, font pairing, and color generation.

## Installation
To use Swell Scales in your project, follow these steps:

Clone the repository:

```
git clone https://github.com/your-repo/swell-scales.git
```

Install dependencies:

```
npm install
```

or

```
yarn install
```

Build the project:

```
npm run build
```

or

```
npm run serve
```

## Usage

Swell Scales utilizes a centralized configuration file, `input.json`, to define the parameters for color generation, font pairing, and typography scaling. This configuration file simplifies the setup process and ensures a cohesive design system. However, for users who need more control, Swell Scales also allows for manual adjustments to the generated color scales and semantic class creation.

### input.json Configuration

The main configuration is managed in `src/swell-scales/input.json`:

```
{
  "colorConfig": {
    "input": "#FF813D",
    "method": "complementary"
  },
  "fontPairingConfig": {
    "chosenPair": "4-Lora_+_Roboto.json"
  },
  "typographyScaleConfig": {
    "responsiveBaseFontSize": {
      "baseSize": 16,
      "incrementFactor": 1.02
    },
    "customFontSizeScale": {
      "r": 1.25
    }
  }
}
```

### Configuration Parameters
**colorConfig:** this section controls the base color for generating the color scheme.
- **input:** the primary color in HEX format (e.g., "#FF813D").
- **method:** the algorithm used to generate the color scheme, such as complementary, split, or triadic.

**fontPairingConfig:** this section specifies the font pairing to be used.
- **chosenPair:** the selected font pairing file (e.g., "4-Lora_+_Roboto.json") from the pairing-list/ directory.

**typographyScaleConfig:** This section defines the typography scaling.
- **baseSize:** the base font size in pixels (e.g., 16px).
- **incrementFactor:** the scaling factor that adjusts font size across different screen sizes, ensuring responsive typography.
- **r:** the ratio used to scale font sizes exponentially, creating a consistent visual hierarchy.
Customizing Color Scales

While you can automatically generate color scales using the colorConfig in input.json, you can also manually define color scales by editing the **src/swell-scales/color-generator/color-scheme.json** file. This file allows you to specify exact colors for primary, secondary, and gray scales, giving you full control over your color palette:

```
{
  "primary": {
    "50": "#ffede9",
    "100": "#ffc8b9",
    "200": "#ff8c59",
    "300": "#ea6c00",
    "400": "#c25800",
    "500": "#c25800",
    "600": "#763300",
    "700": "#532200",
    "800": "#431a00",
    "900": "#331200",
    "950": "#220a00"
  },
  "secondary": {
    "50": "#d1f8ff",
    "100": "#14eaff",
    "200": "#00bdce",
    "300": "#00a0af",
    "400": "#008490",
    "500": "#008490",
    "600": "#004f57",
    "700": "#00363c",
    "800": "#002b30",
    "900": "#001f23",
    "950": "#001417"
  },
  "gray": {
    "50": "#f1f1f1",
    "100": "#d6d4d4",
    "200": "#bdb7b6",
    "300": "#a89b98",
    "400": "#8f817d",
    "500": "#827470",
    "600": "#695b58",
    "700": "#5d4f4c",
    "800": "#504441",
    "900": "#382e2b",
    "950": "#221a18"
  }
}
```

### Customizing Semantic Classes
Semantic classes are defined in **src/swell-scales/color-generator/color-system.json.** This file maps specific color scale values to semantic class names, which are then used throughout your CSS:

```
{
  "color": {
    "1a": "gray-800",
    "1b": "gray-600",
    "1c": "primary-600",
    "2": "secondary-50"
  },
  "bg": {
    "1a": "gray-50",
    "1b": "primary-200",
    "2": "secondary-900"
  },
  "btn": {
    "bg": "primary-400",
    "bg-hover": "primary-300"
  }
}
```

### Practical Use
The above configuration generates the following Tailwind CSS classes:

```
  '.text-1a': { color: '#504441' },
  '.text-1b': { color: '#695b58' },
  '.text-1c': { color: '#763300' },
  '.text-2': { color: '#d1f8ff' },

  '.border-1a': { color: '#504441' },
  '.border-1b': { color: '#695b58' },
  '.border-1c': { color: '#763300' },
  '.border-2': { color: '#d1f8ff' },

  '.fill-1a': { fill: '#504441' },
  '.fill-1b': { fill: '#695b58' },
  '.fill-1c': { fill: '#763300' },
  '.fill-2': { fill: '#d1f8ff' },

  '.bg-1a': { 'background-color': '#f1f1f1' },
  '.bg-1b': { 'background-color': '#ff8c59' },
  '.bg-2': { 'background-color': '#001f23' },

  '.btn-bg': { 'background-color': '#c25800' },
  '.btn-bg:hover': { 'background-color': '#ea6c00' }
```

These classes are used to apply consistent styling throughout your project. For instance, .text-1* classes are designed to be used with .bg-1* classes, and .text-2* should be paired with .bg-2*, ensuring that the text color and background color combinations are visually harmonious and semantically meaningful.

By utilizing these configurations, Swell Scales provides both flexibility and precision in your design system, allowing for automated, yet customizable, color and typography management in your Tailwind CSS projects.

## Inspiration
[Typographic Scale](https://spencermortensen.com/articles/typographic-scale/)<br>
[Ultimate Google Font Pairings](https://heyreliable.com/ultimate-google-font-pairings/)

Thank you for using Swell Scales! We hope it brings the same harmony and flow to your projects as the ocean brings to the world. 🌊