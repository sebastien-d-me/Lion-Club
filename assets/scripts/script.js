const htmlTag = document.querySelector("html");

/** Menu **/
const openMenu = document.querySelector(".nav__mobile--open");
const closeMenu = document.querySelector(".nav__mobile--close");
const navList = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll(".nav__link");
const mainBlock = document.querySelector(".main__block");

function mobileMenu() {
    htmlTag.classList.toggle("overflow--hide");
    openMenu.classList.toggle("hide");
    navList.classList.toggle("show");
    mainBlock.classList.toggle("blur");
}

openMenu.addEventListener("click", mobileMenu);
closeMenu.addEventListener("click", mobileMenu);

navLinks.forEach(navLink => {
    if (window.innerWidth < 1150) {
        navLink.addEventListener("click", mobileMenu);
    }
});


/** Footer **/
const footerCopyright = document.querySelector(".footer__copyright");
const currentYear = new Date().getFullYear();

footerCopyright.insertAdjacentHTML("beforeend", currentYear);