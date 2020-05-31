$(document).ready(function() {
	$('.icon-menu').click(function(event) {
		$('.icon-menu').toggleClass('active');
		$('.menu__nav').toggleClass('active');
		$('body').toggleClass('lock');
	});

	let number = 8;
	let element;
	let all = document.querySelectorAll('.work__item');
	$('.work__load').click(function(event) {
		number += 8;
		for(let i=1; i<number; i++){
			element = all[i];
			$(element).removeClass('hidden');
		}
	});

	$('.slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		autoplay: false,
		draggable: false,
		autoplay: true,
		speed: 500,
	});
});

let allBlocks = document.querySelectorAll('.menu__item');
for(let i = 0; i<allBlocks.length; i++){
	$(allBlocks[i]).click(function(event) {
			for(let i = 0; i<allBlocks.length; i++){
				$(allBlocks[i]).removeClass('active');
			}
			$(this).addClass('active');
	});
}
$(window).scroll(function() {
	if ($(window).scrollTop() > 200) {
		$('.header').addClass('header_act');
	}
	if ($(window).scrollTop() < 200) {
		$('.header').removeClass('header_act');
	}
	if ($(window).scrollTop() > 750) {
		$('.skills__progress1').addClass('skills__progress1_act');
	}
	if ($(window).scrollTop() > 800) {
		$('.skills__progress2').addClass('skills__progress2_act');
	}
	if ($(window).scrollTop() > 850) {
		$('.skills__progress3').addClass('skills__progress3_act');
	}

	if ($(window).scrollTop() > 570) {
		for(let i=0; i<allBlocks.length; i++){
			$(allBlocks[i]).removeClass('active');
		}
		$(allBlocks[1]).addClass('active');
	}
	if ($(window).scrollTop() < 570) {
		for(let i=0; i<allBlocks.length; i++){
			$(allBlocks[i]).removeClass('active');
		}
		$(allBlocks[0]).addClass('active');
	}
	if ($(window).scrollTop() > 2200) {
		for(let i=0; i<allBlocks.length; i++){
			$(allBlocks[i]).removeClass('active');
		}
		$(allBlocks[2]).addClass('active');
	}
	if ($(window).scrollTop() > 3350) {
		for(let i=0; i<allBlocks.length; i++){
			$(allBlocks[i]).removeClass('active');
		}
		$(allBlocks[3]).addClass('active');
	}
	if ($(window).scrollTop() > 4000) {
		for(let i=0; i<allBlocks.length; i++){
			$(allBlocks[i]).removeClass('active');
		}
		$(allBlocks[4]).addClass('active');
	}
	if ($(window).scrollTop() > 4600) {
		for(let i=0; i<allBlocks.length; i++){
			$(allBlocks[i]).removeClass('active');
		}
		$(allBlocks[5]).addClass('active');
	}
	if ($(window).scrollTop() > 5500) {
		for(let i=0; i<allBlocks.length; i++){
			$(allBlocks[i]).removeClass('active');
		}
		$(allBlocks[6]).addClass('active');
	}
});

function slowScroll(id) { 
   var offset = 0;
   $('html, body').animate({ 
        scrollTop: $(id).offset().top - offset - 200
   }, 1000);
   return false; 
}
function slowScrollHome() { 
   $('html, body').animate({ 
        scrollTop: 0
   }, 1000);
   return false;
}

$('.link-home').click(function(event){
	$('.icon-menu').removeClass('active');
	$('body').removeClass('lock');
	slowScrollHome();
});
$('.link-about').click(function(event){
	$('.icon-menu').removeClass('active');
	$('body').removeClass('lock');
	slowScroll("#about");
});
$('.link-work').click(function(event){
	$('.icon-menu').removeClass('active');
	$('body').removeClass('lock');
	slowScroll("#work");
});
$('.link-process').click(function(event){
	$('.icon-menu').removeClass('active');
	$('body').removeClass('lock');
	slowScroll("#process");
});
$('.link-services').click(function(event){
	$('.icon-menu').removeClass('active');
	$('body').removeClass('lock');
	slowScroll("#services");
});
$('.link-slider').click(function(event){
	$('.icon-menu').removeClass('active');
	$('body').removeClass('lock');
	slowScroll("#slider");
});
$('.link-contact').click(function(event){
	$('.icon-menu').removeClass('active');
	$('body').removeClass('lock');
	slowScroll("#contact");
});