const fs = require('fs');
const Hsluv = require('hsluv').Hsluv;
const path = require('path');

// Usa il percorso corretto al file input.json
const inputData = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../input.json'), 'utf8'));

// Estrai la configurazione del colore
const colorConfig = inputData.colorConfig;

// Crea un'istanza della classe Hsluv per la conversione da HEX a HSLuv
let conv = new Hsluv();

// Imposta il colore HEX sull'istanza
conv.hex = colorConfig.input;
conv.hexToHsluv();

// Estrai i valori H, S, L dall'istanza
const hue = conv.hsluv_h;
const saturation = conv.hsluv_s;
const lightness = conv.hsluv_l;

// Creazione di "primary" con correzione graduale della saturazione
const saturationThreshold = 66;
const lightnessTarget = 66;
const deltaFactor = 0.5; // Fattore per l'aumento graduale della saturazione

// Calcola la saturazione primaria con correzione graduale
let primarySaturation = saturation < saturationThreshold 
    ? saturation + (saturationThreshold - saturation) * deltaFactor 
    : saturation;

// Imposta la luminosità primaria al valore target
let primaryLightness = lightnessTarget;

// Crea un'istanza per la conversione di primary in HEX
conv.hsluv_h = hue;
conv.hsluv_s = primarySaturation;
conv.hsluv_l = primaryLightness;
conv.hsluvToHex();
const primary = conv.hex;

// Creazione di "secondary"
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
        secondaryHue = hue;
}

// Crea un'istanza per la conversione di secondary in HEX
conv.hsluv_h = secondaryHue;
conv.hsluv_s = primarySaturation;
conv.hsluv_l = primaryLightness;
conv.hsluvToHex();
const secondary = conv.hex;

// Funzione per generare il grigio con una leggera influenza della tonalità primaria
const generateGray = (hue, baseSaturation = 20, baseLightness = 50) => {
    const shades = {};
    const lightnessSteps = [95, 85, 75, 65, 55, 50, 40, 35, 30, 20, 10]; // Gamma limitata di luminosità
    const keys = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];

    for (let i = 0; i < lightnessSteps.length; i++) {
        let adjustedSaturation = baseSaturation * (1 - lightnessSteps[i] / 100); // Modula la saturazione con la luminosità
        let adjustedHue = hue; // Mantieni la tonalità primaria
        
        if (adjustedSaturation < 5) {
            adjustedHue = 0; // Se la saturazione è molto bassa, avvicina il colore al grigio neutro
        }

        conv.hsluv_h = adjustedHue;
        conv.hsluv_s = adjustedSaturation;
        conv.hsluv_l = lightnessSteps[i];
        conv.hsluvToHex();
        shades[keys[i]] = conv.hex;
    }

    return shades;
};

// Funzione per generare le scale cromatiche
const generateShades = (hue, saturation, baseLightness) => {
    const shades = {};
    const lightnessSteps = [95, 85, 70, 60, 50, 50, 30, 20, 15, 10, 5]; // Ordine corretto dal chiaro allo scuro
    const keys = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];

    for (let i = 0; i < lightnessSteps.length; i++) {
        conv.hsluv_h = hue;
        conv.hsluv_s = saturation;
        conv.hsluv_l = lightnessSteps[i];
        conv.hsluvToHex();
        shades[keys[i]] = conv.hex;
    }

    return shades;
};

// Genera le scale
const primaryPalette = generateShades(hue, primarySaturation, primaryLightness);
const secondaryPalette = generateShades(secondaryHue, primarySaturation, primaryLightness);
const grayPalette = generateGray(hue); // Usa la funzione generateGray per il grigio

// Salva le palette nel file color-scheme.json
const colorScheme = {
    "primary": primaryPalette,
    "secondary": secondaryPalette,
    "gray": grayPalette
};

fs.writeFileSync('color-scheme.json', JSON.stringify(colorScheme, null, 2));

console.log('Color scheme generated and saved to color-scheme.json');
