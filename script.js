const hamburger = document.querySelector(".hambuger");
const NavMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    NavMenu.classList.toggle("active");


})