const fs = require('fs');

let js = fs.readFileSync('js/app.js', 'utf8');

// Replace specific class targets with matches found in the new Tailwind HTML or general tags
js = js.replace(/'.hero__bg-img'/g, "'main section:first-of-type img'");
js = js.replace(/'.nav'/g, "'nav'");
js = js.replace(/'.hero__title'/g, "'main section:first-of-type h1'");
js = js.replace(/'.hero__subtitle'/g, "'main section:first-of-type h1 ~ p'");
js = js.replace(/'.hero__actions'/g, "'main section:first-of-type a'");

js = js.replace(/'.workflow__step'/g, "'.group'"); // 'group' is used in workflow section
js = js.replace(/'.intelligence__block'/g, "'.not-used-now'");
js = js.replace(/'.intelligence__metric-val'/g, "'.not-used-now'");
js = js.replace(/'.integrations__name'/g, "'.not-used-now'");
js = js.replace(/'.pricing__plan'/g, "'#pricing > div > div > div'"); // The pricing cards container
js = js.replace(/'.pricing__grid'/g, "'#pricing > div > div'");

fs.writeFileSync('js/app.js', js, 'utf8');
console.log('Selectors updated in app.js');
