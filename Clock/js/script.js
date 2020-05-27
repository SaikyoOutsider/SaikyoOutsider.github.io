function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

$(document).ready(function() {
	$('.icon-menu').click(function(event) {
		$('.icon-menu').toggleClass('active');
		$('.menu__nav').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.slider1').slick({
		arrows: true,
		dots: false,
		slidesToShow: 1,
		autoplay: false,
		draggable: false,
		prevArrow: $('.slider1__prev'),
		nextArrow: $('.slider1__next'),
	});
	$('.slider2').slick({
		arrows: true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		draggable: false,
		prevArrow: $('.slider2__prev'),
		nextArrow: $('.slider2__next'),
		responsive: [
			{
				breakpoint: 930,
					settings: {
						slidesToShow: 2
				}
				
			},
			{
				breakpoint: 630,
					settings:{
					slidesToShow: 1
				}
			}
		]
	});
});