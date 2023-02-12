const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  keyboard: {
    enabled: true,
  },
});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});

$('.newsletter').parallax({
  imageSrc: 'image/newsletter-bg.jpg',
  speed: 0.5,
});

function init() {
  let map = new ymaps.Map('map-ya',{
   center: [52.846489046741844,-1.2974093359680516],
   zoom: [17]
  });
}

ymaps.ready(init);
