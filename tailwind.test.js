const config = require('./tailwind.config.js'); // Assicurati che il percorso sia corretto

function extractCustomClasses(config) {
    const customClassesDetails = [];

    // Esamina ogni chiave in 'extend' nel tema di Tailwind
    Object.entries(config.theme.extend).forEach(([key, value]) => {
        if (typeof value === 'object' && !Array.isArray(value)) {
            Object.entries(value).forEach(([modifier, modifierValue]) => {
                if (key === 'colors') {
                    customClassesDetails.push(`.bg-${modifier} { background-color: ${modifierValue}; }`);
                    customClassesDetails.push(`.text-${modifier} { color: ${modifierValue}; }`);
                    customClassesDetails.push(`.border-${modifier} { border-color: ${modifierValue}; }`);
                } else if (key === 'fontFamily') {
                    customClassesDetails.push(`.font-${modifier} { font-family: ${modifierValue}; }`);
                } else {
                    // Per proprietà diverse dai colori e font, aggiungi esempi generici
                    customClassesDetails.push(`.${key}-${modifier} { ${key}: ${modifierValue}; }`);
                }
            });
        }
    });

    return customClassesDetails;
}

const customClassesDetails = extractCustomClasses(config);
console.log("Detailed Custom Tailwind Classes Based on Configuration:");
console.log(customClassesDetails.join('\n'));
