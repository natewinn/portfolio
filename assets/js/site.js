$(function () {
  document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });

  $('.carousel').carousel({
	interval: 8000
	});

});