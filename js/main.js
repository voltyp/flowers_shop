$(function() {
  let flagStart = true;

  // search-form
  $('.search-form-icon').on('click', function() {
    $(this).hide('slow');
    $('.search-form-item').show('slow');
    $('.search-form-input').focus();
  });
  
  $('.search-form-close').on('click', function() {
    $('.search-form-input').val('');
    $('.search-form-item').hide('slow');
    $('.search-form-icon').show('slow');
  });

  // start-timer
  $('.timer__counter').each(function(i,item){
    this.setAttribute('id', 'timer'+i);
    const el = '#' + this.id,  
          endtimer = '2019-10-11';
    
    timer(el, endtimer)
  })

  // f-timer
  function timer(el, endtimer) {
  
    function getTimeRemaining(endtime) {
      let t = Date.parse(endtime) - Date.parse(new Date()),
          seconds = Math.floor(t / 1000 % 60),
          minutes = Math.floor(t / 1000 / 60 % 60),
          hours = Math.floor(t / (1000 * 60 * 60) % 24),
          days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
        'days': days
      };
    }
  
    function setClock(id, endtime) {
      var timer = document.querySelector(id),
          days = timer.querySelector('.timer__days'),
          hours = timer.querySelector('.timer__hours'),
          minutes = timer.querySelector('.timer__minutes'),
          seconds = timer.querySelector('.timer__seconds');

      function updateClock() {
        var t = getTimeRemaining(endtime);
        days.textContent = t.days;
        hours.textContent = t.hours;
        minutes.textContent = t.minutes;
        seconds.textContent = t.seconds;
  
        if (t.hours < 10) {
          hours.textContent = '0' + t.hours;
        }
  
        if (t.minutes < 10) {
          minutes.textContent = '0' + t.minutes;
        }
  
        if (t.seconds < 10) {
          seconds.textContent = '0' + t.seconds;
        }
  
        if (t.days < 10) {
          days.textContent = '0' + t.days;
        }
  
        if (t.total <= 0) {
          clearInterval(timeInterval);
          days.textContent = '00';
          hours.textContent = '00';
          minutes.textContent = '00';
          seconds.textContent = '00';
        }
      }
  
      var timeInterval = setInterval(updateClock, 1000);
      updateClock();
    }
  
    setClock(el, endtimer);
  }

  let countBasket = 0;

  // add-basket 
  $('.add-basket').each(function(i,item) {
    $(item).on('click', function() {      
      if ($('.basket-count').hasClass('hide'))
        $('.basket-count').removeClass('hide');
        
      $('.basket-count').text(++countBasket)
    })
  });


  // modal
  $('.modal-overlay, .modal-close').on('click', function(e) {
    let target = e.target;
    
    
    if (flagStart && e.target == this) { 
      alert('Пожалуйста, выберите город')
      return
    }    

    $('.modal-overlay').hide('slow');
    $('.modal-call-back').hide('slow');
    $('.modal-select-city').hide('slow');
    $('.modal-buy').hide('slow');
    $('.modal-review').hide('slow');
    $('.personal-data').hide('slow');
  });
  // select-city
  $('.modal-select-city .checkbox').on('click', function() {
    let selectCity = $(this).siblings('span').text();
    console.log(selectCity);
    
    $('body').removeClass('start-page')
    $('#city').text(selectCity)
    $('.modal-overlay').hide('slow')
    $('.modal-select-city').hide(700)

    flagStart = false;
  });
  // callback
  $('.button-callback').on('click', function(e){
    e.preventDefault()
    $('.modal-call-back').toggleClass('hide');
    $('.modal-overlay').show('slow');
  });

  $('.review-button').on('click', function(e){
    e.preventDefault()
    $('.modal-review').toggleClass('hide');
    $('.modal-overlay').show('slow');
  });

  $('.personal-data-link').on('click', function(e){
    e.preventDefault()
    $('.personal-data').show();
    $('.modal-overlay').show('slow');
  });

  $('.card-product__link').each(function(i,item){
    
    $(item).on('click', function(e) {
      e.preventDefault();
      $('.modal-overlay').show('slow');
      $('.modal-buy').show('slow');
    });
  });



// mobile-menu
$('.burger-menu').on('click', function() {
  $('.menu-mobile').show();
  $('.menu-mobile').toggleClass('menu-active');
  $('.content-page').toggleClass('content-active');
  $('.menu-overlay').show('slow');
})

$('.menu-overlay').on('click', function() {
  $('.menu-mobile').toggleClass('menu-active');
  $('.content-page').toggleClass('content-active');
  $(this).hide('slow');
});

$('.menu-mobile__item').on('click', function() {
  $(this).children('.sub-menu').toggleClass('show');

})

  

  // sliders
  $('.main-slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows : true,
    prevArrow: '.main-slider-r',
    nextArrow:'.main-slider-l',
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
    responsive: [
      {
        breakpoint: 940,
        settings: {
          arrows : false
        }
      },
    ]
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

  $('.slider-gift').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows : true,
    prevArrow: '.slider-gift-arr-r',
    nextArrow:'.slider-gift-arr-l',
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

  $('.slider-related').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows : true,
    prevArrow: '.slider-related-arr-r',
    nextArrow:'.slider-related-arr-l',
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