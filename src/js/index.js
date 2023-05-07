/*? no js js needed from me */

// scroll navbar
const nav = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.style.background = "rgba(0,0,0,.9)";
  } else {
    nav.style.background = "none";
  }
});

// hamBtn Click
const hamMenu = document.getElementById("hamMenu");
const navbar = document.querySelector(".navbar");
hamMenu.addEventListener("click", () => {
  navbar.classList.toggle("show");
});
