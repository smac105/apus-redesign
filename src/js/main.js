// $('body').on('mouseenter mouseleave', '.dropdown', function (e) {
//     var dropdown = $(e.target).closest('.dropdown');
//     var menu = $('.dropdown-menu', dropdown);
//     dropdown.addClass('show');
//     menu.addClass('show');
//     setTimeout(function () {
//         dropdown[dropdown.is(':hover') ? 'addClass' : 'removeClass']('show');
//         menu[dropdown.is(':hover') ? 'addClass' : 'removeClass']('show');
//     }, 300);
// });

// $(document).ready(function(){ 
//     $('.search-icon').click(function(){
//         $('.dynamic-search').toggleClass('active')
//     })
// })

var APUSGLOBAL = {};

APUSGLOBAL.init = function(){
    $(window).scroll(function(){
        APUSGLOBAL.checkPos($(this));
    });
};

APUSGLOBAL.checkPos = function(win)
{
  var sT = win.scrollTop();

  if(sT >= 75)
  {
    $('.sm-logo-main').addClass('vis');
    $('.main-logo').addClass('vis');
    $('.main-logo-hidden').addClass('vis');
    $('.search-icon').addClass('vis');
    $('.navbar-collapse').addClass('vis');
    $('.donate').addClass('vis');
    $('.mini-nav-wrap').addClass('vis');
    $('.logo-mini-nav').addClass('vis');
    $('.site-header').addClass('vis');
    $('.nav-link a').addClass('vis');
    $('.navbar-toggler').addClass('vis');
    $('.bar').addClass('vis');
  } else {
    $('.sm-logo-main').removeClass('vis');
    $('.main-logo').removeClass('vis');
    $('.main-logo-hidden').removeClass('vis');
    $('.search-icon').removeClass('vis');
    $('.navbar-collapse').removeClass('vis');
    $('.donate').removeClass('vis');
    $('.mini-nav-wrap').removeClass('vis');
    $('.logo-mini-nav').removeClass('vis');
    $('.site-header').removeClass('vis');
    $('.nav-link a').removeClass('vis');
    $('.navbar-toggler').removeClass('vis');
    $('.bar').removeClass('vis');
  }
};

$(document).ready(function(){
  APUSGLOBAL.init();
});

// VIDEO HP
var vid = document.getElementById("bgvid"),
pauseButton = document.getElementById("vidpause");
if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

// DYNAMIC SEARCH
$(document).ready(function(){ 
    $('.search-icon').click(function(){
        $('.dynamic-search').toggleClass('active')
    })
});

// const counters = document.querySelectorAll(".counters span");
// const container = document.querySelector(".counters");

// let activated = false;

// window.addEventListener("scroll", () => {
//   if(
//     pageYOffset > container.offsetTop - container.offsetHeight - 200
//     && activated === false
//     ) {
//       counters.forEach(counter => {
//         counter.innerText = 0;
//         let count = 150;
//         function updateCount() {
//           const target = parseInt(counter.dataset.count);
//           if (count < target) {
//             count++;
//             counter.innerText = count;
//             setTimeout(updateCount, 100);
//           } else {
//             counter.innerText = target;
//           }
//         }
//         updateCount();
//         activated = true;
//       });
//   } else if(
//       pageYOffset < container.offsetTop - container.offsetHeight - 500
//       || pageYOffset === 0
//       && activated === true
//     ) {
//     counters.forEach(counter => {
//       counter.innerText = 0;
//     });
//     activated = false;
//   }
// });

var a = 0
$(window).scroll(function() {

  var pagetop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > pagetop) {
    $('.counter-value').each(function (index) {
        var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
        $(this).prop('Counter',0).animate({
            Counter: $(this).attr('data-count')
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(commaSeparateNumber(parseFloat(now).toFixed(size)));
            }
        });
    });

    function commaSeparateNumber(val) {
      while (/(\d+)(\d{3})/.test(val.toString())) {
        val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
      }
      return val;
    }
    a = 1;
  }

});

// MOVING ITEMS ON SCROLL
(function($) {

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

// vertical
$(window).scroll(function(event) {
  
  $(".vertical").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("slide-in"); 
    } 
  });
  
});

var win = $(window);
var allMods = $(".vertical");

// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("slide-in"); 
    } 
  });
  
});

// horizontal
$(window).scroll(function(event) {
  
  $(".horizontal").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("slide-in-sideways"); 
    } 
  });
  
});

var win = $(window);
var allMods = $(".horizontal");

// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible-horizontal"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("slide-in-sideways"); 
    } 
  });
  
});

/* sticky event nav */
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("stickynavbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/* PROGRESSIVE MOBILE NAV */
$(document).on('click', function (e) {
  var $collapseElement = $('#apusglobal-navbar-collapse'); // Replace with your collapse element's ID
  var $collapseTrigger = $('#apusglobal-navbar-collapse-button'); // Replace with your collapse button's ID

  if (!$collapseElement.is(e.target) && $collapseElement.has(e.target).length === 0 &&
      !$collapseTrigger.is(e.target) && $collapseTrigger.has(e.target).length === 0 &&
      $collapseElement.hasClass('show')) {
    $collapseElement.collapse('hide');
  }
});

const header = document.querySelector('.site-header');
const dropdownToggle = document.querySelector('.dropdown-toggle'); // Or the dropdown menu itself

dropdownToggle.addEventListener('mouseover', () => {
    header.classList.add('vis');
});

dropdownToggle.addEventListener('mouseout', () => {
    header.classList.remove('vis');
});

/* VIDEO CONTROLS ON HOVER */
// $('#bgvid').hover(function toggleControls() {
//     if (this.hasAttribute("controls")) {
//         this.removeAttribute("controls")
//     } else {
//         this.setAttribute("controls", "controls")
//     }
// })