$(document).ready(function() {
  $('.w-slider--products-image').slick({
    responsive: [{
      breakpoint: 99999,
      settings: "unslick"
    }, {
      breakpoint: 641,
      settings: {
        rtl: true,
        asNavFor: '.w-slider--products-content',
        arrows: false,
        infinite: true,
        dots: false,
        speed: 200,
        prevArrow: '<span class="arrow-left arrow-left-pink"></span>',
        nextArrow: '<span class="arrow-right arrow-right-pink"></span>',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.w-slider--products-content').slick({
    responsive: [{
      breakpoint: 99999,
      settings: "unslick"
    }, {
      breakpoint: 641,
      settings: {
        rtl: true,
        asNavFor: '.w-slider--products-image',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        speed: 200,
        dots: false,
        fade: true
      }
    }]
  });
});