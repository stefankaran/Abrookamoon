$("#w-form--contact").validate({
  rules: {
    name: {
      required: true
    },
    email: {
      required: true,
      email: true
    },
    subject: {
      required: true
    },
    topic: {
      required: true
    },
    message: {
      required: true
    }
  },
  messages: {
    name: {
      required: "field1 is required"
    },
    email: {
      required: "field2 is required",
      email: "incorrect mail"
    },
    subject: {
      required: "field3 is required",
    },
    topic: {
      required: "field4 is required",
    },
    message: {
      required: "field5 is required",
    }
  }
});
$(document).ready(function() {
  $(".header__hamburger").click(function() { //----- open menu on mobile
    $(".w-nav--header").toggleClass("w-nav--header-active");
  });
  $(".header__search-ico").click(function() { //----- open search field
    $(".w-search").toggleClass("w-search-active");
  });
});

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
        // arrows: false,
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

$(document).ready(function(){
  $('.w-slider--article-most-viewed__slider').slick({
    rtl: true,
    prevArrow: '<div class="icon--arrow-pink__left"></div>',
    nextArrow: '<div class="icon--arrow-pink__right"></div>',
  });
});
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
$(document).ready(function(){
  $('.w-slider--article-most-viewed__slider').slick({
    rtl: true,
    prevArrow: '<span class="arrow-left-pink"></span>',
    nextArrow: '<span class="arrow-right-pink"></span>',
  });
});
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