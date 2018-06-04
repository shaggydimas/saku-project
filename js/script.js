$(function() {

	//modal button event handlers
	$('[modal-toggle]').on('click', function(e) {
		var target = $(this).attr('modal-toggle');
		$(target).fadeIn();
		$('body').addClass('modal-opened');
	});

	//overlay
	$('.overlay, .close-btn').on('click', function(e) {
		$('.overlay').fadeOut();
		$('body').removeClass('modal-opened');
	})

	//stop propagation on
	$('.about-soda').on('click', function(e) {
		e.stopPropagation();
	})

	//script for bottle animation
	setInterval(function() {
		var active = $('.soda-container img.active');
		var sibling = (active.next().length === 0) ? active.prev() : active.next();
		active.removeClass('active');
		sibling.addClass('active');
	}, 4000);

	//soda info scroll buttons
	$('.scroll-btn').on('click', function(e) {
		var container = $(this).closest('.about-soda');
		var parent = $(this).closest('[class^="soda-"]');
		if($(this).hasClass('next')) {
			console.log(parent.next().offset().top);
			container.animate({
				scrollTop: parent.next().offset().top + container.scrollTop()
			})
		}
		else {
			container.animate({
				scrollTop: parent.prev().offset().top + container.scrollTop()
			})
		}
	})
})