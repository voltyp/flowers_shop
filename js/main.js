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
    prevArrow: '.feedback-r',
    nextArrow:'.feedback-l',
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
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

  $('.basket__steps_step').each(function(i, item) {
    console.log(item);
    
  });

});