$(document).ready(function() {
  $(".scroll-down").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 500);
  });
  
  $("#projects-menu").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 500);
  });
  
  $("#about-menu").click(function() {
    $('html, body').animate({
        scrollTop: $("body").offset().top
    }, 500);
  });
  
   var wH = $(window).height();
   console.log(wH);
   $('#index-background').css({height: wH});
});