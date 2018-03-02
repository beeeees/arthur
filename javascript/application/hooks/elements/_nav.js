(function($){

	var $window = $(window);


	// ADD ELEMENTS
	$window.on(window.object_name+'._cache_elements', function(object_event, self) {

		self.methods._add('elements', {
			nav : 'nav',
		});

	});

	// ADD METHODS
	$window.on(window.object_name+'._add_methods', function(object_event, self) {

		self.methods._add('methods', {
			nav : {
				_toggle :			function() {
										self.elements.body.toggleClass('nav-open');
										if( self.elements.body.hasClass('nav-open') ) {
											self.elements.body.animate({
												scrollTop : 0
											},250);
										}
									},
				_close :			function() {
										self.elements.body.removeClass('nav-open');
									}

			}
		});

	});

})(jQuery);
