(function($) {
  Drupal.behaviors.gif_stills = {
    attach: function (context, settings) {
      //If this is mobile, show the loading link
      if (zeus.isMobile()) {
        $('a.gif-still-swap').show();
        $('a.gif-still-swap').click(function(e) {
          e.preventDefault();
          var element = $(this);
          var image = $('#'+element.data('element-id'));
          var src = image.data("src-gif");
          element.addClass('gif-loading');
          image.on('load', function() {
            element.hide();
          });
          image.attr("src", src);
        });
      } else {
        $('img.gif-still-swap-img').each(function (){
          var image = $(this);
          var src = image.data("src-gif");
          image.attr("src", src);
        });
      }
    }
  };
})(jQuery);;
(function ($) {
  var idleCounter = 0,
      idleInterval = setInterval(timerIncrement, 60000),
      refresh = null,
      isVisible = true;

  function timerIncrement() {
    idleCounter++;
    if (idleCounter > 1) {
      clearInterval(idleInterval);
      clearInterval(refresh);
    }
  }

  function isAdVisible(wrapper) {
    return $('#' + wrapper).visible(true);
  }

  function refreshAd(wrapper, slot) {
    if (isAdVisible(wrapper) === true) {
      yieldbot.setSlotTargeting(wrapper, googletag.slots[slot]);
      googletag.pubads().refresh([googletag.slots[slot]]);
    }
  }

  var refreshAds = _.throttle(function(e) {
    if (isVisible && idleCounter <= 1) {
      refreshAd('dfp-ad-top_banner', 'top_banner');
      refreshAd('dfp-ad-300x250_advertisement_right_rail', '300x250_advertisement_right_rail');
    }
  }, 30000);

  var detectActivity = _.throttle(function (e) {
    if (idleCounter > 1) {
      idleCounter = 0;
      clearInterval(idleInterval);
      clearInterval(refresh);
      _.delay(refreshAds, 3000);
      idleInterval = setInterval(timerIncrement, 60000);
      refresh = setInterval(refreshAds, 30000);
    }
    else {
      idleCounter = 0;
    }
  }, 100);

  function onVisible() {
    // prevent double execution
    if (isVisible) {
      return;
    }

    isVisible = true;
    idleCounter = 0;
    _.delay(refreshAds, 3000);
    _.delay(function() {
      refresh = setInterval(refreshAds, 30000);
    }, 6200);
  }

  function onHidden() {
    // prevent double execution
    if (!isVisible) {
      return;
    }

    isVisible = false;
    clearInterval(refresh);
  }

  function handleVisibilityChange() {
    if (document.hidden && document.visibilityState === 'hidden') {
      onHidden();
    } else {
      onVisible();
    }
  }

  var $w = $(window), $d = $(document);
  $d.bind('visibilitychange', handleVisibilityChange);
  $d.bind('focus', handleVisibilityChange);
  $d.bind('blur', handleVisibilityChange);
  $w.bind('focus', handleVisibilityChange);
  $w.bind('blur', handleVisibilityChange);

  $d.ready(function() {
    $(this).bind('resize scroll mousemove', detectActivity);
    refresh = setInterval(refreshAds, 30000);
  });
})(jQuery);
;
