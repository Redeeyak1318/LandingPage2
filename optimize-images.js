const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'img');

fs.readdir(imgDir, (err, files) => {
  if (err) throw err;
  
  files.forEach(file => {
    if (file.endsWith('.png') || file.endsWith('.jpg')) {
      const inputPath = path.join(imgDir, file);
      const outputPath = path.join(imgDir, file.replace(/\.(png|jpg)$/, '.webp'));
      
      sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath)
        .then(info => {
          console.log(`Converted ${file} to WebP:`, info);
        })
        .catch(err => {
          console.error(`Error converting ${file}:`, err);
        });
    }
  });
});
