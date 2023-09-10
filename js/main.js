var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove",function(e){
      cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });

    const observer = new IntersectionObserver((entries) =>{
      entries.forEach((entry)=>{
          console.log(entry)
          if (entry.isIntersecting){
              entry.target.classList.add('show');
          }
          else{
              entry.target.classList.remove('show');
          }
      })
  })
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  
  
  
  const observers = new IntersectionObserver((entries) =>{
      entries.forEach((entry)=>{
          console.log(entry)
          if (entry.isIntersecting){
              entry.target.classList.add('leftslideshow');
          }
          else{
              entry.target.classList.remove('leftslideshow');
          }
      })
  })
  
  const hiddenElement = document.querySelectorAll('.leftslide');
  hiddenElement.forEach((el) => observers.observe(el));
const buttons = document.querySelectorAll('.faq-toggle');



buttons.forEach((button) =>{
    button.addEventListener('click', () =>{
        button.parentNode.classList.toggle('active')
    })
})




window.onload = () => {
    for (let i of document.querySelectorAll(".gallery img")) {
      i.onclick = () => i.classList.toggle("full");
    }
  };
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  
  function visible(partial) {
    var $t = partial,
        $w = jQuery(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

}

$(window).scroll(function(){

  if(visible($('.count-digit')))
    {
      if($('.count-digit').hasClass('counter-loaded')) return;
      $('.count-digit').addClass('counter-loaded');
      
$('.count-digit').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 5000,
    easing: 'swing',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});
    }
})
var spanText = function spanText(text) {
  var string = text.innerText;
  var spaned = '';
  for (var i = 0; i < string.length; i++) {
    if(string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
    else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
  }
  text.innerHTML = spaned;
}


var headline = document.querySelector("h2");

spanText(headline);

// IIFE with jQuery Wrapper
(function ($) {
    'use strict';
  
  
  
    //Hero Slider
    $('.hero-slider').slick({
      autoplay: true,
      infinite: true,
      arrows: true,
      prevArrow: '<button type=\'button\' class=\'prevArrow\'></button>',
      nextArrow: '<button type=\'button\' class=\'nextArrow\'></button>',
      dots: false,
      autoplaySpeed: 7000,
      pauseOnFocus: false,
      pauseOnHover: false
    });
    $('.hero-slider').slickAnimation();
  
  
    // testimonial slider
    $('.testimonial-slider').slick({
      arrows: false,
      dots: false
    });
  
  
    $('.blog-slider').slick({
      arrows: false,
      dots: true,
      autoplay: true
    });
  
  
  
    /*
     *----------------------------------
     * Document Ready
     *----------------------------------
     */
    $(document).ready(function () {
  
      // Add Class in scrolling
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //console.log(scroll);
        if (scroll > 200) {
          //console.log('a');
          $('.navigation').addClass('sticky-header');
        } else {
          //console.log('a');
          $('.navigation').removeClass('sticky-header');
        }
      });
  
  
      // mouse hover effect
      // filter
      $(document).ready(function () {
        var containerEl = document.querySelector('.filtr-container');
        var filterizd;
        if (containerEl) {
          filterizd = $('.filtr-container').filterizr({});
        }
        //Active changer
        $('.filter').on('click', function () {
          $('.filter').removeClass('active');
          $(this).addClass('active');
        });
      });
  
      /* Popup Video */
      $('#th-video').magnificPopup({
        items: [{
          src: 'video/ocean.mp4',
          type: 'iframe' // this overrides default type
        }],
        gallery: {
          enabled: true
        },
        type: 'image' // this is default type
      });
  
      /* Popup Image */
      $('.image-link').magnificPopup({
        type: 'image'
      });
  
      // DOM Content Load Event Actions;
      $(window).load(function () {
        $('div.loading').remove();
        $('body').removeClass('loading');
      });
  
    }); // DOM Ready
  
  }(jQuery)); // IIFE
