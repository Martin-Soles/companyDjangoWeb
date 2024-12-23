var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    //grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    
    
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },

    keyboard: {
        enabled: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: true
    },
        
  });