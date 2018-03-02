(function($){

	var $window = $(window);


	// ADD ELEMENTS
	$window.on(window.object_name+'._cache_elements', function(object_event, self) {

		self.methods._add('elements', {

            scroll_effect_start : '.scroll-effect-start',

			phone : '.phone',
			phone_shadow : '.phone-shadow',
			phone_body : '.phone-body',
			phone_main : '.phone-main',
			phone_ui_1 : '.phone-ui-1',
			phone_ui_2 : '.phone-ui-2',

			laptop : '.laptop',
			laptop_body : '.laptop-body',
			laptop_ui_1 : '.laptop-ui-1',
			laptop_ui_2 : '.laptop-ui-2',
			laptop_ui_3 : '.laptop-ui-3'

		});

	});

	// ADD METHODS
	$window.on(window.object_name+'._add_methods', function(object_event, self) {

		self.methods._add('methods', {
			home : {
				_setup :	function() {
								setTimeout(function(){
									self.elements.body.addClass('loaded');
								}, 250);
							},
                scroll :	{
                    _phone :    function() {

                                    var phone_effect_start = self.elements.scroll_effect_start.filter('[data-effect="phone"]').offset().top;
                                    if( window.pageYOffset + window.outerHeight > phone_effect_start ) {
                                        var phone_max = 100,
                                            phone_move = window.pageYOffset * 0.1;
                                        phone_move = phone_move < 0 ? 0 : phone_move;
                                        phone_move = phone_move > phone_max ? phone_max : phone_move;
                                        self.elements.phone_main.css( 'transform', 'translate3d(0, '+ -phone_move +'px, 0)' );

                                        var ui_1_max_y = 250,
                                            ui_1_move_y = window.pageYOffset * 0.25;
                                        ui_1_move_y = ui_1_move_y < 0 ? 0 : ui_1_move_y;
                                        ui_1_move_y = ui_1_move_y > ui_1_max_y ? ui_1_max_y : ui_1_move_y;

                                        var ui_1_max_x = 25,
                                            ui_1_move_x = window.pageYOffset * 0.025;
                                        ui_1_move_x = ui_1_move_x < 0 ? 0 : ui_1_move_x;
                                        ui_1_move_x = ui_1_move_x > ui_1_max_x ? ui_1_max_x : ui_1_move_x;
                                        self.elements.phone_ui_1.css( 'transform', 'translate3d('+ ui_1_move_x +'px, '+ -ui_1_move_y +'px, 0)' );

                                        var ui_2_max_y = 25,
                                            ui_2_move_y = window.pageYOffset * 0.025;
                                        ui_2_move_y = ui_2_move_y < 0 ? 0 : ui_2_move_y;
                                        ui_2_move_y = ui_2_move_y > ui_2_max_y ? ui_2_max_y : ui_2_move_y;

                                        var ui_2_max_x = 200,
                                            ui_2_move_x = window.pageYOffset * 0.2;
                                        ui_2_move_x = ui_2_move_x < 0 ? 0 : ui_2_move_x;
                                        ui_2_move_x = ui_2_move_x > ui_2_max_x ? ui_2_max_x : ui_2_move_x;

                                        self.elements.phone_ui_2.css( 'transform', 'translate3d('+ -ui_2_move_x +'px, '+ -ui_2_move_y +'px, 0)' );

                                    }

                                },
                    _laptop :   function() {

                                    var laptop_effect_start = self.elements.scroll_effect_start.filter('[data-effect="laptop"]').offset().top;
                                    if(  window.pageYOffset + window.innerHeight > laptop_effect_start ) {
                                        var ui_opacity = (1 - (laptop_effect_start - window.pageYOffset) / 1000) * 1.5;
                                        ui_opacity = ui_opacity < 0 ? 0 : ui_opacity;
                                        ui_opacity = ui_opacity > 1 ? 1 : ui_opacity;

                                        var ui_1_max_x = 160,
                                            ui_1_move_x = window.pageYOffset * 0.11;
                                        ui_1_move_x = ui_1_move_x < 0 ? 0 : ui_1_move_x;
                                        ui_1_move_x = ui_1_move_x > ui_1_max_x ? ui_1_max_x : ui_1_move_x;

                                        var ui_1_max_y = 160,
                                            ui_1_move_y = window.pageYOffset * 0.11;
                                        ui_1_move_y = ui_1_move_y < 0 ? 0 : ui_1_move_y;
                                        ui_1_move_y = ui_1_move_y > ui_1_max_y ? ui_1_max_y : ui_1_move_y;
                                        self.elements.laptop_ui_1.css( 'transform', 'translate3d('+ -ui_1_move_x +'px, '+ -ui_1_move_y +'px, 0)' ).css('opacity', ui_opacity);

                                        var ui_2_max_y = 125,
                                            ui_2_move_y = window.pageYOffset * 0.07;
                                        ui_2_move_y = ui_2_move_y < 0 ? 0 : ui_2_move_y;
                                        ui_2_move_y = ui_2_move_y > ui_2_max_y ? ui_2_max_y : ui_2_move_y;

                                        var ui_2_max_x = 125,
                                            ui_2_move_x = window.pageYOffset * 0.07;
                                        ui_2_move_x = ui_2_move_x < 0 ? 0 : ui_2_move_x;
                                        ui_2_move_x = ui_2_move_x > ui_2_max_x ? ui_2_max_x : ui_2_move_x;
                                        self.elements.laptop_ui_2.css( 'transform', 'translate3d('+ ui_2_move_x +'px, '+ ui_2_move_y +'px, 0)' ).css('opacity', ui_opacity);

                                        var ui_3_max_y = 150,
                                            ui_3_move_y = window.pageYOffset * 0.07;
                                        ui_3_move_y = ui_3_move_y < 0 ? 0 : ui_3_move_y;
                                        ui_3_move_y = ui_3_move_y > ui_3_max_y ? ui_3_max_y : ui_3_move_y;

                                        self.elements.laptop_ui_3.css( 'transform', 'translate3d(0, '+ ui_3_move_y +'px, 0)' ).css('opacity', ui_opacity);

                                    }

                                }
                }
            }
		});

	});

	// ADD EVENTS
	$window.on(window.object_name+'._setup_events', function(object_event, self) {

		self.methods._add('events', {
			'scroll.home.scroll._phone' :	{
				element :	self.elements.window,
				action :	self.methods.home.scroll._phone
			},
			'scroll.home.scroll._laptop' :	{
				element :	self.elements.window,
				action :	self.methods.home.scroll._laptop
			}
		});

	});


	// RUN ON DOCUMENT READY
	// $window.on(window.object_name+'._document_ready', function(object_event, self) {
	// 	//self.methods.home._setup();
	// });

})(jQuery);
