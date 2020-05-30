$(document).ready(function() {
	$('.icon-menu').click(function(event) {
		$('.icon-menu').toggleClass('active');
		$('.menu__nav').toggleClass('active');
		$('body').toggleClass('lock');
	});

	let number = 8;
	let element;
	let all = document.querySelectorAll('.work__item');
	console.log(all);
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

$(window).scroll(function() {
	if ($(window).scrollTop() > 750) {
		$('.skills__progress1').addClass('skills__progress1_act');
	}
	if ($(window).scrollTop() > 800) {
		$('.skills__progress2').addClass('skills__progress2_act');
	}
	if ($(window).scrollTop() > 850) {
		$('.skills__progress3').addClass('skills__progress3_act');
	}
});