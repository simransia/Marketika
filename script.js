
var navbar = document.querySelector(".header");

window.onscroll = function () {
    if (this.scrollY > 150) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
};