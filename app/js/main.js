$ (function(){
  $('.menu__link, .footer__link').on('click', function () {
    $('.menu__link, .footer__link').removeClass('menu__link--active');
    $(this).addClass('menu__link--active')
  });
});

var mixer = mixitup('.category__content');