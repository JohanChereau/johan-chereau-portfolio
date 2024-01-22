// @ts-nocheck
const contactForm = document.querySelector(".contact__form");

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  contactForm.submit();
  contactForm.reset();
});
