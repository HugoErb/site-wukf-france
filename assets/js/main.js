document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("[data-menu-button]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");

  if (menuButton && mobileMenu) {
    const closeMenu = () => {
      mobileMenu.classList.add("hidden");
      menuButton.setAttribute("aria-expanded", "false");
    };

    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      mobileMenu.classList.toggle("hidden", isOpen);
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  document.querySelectorAll("[data-hero-carousel]").forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll("[data-hero-slide]"));
    const dots = Array.from(carousel.querySelectorAll("[data-hero-dot]"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let activeIndex = 0;

    const setActiveSlide = (index) => {
      activeIndex = index;
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("is-active", slideIndex === activeIndex);
      });
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === activeIndex);
      });
    };

    if (slides.length > 1 && !reduceMotion) {
      window.setInterval(() => {
        setActiveSlide((activeIndex + 1) % slides.length);
      }, 4200);
    }
  });

  document.querySelectorAll("[data-accordion-button]").forEach((button) => {
    button.addEventListener("click", () => {
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      if (panel) panel.hidden = isOpen;
    });
  });

  document.querySelectorAll("[data-demo-download]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Document non disponible.");
    });
  });

  const newsButtons = document.querySelectorAll("[data-news-filter]");
  const newsCards = document.querySelectorAll("[data-news-card]");

  newsButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.newsFilter;
      newsButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      newsCards.forEach((card) => {
        card.hidden = filter !== "tous" && card.dataset.category !== filter;
      });
    });
  });

  const resourceSearch = document.querySelector("[data-resource-search]");
  const resourceButtons = document.querySelectorAll("[data-resource-filter]");
  const resourceCards = document.querySelectorAll("[data-resource-card]");
  let resourceCategory = "tous";

  const applyResourceFilters = () => {
    const query = (resourceSearch?.value || "").trim().toLowerCase();
    resourceCards.forEach((card) => {
      const matchesCategory = resourceCategory === "tous" || card.dataset.category === resourceCategory;
      const matchesQuery = card.textContent.toLowerCase().includes(query);
      card.hidden = !matchesCategory || !matchesQuery;
    });
  };

  resourceSearch?.addEventListener("input", applyResourceFilters);

  resourceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      resourceCategory = button.dataset.resourceFilter;
      resourceButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      applyResourceFilters();
    });
  });

  document.querySelectorAll("[data-map-switcher]").forEach((switcher) => {
    const toggle = switcher.querySelector("[data-map-toggle]");
    const francePanel = switcher.querySelector('[data-map-panel="france"]');
    const overseasPanel = switcher.querySelector('[data-map-panel="overseas"]');

    if (!toggle || !francePanel || !overseasPanel) return;

    toggle.addEventListener("click", () => {
      const showOverseas = overseasPanel.hidden;
      overseasPanel.hidden = !showOverseas;
      francePanel.hidden = showOverseas;
      toggle.setAttribute("aria-expanded", String(showOverseas));
      toggle.textContent = showOverseas ? "Voir la m\u00e9tropole" : "Voir les outre-mer";
    });
  });

  const contactForm = document.querySelector("#demo-contact-form");

  if (contactForm) {
    const submitButton = contactForm.querySelector("button[type='submit']");
    const status = contactForm.querySelector("[data-form-status]");

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Simulation en cours...";
      }

      if (status) status.textContent = "";

      window.setTimeout(() => {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = "Envoyer la demande";
        }

        if (status) {
          status.textContent = "Formulaire: votre message n\u2019a pas \u00e9t\u00e9 transmis automatiquement.";
        }

        contactForm.reset();
      }, 700);
    });
  }
});
