$(document).ready(function() {
	$('.icon-menu').click(function(event) {
		$('.icon-menu').toggleClass('active');
		$('.menu__nav').toggleClass('active');
		$('.menu__logo').addClass('active');
		$('body').toggleClass('lock');
	});
	$('.reviews__slider').slick({
		arrows: false,
		dots: false,
		slidesToShow: 1,
		draggable: true,
		autoplay: true,
		speed: 500,
	});
});

let services = document.querySelectorAll('.item-services');
let services1 = document.querySelectorAll('.item-services1');
let pricing = document.querySelectorAll('.pricing__item');
let products = document.querySelectorAll('.item-products__icon');
let sec = 125;
$(window).scroll(function() {
	if ($(window).scrollTop() > 60) {
		$('.header').addClass('header_act');
		$('.menu__logo').addClass('active');
		$('.menu__item').addClass('menu__item_act');
		$('.icon-menu').addClass('icon-menu_act');
		
	}
	if ($(window).scrollTop() < 60) {
		$('.header').removeClass('header_act');
		$('.menu__logo').removeClass('active');
		$('.menu__item').removeClass('menu__item_act');
		$('.icon-menu').removeClass('icon-menu_act');
	}
	if ($(window).scrollTop() > 10) {
		for(let i=2; i>=0; i--){
			setTimeout(function(event){
				$(services1[i]).addClass('active');
			}, sec);
			sec += 125;
		}
		sec = 125;
	}
	if ($(window).scrollTop() > 300) {
		for(let i=2; i>=0; i--){
			setTimeout(function(event){
				$(services[i]).addClass('active');
			}, sec);
			sec += 125;
		}
		for(let i=5; i>=3; i--){
			setTimeout(function(event){
				$(services[i]).addClass('active');
			}, sec);
			sec += 125;
		}
		sec = 125;
	}
	if ($(window).scrollTop() > 1500) {
		for(let i=0; i<products.length; i++){
			$(products[i]).addClass('active');
		}
	}
});