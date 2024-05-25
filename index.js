const hamburgerMenu = document.querySelector(".fa-solid");
const navbar = document.querySelector(".header-nav ul");
const container = document.querySelector(".container");

function toggleNav() {
  navbar.classList.toggle("show");
  container.classList.toggle("height");
  hamburgerMenu.classList.toggle("fa-bars");
  hamburgerMenu.classList.toggle("fa-xmark");
}

hamburgerMenu.addEventListener("click", toggleNav);
