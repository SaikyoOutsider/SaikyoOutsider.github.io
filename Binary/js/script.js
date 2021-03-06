$('.filter__item').click(function(event){
	var i=$(this).data('filter');
	$('.filter__item').removeClass('active');
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

function slowScroll(id) { 
   var offset = 0;
   $('html, body').animate({ 
        scrollTop: $(id).offset().top - offset 
   }, 1000);
   return false; 
}

$('.next').click(function(event){
	slowScroll("#about");
});
$('.link-header').click(function(event){
	slowScroll("#header");
});
$('.link-about').click(function(event){
	slowScroll("#about");
});
$('.link-portfolio').click(function(event){
	slowScroll("#portfolio");
});
$('.link-contact').click(function(event){
	slowScroll("#contact");
})

let image = document.querySelector('.popup__body img');
$('.portfolio__column img').click(function(event){
	image.src = this.src;
	$('.popup').addClass('popup__active');
	$('body').addClass('locked');
});

$('.popup__area').click(function(event){
	$('.popup').removeClass('popup__active');
	$('body').removeClass('locked');
});
