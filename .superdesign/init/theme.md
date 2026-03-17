Here is the full CSS source code:

```css

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   ELYRA â€” Premium SaaS Landing Page (Phase 2)
   Design: Editorial, Minimal, Luxury Light Theme
   Stack: Vanilla CSS + GSAP + Lenis + Barba.js
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

/* â”€â”€â”€ Reset & Foundation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Color System â€” Soft Neutrals */
  --color-bg:          #f8f7f4;
  --color-bg-warm:     #f3f1ec;
  --color-bg-elevated: #ffffff;
  --color-surface:     #eeece7;

  --color-text:        #1a1a1a;
  --color-text-soft:   #4a4a48;
  --color-text-muted:  #8a8a86;
  --color-text-faint:  #b5b5b0;

  --color-accent:      #7c8c72;
  --color-accent-soft: #a3b098;
  --color-border:      #e2e0db;
  --color-border-soft: #eceae5;

  /* Typography */
  --font-serif:  'Canela', 'Cormorant Garamond', 'Georgia', serif;
  --font-sans:   'Inter', -apple-system, 'Segoe UI', sans-serif;

  /* Spacing Scale */
  --space-xs:   0.5rem;
  --space-sm:   1rem;
  --space-md:   1.2rem;
  --space-lg:   2.5rem;
  --space-xl:   3.5rem;
  --space-2xl:  5rem;
  --space-3xl:  8rem;
  --space-4xl:  11rem;

  /* Layout */
  --container-max:  1200px;
  --container-pad:  clamp(1.5rem, 4vw, 3rem);

  /* Motion */
  --ease-out:       cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:    cubic-bezier(0.65, 0, 0.35, 1);
  --duration-fast:  0.3s;
  --duration-base:  0.6s;
  --duration-slow:  1s;

  /* Borders */
  --radius-sm: 4px;
  --radius-md: 8px;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text);
  background-color: var(--color-bg);
  overflow-x: hidden;
}

html.lenis, html.lenis body { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }
.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
.lenis.lenis-stopped { overflow: hidden; }

::selection {
  background-color: var(--color-accent-soft);
  color: var(--color-text);
}

a { color: inherit; text-decoration: none; }
ul, ol { list-style: none; }
img { max-width: 100%; display: block; }

/* Animation states */
[data-animate] { opacity: 0; transform: translateY(30px); }
[data-animate].is-visible { opacity: 1; transform: translateY(0); }



/* â”€â”€â”€ Shared â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.section-label {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: var(--space-md);
}

.section-title {
  font-family: var(--font-serif);
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  font-weight: 300;
  line-height: 1.15;
  color: var(--color-text);
  letter-spacing: -0.01em;
}

.section-title em {
  font-style: italic;
  font-weight: 300;
}

.divider-line {
  height: 1px;
  background-color: var(--color-border-soft);
  width: 100%;
  transform-origin: left center;
}

.bg-alt {
  background-color: var(--color-bg-warm);
}

.section-divider {
  width: 100%;
  height: 1px;
  background-color: var(--color-border-soft);
}

.section-microcopy {
  font-family: var(--font-sans);
  font-size: 1.0625rem;
  font-weight: 300;
  line-height: 1.6;
  color: var(--color-text-soft);
  margin-top: var(--space-sm);
  max-width: 480px;
}


/* â”€â”€â”€ Buttons â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  padding: 0.875rem 2rem;
  border-radius: var(--radius-sm);
  border: 1px solid transparent;
  cursor: pointer;
  transition:
    background-color var(--duration-fast) var(--ease-out),
    color var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out),
    opacity var(--duration-fast) var(--ease-out);
  white-space: nowrap;
}

.btn:hover { opacity: 0.9; }
.btn:active { opacity: 1; }

.btn--primary {
  background-color: var(--color-text);
  color: var(--color-bg);
  border-color: var(--color-text);
}
.btn--primary:hover {
  background-color: #2d2d2d;
  border-color: #2d2d2d;
}

/* Light buttons for hero over dark images */
.btn--primary-light {
  background-color: rgba(255, 255, 255, 0.95);
  color: var(--color-text);
  border-color: rgba(255, 255, 255, 0.95);
}
.btn--primary-light:hover {
  background-color: #ffffff;
  border-color: #ffffff;
}

.btn--ghost-light {
  background-color: transparent;
  color: rgba(255, 255, 255, 0.85);
  border-color: transparent;
  padding-left: 0;
}
.btn--ghost-light:hover {
  color: #ffffff;
  transform: none;
}
.btn--ghost-light::after {
  content: 'â†’';
  margin-left: 0.5rem;
  transition: transform var(--duration-fast) var(--ease-out);
}
.btn--ghost-light:hover::after {
  transform: translateX(4px);
}

.btn--ghost {
  background-color: transparent;
  color: var(--color-text-soft);
  border-color: transparent;
  padding-left: 0;
}
.btn--ghost:hover { color: var(--color-text); transform: none; }
.btn--ghost::after {
  content: 'â†’';
  margin-left: 0.5rem;
  transition: transform var(--duration-fast) var(--ease-out);
}
.btn--ghost:hover::after { transform: translateX(4px); }

.btn--outline {
  background-color: transparent;
  color: var(--color-text);
  border-color: var(--color-border);
}
.btn--outline:hover { border-color: var(--color-text); }

.btn--large {
  padding: 1.1rem 2.8rem;
  font-size: 0.9375rem;
}


/* â”€â”€â”€ Navigation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: var(--space-sm) 0;
  transition:
    padding var(--duration-fast) var(--ease-out),
    background-color var(--duration-base) var(--ease-out),
    backdrop-filter var(--duration-base) var(--ease-out);
}

/* Transparent on hero */
.nav--hero-transparent {
  background-color: transparent;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}

.nav--hero-transparent .nav__logo,
.nav--hero-transparent .nav__link {
  color: rgba(255, 255, 255, 0.9);
}

.nav--hero-transparent .nav__link:hover {
  color: #ffffff;
}

.nav--hero-transparent .nav__link::after {
  background-color: #ffffff;
}

.nav--hero-transparent .nav__cta {
  background-color: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #ffffff;
}

.nav--hero-transparent .nav__cta:hover {
  background-color: rgba(255, 255, 255, 0.25);
}

.nav--hero-transparent .nav__menu-toggle span {
  background-color: #ffffff;
}

/* Scrolled state */
.nav--scrolled {
  padding: 0.6rem 0;
  background-color: rgba(248, 247, 244, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border-soft);
}

.nav--scrolled.nav--hero-transparent .nav__logo,
.nav--scrolled.nav--hero-transparent .nav__link {
  color: var(--color-text-soft);
}

.nav--scrolled.nav--hero-transparent .nav__link:hover {
  color: var(--color-text);
}

.nav--scrolled.nav--hero-transparent .nav__link::after {
  background-color: var(--color-text);
}

.nav--scrolled.nav--hero-transparent .nav__cta {
  background-color: var(--color-text);
  color: var(--color-bg);
  border-color: var(--color-text);
}

.nav--scrolled.nav--hero-transparent .nav__cta:hover {
  background-color: #2d2d2d;
}

.nav--scrolled.nav--hero-transparent .nav__menu-toggle span {
  background-color: var(--color-text);
}

.nav__inner {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-pad);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__logo {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: var(--color-text);
  transition: color var(--duration-fast) var(--ease-out);
}

.nav__links {
  display: flex;
  gap: var(--space-lg);
}

.nav__link {
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--color-text-soft);
  transition: color var(--duration-fast) var(--ease-out);
  position: relative;
}

.nav__link::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0;
  width: 0; height: 1px;
  background-color: var(--color-text);
  transition: width var(--duration-fast) var(--ease-out);
}

.nav__link:hover { color: var(--color-text); }
.nav__link:hover::after { width: 100%; }

.nav__cta {
  font-size: 0.8125rem;
  font-weight: 400;
  padding: 0.625rem 1.5rem;
  background-color: var(--color-text);
  color: var(--color-bg);
  border-radius: var(--radius-sm);
  transition:
    background-color var(--duration-fast) var(--ease-out),
    color var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out);
}

.nav__cta:hover {
  background-color: #2d2d2d;
  transform: translateY(-1px);
}

/* Mobile Menu Toggle */
.nav__menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.nav__menu-toggle span {
  display: block;
  width: 20px;
  height: 1.5px;
  background-color: var(--color-text);
  transition:
    transform var(--duration-fast) var(--ease-out),
    opacity var(--duration-fast) var(--ease-out),
    background-color var(--duration-fast) var(--ease-out);
}

.nav__menu-toggle.active span:first-child {
  transform: translateY(3.25px) rotate(45deg);
}
.nav__menu-toggle.active span:last-child {
  transform: translateY(-3.25px) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 99;
  background-color: var(--color-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--duration-base) var(--ease-out);
}

.mobile-menu.active { opacity: 1; pointer-events: all; }

.mobile-menu__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-lg);
}

.mobile-menu__link {
  font-family: var(--font-serif);
  font-size: 2rem;
  font-weight: 300;
  color: var(--color-text);
  transition: color var(--duration-fast) var(--ease-out);
}
.mobile-menu__link:hover { color: var(--color-text-muted); }

.mobile-menu__cta {
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  padding: 0.875rem 2rem;
  background-color: var(--color-text);
  color: var(--color-bg);
  border-radius: var(--radius-sm);
  margin-top: var(--space-md);
}


/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   1. HERO â€” Full-width luxury image background
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  will-change: transform;
}

.hero__bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(15, 15, 14, 0.4) 0%,
    rgba(15, 15, 14, 0.6) 50%,
    rgba(15, 15, 14, 0.8) 100%
  );
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: 820px;
  padding: var(--space-4xl) var(--container-pad) var(--space-3xl);
}

.hero__title {
  font-family: var(--font-serif);
  font-size: clamp(4rem, 11vw, 8rem);
  font-weight: 300;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: var(--space-lg);
}

.hero__title em {
  font-style: italic;
  font-weight: 300;
}

.hero__subtitle {
  font-family: var(--font-sans);
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  font-weight: 300;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: var(--space-xl);
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
}

.hero__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
}


/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   2. VALUE PROPOSITION
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.value {
  padding: var(--space-4xl) var(--container-pad);
  text-align: center;
}

.value__container {
  max-width: 720px;
  margin: 0 auto;
}

.value__headline {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  font-weight: 300;
  line-height: 1.2;
  color: var(--color-text);
  letter-spacing: -0.01em;
  margin-bottom: var(--space-lg);
}

.value__body {
  font-size: 1.0625rem;
  font-weight: 300;
  line-height: 1.8;
  color: var(--color-text-soft);
  max-width: 580px;
  margin: 0 auto;
}

.value__visual {
  margin-top: var(--space-4xl);
  width: 100%;
  aspect-ratio: 21 / 9;
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.value__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}


/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   3. PRODUCT CAPABILITY
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.capability {
  padding: var(--space-4xl) var(--container-pad);
}

.capability__container {
  max-width: var(--container-max);
  margin: 0 auto;
}

.capability__header {
  margin-bottom: var(--space-3xl);
  max-width: 500px;
}

.capability__list {
  max-width: 900px;
}

.capability__item {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: var(--space-lg);
  padding: var(--space-xl) 0;
  align-items: start;
}

.capability__number {
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-text-muted);
  padding-top: 0.2rem;
}

.capability__text { max-width: 600px; }

.capability__name {
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 2.5vw, 1.875rem);
  font-weight: 400;
  line-height: 1.25;
  color: var(--color-text);
  margin-bottom: var(--space-sm);
  letter-spacing: -0.01em;
}

.capability__desc {
  font-size: 0.9375rem;
  font-weight: 300;
  line-height: 1.75;
  color: var(--color-text-soft);
}


/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   4. WORKFLOW OVERVIEW
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.workflow {
  padding: var(--space-4xl) var(--container-pad);
}

.workflow__container {
  max-width: var(--container-max);
  margin: 0 auto;
}

.workflow__header {
  margin-bottom: var(--space-3xl);
  max-width: 500px;
}

.workflow__visual {
  margin-bottom: var(--space-4xl);
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.workflow__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.workflow__steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

.workflow__step {
  padding-top: var(--space-lg);
  border-top: 1px solid var(--color-border);
}

.workflow__step-num {
  font-family: var(--font-serif);
  font-size: 0.9375rem;
  font-weight: 400;
  color: var(--color-text-faint);
  display: block;
  margin-bottom: var(--space-lg);
  letter-spacing: 0.05em;
}

.workflow__step-title {
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 2.5vw, 1.875rem);
  font-weight: 400;
  line-height: 1.25;
  color: var(--color-text);
  margin-bottom: var(--space-sm);
  letter-spacing: -0.01em;
}

.workflow__step-desc {
  font-size: 0.9375rem;
  font-weight: 300;
  line-height: 1.75;
  color: var(--color-text-soft);
}


/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   5. INTEGRATIONS
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.integrations {
  padding: var(--space-4xl) var(--container-pad);
  background-color: var(--color-bg-warm);
}

.integrations__container {
  max-width: var(--container-max);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3xl);
  align-items: start;
}

.integrations__desc {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.8;
  color: var(--color-text-soft);
  margin-top: var(--space-lg);
  max-width: 440px;
}

.integrations__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
}

.integrations__name {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--color-text-soft);
  padding: var(--space-md) var(--space-sm);
  border-bottom: 1px solid var(--color-border-soft);
  transition: color var(--duration-fast) var(--ease-out);
}

.integrations__name:hover {
  color: var(--color-text);
}

/* Right border for columns 1 and 2 */
.integrations__name:nth-child(3n+1),
.integrations__name:nth-child(3n+2) {
  border-right: 1px solid var(--color-border-soft);
}


/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   6. PERFORMANCE + INTELLIGENCE
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.intelligence {
  padding: var(--space-4xl) var(--container-pad);
}

.intelligence__container {
  max-width: var(--container-max);
  margin: 0 auto;
}

.intelligence__header {
  margin-bottom: var(--space-3xl);
  max-width: 500px;
}

.intelligence__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl) var(--space-3xl);
  margin-bottom: var(--space-3xl);
}

.intelligence__block {
  padding-top: var(--space-lg);
  border-top: 1px solid var(--color-border);
}

.intelligence__block-title {
  font-family: var(--font-serif);
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  font-weight: 400;
  line-height: 1.3;
  color: var(--color-text);
  margin-bottom: var(--space-sm);
  letter-spacing: -0.01em;
}

.intelligence__block-desc {
  font-size: 0.9375rem;
  font-weight: 300;
  line-height: 1.75;
  color: var(--color-text-soft);
}

.intelligence__visual {
  margin-bottom: var(--space-4xl);
  width: 100%;
  aspect-ratio: 21 / 9;
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.intelligence__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.intelligence__metrics {
  display: flex;
  gap: var(--space-3xl);
  padding-top: var(--space-xl);
  border-top: 1px solid var(--color-border);
}

.intelligence__metric {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.intelligence__metric-val {
  font-family: var(--font-serif);
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 300;
  line-height: 1;
  color: var(--color-text);
  letter-spacing: -0.02em;
}

.intelligence__metric-label {
  font-size: 0.8125rem;
  font-weight: 400;
  color: var(--color-text-muted);
  letter-spacing: 0.02em;
}


/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   7. TESTIMONIALS
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.testimonials {
  padding: var(--space-4xl) var(--container-pad);
  background-color: var(--color-bg-warm);
}

.testimonials__container {
  max-width: var(--container-max);
  margin: 0 auto;
}

.testimonials__header {
  margin-bottom: var(--space-3xl);
  max-width: 500px;
}

.testimonials__list {
  max-width: 800px;
}

.testimonial {
  padding: var(--space-xl) 0;
}

.testimonial__quote {
  font-family: var(--font-serif);
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  font-weight: 300;
  line-height: 1.55;
  color: var(--color-text);
  font-style: italic;
  margin-bottom: var(--space-lg);
}

.testimonial__author {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.testimonial__name {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text);
}

.testimonial__role {
  font-size: 0.8125rem;
  font-weight: 400;
  color: var(--color-text-muted);
}


/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   8. PRICING
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.pricing {
  padding: var(--space-4xl) var(--container-pad);
}

.pricing__container {
  max-width: var(--container-max);
  margin: 0 auto;
}

.pricing__header {
  margin-bottom: var(--space-3xl);
  max-width: 500px;
}

.pricing__subtitle {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.7;
  color: var(--color-text-soft);
  margin-top: var(--space-md);
}

.pricing__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

.pricing__plan {
  padding: var(--space-xl);
  border: 1px solid var(--color-border-soft);
  border-radius: var(--radius-md);
  background-color: var(--color-bg);
  transition:
    border-color var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out);
}

.pricing__plan:hover {
  border-color: var(--color-border);
  transform: translateY(-2px);
}

.pricing__plan--featured {
  border-color: var(--color-text);
  background-color: var(--color-bg-elevated);
}
.pricing__plan--featured:hover { border-color: var(--color-text); }

.pricing__plan-name {
  font-family: var(--font-sans);
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: var(--space-md);
}

.pricing__plan-price {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: var(--space-md);
}

.pricing__amount {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--color-text);
  letter-spacing: -0.02em;
}

.pricing__period {
  font-size: 0.8125rem;
  font-weight: 400;
  color: var(--color-text-muted);
}

.pricing__plan-desc {
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.6;
  color: var(--color-text-soft);
  margin-bottom: var(--space-lg);
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--color-border-soft);
}

.pricing__plan-features {
  margin-bottom: var(--space-xl);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.pricing__plan-features li {
  font-size: 0.875rem;
  font-weight: 300;
  color: var(--color-text-soft);
  padding-left: 1rem;
  position: relative;
}

.pricing__plan-features li::before {
  content: 'â€”';
  position: absolute;
  left: 0;
  color: var(--color-text-faint);
  font-size: 0.75rem;
}

.pricing__plan .btn { width: 100%; }


/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   9. OPT-IN â€” Email capture
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.optin {
  padding: var(--space-3xl) var(--container-pad);
  text-align: center;
}

.optin__container {
  max-width: 520px;
  margin: 0 auto;
}

.optin__title {
  font-family: var(--font-serif);
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 300;
  line-height: 1.2;
  color: var(--color-text);
  margin-bottom: var(--space-md);
  letter-spacing: -0.01em;
}

.optin__subtitle {
  font-size: 0.9375rem;
  font-weight: 300;
  line-height: 1.7;
  color: var(--color-text-soft);
  margin-bottom: var(--space-xl);
}

.optin__form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: var(--space-md);
}

.optin__fields {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}

@media (min-width: 600px) {
  .optin__form {
    flex-direction: row;
  }
  .optin__fields {
    flex-direction: row;
  }
}

.optin__input {
  flex: 1;
  width: 100%;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 300;
  padding: 0.875rem 1.25rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background-color: var(--color-bg);
  color: var(--color-text);
  outline: none;
  transition: border-color var(--duration-fast) var(--ease-out), background-color var(--duration-fast) var(--ease-out);
}

.optin__input::placeholder {
  color: var(--color-text-faint);
}

.optin__input:focus {
  border-color: var(--color-text-muted);
}

.optin__btn {
  flex-shrink: 0;
}

.optin__disclaimer {
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--color-text-faint);
}


/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   10. FINAL CTA
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.final-cta {
  padding: var(--space-4xl) var(--container-pad);
  text-align: center;
}

.final-cta__container {
  max-width: 700px;
  margin: 0 auto;
}

.final-cta__title {
  font-family: var(--font-serif);
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 300;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--color-text);
  margin-bottom: var(--space-lg);
}

.final-cta__title em {
  font-style: italic;
  font-weight: 300;
}

.final-cta__subtitle {
  font-size: 1.0625rem;
  font-weight: 300;
  line-height: 1.7;
  color: var(--color-text-soft);
  margin-bottom: var(--space-xl);
  max-width: 460px;
  margin-left: auto;
  margin-right: auto;
}

.final-cta__actions {
  margin-bottom: var(--space-md);
}

.final-cta__note {
  font-size: 0.8125rem;
  font-weight: 400;
  color: var(--color-text-muted);
}


/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   11. FOOTER
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.footer {
  padding: var(--space-3xl) var(--container-pad) var(--space-xl);
  border-top: 1px solid var(--color-border);
}

.footer__container {
  max-width: var(--container-max);
  margin: 0 auto;
}

.footer__top {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--space-3xl);
  padding-bottom: var(--space-3xl);
}

.footer__logo {
  font-family: var(--font-serif);
  font-size: 1.375rem;
  font-weight: 400;
  color: var(--color-text);
  letter-spacing: -0.02em;
}

.footer__tagline {
  font-size: 0.875rem;
  font-weight: 300;
  color: var(--color-text-muted);
  margin-top: 0.5rem;
}

.footer__columns {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
}

.footer__column {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.footer__column-title {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: 0.5rem;
}

.footer__link {
  font-size: 0.875rem;
  font-weight: 300;
  color: var(--color-text-soft);
  transition: color var(--duration-fast) var(--ease-out);
}
.footer__link:hover { color: var(--color-text); }

.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-lg);
  border-top: 1px solid var(--color-border-soft);
}

.footer__copyright {
  font-size: 0.8125rem;
  font-weight: 400;
  color: var(--color-text-muted);
}

.footer__social {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.footer__social-link {
  color: var(--color-text-muted);
  transition: color var(--duration-fast) var(--ease-out);
  display: flex;
  align-items: center;
}
.footer__social-link:hover { color: var(--color-text); }


/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   RESPONSIVE
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

/* Tablet */
@media (max-width: 1024px) {
  .integrations__container {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }

  .intelligence__grid {
    grid-template-columns: 1fr;
  }

  .intelligence__metrics {
    flex-wrap: wrap;
    gap: var(--space-xl);
  }

  .pricing__grid {
    grid-template-columns: 1fr 1fr;
  }

  .pricing__plan:last-child {
    grid-column: 1 / -1;
    max-width: 50%;
  }
}

/* Mobile */
@media (max-width: 768px) {
  :root {
    --space-3xl: 6rem;
    --space-4xl: 8rem;
  }

  .nav__links { display: none; }
  .nav__cta { display: none; }
  .nav__menu-toggle { display: flex; }

  .hero__title {
    font-size: clamp(2.5rem, 10vw, 4rem);
  }

  .hero__subtitle br { display: none; }

  .hero__actions {
    flex-direction: column;
    gap: var(--space-sm);
  }

  .hero__actions .btn--ghost-light {
    padding-left: 2rem;
  }

  .value__headline {
    font-size: clamp(1.8rem, 7vw, 2.5rem);
  }

  .capability__item {
    grid-template-columns: 50px 1fr;
    gap: var(--space-md);
  }

  .workflow__steps {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  .integrations__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .integrations__name:nth-child(3n+1),
  .integrations__name:nth-child(3n+2) {
    border-right: none;
  }

  .integrations__name:nth-child(odd) {
    border-right: 1px solid var(--color-border-soft);
  }

  .intelligence__grid {
    grid-template-columns: 1fr;
  }

  .intelligence__metrics {
    flex-direction: column;
    gap: var(--space-lg);
  }

  .pricing__grid {
    grid-template-columns: 1fr;
  }

  .pricing__plan:last-child {
    max-width: 100%;
  }

  .optin__form {
    flex-direction: column;
  }

  .footer__top {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }

  .footer__columns {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer__bottom {
    flex-direction: column;
    gap: var(--space-md);
    text-align: center;
  }

  .section-title br { display: none; }
  .value__headline br { display: none; }

  .final-cta__title {
    font-size: clamp(2.5rem, 10vw, 4rem);
  }
}

/* Small mobile */
@media (max-width: 480px) {
  .footer__columns {
    grid-template-columns: 1fr;
  }

  .integrations__grid {
    grid-template-columns: 1fr;
  }

  .integrations__name:nth-child(odd) {
    border-right: none;
  }
}

```
