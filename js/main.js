$(function() {
  $('.main-slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows : false
  });

  $('.slider-review').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows : true,
    prevArrow: '.arrow-slider-right',
    nextArrow:'.arrow-slider-left',
  });

  $('.slider-trust').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows : true,
    prevArrow: '.arrow-slider-right',
    nextArrow:'.arrow-slider-left',
  });

  $('.basket__steps_step').each(function(i, item) {
    console.log(item);
    
  });

});