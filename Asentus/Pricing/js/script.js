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
	$('.reviews__slider').slick({
		arrows: false,
		dots: false,
		slidesToShow: 1,
		draggable: true,
		autoplay: true,
		speed: 500,
	});
});

let pricing = document.querySelectorAll('.pricing__item');
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
		for(let i=0; i<pricing.length; i++){
			$(pricing[i]).addClass('active')
		}
	}
});

$('.top').click(function (event){
	$('html, body').animate({ 
        scrollTop: 0
   }, 1000);
});