# Welcome to SwellScales

Swell Scales is a design system that emulates the natural rhythms and patterns found in ocean waves. This project offers a unique approach to typographic and color scales, evoking the fluidity and dynamism of oceanic motion. The project is designed to help developers and designers create harmonious, scalable, and aesthetically pleasing web applications by providing a structured yet flexible system for typography and color palettes.

Table of Contents
Introduction
Project Structure
Installation
Usage
Typography Scale
Color Palette
Font Pairing
Contributing
License

## Introduction

Swell Scales is inspired by the natural patterns of ocean waves, providing a scalable system for typography and color that reflects the ebb and flow of the sea. It enables a consistent and visually appealing design language, making it easier to build cohesive user interfaces.

The system includes:

- **Typographic Scale Generator**: craft a visually harmonious and consistent typographic hierarchy inspired by musical scale intervals. Equipped with six configurable parameters, this tool allows you to fine-tune and generate typographic scales that resonate with the rhythmic flow of music, perfectly matching the needs of your project.
- **Font Pairing Tool**: simplify the process of selecting typography with 50 predefined font pairings designed to enhance the readability and style of your text. This tool helps you quickly find the perfect combination of fonts that complement each other and elevate your design.
- **Color Palette Generator**: streamline your design workflow with a tool that automates the creation of beautiful, cohesive color schemes. This feature includes 50 predefined color palettes ready for immediate use in your Tailwind projects, making it easier than ever to apply professional color schemes.

## Project Structure

The project is organized as follows:

css
Copia codice
.
├── App.vue
├── components
│   └── TypographyScaleTest.vue
├── main.js
└── swell-scales
    ├── color-palette
    │   ├── color-palette-config.json
    │   ├── color-palette-list.json
    │   └── color-palette-plugin.js
    ├── font-pairing
    │   ├── font-pairing-config.json
    │   ├── font-pairing-plugin.js
    │   └── pairing-list
    │       └── [various font pairing JSON files]
    └── typo-scale
        ├── typography-scale-config.json
        └── typography-scale-plugin.js

### Key Directories and Files
- components/TypographyScaleTest.vue: A Vue component to test and display typography scales.
- swell-scales/color-palette/: Contains configuration files and plugins for managing color palettes.
- swell-scales/font-pairing/: Manages font pairings with configuration files and plugins.
- swell-scales/typo-scale/: Contains configuration and plugins for typography scaling.

## Installation

To use Swell Scales in your project, follow these steps:

1. Clone the repository:

```
git clone https://github.com/your-repo/swell-scales.git
```
2. Install dependencies:

Navigate to the project directory and install the necessary dependencies using npm or yarn:

```
npm install
```
or

```
yarn install
```

3. Build the project:

Build the project for production or run it in development mode:

```
npm run build
```

or

```
npm run serve
```

## Usage

### Typography Scale
The typography scale in Swell Scales is managed through the typo-scale plugin, which uses a JSON configuration to define scalable typographic intervals. These intervals automatically adjust based on the screen size, ensuring consistent readability and visual hierarchy.

Configuration File: **swell-scales/typo-scale/typography-scale-config.json**
Plugin: **swell-scales/typo-scale/typography-scale-plugin.js**

**Typography Configuration**

You can customize the typography scale using the following parameters in typography-scale-config.json:

```
{
  "responsiveBaseFontSize": {
    "baseSize": 16,
    "incrementFactor": 1.02
  },
  "customFontSizeScale": {
    "r": 1.25
  }
}
```


**baseSize:** Defines the base font size (in pixels) for the typography scale. This value acts as the starting point for scaling.

**incrementFactor:** A multiplier that incrementally scales the base font size as the screen size changes, ensuring responsive typography.

**r:** The ratio used to scale the font sizes. This parameter determines the exponential growth of font sizes across different typographic levels, ensuring a harmonious visual hierarchy.

### Color Palette
The color palette system in Swell Scales allows you to define and use custom color schemes. Colors are grouped into categories such as text colors, background colors, and button colors, with support for gradients.

Configuration File: **swell-scales/color-palette/color-palette-config.json**
List of Palettes: **swell-scales/color-palette/color-palette-list.json**
Plugin: **swell-scales/color-palette/color-palette-plugin.js**

**Selecting a Color Palette**
To select a color palette from the available options, you can specify the desired palette in color-palette-config.json:

```
{
  "index": 27
}
```

**index:** Refers to the specific color palette you wish to use from the color-palette-list.json. Each palette is defined with a unique index, allowing you to switch between different color schemes easily.
You can test and view these colors using the TypographyScaleTest.vue component, which dynamically renders the selected color palette.

### Font Pairing

Font pairing is crucial for maintaining readability and aesthetics across different text elements. The Swell Scales system provides a range of curated font pairings that can be easily integrated into your project.

Configuration File: **swell-scales/font-pairing/font-pairing-config.json**
List of Pairings: **swell-scales/font-pairing/pairing-list/** 
Plugin: **swell-scales/font-pairing/font-pairing-plugin.js**

Selecting a Font Pairing
You can select a font pairing by specifying the desired pair in font-pairing-config.json:

```
{
  "chosenPair": "49-Work_Sans_+_Neuton.json"
}
```

**chosenPair:** The filename of the font pairing you want to use, located in the pairing-list/ directory. This allows you to quickly switch between different font combinations to suit your design needs.

## Contributing 

If you are interested in contributing to the project, you are welcome to! You can start by cloning the repository, making your changes, and submitting a pull request. Contact me at mic.paolino@gmail.com.

## Inspiration 

https://spencermortensen.com/articles/typographic-scale/
https://heyreliable.com/ultimate-google-font-pairings

Thank you for using Swell Scales! We hope it brings the same harmony and flow to your projects as the ocean brings to the world. 🌊