const fs = require('fs');
let raw = fs.readFileSync('draft.json', 'utf8');
if (raw.charCodeAt(0) === 0xFEFF) {
  raw = raw.slice(1);
}
const startIdx = raw.indexOf('{');
if (startIdx !== -1) {
  raw = raw.substring(startIdx);
}
const data = JSON.parse(raw);
if (data && data.htmlContent) {
  fs.writeFileSync('new_index.html', data.htmlContent, 'utf8');
  console.log('Saved htmlContent to new_index.html');
}
