const componentScript = document.currentScript ? new URL(document.currentScript.src) : new URL("assets/js/main.js", document.baseURI);
const siteRoot = new URL("../../", componentScript);
const siteUrl = (path) => new URL(path, siteRoot).href;

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="site-header">
        <div class="wrap flex min-h-20 items-center justify-between gap-4">
          <a class="brand" href="${siteUrl("index.html")}"><img class="brand-logo" src="${siteUrl("assets/brand/wukf-france-logo.webp")}" alt="WUKF France"></a>
          <nav class="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
            <a class="nav-link" href="${siteUrl("index.html")}">Accueil</a>
            <a class="nav-link" href="${siteUrl("federation/index.html")}">La F&eacute;d&eacute;ration</a>
            <a class="nav-link" href="${siteUrl("index.html#disciplines")}">Disciplines</a>
            <a class="nav-link" href="${siteUrl("index.html#actualites")}">Actualit&eacute;s</a>
            <a class="nav-link" href="${siteUrl("index.html#ancrage-regional")}">Ligues</a>
            <a class="nav-link" href="${siteUrl("ressources/index.html")}">Ressources</a>
            <a class="nav-link" href="${siteUrl("contact/index.html")}">Contact</a>
          </nav>
          <div class="flex items-center gap-3">
            <a class="btn-primary hidden sm:inline-flex" href="${siteUrl("clubs/index.html#affiliation")}">Affilier mon club</a>
            <button class="btn-secondary lg:hidden" type="button" data-menu-button aria-controls="menu-mobile" aria-expanded="false">Menu</button>
          </div>
        </div>
        <nav id="menu-mobile" class="hidden border-t border-charcoal/10 bg-ivory lg:hidden" data-mobile-menu aria-label="Navigation mobile">
          <div class="wrap grid gap-2 py-4">
            <a class="nav-link py-2" href="${siteUrl("index.html")}">Accueil</a>
            <a class="nav-link py-2" href="${siteUrl("federation/index.html")}">La F&eacute;d&eacute;ration</a>
            <a class="nav-link py-2" href="${siteUrl("index.html#disciplines")}">Disciplines</a>
            <a class="nav-link py-2" href="${siteUrl("index.html#actualites")}">Actualit&eacute;s</a>
            <a class="nav-link py-2" href="${siteUrl("index.html#ancrage-regional")}">Ligues</a>
            <a class="nav-link py-2" href="${siteUrl("ressources/index.html")}">Ressources</a>
            <a class="nav-link py-2" href="${siteUrl("contact/index.html")}">Contact</a>
            <a class="btn-primary mt-2" href="${siteUrl("clubs/index.html#affiliation")}">Affilier mon club</a>
          </div>
        </nav>
      </header>
    `;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-charcoal py-12 text-white">
        <div class="wrap grid gap-8 md:grid-cols-4">
          <div>
            <p class="brand"><img class="brand-logo" src="${siteUrl("assets/brand/wukf-france-logo.webp")}" alt="WUKF France"></p>
            <p class="mt-4 text-sm text-white/65">WUKF France - informations f&eacute;d&eacute;rales.</p>
            <div class="mt-5 flex items-center gap-3">
              <a class="social-link" href="https://x.com/WUKF_FRANCE" target="_blank" rel="noopener" aria-label="WUKF France sur X"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5 3h3.1l-6.8 7.8 8 10.2h-6.3l-4.9-6.4L5 21H1.9l7.3-8.4L1.6 3h6.4l4.4 5.8L17.5 3Zm-1.1 16.2h1.7L7.1 4.7H5.3l11.1 14.5Z"/></svg></a>
              <a class="social-link" href="https://www.facebook.com/WUKFfrance/" target="_blank" rel="noopener" aria-label="WUKF France sur Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.1V6.4c0-.8.5-1 1.2-1h1.7V2.2C16 2.1 15.1 2 14.1 2c-2.8 0-4.7 1.7-4.7 4.8v1.3H6.3v3.6h3.1V22H13V11.7h3l.5-3.6H14Z"/></svg></a>
              <a class="social-link" href="https://www.youtube.com/@WUKFFrance" target="_blank" rel="noopener" aria-label="WUKF France sur YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.2s-.2-1.6-.9-2.3c-.9-.9-1.8-.9-2.3-1C15.2 3.7 12 3.7 12 3.7s-3.2 0-6.4.2c-.5.1-1.5.1-2.3 1-.7.7-.9 2.3-.9 2.3S2.2 9.1 2.2 11v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.5 1 1.8.2 6.2.2 6.2.2s3.2 0 6.4-.2c.5-.1 1.5-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8ZM10.1 15.2V8.7l5.8 3.3-5.8 3.2Z"/></svg></a>
            </div>
          </div>
          <div>
            <h2 class="font-black">Navigation</h2>
            <a class="footer-link mt-3 block" href="${siteUrl("federation/index.html")}">La F&eacute;d&eacute;ration</a>
            <a class="footer-link mt-2 block" href="${siteUrl("clubs/index.html")}">Clubs</a>
            <a class="footer-link mt-2 block" href="${siteUrl("index.html#disciplines")}">Disciplines</a>
          </div>
          <div>
            <h2 class="font-black">Ressources</h2>
            <a class="footer-link mt-3 block" href="${siteUrl("index.html#actualites")}">Actualit&eacute;s</a>
            <a class="footer-link mt-2 block" href="${siteUrl("ressources/index.html")}">Documents</a>
            <a class="footer-link mt-2 block" href="${siteUrl("contact/index.html")}">Contact</a>
          </div>
          <div>
            <h2 class="font-black">L&eacute;gal</h2>
            <a class="footer-link mt-3 block" href="${siteUrl("mentions-legales/index.html")}">Mentions l&eacute;gales</a>
            <a class="footer-link mt-2 block" href="${siteUrl("politique-confidentialite/index.html")}">Confidentialit&eacute;</a>
            <a class="footer-link mt-2 block" href="${siteUrl("politique-cookies/index.html")}">Cookies</a>
            <a class="footer-link mt-2 block" href="${siteUrl("accessibilite/index.html")}">Accessibilit&eacute;</a>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);

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
    const status = contactForm.querySelector("[data-form-status]");

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      if (status) {
        status.textContent = "Votre demande est pr\u00eate \u00e0 \u00eatre envoy\u00e9e d\u00e8s raccordement du formulaire.";
      }
    });
  }
});
