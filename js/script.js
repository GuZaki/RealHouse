'use strict';

/*Burger-menu*/
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
    slidesPerView: 1,
    spaceBetween: 10,

    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".top .arrow-next",
        prevEl: ".top .arrow-prew",
    },

    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
    
});

var swiper = new Swiper(".feedback__swiper", {
    slidesPerView: 3,
    spaceBetween: 20,

    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".top  .arrow-next",
        prevEl: ".top  .arrow-prew",
    },

    // breakpoints: {
    //     300: {
    //         slidesPerView: 1,
    //         spaceBetween: 5,
    //     },
    //     800: {
    //         slidesPerView: 2,
    //         spaceBetween: 10,
    //     },
    //     1200: {
    //         slidesPerView: 3,
    //         spaceBetween: 10,
    //     },
    //     1440: {
    //         slidesPerView: 3,
    //         spaceBetween: 20,
    //     },
    // },
    
});

/*Modal-window*/

const modalBtn = document.querySelector('.modal-open');
const modal = document.querySelector('.modal');
const modalBtnClose = document.querySelector('.modal__close-btn');

modalBtn.addEventListener('click', () =>{
    modal.classList.add('modal_active');
    
});

modalBtnClose.addEventListener('click', () =>{
    modal.classList.remove('modal_active')
})