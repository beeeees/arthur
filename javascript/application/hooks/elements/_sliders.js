(function($){

	var $window = $(window);


	// ADD ELEMENTS
	$window.on(window.object_name+'._cache_elements', function(object_event, self) {

		self.methods._add('elements', {
			sliders : '.slider'
		});

	});

	// ADD METHODS
	$window.on(window.object_name+'._add_methods', function(object_event, self) {

		self.methods._add('methods', {
			vendors : {
				slider : function() {
					self.elements.sliders.slick({
						arrows : false,
						infinite : false,
						variableWidth : true
					});
				}
			}
		});

	});

	// RUN ON DOCUMENT READY
	$window.on(window.object_name+'._document_ready', function(object_event, self) {

		self.methods.vendors.slider();

	});

})(jQuery);
