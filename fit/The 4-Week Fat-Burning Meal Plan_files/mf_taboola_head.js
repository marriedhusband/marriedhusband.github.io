var $j = jQuery.noConflict();
(function ($j) {
    $j(document).ready(function(){
      window._taboola = window._taboola || [];
    _taboola.push(Drupal.settings.mf_taboola);
    !function (e, f, u) {
        e.async = 1;
        e.src = u;
        f.parentNode.insertBefore(e, f);
    }
    (
        document.createElement('script'),
        document.getElementsByTagName('script')[0],
        '//cdn.taboola.com/libtrc/americanmedia-network/loader.js'
    );
  });
}(jQuery));