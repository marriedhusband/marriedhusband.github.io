(function ($) {
  Drupal.behaviors.mfTaboolaNetSeer = {
    attach: function (context, settings) {

      // Switch off the script if hide in IE turned on in Settings.
      if ( Drupal.behaviors.mfTaboolaNetSeer.hideInIE() ) {
        return;
      }

      // If desktop layout.
      if (window.innerWidth > 1024) {
        // First NetSeer script.
        var b = document.createElement("script");
        b.type = "text/javascript";
        b.text = '\n' + 'netseer_tag_id="' + settings.mfTaboola.netseer.tag_id +'";';
        document.getElementsByTagName("head")[0].appendChild(b);
        // Second NetSeer script.
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.src = "http://ps.ns-cdn.com/dsatserving2/scripts/ns_vmtag.js";
        document.getElementsByTagName("head")[0].appendChild(a);
      }
    },
    hideInIE: function() {
      // Check IE 6-10
      var isIE = document.all && document.compatMode;
      // Check IE 11
      var isIEEl = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
      if ( isIE || isIEEl ) {
        if (Drupal.settings.mfTaboola.netseer.in_ie === '0') {
          return true;
        }
      }
    }
  };
})(jQuery);