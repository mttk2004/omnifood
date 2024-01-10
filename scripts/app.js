// Make mobile navigation work
const btnMenuElt = document.querySelector(".btn--menu");

btnMenuElt.addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("open-nav");
});

// Set current year
const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    if (link.getAttribute("href").startsWith("#")) e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      document.querySelector(".header").classList.toggle("open-nav");
  });
});
