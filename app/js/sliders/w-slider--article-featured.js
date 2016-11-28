$(document).ready(function() {
  $('.w-slider--article-featured').slick({
    responsive: [{
      breakpoint: 99999,
      settings: "unslick"
    }, {
      breakpoint: 641,
      settings: {
        rtl: true,
        // arrows: false,
        dots: false,
        infinite: true,
        prevArrow: '<span class="icon--arrow-pink__left"></span>',
        nextArrow: '<span class="icon--arrow-pink__right"></span>',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});