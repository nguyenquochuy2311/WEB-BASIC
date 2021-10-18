/* Navigation */
const navOpen = document.querySelector(".nav__hamburger");
const navClose = document.querySelector(".close__toggle");
const menu = document.querySelector(".nav__menu");
const navContainer = document.querySelector(".nav__menu");

navOpen.addEventListener('click', () => {
    menu.classList.add('open');
    document.body.classList.add("active");
    navContainer.style.left = "0";
    navContainer.style.width = "30rem";
});

navClose.addEventListener('click', () => {
    menu.classList.remove("open");
    document.body.classList.remove("active");
    navContainer.style.left = "-30rem";
    navContainer.style.width = "0";
})
/* Pop Up */

/* Fixed Navigation */

//Smooth Scroll
//Fix NavBar

//AOS
AOS.init();