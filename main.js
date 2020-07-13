const navbarButton = document.querySelector(".navbar-toggle");
const navbar = document.querySelector(".navbar");

navbarButton.addEventListener("click", () => {
  navbar.classList.toggle("show");
});
