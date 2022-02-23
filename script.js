// Testimonial
$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        nav: true,
        navText: ["<i class='fa-solid fa-circle-chevron-left'></i>","<i class='fa-solid fa-circle-chevron-right'></i>"],
        center: true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                loop:true
            },
            576:{
                items:1,
                nav:true,
                loop:true
            },
            768:{
                items:2,
                nav:true,
                loop:true
            },
            1000:{
                items:2,
                nav:true,
                loop:true
            }
        }
    });
    owl.trigger('to.owl.carousel', 1);
});


// Scrolling
$("#ourservice").click(function() {
    $('html, body').animate({
          scrollTop: $("#service").offset().top -70
    }, 1000);
});

$("#whyus").click(function() {
    $('html, body').animate({
          scrollTop: $("#us").offset().top -70
    }, 1000);
});

$("#testimonial").click(function() {
    $('html, body').animate({
          scrollTop: $("#test").offset().top -70
    }, 1000);
});

$("#faq").click(function() {
    $('html, body').animate({
          scrollTop: $("#fq").offset().top -70
    }, 1000);
});


// Background tranparan
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 100){
        $('.fixed-top').css('background', 'transparent');
    } else{
        $('.fixed-top').css('background', '#F1F3FF');
    }
});


