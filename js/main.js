// Typed JS
var typed = new Typed("#typed_animation", {
  strings: ["Larry Daniels", "Developer", "Designer"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 500,
  startDelay: 500,
  loop: true,
});

// Remove Navigation
let closeNavbar = document.querySelector(".navbar-collapse");

let closeButton1 = document.querySelector(".nav-link1");
closeButton1.onclick = function () {
  closeNavbar.classList.toggle("show");
};
let closeButton2 = document.querySelector(".nav-link2");
closeButton2.onclick = function () {
  closeNavbar.classList.toggle("show");
};
let closeButton3 = document.querySelector(".nav-link3");
closeButton3.onclick = function () {
  closeNavbar.classList.toggle("show");
};
let closeButton4 = document.querySelector(".nav-link4");
closeButton4.onclick = function () {
  closeNavbar.classList.toggle("show");
};
let closeButton5 = document.querySelector(".nav-link5");
closeButton5.onclick = function () {
  closeNavbar.classList.toggle("show");
};
let closeButton6 = document.querySelector(".nav-link6");
closeButton6.onclick = function () {
  closeNavbar.classList.toggle("show");
};
let closeButton7 = document.querySelector(".nav-link7");
closeButton7.onclick = function () {
  closeNavbar.classList.toggle("show");
};

