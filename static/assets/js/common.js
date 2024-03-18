$(document).ready(function(){
	$('.header__close, .substrate').on('click', function()  {
		$('body').css('overflow', 'auto').removeClass('dark');
		$('.header__side').removeClass('translateX');
		$('.substrate').fadeOut();
	});

	$('.header__burger').on('click', function() {
		$('.substrate').fadeIn();
		$('.header__side').addClass('translateX');
	});
});
