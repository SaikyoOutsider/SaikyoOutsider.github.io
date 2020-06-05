$(document).ready(function() {
	$('.icon-menu').click(function(event) {
		$('.icon-menu').toggleClass('active');
		$('.menu__nav').toggleClass('active');
		$('.menu__logo').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.slider1').slick({
		arrows: true,
		dots: false,
		slidesToShow: 1,
		draggable: false,
		autoplay: true,
		speed: 500,
		responsive: [
	    {
	      breakpoint: 480,
	      settings: {
	      	arrows: false,
	      }
	    }
		]
	});
	$('.feedback__slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		draggable: false,
		autoplay: false,
		infinite: false,
		prevArrow: $('.int-slider__arrow_l'),
		nextArrow: $('.int-slider__arrow_r'),
		responsive: [
	    {
	      breakpoint: 768,
		      settings: {
		      	slidesToShow: 2,
		      	slidesToScroll: 2,
		      },
	     },
	     {
	     	breakpoint: 630,
		      settings: {
		      	slidesToShow: 1,
		      	slidesToScroll: 1,
		      },
	     }
	   ]
	});
});

let num = document.querySelector('.int-slider__num');
let last = document.querySelectorAll('.slider-feedback__item').length / 3;
if($(window).width() <= 768){
	last = document.querySelectorAll('.slider-feedback__item').length / 2;
}
if($(window).width() <= 630){
	last = document.querySelectorAll('.slider-feedback__item').length;
}
num
num.innerHTML = "1/"+ last;
let num1;
$('.feedback__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
	if(currentSlide != 0){
		num1 = currentSlide/3 + 1;
		if($(window).width() <= 768){
			num1 = currentSlide/2 +1;
		}
		if($(window).width() <= 630){
			num1 = currentSlide +1;
		}
		num.innerHTML = num1 + "/"+ last;
	}
	else
	{
		num.innerHTML = "1/" + last;
	}
});