$(function () {
  $('.menu__link, .footer__link').on('click', function () {
    $('.menu__link, .footer__link').removeClass('menu__link--active');
    $(this).addClass('menu__link--active')
  });

  $('.pagination__link').on('click', function () {
    $('.pagination__link').removeClass('pagination__link--active');
    $(this).addClass('pagination__link--active')
  });

  $('.product-catalog__select, .product__num').styler();

  $('.price__input').ionRangeSlider({
    type: 'double',
    onStart: function (data) {
      $('.price__from').text(data.from);
      $('.price__to').text(data.to);
    },
    onChange: function (data) {
      $('.price__from').text(data.from);
      $('.price__to').text(data.to);
    }
  });

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active')

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.product__slider').slick({
    prevArrow: '<button type="button" class="product__slider-arrow product__slider-arrow--prev">\
    <svg width="19.000000" height="31.000000" viewBox="0 0 19 31" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\
	<path id="Vector" d="M0.38 14.22L16.39 -0.17C16.92 -0.68 17.77 -0.68 18.3 -0.17C18.82 0.35 18.82 1.19 18.3 1.7L3.25 15.22L18.29 28.74C18.82 29.26 18.82 30.09 18.29 30.61C17.77 31.12 16.92 31.12 16.39 30.61L0.38 16.22C0.1 15.95 -0.02 15.58 0 15.22C-0.02 14.86 0.1 14.5 0.38 14.22Z" fill="#363853" fill-opacity="1.000000" fill-rule="nonzero"/>\
</svg></button>',
    nextArrow: '<button type="button" class="product__slider-arrow product__slider-arrow--next">\
<svg width="19.000000" height="31.000000" viewBox="0 0 19 31" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\
<path id="Vector" d="M0.38 14.22L16.39 -0.17C16.92 -0.68 17.77 -0.68 18.3 -0.17C18.82 0.35 18.82 1.19 18.3 1.7L3.25 15.22L18.29 28.74C18.82 29.26 18.82 30.09 18.29 30.61C17.77 31.12 16.92 31.12 16.39 30.61L0.38 16.22C0.1 15.95 -0.02 15.58 0 15.22C-0.02 14.86 0.1 14.5 0.38 14.22Z" fill="#363853" fill-opacity="1.000000" fill-rule="nonzero"/>\
</svg></button>'
  });

  $('.reviews__slider').slick({
    dots: true,
    infinite: false,
    prevArrow: '<button type="button" class="reviews__slider-arrow reviews__slider-arrow--prev">\
    <svg class="reviews__slider-svg reviews__slider-svg--prev" width="10.831955" height="18.500000" viewBox="0 0 10.832 18.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\
    <path class="reviews-slider__svg-animation" id="Vector" d="M8.19675 18.0492L0.450821 10.3032C-0.150276 9.6991 -0.150276 8.72314 0.450821 8.1189L8.19675 0.372925C8.77613 -0.124268 9.63285 -0.124268 10.2122 0.372925C10.8614 0.929077 10.9372 1.9082 10.3811 2.55737L3.73512 9.20337L10.3811 15.8649C10.9822 16.469 10.9822 17.4449 10.3811 18.0492C9.77692 18.6503 8.8009 18.6503 8.19675 18.0492Z" fill="#C2C2C2" fill-opacity="1.000000" fill-rule="nonzero"/>\
  </svg></button>',
    nextArrow: '<button type="button" class="reviews__slider-arrow reviews__slider-arrow--next">\
    <svg class="reviews__slider-svg reviews__slider-svg--next" width="10.831955" height="18.500000" viewBox="0 0 10.832 18.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\
    <path class="reviews-slider__svg-animation" id="Vector" d="M8.19675 18.0492L0.450821 10.3032C-0.150276 9.6991 -0.150276 8.72314 0.450821 8.1189L8.19675 0.372925C8.77613 -0.124268 9.63285 -0.124268 10.2122 0.372925C10.8614 0.929077 10.9372 1.9082 10.3811 2.55737L3.73512 9.20337L10.3811 15.8649C10.9822 16.469 10.9822 17.4449 10.3811 18.0492C9.77692 18.6503 8.8009 18.6503 8.19675 18.0492Z" fill="#C2C2C2" fill-opacity="1.000000" fill-rule="nonzero"/>\
  </svg>\</button>',
    appendArrows: '.arrows-wrap',
    responsive: [
      {
        breakpoint: 560,
        settings: {
          dots: false
        },
      },
    ],

  });

  $(window).on('load resize', function () {
    if ($(window).width() < 560) {
      $('.resto__items:not(.slick-initialized)').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1
      });
    } else {
      $(".resto__items.slick-initialized").slick("unslick");
    }
  });

  $(window).on('load resize', function () {
    if ($(window).width() < 768) {
      $('.resto__items:not(.slick-initialized)').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 2
      });
    } else {
      $(".resto__items.slick-initialized").slick("unslick");
    }
  });

  $(window).on('load resize', function () {
    if ($(window).width() < 560) {
      $('.reviews__slider').slick({
        dots: false
      });
    }
  });

  $(window).on('load resize', function () {
    if ($(window).width() < 768) {
      $('.discounts__list:not(.slick-initialized)').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1
      });
    } else {
      $(".discounts__list.slick-initialized").slick("unslick");
    }
  });

  

  $(window).on('load resize', function () {
    if ($(window).width() < 560) {
      $('.suggestion__list:not(.slick-initialized)').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 2
      });
    } else {
      $(".suggestion__list.slick-initialized").slick("unslick");
    }
  });

  $(window).on('load resize', function () {
    if ($(window).width() < 768) {
      $('.suggestion__list:not(.slick-initialized)').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 3
      });
    } else {
      $(".suggestion__list.slick-initialized").slick("unslick");
    }
  });

  $(window).on('load resize', function () {
    if ($(window).width() < 992) {
      $('.suggestion__list:not(.slick-initialized)').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 4
      });
    } else {
      $(".suggestion__list.slick-initialized").slick("unslick");
    }
  });

  $(".product__rating, .comments__rating").rateYo({
    normalFill: "#c1c1c1",
    spacing: '6px',
    starWidth: '16px',
    ratedFill: '#FFB800',
    readOnly: true,
    starSvg: '<svg width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\
    <defs>\
      <clipPath id="clip3197_367">\
        <rect id="star 4" width="16.000000" height="16.000000" transform="matrix(-1 0 0 1 16 0)" fill="white" fill-opacity="0"/>\
      </clipPath>\
    </defs>\
    <rect id="star 4" width="16.000000" height="16.000000" transform="matrix(-1 0 0 1 16 0)" fill="#FFFFFF" fill-opacity="0"/>\
    <g clip-path="url(#clip3197_367)">\
      <path id="Vector" d="M0.02 6.16C0.07 5.99 0.22 5.87 0.4 5.84L5.36 5.12L7.57 0.62C7.65 0.46 7.82 0.36 7.99 0.36C8.17 0.36 8.34 0.46 8.42 0.62L10.63 5.12L15.59 5.84C15.77 5.87 15.92 5.99 15.97 6.16C16.03 6.33 15.98 6.52 15.85 6.64L12.26 10.14L13.11 15.08C13.14 15.25 13.07 15.43 12.93 15.54C12.84 15.6 12.75 15.63 12.65 15.63C12.57 15.63 12.5 15.61 12.43 15.57L8 13.24L3.56 15.57C3.4 15.66 3.21 15.64 3.07 15.54C2.92 15.43 2.85 15.25 2.88 15.08L3.73 10.14L0.14 6.64C0.01 6.52 -0.04 6.33 0.02 6.16Z" fill-rule="nonzero"/>\
    </g>\
  </svg>',
  });

  $(".comment-form__star").rateYo({
    normalFill: "#c1c1c1",
    spacing: '6px',
    starWidth: '16px',
    ratedFill: '#FFB800',
    starSvg: '<svg width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\
    <defs>\
      <clipPath id="clip3197_367">\
        <rect id="star 4" width="16.000000" height="16.000000" transform="matrix(-1 0 0 1 16 0)" fill="white" fill-opacity="0"/>\
      </clipPath>\
    </defs>\
    <rect id="star 4" width="16.000000" height="16.000000" transform="matrix(-1 0 0 1 16 0)" fill="#FFFFFF" fill-opacity="0"/>\
    <g clip-path="url(#clip3197_367)">\
      <path id="Vector" d="M0.02 6.16C0.07 5.99 0.22 5.87 0.4 5.84L5.36 5.12L7.57 0.62C7.65 0.46 7.82 0.36 7.99 0.36C8.17 0.36 8.34 0.46 8.42 0.62L10.63 5.12L15.59 5.84C15.77 5.87 15.92 5.99 15.97 6.16C16.03 6.33 15.98 6.52 15.85 6.64L12.26 10.14L13.11 15.08C13.14 15.25 13.07 15.43 12.93 15.54C12.84 15.6 12.75 15.63 12.65 15.63C12.57 15.63 12.5 15.61 12.43 15.57L8 13.24L3.56 15.57C3.4 15.66 3.21 15.64 3.07 15.54C2.92 15.43 2.85 15.25 2.88 15.08L3.73 10.14L0.14 6.64C0.01 6.52 -0.04 6.33 0.02 6.16Z" fill-rule="nonzero"/>\
    </g>\
  </svg>',
  });

  $('.popup-link').magnificPopup();

});





document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const bodyLock = document.querySelector('body');
  const closeButton = document.querySelector('.mobile-menu__button')

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu--active');
    if (mobileMenu.classList.contains('mobile-menu--active')) {
      bodyLock.classList.add('lock');
    }
    else {
      burger.classList.remove('burger--active');
      bodyLock.classList.remove('lock');
    }
  });

  closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu--active');
    if (mobileMenu.classList.contains('mobile-menu--active')) {
      bodyLock.classList.add('lock');
    }
    else {
      burger.classList.remove('burger--active');
      bodyLock.classList.remove('lock');
    }
  });

  document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      mobileMenu.classList.remove('mobile-menu--active');
      bodyLock.classList.remove('lock');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {

  const openButton = document.querySelector('.product-catalog__open-btn');
  const mobileFilter = document.querySelector('.product-catalog__filters');
  const bodyLock = document.querySelector('body');
  const closeButton = document.querySelector('.product-catalog__close-btn');

  openButton.addEventListener('click', () => {
    mobileFilter.classList.toggle('filters-mobile');
    if (mobileFilter.classList.contains('filters-mobile')) {
      bodyLock.classList.add('lock');
    }
    else {
      openButton.classList.remove('openButton--active');
      bodyLock.classList.remove('lock');
    }
  });

  closeButton.addEventListener('click', () => {
    mobileFilter.classList.remove('filters-mobile');
    if (mobileFilter.classList.contains('filters-mobile')) {
      bodyLock.classList.add('lock');
    }
    else {
      openButton.classList.remove('product-catalog__open-btn--active');
      bodyLock.classList.remove('lock');
    }
  });

  document.addEventListener('click', function (e) {
    if (e.target !== openButton && e.target !== mobileFilter) {
      mobileMenu.classList.remove('filters-mobile');
      bodyLock.classList.remove('lock');
    }
  });

});


var mixer = mixitup('.popular-category__content');