/* Navigation */
const navOpen = document.querySelector(".nav__hamburger");
const navClose = document.querySelector(".close__toggle");
const menu = document.querySelector(".nav__menu");
const scrollLink = document.querySelectorAll(".scroll-link");
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
const navBar = document.querySelector(".navigation");
const gotoTop = document.querySelector(".goto-top");

//Smooth Scroll
Array.from(scrollLink).map(link => {
    link.addEventListener("click", e => {
        //Prevent Default
        e.preventDefault();

        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
    })
})

//AOS
AOS.init();