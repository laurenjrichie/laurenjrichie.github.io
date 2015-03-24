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
});