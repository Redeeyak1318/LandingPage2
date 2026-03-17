/* ═══════════════════════════════════════════════════════════
   ELYRA — App Script (Phase 5: Restrained Motion)
   Lenis Smooth Scroll + GSAP Animations + Barba.js Transitions
   Motion philosophy: slow, calm, controlled, luxury
   ═══════════════════════════════════════════════════════════ */

;(function () {
  'use strict';

  /* ─── Lenis Smooth Scroll ──────────────────────────────── */
  let lenis;

  function initLenis() {
    lenis = new Lenis({
      duration: 1.6, // Slow luxury feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    bindAnchorLinks();
  }

  function bindAnchorLinks() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          lenis.scrollTo(target, {
            offset: -80,
            duration: 2.0, // Slow scroll to anchored section
          });
        }
        closeMobileMenu();
      });
    });
  }


  /* ─── Navigation ───────────────────────────────────────── */
  function initNavigation() {
    const nav = document.getElementById('mainNav');
    const menuToggle = document.getElementById('menuToggle');

    ScrollTrigger.create({
      start: 'top -60',
      onUpdate: (self) => {
        if (self.scroll() > 100) {
          nav.classList.add('nav--scrolled');
        } else {
          nav.classList.remove('nav--scrolled');
        }
      },
    });

    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        const isActive = menuToggle.classList.contains('active');
        if (isActive) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });
    }
  }

  function openMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    menuToggle.classList.add('active');
    mobileMenu.classList.add('active');

    if (lenis) lenis.stop();

    const links = mobileMenu.querySelectorAll('[data-mobile-link]');
    gsap.fromTo(
      links,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        delay: 0.2,
      }
    );
  }

  function closeMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!menuToggle || !mobileMenu) return;

    menuToggle.classList.remove('active');
    mobileMenu.classList.remove('active');

    if (lenis) lenis.start();
  }


  /* ─── GSAP Scroll Animations ───────────────────────────── */
  function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Generic extremely soft fade-up 
    document.querySelectorAll('[data-animate="fade-up"]').forEach((el) => {
      const delay = parseFloat(el.dataset.delay) || 0;

      gsap.fromTo(
        el,
        { opacity: 0, y: 30 }, // Soft upward motion
        {
          opacity: 1,
          y: 0,
          duration: 1.6,
          delay: delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true,
          },
          onComplete: () => {
            el.classList.add('is-visible');
          },
        }
      );
    });

    // Divider lines — draw in from left, very slowly
    document.querySelectorAll('[data-animate="draw-line"]').forEach((line) => {
      gsap.fromTo(
        line,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: line,
            start: 'top 90%',
            once: true,
          },
        }
      );
    });

    // Workflow step borders
    const workflowSteps = document.querySelectorAll('.workflow__step');
    workflowSteps.forEach((step) => {
      gsap.fromTo(
        step,
        { borderColor: 'transparent' },
        {
          borderColor: 'var(--color-border)',
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            once: true,
          },
        }
      );
    });

    // Intelligence blocks borders
    const intBlocks = document.querySelectorAll('.intelligence__block');
    if (intBlocks.length > 0) {
      intBlocks.forEach((block) => {
        gsap.fromTo(
          block,
          { borderColor: 'transparent' },
          {
            borderColor: 'var(--color-border)',
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });
    }

    // Metric values — slow fade
    document.querySelectorAll('.intelligence__metric-val').forEach((val) => {
      gsap.fromTo(
        val,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: val,
            start: 'top 90%',
            once: true,
          },
        }
      );
    });

    // Integration names — whisper soft stagger
    const intNames = document.querySelectorAll('.integrations__name');
    if (intNames.length > 0) {
      gsap.fromTo(
        intNames,
        { opacity: 0, y: 5 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.integrations__grid',
            start: 'top 85%',
            once: true,
          },
        }
      );
    }

    // Pricing cards — calm fade
    const pricingPlans = document.querySelectorAll('.pricing__plan');
    pricingPlans.forEach((plan, i) => {
      gsap.fromTo(
        plan,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: i * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pricing__grid',
            start: 'top 80%',
            once: true,
          },
        }
      );
    });
  }


  /* ─── Hero Parallax & Entrance ─────────────────────────── */
  function initHero() {
    const heroImg = document.querySelector('.hero__bg-img');

    // Very subtle parallax on hero image (no scale)
    if (heroImg) {
      gsap.to(heroImg, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    // Entrance timeline
    const tl = gsap.timeline({ delay: 0.4 });

    // Nav fade in
    tl.fromTo(
      '.nav',
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 1.0, ease: 'power2.out' }
    );

    // Hero title
    tl.fromTo(
      '.hero__title',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.6, ease: 'power3.out' },
      '-=0.7'
    );

    // Hero subtitle
    tl.fromTo(
      '.hero__subtitle',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.4, ease: 'power3.out' },
      '-=1.0'
    );

    // Hero actions
    tl.fromTo(
      '.hero__actions',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
      '-=0.9'
    );

    // NO hero scale animation — pure calm entry.

    // Mark hero elements visible
    tl.eventCallback('onComplete', () => {
      document.querySelectorAll('.hero [data-animate]').forEach((el) => {
        el.classList.add('is-visible');
      });
    });
  }


  /* ─── Barba.js Page Transitions ────────────────────────── */
  function initBarba() {
    barba.init({
      sync: true,
      transitions: [
        {
          name: 'calm-fade-transition',
          async leave(data) {
            // Clean fade out of old content — no overlay blocks
            await gsap.to(data.current.container, {
              opacity: 0,
              duration: 0.6,
              ease: 'power2.inOut',
            });
          },

          async enter(data) {
            window.scrollTo(0, 0);
            if (lenis) lenis.scrollTo(0, { immediate: true });

            gsap.set(data.next.container, { opacity: 0 });

            // Clean fade in of new content
            gsap.to(data.next.container, {
              opacity: 1,
              duration: 0.8,
              ease: 'power2.out',
              delay: 0.1,
            });
          },

          async once() {
            // First page load — no transition
          },
        },
      ],

      views: [
        {
          namespace: 'home',
          afterEnter() {
            ScrollTrigger.getAll().forEach((t) => t.kill());
            initAnimations();
            initNavigation();
            initHero();
            bindAnchorLinks();
          },
        },
      ],
    });
  }


  /* ─── Opt-in Form ──────────────────────────────────────── */
  function initOptinForm() {
    const form = document.getElementById('optinForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('optinName');
      const email = document.getElementById('optinEmail');
      const btn = document.getElementById('optinSubmit');

      if (email && email.value) {
        btn.textContent = 'Thank you';
        btn.style.pointerEvents = 'none';

        // Subtle opacity pulse instead of scale bounce
        gsap.fromTo(
          btn,
          { opacity: 0.5 },
          { opacity: 1, duration: 0.6, ease: 'power2.out' }
        );

        email.value = '';
        if (name) name.value = '';

        setTimeout(() => {
          btn.textContent = 'Join';
          btn.style.pointerEvents = '';
        }, 3000);
      }
    });
  }


  /* ─── Initialize ───────────────────────────────────────── */
  function init() {
    if (typeof gsap === 'undefined' || typeof Lenis === 'undefined') {
      setTimeout(init, 50);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    initLenis();
    initNavigation();
    initHero();
    initAnimations();
    initOptinForm();
    initBarba();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
