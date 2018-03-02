(function($){

	var $window = $(window);


	// ADD ELEMENTS
	$window.on(window.object_name+'._cache_elements', function(object_event, self) {
		self.methods._add('elements', {
			triggers : '[data-trigger]'
		});

	});

	// ADD METHODS
	$window.on(window.object_name+'._add_methods', function(object_event, self) {

		self.methods._add('methods', {
			_trigger :	function(e) {
							var $this = $(this),
								trigger = $this.data('trigger');

							if( trigger ) {
								self.elements.body.trigger(window.object_name+'._'+trigger);

								var method = window.object_name + '.methods.' + trigger.replace(/-/g, '.');

								try {
									method = method.split('.').reduce(function (object, property) {
										return object[property];
									}, window);
								}

								catch(err) {
									console.log('Method Not Found: '+ method);
								}


								if( typeof method === 'function' ) {
									method(e,$this);
								}
							}
						}
		});

	});

	// ADD EVENTS
	$window.on(window.object_name+'._setup_events', function(object_event, self) {

		self.methods._add('events', {
			'_trigger' :	{
				element :	self.elements.triggers,
				event :		'click._trigger',
				action :	self.methods._trigger
			}
		});

	});

})(jQuery);
