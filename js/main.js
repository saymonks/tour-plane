$(function() {
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

var menuButton = $(".menu-button");
menuButton.on('click', function() {
  $(".navbar-bottom").toggleClass('navbar-bottom--visible');
});

var modalButton = $('[data-toggle=modal]');
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

function openModal () {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass("modal__overlay--visible");
  modalDialog.addClass("modal__dialog--visible");
}


function closeModal ( event ) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
}

$(document).keydown(function(e) {
	console.log(e.key);
  if (e.key === "Escape" || e.keyCode === 27) {
		closeModal(e);
	}
});
var modalOverlay = $(".modal__overlay");
modalOverlay.on("click", closeModal);
// Обработка форм
$('.form').each(function(){
  $(this).validate({
  errorClass: "invalid",
  messages: {
    name: {
      required: "Enter your name",
      minlength: "Name must be at least two letters long"
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
    phone: {
      required: "Phone required",
    },
    }
  });
})
$('[name=phone]').mask('+7 (000) 000-00-00');
AOS.init();
});

