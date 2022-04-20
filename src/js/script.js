$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        //adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/slides/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/slides/chevron-right-solid.png"></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
      });
  });