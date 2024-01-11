// @ts-nocheck
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > header?.offsetHeight) {
    header?.setAttribute("data-background", "true");
  } else {
    header?.setAttribute("data-background", "false");
  }
});
