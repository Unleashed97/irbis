import * as customFunctions from './modules/functions.js'

customFunctions.handleBurger()
customFunctions.handleModal()
customFunctions.handleAccordion()
customFunctions.handleTabs()
customFunctions.showStudies()

// vendors
const swiperParentReviewVideo = new Swiper('.swiper--parents-video', {
    direction: 'horizontal',

    slidesPerView: 4,
    spaceBetween: 30,

    breakpoints: {
        0: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2.5,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1025: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next--reviews-parent-video',
        prevEl: '.swiper-button-prev--reviews-parent-video',
    },
})
const swiperParentReviewPhoto = new Swiper('.swiper--parents-photo', {
    direction: 'horizontal',

    slidesPerView: 5,
    spaceBetween: 20,

    breakpoints: {
        0: {
            slidesPerView: 1.6,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 1.7,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 3.1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1025: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next--reviews-parent-photo',
        prevEl: '.swiper-button-prev--reviews-parent-photo',
    },
})
const swiperPerspectives = new Swiper('.swiper--perspectives', {
    direction: 'horizontal',

    slidesPerView: 3,
    spaceBetween: 30,

    breakpoints: {
        0: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 1.9,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1025: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next--reviews-parent-photo',
        prevEl: '.swiper-button-prev--reviews-parent-photo',
    },
})
