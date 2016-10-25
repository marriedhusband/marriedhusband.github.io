(function ($) {
  Drupal.behaviors.mf_rotator = {
    attach: function (context, settings) {
      $('.rotator ul', context).once('mf_rotator', function () {
        var rotator = $(this);

        var conf = {
          direction: 'left',
          responsive: true,
          items: {
            visible: 1,
            width: 384,
            height: 333
          },
          scroll: {
            duration: 1000,
            timeoutDuration:  parseInt(settings.mf_rotator_speed)
          },
          pagination : '#rotator-pager',
          prev:'#rotator-prev',
          next:'#rotator-next',
          swipe: {
            onMouse: true,
            onTouch: false
          }
        };

        rotator.carouFredSel(conf);
      });
    }
  };
})(jQuery);
