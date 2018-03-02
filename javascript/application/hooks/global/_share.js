(function($){
	
	var $window = $(window);
	
			
	// ADD ELEMENTS
	$window.on(window.object_name+'._cache_elements', function(object_event, self) {
		
		self.methods._add('elements', {
			share_facebook : '[data-share="facebook"]'
		});
		
	});
	
	// ADD METHODS
	$window.on(window.object_name+'._add_methods', function(object_event, self) {
		
		self.methods._add('methods', {
			share :	{
				_facebook :	function(e) {
								e.preventDefault();
								var $this = $(this);
								window.FB.ui({
									method: 'share',
									href: $this.data('share-url')
								});
							},
				_twitter :	function() {
								
							}
			}
		});
		
	});
	
	// ADD EVENTS
	$window.on(window.object_name+'._setup_events', function(object_event, self) {
		
		self.methods._add('events', {
			'click.share._facebook' :	{
				element :	self.elements.share_facebook,
				action :	self.methods.share._facebook
			}
		});
		
	});
	
/*
	// RUN ON DOCUMENT READY
	$window.on(window.object_name+'._document_ready', function(object_event, self) {
		console.log(object_event);
		console.log(self);
		console.log('on object document read');
	});
*/
	
})(jQuery);