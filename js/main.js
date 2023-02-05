const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },

  keyboard: {
    enabled: true,
  },
});

function init() {
  let map = new ymaps.Map('map-ya',{
   center: [52.846489046741844,-1.2974093359680516],
   zoom: [17]
  });
}

ymaps.ready(init);
