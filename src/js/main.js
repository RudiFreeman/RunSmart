$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 300,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icon/left-solid.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icon/right-solid.svg"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false,
              }
            },
          ]
    });
});


