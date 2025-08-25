
console.log("RANDOM-SELECT.JS ... Online!")

function randomColor() {
    // Generate a random RGB color
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function getContrastColor(rgb) {
    // Extract RGB components
    const [r, g, b] = rgb.match(/\d+/g).map(Number);
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    // Return black for light colors, white for dark colors
    return luminance > 0.5 ? 'black' : 'white';
}

// Pick random colors for selection background and text
const selectionBg = randomColor();
const selectionText = getContrastColor(selectionBg);

// Apply the colors to the page
const style = document.createElement('style');
style.innerHTML = `
    ::selection {
        background: ${selectionBg};
        color: ${selectionText};
    }
    ::-moz-selection {
        background: ${selectionBg};
        color: ${selectionText};
    }
`;
document.head.appendChild(style);
