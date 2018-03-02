(function($){
	
	var $window = $(window);
	
			
	// ADD ELEMENTS
	$window.on(window.object_name+'._cache_elements', function(object_event, self) {
		
		self.methods._add('elements', {
			
			// GENERAL
			window : window,
			document : document,
			html : 'html',
			body : 'body',
			header : 'header',
			footer : 'footer',
			
			// BACK TO TOP
			back_to_top : '.back-to-top',
			stop_propagation : '.stop-propagation'
		});
		
	});
	
	// ADD METHODS
	$window.on(window.object_name+'._add_methods', function(object_event, self) {
		
		self.methods._add('methods', {
			_scroll_to :			function(position,duration){
										
										self.elements.body.add(self.elements.html).animate({
											scrollTop	: position
										}, {
											duration	: duration,
											easing		: 'easeOutQuint'
										});
										
									},
			_back_to_top :			function(event){
								
										event.preventDefault();
										
										self.methods._scroll_to(0,550);
										
									},
			_keydown_events :		function(e) {
										
										var keycode = e.keyCode;
										
										switch( keycode ) {
											// ESC
											case 27 :
														self.elements.body.trigger(window.object_name+'.html_esc');
														break;
										}
											
									},
			_html_click_events :	function() {
										self.elements.window.trigger(window.object_name+'.html_click', self);
										
									},
			_stop_propagation :		function(e) {
										e.stopPropagation();
									},
			_resize_animation :		function(){
										self.elements.body.addClass('resizing');
										setTimeout(function(){
											self.elements.body.removeClass('resizing');
										}, 100);
									},
			_get_query_param : 		function( name, url ) {
										
										if (!url) {
											url = window.location.href;
										}
										
										name = name.replace(/[\[\]]/g, "\\$&");
										
										var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
										results = regex.exec(url);
										
										if (!results) {
											return null;
										}
										
										if (!results[2]) {
											return '';
										}
										
										return decodeURIComponent(results[2].replace(/\+/g, " "));
									}
		});
		
	});
	
	// ADD EVENTS
	$window.on(window.object_name+'._setup_events', function(object_event, self) {
		
		self.methods._add('events', {
			
			// BACK TO TOP
			'click._back_to_top' :	{
				element :	self.elements.back_to_top,
				action :	self.methods._back_to_top
			},
			'keydown._keydown_events' :	{
				element :	self.elements.html,
				action :	self.methods._keydown_events
			},
			'click._html_click_events' :	{
				element :	self.elements.html,
				action :	self.methods._html_click_events
			},
			'resize._resize_animation' :	{
				element :	self.elements.window,
				action :	self.methods._resize_animation
			}
								
		});
		
	});
	
	// RUN ON DOCUMENT READY
	$window.on(window.object_name+'._document_ready', function(object_event, self) {
		self.elements.body.delegate( '.stop-propagation', 'click._stop_propagation', self.methods._stop_propagation );
	});
	
})(jQuery);

document.documentElement.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, false);