// main Swiper 
const mainSwiper = new Swiper('.mainBanner .swiper', {
  loop: true,
  // autoplay: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});

//  bestseller swiper

const bestsellerSwiper = new Swiper(' .bestseller .swiper3', {
  loop: true,
  // autoplay: true,
 
  pagination: {
    el: '.bestseller .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiperthree ',
    prevEl: '.swiperthree',
  },
  // Responsive breakpoints
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});


//    special-offers swiper

const specialOffersSwiper = new Swiper(' .special-offers .swiper2', {
  loop: true,
  // autoplay: true,
 
  pagination: {
    el: '.special-offers .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swipertwo ',
    prevEl: '.swipertwo',
  },
  // Responsive breakpoints
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});



//    clientsOpinions swiper

const clientsOpinions = new Swiper(' .clients-opinions .swiper5', {
  loop: true,
  // autoplay: true,
 
  pagination: {
    el: '.clients-opinions .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.clients-opinions .swiper-button-next ',
    prevEl: '.clients-opinions .swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
  
    350: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    } 
  }
});


//  new arrivals swiper

const newArrivalSwiper = new Swiper(' .newArrivals .swiper4', {
  loop: true,
  // autoplay : true , 
  
  pagination: {
    el: '.newArrivals .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ' .newArrivals .swiperfour ',
    prevEl: '.newArrivals .swiperfour',
  },
  // Responsive breakpoints
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});




// **************************************************************************************************


// preloader

let box = document.getElementById("preloader");
function preloaderLayer(){
  box.style.setProperty('--afterTop','-100%');
  box.style.setProperty('--afterBottom','-100%');
  $("body").css("overflow" , "visible") ; 
}

$(document).ready(function (){
  $("#preloader img").css("opacity" , "0" );
  setTimeout(() => {
    preloaderLayer() ; 
  }, 1000);
 setTimeout(() => {
  $("#preloader").css("display" , "none")
 }, 2000);
})

// end of preloader


// **************************************************************************************************


// open and close nav

let closeBtn = document.querySelector(".closeBtn"); 
let openBtn = document.querySelector(".bars"); 

closeBtn.addEventListener("click" , function(){
  $("nav").removeClass("open-nav");
  $("body").css("overflow" , "visible") ;
})

openBtn.addEventListener("click" , function(){
  $("nav").addClass("open-nav");  
  $("body").css("overflow" , "hidden") ;
})

// **************************************************************************************************

// open language menu

$(".arabic").click(function(){
  $(".lang-details").toggleClass("show-lang") ;
})


// **************************************************************************************************

// to top button

$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, '1000');
}) 


// **************************************************************************************************

//  nested menus in footer

// let element = document.querySelectorAll(".quick-drop") ;

if($(window).width() < 768){
$(".footer-title").click(function(){
  $(this).next().slideToggle(300) ; 
  $(this).toggleClass("arrow-rotate");
  $(".footer-title").not($(this)).next().slideUp(300);
  $(".footer-title").not($(this)).removeClass("arrow-rotate");
  
})
}


// **************************************************************************************************


// fire wow


new WOW().init();

// **************************************************************************************************

// plates hover 

let plates = document.querySelectorAll(".plate-name") ; 
if($(window).width() > 768) {
  for(let i = 0 ; i< plates.length ; i++) {
    plates[i].addEventListener("mouseover" , function(){
       plates[i].previousElementSibling.children[0].style.transform = "translateY(-20px)"  ;
    })
    plates[i].addEventListener("mouseleave" , function(){
      plates[i].previousElementSibling.children[0].style.transform = "translateY(0px)"  ;
   })
  }
}


// **************************************************************************************************

// fixed nav with scroll top in mobile

// function scrollDetect(element){
//   var lastScroll = 0;
//   if(element == 'nav'){
//    $(element).css("background-color" , "#519356") ;
//   }
//   window.onscroll = function() {
   
//       let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
//       if (currentScroll  - lastScroll >= 500 ){
//         lastScroll = currentScroll;
//       $(element).addClass("scroll-down-fixed");
//       $(element).removeClass("scroll-top-fixed");
//       }else if(currentScroll  - lastScroll <= 0){
//         lastScroll = currentScroll;
//        $(element).addClass("scroll-top-fixed");
//       } 

//       if (document.documentElement.scrollTop == 0) {
//         // lastScroll = currentScroll;
//         $(element).removeClass("scroll-down-fixed");
//         $(element).removeClass("scroll-top-fixed");
//         console.log("yes")
//       }
//   };
// }

// if($(window).width() < 768) {
//   scrollDetect("header");
// }


// if($(window).width() > 768) {
//   scrollDetect("nav");
// }


// fixed nav with scroll top in big screens



// **************************************************************************************************

// open search 


$(".open-search-btn").click(function(){
  $(".search").slideToggle(300);
  $(this).children().toggleClass("la-times");
  // $(this).children().addClass("");
})

// $(".closeSearh-btn").click(function(){
//     $(".search-holder-input").removeClass("open-search");
   
//   setTimeout(() => {
//     $(".search-holder-parent").fadeToggle(300);
//   }, 200);
//   $("body").css("overflow" , "visible") ;
 
// })
