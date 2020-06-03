$(document).ready(function() {
	$('.icon-menu').click(function(event) {
		$('.icon-menu').toggleClass('active');
		$('.menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		autoplay: true,
		speed: 500,
		draggable: false
	});
});

function slowScroll(id) { 
   var offset = 0;
   $('html, body').animate({ 
        scrollTop: $(id).offset().top - offset 
   }, 1000);
   return false; 
}

function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

$('.link-about').click(function(event){
	$('.icon-menu').removeClass('active');
	$('.menu__body').removeClass('active');
	$('body').removeClass('lock');
	slowScroll("#about");
});
$('.link-work').click(function(event){
	$('.icon-menu').removeClass('active');
	$('.menu__body').removeClass('active');
	$('body').removeClass('lock');
	slowScroll("#work");
});
$('.link-shop').click(function(event){
	$('.icon-menu').removeClass('active');
	$('.menu__body').removeClass('active');
	$('body').removeClass('lock');
	slowScroll("#shop");
});
$('.link-contact').click(function(event){
	$('.icon-menu').removeClass('active');
	$('.menu__body').removeClass('active');
	$('body').removeClass('lock');
	slowScroll("#contact");
});