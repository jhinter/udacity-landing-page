/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Start Helper Functions
 *
 */

function createNavbarItem(title) {
  item = document.createElement("li");
  link = document.createElement("a");
  link.classList.add("menu__link");
  link.textContent = title;
  link.setAttribute("data-target-section", title);
  item.append(link);
  return item;
}

function createNavbar() {
  navbar = document.getElementById("navbar__list");
  sections = document.querySelectorAll("[data-nav]");

  for (section of sections) {
    const navbarItem = createNavbarItem(section.getAttribute("data-nav"));
    navbar.append(navbarItem);
  }
}

function scrollToSection(title) {
  section = document.querySelector(`[data-nav="${title}"]`);
  if (section) {
    window.scrollTo(0, section.offsetTop);
  }
}

function registerClickListeners() {
  const navbar = document.querySelector("#navbar__list");
  navbar.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToSection(event.target.getAttribute("data-target-section"));
  });
}

function registerScrollListener() {
  const navItems = document.querySelectorAll(".menu__link");
  const customOffset = 100;

  window.addEventListener("scroll", (event) => {
    // distance from top
    const fromTop = window.scrollY + customOffset;

    navItems.forEach((link) => {
      const section = document.querySelector(
        `[data-nav="${link.getAttribute("data-target-section")}"]`
      );

      if (
        section.offsetTop <= fromTop + customOffset &&
        section.offsetTop + section.offsetHeight > fromTop + customOffset
      ) {
        // adding active state
        link.classList.add("active");
        section.classList.add("your-active-class");
      } else {
        // removing active state
        link.classList.remove("active");
        section.classList.remove("your-active-class");
      }
    });
  });
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// main functions
createNavbar();
registerClickListeners();
registerScrollListener();
