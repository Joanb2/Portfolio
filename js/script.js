$('#about_scroll').on('click', function() {
	$('html, body').animate({
		scrollTop: $('#about').offset().top },
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
		scrollTop: $('#hello').position().top },
		1000
	);
});

$(window).on('scroll', function() {
	if($(this).scrollTop() > 300) $('#up').fadeIn();
	else $('#up').fadeOut();
});