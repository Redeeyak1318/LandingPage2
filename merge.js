const fs = require('fs');

const oldHtml = fs.readFileSync('index.html', 'utf8');
const newHtml = fs.readFileSync('new_index.html', 'utf8');

// Extract the <style> content from newHtml
let styleContentMatch = newHtml.match(/<style>([\s\S]*?)<\/style>/);
let newCss = styleContentMatch ? styleContentMatch[1] : '';

// Extract everything inside <body>...</body> from newHtml
let bodyMatch = newHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/);
let newBody = bodyMatch ? bodyMatch[1] : '';

// The original basic animation styles we should preserve
const baseStyles = `
/* Animation states */
[data-animate] { opacity: 0; transform: translateY(30px); }
[data-animate].is-visible { opacity: 1; transform: translateY(0); }
`;

// Overwrite style.css
fs.writeFileSync('css/style.css', baseStyles + '\n' + newCss, 'utf8');
console.log('Updated style.css');

// Build the new index.html
// We want to combine the old <head> (which includes GSAP, Barba, Lenis, etc.) 
// with the tailwind CDN from newHtml, and then replace the old body with newBody wrapped in barba.

let headReplacement = `
  <!-- Preconnect -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>

  <!-- Stylesheets -->
  <link rel="stylesheet" href="css/style.css">

  <!-- GSAP -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer></script>

  <!-- Lenis Smooth Scroll -->
  <script src="https://unpkg.com/lenis@1.1.18/dist/lenis.min.js" defer></script>

  <!-- Barba.js Page Transitions -->
  <script src="https://unpkg.com/@barba/core@2.10.3/dist/barba.umd.js" defer></script>
`;

// Replace <head> inner content (simplification)
let combinedHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Elyra — Intelligent Workflow Platform</title>
  ${headReplacement}
</head>
<body>
  <!-- Barba.js Wrapper -->
  <div data-barba="wrapper">
    <div data-barba="container" data-barba-namespace="home">
      ${newBody}
    </div>
  </div>

  <!-- Main Script -->
  <script src="js/app.js" defer></script>
</body>
</html>`;

fs.writeFileSync('index.html', combinedHtml, 'utf8');
console.log('Updated index.html');
