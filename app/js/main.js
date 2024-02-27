$(function () {
  $('.menu__link, .footer__link').on('click', function () {
    $('.menu__link, .footer__link').removeClass('menu__link--active');
    $(this).addClass('menu__link--active')
  });

  $('.reviews-slider').slick({
    dots: true,
    autoplay: true,
    prevArrow: '<button type="button" class="reviews-slider__arrow reviews-slider__arrow--prev">\
    <svg class="reviews-slider__svg reviews-slider__svg--prev" width="10.831955" height="18.500000" viewBox="0 0 10.832 18.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\
    <path class="reviews-slider__svg-animation" id="Vector" d="M8.19675 18.0492L0.450821 10.3032C-0.150276 9.6991 -0.150276 8.72314 0.450821 8.1189L8.19675 0.372925C8.77613 -0.124268 9.63285 -0.124268 10.2122 0.372925C10.8614 0.929077 10.9372 1.9082 10.3811 2.55737L3.73512 9.20337L10.3811 15.8649C10.9822 16.469 10.9822 17.4449 10.3811 18.0492C9.77692 18.6503 8.8009 18.6503 8.19675 18.0492Z" fill="#C2C2C2" fill-opacity="1.000000" fill-rule="nonzero"/>\
  </svg>\
  </button>',
    nextArrow: '<button type="button" class="reviews-slider__arrow reviews-slider__arrow--next">\
    <svg class="reviews-slider__svg reviews-slider__svg--next" width="10.831955" height="18.500000" viewBox="0 0 10.832 18.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\
    <path class="reviews-slider__svg-animation" id="Vector" d="M8.19675 18.0492L0.450821 10.3032C-0.150276 9.6991 -0.150276 8.72314 0.450821 8.1189L8.19675 0.372925C8.77613 -0.124268 9.63285 -0.124268 10.2122 0.372925C10.8614 0.929077 10.9372 1.9082 10.3811 2.55737L3.73512 9.20337L10.3811 15.8649C10.9822 16.469 10.9822 17.4449 10.3811 18.0492C9.77692 18.6503 8.8009 18.6503 8.19675 18.0492Z" fill="#C2C2C2" fill-opacity="1.000000" fill-rule="nonzero"/>\
  </svg>\</button>',
    appendArrows: '.arrows-wrap'
  });

});



var mixer = mixitup('.popular-category__content');