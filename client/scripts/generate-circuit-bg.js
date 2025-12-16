const fs = require('fs');
const path = require('path');

const width = 1920;
const height = 1080;
const numTraces = 60;
const numChips = 15;

// Pastel tech colors
const colors = [
    '#a5f3fc', // Cyan 200
    '#ddd6fe', // Violet 200
    '#fecaca', // Red 200
    '#fde68a', // Amber 200
    '#bae6fd'  // Sky 200
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" opacity="0.6">
    <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
    </defs>
    <rect width="100%" height="100%" fill="#ffffff"/>
`;

// Generate Chips
for (let i = 0; i < numChips; i++) {
    const w = getRandomInt(40, 100);
    const h = getRandomInt(40, 100);
    const x = getRandomInt(0, width - w);
    const y = getRandomInt(0, height - h);
    const color = getRandomColor();
    
    // Chip body
    svgContent += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${color}" fill-opacity="0.2" stroke="${color}" stroke-opacity="0.8" stroke-width="2" rx="4" />`;
    
    // Chip pins
    const pinSize = 4;
    for(let px = x + 5; px < x + w; px += 10) {
       svgContent += `<line x1="${px}" y1="${y}" x2="${px}" y2="${y-5}" stroke="${color}" stroke-width="2" stroke-opacity="0.5" />`;
       svgContent += `<line x1="${px}" y1="${y+h}" x2="${px}" y2="${y+h+5}" stroke="${color}" stroke-width="2" stroke-opacity="0.5" />`;
    }
}

// Generate Traces (Simple random paths)
for (let i = 0; i < numTraces; i++) {
    let x = getRandomInt(0, width);
    let y = getRandomInt(0, height);
    const length = getRandomInt(100, 500);
    const color = getRandomColor();
    const strokeWidth = getRandomInt(1, 3);
    
    let pathData = `M ${x} ${y}`;
    
    let currentLen = 0;
    while(currentLen < length) {
        const segLen = getRandomInt(20, 80);
        const dir = Math.random() > 0.5 ? 'h' : 'v'; // Horizontal or Vertical
        const delta = Math.random() > 0.5 ? segLen : -segLen;
        
        if (dir === 'h') x += delta;
        else y += delta;
        
        pathData += ` L ${x} ${y}`;
        currentLen += segLen;
         
        // Add a node at the turn sometimes
        if (Math.random() > 0.7) {
             svgContent += `<circle cx="${x}" cy="${y}" r="${strokeWidth * 1.5}" fill="${color}" fill-opacity="0.4" />`;
        }
    }

    svgContent += `<path d="${pathData}" stroke="${color}" stroke-width="${strokeWidth}" fill="none" stroke-opacity="0.4" stroke-linecap="round" stroke-linejoin="round" />`;
    
    // Endpoint node
    svgContent += `<circle cx="${x}" cy="${y}" r="${strokeWidth * 2}" fill="${color}" fill-opacity="0.6" />`;
}

svgContent += `</svg>`;

const outputPath = path.join(__dirname, '../src/assets/images/bg-circuit-gen.svg');

// Ensure directory exists
const dir = path.dirname(outputPath);
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(outputPath, svgContent);
console.log('Generated SVG background at: ' + outputPath);
