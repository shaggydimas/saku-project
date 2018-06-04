$(function() {

	//modal button event handlers
	$('[modal-toggle]').on('click', function(e) {
		var target = $(this).attr('modal-toggle');
		$(target).fadeIn();
		$('body').addClass('modal-opened');
	});

	//overlay
	$('.overlay, .close-btn').on('click', function(e) {
		$(this).fadeOut();
		$('body').removeClass('modal-opened');
	})
	//script for bottle animation
	setInterval(function() {
		var active = $('.soda-container img.active');
		var sibling = (active.next().length === 0) ? active.prev() : active.next();
		active.removeClass('active');
		sibling.addClass('active');
	}, 4000);
})