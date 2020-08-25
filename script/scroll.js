$(document).ready(function() {
	$('a[href*="#"]').bind('click', function(e) {
		e.preventDefault();

		var sectionTarget = $(this).attr("href");

		$('html, body').stop().animate({
			scrollTop: $(sectionTarget).offset().top
		}, 600, function() {
			location.hash = sectionTarget;
		});

		return false;
	});
});

$(window).scroll(function() {
	var currentTopDistance = $(window).scrollTop();
	var offset = 70;

	if ($('.section').first().position().top - offset > currentTopDistance){
		$('.navbar .navbar-collapse .navbar-nav > li > a.section-active').removeClass('section-active');
	}else{
		$('.section').each(function(i) {
			if ($(this).position().top - offset <= currentTopDistance) {
				$('.navbar .navbar-collapse .navbar-nav > li > a.section-active').removeClass('section-active');
				$('.navbar .navbar-collapse .navbar-nav > li > a').eq(i).addClass('section-active');
			}
		});
	}
}).scroll();
