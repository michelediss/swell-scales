const colorScheme = require('./color-scheme.json');
const colorSystem = require('./color-system.json');

// Funzione per generare le classi CSS dinamicamente utilizzando color-scheme.json
function generateClasses() {
    const classes = {};

    // Genera classi per text-colors
    for (const [key, value] of Object.entries(colorSystem.color)) {
        const [scheme, tone] = value.split('-');
        const color = colorScheme[scheme] && colorScheme[scheme][tone];
        if (color) {
            classes[`.text-${key}`] = { color: color };
        }
    }

    // Genera classi per background-colors
    for (const [key, value] of Object.entries(colorSystem.bg)) {
        const [scheme, tone] = value.split('-');
        const color = colorScheme[scheme] && colorScheme[scheme][tone];
        if (color) {
            classes[`.bg-${key}`] = { 'background-color': color };
        }
    }

    // Genera classi per button-colors, inclusi gli stati hover
    const btnConfig = colorSystem.btn;
    if (btnConfig) {
        // Colore di base per il pulsante
        const [schemeBase, toneBase] = btnConfig['bg'].split('-');
        const baseColor = colorScheme[schemeBase] && colorScheme[schemeBase][toneBase];
        if (baseColor) {
            classes['.btn-bg'] = { 'background-color': baseColor };
        }

        // Colore per lo stato hover
        const [schemeHover, toneHover] = btnConfig['bg-hover'].split('-');
        const hoverColor = colorScheme[schemeHover] && colorScheme[schemeHover][toneHover];
        if (hoverColor) {
            classes['.btn-bg:hover'] = { 'background-color': hoverColor };
        }
    }

    return classes;
}

// Funzione principale per aggiungere le classi generate a Tailwind CSS
module.exports = function ({ addUtilities }) {
    const classes = generateClasses();
    console.log(classes); // Questo log ti aiuterà a vedere il risultato finale
    addUtilities(classes, ['responsive', 'hover']);
};

// Funzione per ottenere la palette di colori
function getSelectedPalette() {
    const textColors = {};
    const bgColors = {};
    const buttonColors = {};

    // Riempire textColors, bgColors, e buttonColors con i colori dal sistema di colori
    for (const [key, value] of Object.entries(colorSystem.color)) {
        const [scheme, tone] = value.split('-');
        const color = colorScheme[scheme] && colorScheme[scheme][tone];
        if (color) {
            textColors[key] = color;
        }
    }

    for (const [key, value] of Object.entries(colorSystem.bg)) {
        const [scheme, tone] = value.split('-');
        const color = colorScheme[scheme] && colorScheme[scheme][tone];
        if (color) {
            bgColors[key] = color;
        }
    }

    for (const [key, value] of Object.entries(colorSystem.btn)) {
        const [scheme, tone] = value.split('-');
        const color = colorScheme[scheme] && colorScheme[scheme][tone];
        if (color) {
            buttonColors[key] = color;
        }
    }

    return {
        'text-color': textColors,
        'bg-color': bgColors,
        'button-color': buttonColors,
    };
}

// Esportare la funzione per ottenere la palette
module.exports.getSelectedPalette = getSelectedPalette;
