import Swiper, { Navigation, Pagination, Thumbs, EffectCoverflow } from "swiper";

Swiper.use([Navigation, Pagination, Thumbs, EffectCoverflow]);
export default () => {
    let slider = new Swiper(`.welcome__swiper .swiper-container`, {
        effect: 'coverflow',
        slidesPerView: 2,
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 0,
            stretch:150,
            modifier: 1,
            slideShadows: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 'auto'
            },
            920: {
                slidesPerView: 2
            }
        },
        navigation: {
            nextEl: '.welcome-next',
            prevEl: '.welcome-prev',
        },
    });
};
