$(function () {
  $('.menu__link, .footer__link').on('click', function () {
    $('.menu__link, .footer__link').removeClass('menu__link--active');
    $(this).addClass('menu__link--active')
  });

  $('.pagination__link').on('click', function () {
    $('.pagination__link').removeClass('pagination__link--active');
    $(this).addClass('pagination__link--active')
  });

  $('.product-catalog__select').styler();

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
          dots:false
        },
      },
    ],

  });

  $(window).on('load resize', function() {
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

  $(window).on('load resize', function() {
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

  $(window).on('load resize', function() {
    if ($(window).width() < 560) {
      $('.reviews__slider').slick({
        dots: false
      });
    } 
  });

  $(window).on('load resize', function() {
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