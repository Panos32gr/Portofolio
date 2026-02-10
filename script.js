/* ==============================================
   Portfolio — Script
   ============================================== */

(function () {
  "use strict";

  // ——————————————————————————————————————
  // CURSOR GLOW — follows mouse on desktop
  // ——————————————————————————————————————
  const cursorGlow = document.getElementById("cursorGlow");

  if (window.matchMedia("(hover: hover)").matches && cursorGlow) {
    document.addEventListener("mousemove", (e) => {
      cursorGlow.style.left = e.clientX + "px";
      cursorGlow.style.top = e.clientY + "px";
    });
  }

  // ——————————————————————————————————————
  // NAVBAR — hide on scroll down, show on scroll up
  // ——————————————————————————————————————
  const nav = document.getElementById("nav");
  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateNav() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
    }

    if (currentScrollY > 20) {
      nav.classList.add("nav--scrolled");
    } else {
      nav.classList.remove("nav--scrolled");
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateNav);
      ticking = true;
    }
  });

  // ——————————————————————————————————————
  // MOBILE MENU TOGGLE
  // ——————————————————————————————————————
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("open");
    document.body.style.overflow = navLinks.classList.contains("open")
      ? "hidden"
      : "";
  });

  // Close menu on link click
  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navLinks.classList.remove("open");
      document.body.style.overflow = "";
    });
  });

  // ——————————————————————————————————————
  // SMOOTH SCROLL for nav links
  // ——————————————————————————————————————
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ——————————————————————————————————————
  // SCROLL ANIMATIONS — IntersectionObserver
  // ——————————————————————————————————————

  // Add classes to elements we want to animate
  function setupAnimations() {
    // Hero elements fade in immediately (with stagger via CSS transition-delay)
    const heroContent = document.querySelector(".hero__content");
    const heroVisual = document.querySelector(".hero__visual");
    if (heroContent) heroContent.classList.add("fade-up");
    if (heroVisual) heroVisual.classList.add("fade-up");

    // Section titles & content blocks
    document
      .querySelectorAll(".section__title")
      .forEach((el) => el.classList.add("fade-up"));
    document
      .querySelectorAll(".about__text")
      .forEach((el) => el.classList.add("fade-up"));
    document
      .querySelectorAll(".about__image")
      .forEach((el) => el.classList.add("fade-up"));
    document
      .querySelectorAll(".contact__content")
      .forEach((el) => el.classList.add("fade-up"));

    // Grids with stagger
    document
      .querySelectorAll(".skills__grid")
      .forEach((el) => el.classList.add("stagger"));
    document
      .querySelectorAll(".projects__grid")
      .forEach((el) => el.classList.add("stagger"));
  }

  setupAnimations();

  // Observer
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-up, .stagger").forEach((el) => {
    observer.observe(el);
  });

  // ——————————————————————————————————————
  // CONTACT FORM — submit via Formspree
  // ——————————————————————————————————————
  const contactForm = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const formStatus = document.getElementById("formStatus");

  if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const submitText = submitBtn.querySelector(".contact-form__submit-text");
      const submitLoading = submitBtn.querySelector(
        ".contact-form__submit-loading",
      );

      // Show loading state
      submitBtn.disabled = true;
      submitText.hidden = true;
      submitLoading.hidden = false;
      formStatus.textContent = "";
      formStatus.className = "contact-form__status";

      try {
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: new FormData(contactForm),
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          formStatus.textContent =
            "Message sent successfully! I'll get back to you soon.";
          formStatus.classList.add("contact-form__status--success");
          contactForm.reset();
        } else {
          throw new Error("Form submission failed");
        }
      } catch (error) {
        formStatus.textContent =
          "Oops! Something went wrong. Please try again or email me directly.";
        formStatus.classList.add("contact-form__status--error");
      } finally {
        submitBtn.disabled = false;
        submitText.hidden = false;
        submitLoading.hidden = true;
      }
    });
  }

  // ——————————————————————————————————————
  // ACTIVE NAV LINK highlighting
  // ——————————————————————————————————————
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll("[data-nav]");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navItems.forEach((item) => {
            item.style.color = "";
            if (item.getAttribute("href") === `#${id}`) {
              item.style.color = "var(--accent)";
            }
          });
        }
      });
    },
    { threshold: 0.3 },
  );

  sections.forEach((section) => sectionObserver.observe(section));
})();
