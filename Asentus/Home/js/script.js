$(document).ready(function() {
	$('.icon-menu').click(function(event) {
		$('.icon-menu').toggleClass('active');
		$('.menu__nav').toggleClass('active');
		$('.menu__logo').addClass('active');
		$('body').toggleClass('lock');
	});
	let clients__src;
	let newclients__src = "";
	let swich = 0;
	$('.clients__column img').hover(function(event) {
		clients__src = this.src;
		for(let i=0; i<clients__src.length; i++){
			if((clients__src[i] == "i") & (clients__src[i+1] == "m") & (clients__src[i+2] == "g")){
				swich = 1;
			}
			if(swich == 1){
				newclients__src += clients__src[i];
			}
		}
		if(newclients__src == "img/clients/01.png"){
			this.src = this.src.replace(".png", "_hover.png");
		}
		if(newclients__src == "img/clients/02.png"){
			this.src = this.src.replace(".png", "_hover.png");
		}
		if(newclients__src == "img/clients/03.png"){
			this.src = this.src.replace(".png", "_hover.png");
		}
		if(newclients__src == "img/clients/04.png"){
			this.src = this.src.replace(".png", "_hover.png");
		}
		if(newclients__src == "img/clients/05.png"){
			this.src = this.src.replace(".png", "_hover.png");
		}
		swich = 0;
		newclients__src = "";
	});
	$('.clients__column img').mouseout(function(event) {
			clients__src = this.src;
			clients__src = clients__src.replace("_hover", "");
			this.src = clients__src;
	});
	$('.slider1').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		draggable: false,
		autoplay: true,
		speed: 500,
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
let products = document.querySelectorAll('.item-products__icon');
let showcase = document.querySelectorAll('.showcase__image');
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
	if ($(window).scrollTop() > 160) {
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
	if ($(window).scrollTop() > 850) {
		for(let i=0; i<products.length; i++){
			$(products[i]).addClass('active');
		}
	}
	if ($(window).scrollTop() > 3300) {
		for(let i=0; i<showcase.length; i++){
			setTimeout(function(event){
				$(showcase[i]).addClass('active');
			}, sec);
			sec += 125;
		}
	}
});