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

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const targetDivs = document.querySelectorAll(".target-div");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        body.classList.add("animate__animated", "animate__bounce");

        setTimeout(() => {
          body.classList.remove("animate__animated", "animate__bounce");
        }, 1000); // Duration of the animation
      }
    });
  });

  targetDivs.forEach((div) => observer.observe(div));
});
