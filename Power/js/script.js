$(document).ready(function() {
	$('.icon-menu').click(function(event) {
		$('.icon-menu').toggleClass('active');
		$('.menu__nav').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

function slowScroll(id) { 
   var offset = 0;
   $('html, body').animate({ 
        scrollTop: $(id).offset().top - offset 
   }, 1000);
   return false; 
}

$('.scroll-banner__button').click(function(event) {
	slowScroll("#pages")
});

$('.link-home').click(function(event) {
	$('.icon-menu').removeClass('active');
	$('.menu__nav').removeClass('active');
	$('body').removeClass('lock');
	slowScroll("#home")
});
$('.link-pages').click(function(event) {
	$('.icon-menu').removeClass('active');
	$('.menu__nav').removeClass('active');
	$('body').removeClass('lock');
	slowScroll("#pages")
});
$('.link-features').click(function(event) {
	$('.icon-menu').removeClass('active');
	$('.menu__nav').removeClass('active');
	$('body').removeClass('lock');
	slowScroll("#features")
});
$('.link-extensions').click(function(event) {
	$('.icon-menu').removeClass('active');
	$('.menu__nav').removeClass('active');
	$('body').removeClass('lock');
	slowScroll("#extensions")
});
$('.link-tutorials').click(function(event) {
	$('.icon-menu').removeClass('active');
	$('.menu__nav').removeClass('active');
	$('body').removeClass('lock');
	slowScroll("#tutorials")
});
$('.link-contactUs').click(function(event) {
	$('.icon-menu').removeClass('active');
	$('.menu__nav').removeClass('active');
	$('body').removeClass('lock');
	slowScroll("#contactUs")
});