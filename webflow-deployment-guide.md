# Phase 9: Webflow & CDN Deployment Guide

To ensure this landing page achieves a **95+ Lighthouse score** globally when ported to Webflow, you must separate your assets (HTML, images, CSS, and JS) correctly to take full advantage of edge-caching and Webflow's native AWS/Fastly CDN structure.

Here is the exact framework to deploy the final assets.

---

## 1. Hosting CSS and JavaScript on a Global CDN

Webflow’s native custom code editor limits character counts and injects everything into the DOM. For massive performance gains, we will host the custom `style.min.css` and `app.min.js` externally via a massive global CDN.

**The Workflow:**
1. Create a public repository on GitHub (e.g., `yourusername/elyra-assets`).
2. Upload the newly created minified files from your [css/](file:///c:/projects/fiver/web2/css/style.css) and [js/](file:///c:/projects/fiver/web2/js/app.js) folders (`style.min.css` and `app.min.js`).
3. Serve these files instantly and globally using **[jsDelivr](https://www.jsdelivr.com/)**. 

*Example CDN Links:*
- `https://cdn.jsdelivr.net/gh/yourusername/elyra-assets@main/css/style.min.css`
- `https://cdn.jsdelivr.net/gh/yourusername/elyra-assets@main/js/app.min.js`

> [!TIP]
> jsDelivr is faster than your standard server, automatically applies Brotli/Gzip compression, and has endpoints across the globe.

---

## 2. Webflow Project Settings: Head & Footer Code

In your Webflow dashboard, navigate to **Site Settings > Custom Code**.

### Inside `<head>` tag
Paste the contents from [webflow-head.html](file:///c:/projects/fiver/web2/webflow-head.html). This block handles three crucial optimizations:
1. **Resource Hints**: Pre-connects to `fonts.googleapis.com` and `cdn.jsdelivr.net` allowing the browser to resolve DNS immediately.
2. **LCP Image Preload**: Tells the browser exactly where to fetch the `hero-workspace.webp` file *before* it tries to parse any HTML.
3. **CSS Linking**: Pulls the minified CSS from your GitHub repo via jsDelivr.

### Before `</body>` tag
Paste the contents from [webflow-footer.html](file:///c:/projects/fiver/web2/webflow-footer.html). This block ensures:
1. **Render-Blocking Removed**: All heavy scripts (GSAP, Lenis, Barba.js, app.min.js) are called using the `defer` attribute. They download in parallel but execute *after* the DOM is built, protecting your First Contentful Paint (FCP).
2. **Minified Execution**: Uses your compressed `app.min.js`.

---

## 3. Uploading & Configuring Imagery in Webflow

You now have a folder of highly-compressed, next-generation **`.webp`** files instead of heavy PNGs. 

1. Go to the **Assets Panel (J)** inside Webflow.
2. Upload all files from your `/img` folder (now in `.webp` format).
3. **The Critical Step for LCP (Hero Image):** 
   - Once `hero-workspace.webp` is uploaded, copy its Webflow-generated URL.
   - Go to your `<head>` custom code and replace `YOUR_WEBFLOW_IMAGE_URL/hero-workspace.webp` with that link. Note: For the Hero background, make sure the image element is set to `Load: Eager` and `fetchpriority: high`.
4. **Below the Fold Imagery:** 
   - Set all other images (`value-photo`, `workflow-photo`, `intelligence-photo`) to **Lazy Load** inside Webflow's image settings gear.

---

## 4. The HTML Structure

You have two choices for bringing the HTML into Webflow:

**Option A (Fastest deployment / Custom Code Wrapper)**:
Create a single page in Webflow. Drag in an **Embed Component**, and paste the inner body `<div>` directly into the embed. This prevents Webflow from adding its own bloat CSS (`webflow.css`). 

**Option B (Webflow Native Blocks)**:
Rebuild the structural blocks using Webflow's `Div`, `Section`, and `Text` blocks.
Ensure you give them the *exact* same class names used in the HTML file (e.g., `hero`, `hero__bg`, `capability__item`). Webflow will auto-link them to the external jsDelivr stylesheet, preserving all your complex CSS pseudo-elements and layout logic without needing to design it visually in the Webflow designer.

---

## Summary Checklist for Go-Live:
- [ ] CSS + JS compressed (Done locally via `clean-css-cli` and `terser`).
- [ ] Code hosted on GitHub and linked via jsDelivr CDN.
- [ ] Preconnects and Scripts set to `defer` via Site Settings.
- [ ] Images uploaded as WebP.
- [ ] Hero Image set to *Eager Load* and manually *Preloaded* in head.
- [ ] Below-the-fold images set to *Lazy Load*.
