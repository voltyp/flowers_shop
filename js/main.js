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
          endtimer = '2019-10-18';
    
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

      if ($('.basket-count').hasClass('hide')) {
        $('.basket-count').removeClass('hide');
        $('.basket-count-cost').removeClass('hide');
      }
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

    $('.modal-overlay').hide();
    $('.modal-wrap').hide();
    $('.personal-data').hide('slow');
  });
  
  // select-city
  $('.modal-select-city .checkbox').on('click', function() {
    let selectCity = $(this).siblings('span').text();
    console.log(selectCity);
    
    $('body').removeClass('start-page')
    $('#city').text(selectCity)
    $('.modal-overlay').hide()
    $('.modal-select-city').hide(700)

    flagStart = false;
  });

  // callback
  $('.button-callback').on('click', function(e){
    e.preventDefault()
    $('.modal-call-back').show();
    $('.modal-overlay').show();
  });

  $('.review-button').on('click', function(e){
    e.preventDefault()
    $('.modal-review').show();
    $('.modal-overlay').show();
  });

  $('.personal-data-link').on('click', function(e){
    e.preventDefault()
    $('.personal-data').show();
    $('.modal-overlay').show();
  });

  $('.card-product__link').each(function(i,item){
    
    $(item).on('click', function(e) {
      e.preventDefault();
      $('.modal-overlay').show();
      $('.modal-buy').show();
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
    speed: 1300,
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
    speed: 1300,
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
    speed: 1300,
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
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
    ]
  });

  $('.slider-gift').slick({
    dots: false,
    infinite: true,
    speed: 1300,
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
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 300,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
    ]
  });

  $('.slider-related').slick({
    dots: false,
    infinite: true,
    speed: 1300,
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
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 300
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
    ]
  });

  $('.slider-recently-watched').slick({
    dots: false,
    infinite: true,
    speed: 1300,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows : true,
    prevArrow: '.slider-recently-watched-arr-r',
    nextArrow:'.slider-recently-watched-arr-l',
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
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 300
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
    ]
  });

  $('.tabs_left').on('click', '.tabs-item', function(e) {
    /*
      тут костыль, если клик по активному табу происходит несколько раз
      то elevateZoom несколько раз отрабатывает и создает дубли,
      которые ломают работу elevateZoom
      времени разбираться не было. сорян 
    */
    if (this.classList.contains('tabs-active')) {
      e.preventDefault()
    }

    $('.zoomContainer').remove();
    let iTab = 0;
    $(this).addClass('i');
    
    $('.tabs-item').each(function(i, item){
      item.classList.remove('tabs-active');

      if($(this).hasClass('i'))
        iTab = i;

      item.classList.remove('i');
    });

    $(this).addClass('tabs-active');

    $('.tabs_right').children('img').each(function(i, item){
     
     item.classList.add('hide')
     item.classList.remove('zoom-image')

      if (i === iTab){     

       item.classList.remove('hide') 
       item.classList.add('zoom-image'); 
       
       setTimeout(() => {
        $(".zoom-image").elevateZoom({
          zoomType: "inner",
          cursor: "crosshair"
         }, 200);
       })
      
      }
    });    
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() > 400) {
      $('.page-top').addClass('show');
    } else {
      $('.page-top').removeClass('show');
    }
  });

  $('.page-top').on('click', function(e) {
    e.preventDefault();

    if ($(window).width() > 700) 
      $('html, body').animate({ scrollTop: 0 }, 10);
    else
      $('html, body').animate({ scrollTop: 0 }, 800);
    
  });
      
        if ($(window).outerWidth() <= 765) {
    $('.num-inpt').each(function(i,item){
      console.log($(item).attr('type', 'tel'))
    })
  } else {
    $('.num-inpt').each(function(i,item){
      console.log($(item).attr('type', 'number'))
    })
  }
  

});