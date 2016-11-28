$(document).ready(function(){
  $('.w-slider--instagram__slider').slick({
    rtl: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<span class="arrow-left"></span>',
    nextArrow: '<span class="arrow-right"></span>',
    responsive: [
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
});