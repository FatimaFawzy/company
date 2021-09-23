$(function () {



  $(window).scroll(function () {
    var height = $('.header').height();


    if ($(this).scrollTop() >= height) {
      $('.navbar').removeClass('navbar-fbgcolor');
      $('.navbar').addClass('navbar-bgcolor');
    }
    else {
      $('.navbar').addClass('navbar-fbgcolor');
      $('.navbar').removeClass('navbar-bgcolor');
    }
  });


  $(' .nav-list .links li ').each(function () {
    var count = $(this).length,
      ulmargin = '28%',
      marginleft = '87%' / count,
      ulleft = '50%' - marginleft;
    $(this).css('marginLeft', marginleft);
    $(' .nav-list .links').css('marginLeft', ulleft);
  });



  //,,,,,,,,,,,,,,,.header//
  $(window).resize(function () {
    $('.header').height($(this).height());
  });
  $('.header').height($(window).height());



  $('.bxslider').bxSlider({
    pager: false,
    auto: true,
    responsive: true,
    autoHover: true

  });

  $('.header .slider >span .animation').each(function () {
    $(this).animate({
      top: '50%'
    }, 1000);
  });

  // scroll to parts
  $('.navbar .navbar-nav  .nav-item ').click(function () {

    // $('html ,body').animate({

    //   scrollTop: $('#' + $(this).data('link')).offset().top - $('.navbar').innerHeight() + 2

    // }, 1000);
    $(this).addClass('active').siblings().removeClass('active');
  });

  $('.about .info button ').click(function () {

    ///////////////$('html ,body').animate({

    /////////////////      scrollTop:$('#' + $(this).data('services')).offset().top-$('.navbar').innerHeight()+2

    /////////////////////	},1000);
    $(this).addClass('active').siblings().removeClass('active');
  });
  // $(window).scroll(function () {
  //   // index = $('.about').offset().top;
  //   console.log($('.header').innerHeight());
  //   if ($(this).scrollTop() >= $('.header').innerHeight() - 270) {

  //     $('.about .info').fadeIn(2000).addClass('animation');
  //   }
  //   else {
  //     $('.about .info').removeClass('animation');
  //   }
  // });
  $('.up').click(function () {

    $('html ,body').animate({

      scrollTop: $('#' + $(this).data('link')).offset().top - $('.navbar').innerHeight() + 2

    }, 1000);

  });
  $('.the-courses .items').hover(function () {
    $(this).children('.overlay,.info ').fadeToggle(1000);
  });

  //employee
  $('.bx-slider').bxSlider({
    pager: true,
    auto: true,
    maxSlides: 3

  });

  $('.employee .items ').hover(function () {
    $(this).children('.overlay,.info ').fadeToggle(500);
    $(this).children('.overlay,.info ').css('border-radius', '50rem');

  });
  //testi
  (function autoSlider() {

    $('.testi .auto-slider .slide').each(function () {

      if (!$(this).is(':last-child')) {

        $(this).delay(3000).fadeOut(1000, function () {
          $(this).removeClass('slide').next().addClass('slide').fadeIn(3000);
          autoSlider();
        });
      }
      else {
        $(this).delay(3000).fadeOut(1000, function () {

          $(this).removeClass('slide');
          $('.testi .auto-slider div').eq(0).addClass('slide').fadeIn(3000);
          autoSlider();

        });
      }
    });
  }());

  AOS.init({
    offset: 120,
    duration: 1000,
    easing: "ease-out-quad",
    delay: 100,
    once: false
  });
  window.addEventListener('load', AOS.refresh);

  $('.slick-items').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });









});
