$(document).ready(function(){
   $(window).scroll(function(){
     // sticky navbar on scroll script
      if(this.scrollY > 20){
         $('.navbar').addClass("sticky");
      }else{
         $('.navbar').removeClass("sticky");
    }
    if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
    }else{
        $('.scroll-up-btn').removeClass("show");
    }
   });

   // slide-up script
   $('.scroll-up-btn').click(function(){
       $('html').animate({scrollTop: 0});
   });


   // toggle menu/navbar script
   $('.menu-btn').click(function(){
       $('.navbar .menu').toggleClass('active');
       $('.menu-btn i').toggleClass('active');
   });

   // typing animation script
   var typed = new Typed(".typing", {
       strings: ["Researcher ", "Translator", "Freelancer"],
       typeSpeed: 100,
       backSpeed: 60,
       loop: true
   });

   var typed = new Typed(".typing-2", {
    strings: ["Researcher ", "Translator", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

    /*  owl carousel script  */
   $('.carousel').owlCarousel({

        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            700:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
 // toggle menu/navbar script
/*  $('.menu').click(function(){
    $('.navbar .menu').hide("fast").toggleClass('menu-btn');
    $('.navbar .menu').toggleClass();
}); */


});

AOS.init({
    easing: 'ease-in-quad',
  });


  // Get the container element
/* var liContainer = document.getElementById("menu");

// Get all buttons with class="btn" inside the container
var lis = liContainer.getElementsByTagName("li");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} */

/*============== Service Model =============== */
const modalViews = document.querySelectorAll('.services-model'),
        modalBtns = document.querySelectorAll('.services-button'),
        modalClose = document.querySelectorAll('.services-model-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-model')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-model')
        })
    })
}) 


 /* function closeMe(){
   x= document.getElementById("menu");

   if (x.className="open"){
    x= document.getElementById("menu").style.display = "none";
    x= document.getElementById("menu") = closed;
    x.setAttribute("required",false);
   }  else {
    x.className="open";
    x= document.getElementById("menu-btn").style.display = "block";
    x.removeAttribute("required");
   }  
   
}  */

/* function openMe(){
    x= document.getElementById("menu");
 
    if (x.className="open"){
     x= document.getElementById("menu").style.display = "block";
     x = document.getElementsByTagName("menu-btn").style.display = "block";
    }
 } */


/*        // scroll-up button show/hide script
       if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
    }else{
        $('.scroll-up-btn').removeClass("show");
    } */
