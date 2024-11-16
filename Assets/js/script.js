const navEl = document.querySelector("nav");
const arrowUp = document.querySelector(".up-page");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 60) {
    navEl.classList.add("nav-scrolled");
    arrowUp.classList.remove("d-none");
  } else if (window.scrollY < 60) {
    navEl.classList.remove("nav-scrolled");
    arrowUp.classList.add("d-none");
  }
});
