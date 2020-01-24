$(document).ready(function() {
	var owl = $('.portfolioCarousel'),
		nextButton = $('#next'),
		prevButton = $('#prev');
		owl.owlCarousel({
			loop: true,
			items: 3,
			margin: 10,
			dots: true,
			smartspeed: 2000,
			responsive : {
				0 : {
					items: 1
				},

				900 : {
					items: 2
				},

				1280: {
					items: 3
				}
			}
		});

		prevButton.click(function () {
			owl.trigger('prev.owl.carousel');
			console.log('prev');
		});		
		nextButton.click(function() {
			owl.trigger('next.owl.carousel');
			console.log('next');
		});

});