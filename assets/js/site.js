$(function () {
  
  // Mobile Navigation Toggle //
  document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });

  // Carousel Speed //
  $('.carousel').carousel({
	interval: 8000
	});

  // Make "Thumb Div" Clickable // 
  $(".thumb").click(function(){
       window.location=$(this).find("a").attr("href");
       return false;
  });

});