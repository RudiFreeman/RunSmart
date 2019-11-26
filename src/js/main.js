$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 300,
    // adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icon/left-solid.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icon/right-solid.svg"></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
        dots: true,
        arrows: false,
      }
    }, ]
  });
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(catalogItem) {
    $(catalogItem).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    });
  }

  toggleSlide('.catalog-item__back');
  toggleSlide('.catalog-item__link');

  // MODAL
  //.fadeOut() - анимирование срытие элемента
  //.fadeIn() - анимирование открытие элемента
  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn();
  });

  $('.button__mini').on('click', function () {
    $('.overlay,  #order').fadeIn();
  });

  $('.button__mini').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__description').text($('.catalog-item__subtitle').eq(i).text())
    })
  })

  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut();
  });

  
  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 5
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуста введите свое имя",
          minlength: jQuery.validator.format("Ввидите минимум {0} символов")
        },
        phone: "Пожалуста введите свой телефон",
        email: {
          required: "Пожалуста введите свой EMAIL",
          email: "Неправлельно введон EMAIL"
        }
      }
    });
  };

  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');


});