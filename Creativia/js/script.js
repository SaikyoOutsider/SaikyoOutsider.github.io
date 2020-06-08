$(document).ready(function() {
	$('.portfolio__item').click(function(event){
		var i=$(this).data('filter');
		$('.portfolio__item').removeClass('active');
		$(this).addClass('active');
		if (i==1){
			$('.portfolio__column').show();
		}
		else{
			$('.portfolio__column').hide();
			$('.portfolio__column.f_'+i).show();
		}
		return false;
	});
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
		infinite: false,
		responsive: [
	    {
	      breakpoint: 630,
	      settings: {
	      	arrows: false,
	      }
	    }
		]
	});
	$('.clients__slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		infinite: false,
	});
	$('.spoiler__title').click(function(event) {
		if($('.spoiler').hasClass('one')){
			$('.spoiler__title').not($(this)).removeClass('active');
			$('.spoiler__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
	let number = 2;
	let element;
	let all = document.querySelectorAll('.blog__item');
	$('.blog__more').click(function(event) {
		number += 2;
		for(let i=1; i<number; i++){
			element = all[i];
			$(element).removeClass('hidden');
		}
	});
});

function slowScroll(id) { 
   var offset = 0;
   $('html, body').animate({ 
        scrollTop: $(id).offset().top - offset - 200
   }, 1000);
   return false; 
}

$('.link-home').click(function(event){
	$('.icon-menu').removeClass('active');
	$('body').removeClass('lock');
	slowScroll('#home');
});
$('.link-about').click(function(event){
	$('.icon-menu').removeClass('active');
	$('body').removeClass('lock');
	slowScroll("#about");
});
$('.link-portfolio').click(function(event){
	$('.icon-menu').removeClass('active');
	$('body').removeClass('lock');
	slowScroll("#portfolio");
});
$('.link-clients').click(function(event){
	$('.icon-menu').removeClass('active');
	$('body').removeClass('lock');
	slowScroll("#clients");
});
$('.link-team').click(function(event){
	$('.icon-menu').removeClass('active');
	$('body').removeClass('lock');
	slowScroll("#team");
});
$('.link-services').click(function(event){
	$('.icon-menu').removeClass('active');
	$('body').removeClass('lock');
	slowScroll("#services");
});
$('.link-blog').click(function(event){
	$('.icon-menu').removeClass('active');
	$('body').removeClass('lock');
	slowScroll("#blog");
});
$('.link-contact').click(function(event){
	$('.icon-menu').removeClass('active');
	$('body').removeClass('lock');
	slowScroll("#contact");
});