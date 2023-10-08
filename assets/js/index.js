
const productSlider = new Swiper('.product-slider', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 16,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        576: {
            slidesPerView: 2,
        },
        // when window width is >= 480px
        760: {
            slidesPerView: 3,
        },
        // when window width is >= 640px
        980: {
            slidesPerView: 4,
        }
    }
})
const followSlider = new Swiper('.follow-slider', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 0,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        576: {
            slidesPerView: 2,
        },
        // when window width is >= 480px
        760: {
            slidesPerView: 3,
        },
        // when window width is >= 640px
        980: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        }
    }
}) 