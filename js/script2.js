var swiper = new Swiper(".slide-contents", {
    spaceBetween: 30, 
    centeredSlides: true,
    fade: 'true',
    grabCursor:'true',
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
});