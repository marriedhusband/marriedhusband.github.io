(function ($) {
  //filmstrip rotator
  Drupal.behaviors.filmstrip = {
    attach : function (context, settings) {
      $('.rotator-filmstrip ul', context).once('mf_rotator_filmstrip', function () {
        var conf = {
          items: {
            width: 100,
            visible: {
              min: 2,
              max: 5
            }
          },
          scroll: {
            duration: 1000,
            timeoutDuration: parseInt(settings.mf_filmstrip_speed)
          },
          responsive: true,
          width: 390,
          height: 120,
          pagination:'#filmstrip-pager',
          swipe: {
            onMouse: true,
            onTouch: false
          },
          align: 'center'
        };       
        $(this).carouFredSel(conf);
      });
    }
  };
})(jQuery);

