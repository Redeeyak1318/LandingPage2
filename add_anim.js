const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Add data-animate to section titles and paragraphs where appropriate
html = html.replace(/<h2/g, '<h2 data-animate="fade-up"');
html = html.replace(/<h3/g, '<h3 data-animate="fade-up"');
html = html.replace(/<p/g, '<p data-animate="fade-up"');
html = html.replace(/<img/g, '<img data-animate="fade-up"');

// Fix the ID for navigation to match app.js `#mainNav` expectation
html = html.replace(/<nav class="/g, '<nav id="mainNav" class="nav--scrolled ');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Added data-animate and ids to index.html');
