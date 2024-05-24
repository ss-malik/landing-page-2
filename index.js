const hamburgerMenu = document.querySelector(".fa-solid");
const navbar = document.querySelector(".header-nav ul");

function toggleNav() {
  navbar.classList.toggle("show");
}

hamburgerMenu.addEventListener("click", toggleNav);
