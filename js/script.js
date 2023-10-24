'use strict';

const menu = document.querySelector('.header__navigation');
const menuBtn = document.querySelector('.header__menu-icon');

const body = document.body;

if(menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
        body.classList.toggle('lock');
    })

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
        body.classList.remove('lock');
        })
    })
}

// Initialize Swiper

var swiper = new Swiper(".catalog__swiper", {
    slidesPerView: 3,
    spaceBetween: 20,

    // loop: true,
    // loopedSlides:3,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".catalog__btn_right",
        prevEl: ".catalog__btn_left",
    },
});

