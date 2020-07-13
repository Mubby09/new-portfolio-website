const navbarButton = document.querySelector(".navbar-toggle");
const navbar = document.querySelector(".navbar");
const link = document.querySelector(".link");

link.addEventListener("click", (e) => {
  e.preventDefault();
});

navbarButton.addEventListener("click", () => {
  navbar.classList.toggle("show");
});
