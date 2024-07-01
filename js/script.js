const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#list-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};
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
var swiper = new Swiper(".news-content", {
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
});