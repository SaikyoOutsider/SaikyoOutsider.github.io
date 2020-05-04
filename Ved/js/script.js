function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();
function slowScroll(id) { 
   var offset = 0;
   $('html, body').animate({ 
        scrollTop: $(id).offset().top - offset 
   }, 1000);
   return false; 
}

$('.scroll-about').click(function(event){
	slowScroll("#about");
});
$('.scroll-howDoesItWork').click(function(event){
	slowScroll("#howDoesItWork");
});
$('.scroll-slider').click(function(event){
	slowScroll("#slider");
});
$('.scroll-contacts').click(function(event){
	slowScroll("#contacts");
});

$(document).ready(function() {
	$('.icon-menu').click(function(event) {
		$('.icon-menu').toggleClass('active');
		$('.nav__navigation').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.scroll-about').click(function(event){
		$('.icon-menu').removeClass('active');
		$('.nav__navigation').removeClass('active');
		$('body').removeClass('lock');
		slowScroll("#about");
	});
	$('.scroll-howDoesItWork').click(function(event){
		$('.icon-menu').removeClass('active');
		$('.nav__navigation').removeClass('active');
		$('body').removeClass('lock');
		slowScroll("#howDoesItWork");
	});
	$('.scroll-slider').click(function(event){
		$('.icon-menu').removeClass('active');
		$('.nav__navigation').removeClass('active');
		$('body').removeClass('lock');
		slowScroll("#slider");
	});
	$('.scroll-contacts').click(function(event){
		$('.icon-menu').removeClass('active');
		$('.nav__navigation').removeClass('active');
		$('body').removeClass('lock');
		slowScroll("#contacts");
	});
	$('.slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 4,
		autoplay: false,
		speed: 500,
		draggable: false,
		infinite: true,
		responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	      }
	    },
	    {
	      breakpoint: 810,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 530,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
		]
	});
});

