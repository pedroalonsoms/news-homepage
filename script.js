const mainHeader = document.querySelector(".main-header");
const navToggle = document.querySelector(".nav-toggle");

let isMenuOpen = false;

navToggle.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;

  mainHeader.setAttribute("aria-expanded", isMenuOpen);
});
