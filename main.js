const navbarButton = document.querySelector(".navbar-toggle");
const navbar = document.querySelector(".navbar");
const link1 = document.querySelector(".list-item1");
const link2 = document.querySelector(".list-item2");
const link3 = document.querySelector(".list-item3");

navbarButton.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

link1.addEventListener("click", () => {
  navbar.classList.remove("show");
});
link2.addEventListener("click", () => {
  navbar.classList.remove("show");
});
link3.addEventListener("click", () => {
  navbar.classList.remove("show");
});
