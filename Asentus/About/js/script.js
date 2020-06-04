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

function services__beginning(index){
	$(services[index]).addClass('active');
}
function services1__beginning(index){
	$(services1[index]).addClass('active');
}

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
		$('.top').addClass("active");
	}
	if ($(window).scrollTop() < 60) {
		$('.header').removeClass('header_act');
		$('.menu__logo').removeClass('active');
		$('.menu__item').removeClass('menu__item_act');
		$('.icon-menu').removeClass('icon-menu_act');
		$('.top').removeClass("active");
	}
	if ($(window).scrollTop() > 10) {
		console.log(1);
		for(let i=2; i>=0; i--){
			setTimeout("services1__beginning(" +i +")", sec);
			sec += 125;
		}
		sec = 125;
	}
	if ($(window).scrollTop() > 300) {
		for(let i=2; i>=0; i--){
			setTimeout("services__beginning(" +i +")", sec);
			sec += 125;
		}
		for(let i=5; i>=3; i--){
			setTimeout("services__beginning(" +i +")", sec);
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

$('.top').click(function (event){
	$('html, body').animate({ 
        scrollTop: 0
   }, 1000);
});