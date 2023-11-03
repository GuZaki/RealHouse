'use strict';

// Burger-menu

const menu = document.querySelector('.header__navigation');
const menuBtn = document.querySelector('.header__menu-icon');

const body = document.body;

if(menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
        body.classList.toggle('lock');
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            menuBtn.classList.remove('active');
            body.classList.remove('lock');
        });
    });
};

// Swiper swiper

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
        790: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        940: {
            slidesPerView: 2.4,
            spaceBetween: 10,
        },
        1040: {
            slidesPerView: 2.6,
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
        nextEl: ".feedback__top .arrow-next",
        prevEl: ".feedback__top .arrow-prew",
    },

    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        480: {
            slidesPerView: 1.5,
            spaceBetween: 5,
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1000: {
            slidesPerView: 2.4,
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

// Modal-window

const modalBtn = document.querySelector('.modal-open');
const modal = document.querySelector('.modal');
const modalBtnClose = document.querySelector('.modal__close-btn');

const modalDone = document.querySelector('.modal__done');
const modalBtnConsult = document.querySelector('.btn');

modalBtn.addEventListener('click', () =>{
    modal.classList.add('modal_active');
    body.classList.add('lock');
});

modalBtnClose.addEventListener('click', () =>{
    modal.classList.remove('modal_active');
    body.classList.remove('lock');
});

modalBtnConsult.addEventListener('click', () => {
    // alert(12)
    // modalDone.classList.add('modal_active');
    // modal.classList.remove('modal_active');

});




// Catalog cards

const cardBtns = document.querySelectorAll('.card__btn');
const cards = document.querySelectorAll('.catalog__slide');
const modalCard = document.querySelector('.modal-card');

    for (let i = 0; i < cards.length; ++i) {
        cards[i].addEventListener('mouseover', () =>{
            for (let j = 0; j < cardBtns.length; j++){
                if(i === j){
                    cardBtns[i].classList.add('card__btn-active');
                    cardBtns[i].addEventListener('click', () => {
                        modalCard.classList.add('modal__card-active');
                        body.classList.add('lock');
                    })
                }
            }
        })
    }

    for (let i = 0; i < cards.length; ++i) {
        cards[i].addEventListener('mouseout', () =>{
            for (let j = 0; j < cardBtns.length; j++){
                if(i === j){
                    cardBtns[i].classList.remove('card__btn-active');
                }
            }
        })
    }
    

// Ymaps API

ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        center: [55.768061, 37.591854],
        // Уровень масштабирования. Допустимые значения: от 0 (весь мир) до 19.
        zoom: 15,
    }, 
        
    {
        searchControlProvider: 'yandex#search',
    }),
        
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'RealHouse здесь',
        balloonContent: 'RealHouse',
    }, {
        // Опции. Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: './img/location/pin.png',
        // Размеры метки.
        iconImageSize: [200, 200],
        // Смещение левого верхнего угла иконки относительно (точки привязки).
        iconImageOffset: [-100, -100],
    });

    myMap.behaviors
    // Отключаем часть включенных по умолчанию поведений:
    //  - drag - перемещение карты при нажатой левой кнопки мыши;
    //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
    .disable(['drag', 'rightMouseButtonMagnifier']);

    // Изменяем свойство поведения с помощью опции:
    // изменение масштаба колесом прокрутки будет происходить медленно,
    // на 1/2 уровня масштабирования в секунду.
    myMap.options.set('scrollZoomSpeed', 0.5);

    myMap.geoObjects.add(myPlacemark);
}

