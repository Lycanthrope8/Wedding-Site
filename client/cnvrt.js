const sharp = require('sharp');
// sharp('./src/assets/palki.png').toFile('./src/assets/palki.webp');
sharp('./src/assets/palki.png').resize(1000, 600).toFile('./src/assets/palki.webp');