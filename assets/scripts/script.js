const htmlTag = document.querySelector("html");


/** General - Menu **/
const headerBlock = document.querySelector(".header__block");
const openMenu = document.querySelector(".nav__mobile--open");
const closeMenu = document.querySelector(".nav__mobile--close");
const navList = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll(".nav__link");
const mainBlock = document.querySelector(".main__block");

function mobileMenu() {
    if (window.innerWidth < 1150) {
        htmlTag.classList.toggle("overflow--hide");
        headerBlock.classList.toggle("header__block--open");
        openMenu.classList.toggle("hide");
        navList.classList.toggle("show");
        mainBlock.classList.toggle("blur");
    }
}

openMenu.addEventListener("click", mobileMenu);
closeMenu.addEventListener("click", mobileMenu);

navLinks.forEach(navLink => {
    navLink.addEventListener("click", mobileMenu);
});


/** General - Scroll **/
const scrollToTop = document.querySelector(".scroll__top");

window.addEventListener("scroll", () => {
    let scroll = this.scrollY;
    scroll >= 1000 ? scrollToTop.classList.add("show") : scrollToTop.classList.remove("show");
});


/** General -- Color scheme **/
const lightMode = document.querySelector(".color__mode--light");
const darkMode = document.querySelector(".color__mode--dark");

function changeColor(mode) {
    lightMode.classList.toggle("hide"); 
    darkMode.classList.toggle("hide");
    
    if(mode === "light") {
        htmlTag.classList.add("light");
    } else {
        htmlTag.classList.remove("light");
    }
}

lightMode.addEventListener("click", function() {
    changeColor("light");
});

darkMode.addEventListener("click", function() {
    changeColor("dark");
});


/** About - Countdown **/
const countdownDays = document.querySelector(".countdown__value--days");
const countdownHours = document.querySelector(".countdown__value--hours");
const countdownMinutes = document.querySelector(".countdown__value--minutes");
const countdownSecondes = document.querySelector(".countdown__value--seconds");

const countdown = setInterval(function() {
    const currentDate = new Date().getTime();
    const eventDate = new Date("07/01/2024").getTime();
    const diffDate = eventDate - currentDate;
    
    const countdownDaysValue = Math.floor(diffDate / (1000 * 60 * 60 * 24));
    const countdownHoursValue = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const countdownMinutesValue = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
    const countdownSecondesValue = Math.floor((diffDate % (1000 * 60)) / 1000);

    countdownDays.textContent = countdownDaysValue >= 10 ? countdownDaysValue : `0${countdownDaysValue}`;
    countdownHours.textContent = countdownHoursValue >= 10 ? countdownHoursValue : `0${countdownHoursValue}`;
    countdownMinutes.textContent = countdownMinutesValue >= 10 ? countdownMinutesValue : `0${countdownMinutesValue}`;
    countdownSecondes.textContent = countdownSecondesValue >= 10 ? countdownSecondesValue : `0${countdownSecondesValue}`;

    if (diffDate < 0) {
        clearInterval(countdown);
    }
}, 1000);


/** About - Teams **/
const gliderTeams = document.querySelector(".teams__glider");

new Glider(gliderTeams, {
    dots: ".glider__dots",
    draggable: true,
    scrollLock: true,
    slidesToShow: 1
});


/** Form - Modal **/
const formContact = document.querySelector(".contact__form");
const formModal = document.querySelector(".form__modal");
const formModalClose = document.querySelector(".modal__close");

formContact.addEventListener("submit", function(event) {
    event.preventDefault();
    formModal.showModal();
});

formModalClose.addEventListener("click", function() {
    formModal.close();
});

/** Footer **/
const footerCopyright = document.querySelector(".footer__copyright");
const currentYear = new Date().getFullYear();

footerCopyright.insertAdjacentHTML("beforeend", currentYear);