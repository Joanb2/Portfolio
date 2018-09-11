$(function() {

	$('div.hello').fadeIn(1500).removeClass('hello');

	$(window).on('scroll', function() {
		$('.hide').each( function(i) {
			var bottom_obj = $(this).offset().top + $(this).outerHeight() * 0.25;
			var bottom_win = $(window).scrollTop() + $(window).height();

			if(bottom_win > bottom_obj) {
				$(this).animate({'opacity':'1'}, 600);
			}
		});
	});

	$('#about_scroll').on('click', function() {
		$('html, body').animate({
			scrollTop: $('#about').position().top },
			1000
		);
	});

	$('#knowledge_scroll').on('click', function() {
		$('html, body').animate({
			scrollTop: $('#knowledge').position().top },
			1000
		);
	});

	$('#in_touch_scroll').on('click', function() {
		$('html, body').animate({
			scrollTop: $('#in_touch').position().top },
			1000
		);
	});

	$('#up').on('click', function() {
		$('html, body').animate({
			scrollTop: $('#welcome').position().top },
			1000
		);
	});

	$(window).on('scroll', function() {
		if($(this).scrollTop() > 300) $('#up').fadeIn();
		else $('#up').fadeOut();
	});

	$('a').on('dragstart', function() {
		return false;
	});

});