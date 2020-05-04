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
	$('.slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 1,
		autoplay: true,
		speed: 1500,
		draggable: false,
		infinite: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 480,
					settings: {
						arrows: false,
				}
			}
		]
	});
	$('.slider2').slick({
		arrows: true,
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: false,
		speed: 1500,
		draggable: false,
		infinite: false,
		prevArrow: $('.prev2'),
		nextArrow: $('.next2'),
		responsive: [
			{
				breakpoint: 768,
					settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				},
				breakpoint: 480,
					settings: {
						arrows: false,
						slidesToShow: 1,
						slidesToScroll: 1
				}
			}
		]
	});
	$('.select').click(function(event) {
		$(this).toggleClass('active');
	});
	$(document).click(function(e) {
		if ($('.select').has(e.target).length === 0){
			$('.select').removeClass('active');
		}
	});
});
