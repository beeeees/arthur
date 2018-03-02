(function($){
	
	var $window = $(window);
	
			
	// ADD ELEMENTS
	$window.on(window.object_name+'._cache_elements', function(object_event, self) {
		
		self.methods._add('elements', {
			foo : 'body'
		});
		
	});
	
	// ADD METHODS
	$window.on(window.object_name+'._add_methods', function(object_event, self) {
		
		self.methods._add('methods', {
			run_foo :	function(e) {
							console.log(e.data.foo);
						}
		});
		
	});
	
	// ADD EVENTS
	$window.on(window.object_name+'._setup_events', function(object_event, self) {
		
		self.methods._add('events', {
			'click.run_foo' :	{
				element :	self.elements.foo,
				action :	self.methods.run_foo,
				data :		{
								foo : 'bar'
							}
			}
		});
		
	});
	
	// RUN ON DOCUMENT READY
	$window.on(window.object_name+'._document_ready', function(object_event, self) {
		console.log(object_event);
		console.log(self);
		console.log('on object document read');
	});
	
})(jQuery);