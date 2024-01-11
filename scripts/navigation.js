// @ts-nocheck
const navToggleBtn = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".nav");

function handleToggleNavClick() {
  nav.toggleAttribute("data-visible");

  nav.hasAttribute("data-visible")
    ? navToggleBtn.setAttribute("aria-expanded", true)
    : navToggleBtn.setAttribute("aria-expanded", false);
}

navToggleBtn.addEventListener("click", handleToggleNavClick);
