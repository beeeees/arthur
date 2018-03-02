(function($, window, undefined){
  var Global = {
    elements: {},
    selectors: {
      body: 'body',
    },
    _getElements: function(){
      for( var key in this.selectors ) {
          this.elements[key] = $( this.selectors[key] );
      }
      this.elements.body = $('body');
      this.elements.window = $(window);
      this.elements.toBeAnimated = $('[data-anim="fade-up"]');
    },

    _bindEvents: function() {
      var self = this;

      $(window).on("scroll", function() {
      });

    },

    _bindVendors: function(){
      var self = this;
    },

    checkView: function(elems) {
      for (var i = 0; i < elems.length; i++) {
        var elem = elems[i];
        if(elem.getBoundingClientRect().top < window.innerHeight * 0.7) {
          elem.classList.add('active');
        }
      }
    },

    initialize: function() {
      this._getElements();
      this._bindEvents();
      this._bindVendors();
      this.checkView(this.elements.toBeAnimated);
    }
  };

  // Send to global namespace (optional)
  window.Global = Global;

  // DOM Ready
  $(function(){
    Global.initialize();
  });


  // Deferred loading (window.load)
  // $(window).on('load', function(){
  // });

})(jQuery, window, null);
