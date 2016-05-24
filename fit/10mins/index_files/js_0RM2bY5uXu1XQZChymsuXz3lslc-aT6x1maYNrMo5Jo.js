var flyout_toggle = '';
var flyout = '';

(function ($) {

Drupal.behaviors.zeus_sharebar = {
  attach: function (context, settings) {
    jQuery(window).load(function() {
        // Infinite scroll settings
        var loadMoreOnScroll = 0;
        if (typeof Drupal.settings.zeus_utils_load_more !== 'undefined') {
            loadMoreOnScroll = Drupal.settings.zeus_utils_load_more.iscroll;
        }

        // If infinite scroll is not enabled, add sticky behaviour for sharebar here
        // The zeus load more module handles the stickiness when infinite scroll is enabled
        var sticky = settings.zeus_sharebar.sticky;
        if (!loadMoreOnScroll && sticky) {
           /* vertical sharebar sticky */
            var sharebar_top = settings.zeus_sharebar.top;
            var sharebar_bottom = settings.zeus_sharebar.bottom;
            sharebar_top = jQuery('#'+sharebar_top);
            sharebar_bottom = jQuery('#'+sharebar_bottom);

            var el = jQuery('.sharebar.vertical');
            var headerHeight = jQuery(sharebar_top).outerHeight();
            var extraSpace = 20;
            var stickyTop = el.offset().top;

            // if sharebar present for this content
            if (el.length) {
                if (sharebar_bottom.length && sharebar_bottom.length) {
                    var stickyTop = el.offset().top;
                    var stickyHeight = el.height();
                    var extraMargin = headerHeight + extraSpace;
                    var limit = sharebar_bottom.offset().top - stickyHeight - extraMargin;

                    // Move the sharebar on scroll
                    jQuery(window).bind("scroll.sharebar", function() {

                        var windowTop = jQuery(window).scrollTop() + extraMargin;
                        if (stickyTop > windowTop) {
                            el.css({ position: 'absolute', top: "" });
                        }
                        else {
                            if (limit < windowTop) {
                                var diff = (limit - windowTop) + extraMargin;
                                el.css({ position: 'fixed', top: diff});
                            } else {
                                el.css({ position: 'fixed', top: extraMargin});
                            }
                        }
                    });
                }
            }

            // Add sticky behaviour for Horizontal format sharebar
            var elH = $('.sharebar.horizontal');
            var outer = $('#content');
            if (elH.filter(":visible").length) {
                elH.find('li:first-child').addClass("first-item");
                elH.find('li:last-child').addClass("last-item");

                //var sharebar_bottomH = $('article.full').offset().top+$('article.full').outerHeight(true);
                // bottom most point will be article body text or filed under tags section
                // as in slideshow
                var sharebarBHEl = outer.find('article section.field-body');
                if (!sharebarBHEl.length) {
                    sharebarBHEl = outer.find('.field-tags');
                }
                if (!sharebarBHEl.length) {
                    sharebarBHEl = outer.find('.pane-related-content');
                }
                if (sharebarBHEl.length) {
                    var sharebar_bottomH = sharebarBHEl.offset().top + sharebarBHEl.outerHeight(true);

                    var stickyTopH = elH.offset().top;
                    var stickyHeightH = elH.height();
                    var headerHeightH = sharebar_top.outerHeight();

                    var extraSpaceH = 0;
                    var limitH = sharebar_bottomH - stickyHeightH - headerHeightH;

                    $(window).scroll(function() {

                        var windowTop = $(window).scrollTop() + headerHeightH;

                        if (stickyTopH < windowTop) {
                          elH.css({ top: headerHeightH + extraSpaceH});
                          elH.addClass('floating');
                        }
                        else {
                          elH.css({ top: "" });
                          elH.removeClass('floating');
                        }

                        if (limitH < windowTop) {
                            elH.css({ top: "" });
                            elH.removeClass('floating');
                        }
                    });
                }
            }
        }
    });

    // Vertical subscribe flyout
    jQuery('#content').on('click', '.flyout-toggle, .flyout-close', function(e) {
      e.preventDefault();
      flyout = $(this).closest('li.subscribe').find('.flyout-content');
      if (!flyout.is(":visible")) {
        $(this).addClass('open');
        //Krux event tracking
        if(settings.zeus_sharebar.pixel_tracking['subscribe'] !== 'undefined'){
          (new Image()).src = settings.zeus_sharebar.pixel_tracking['subscribe'];
        }
      } else {
        $(this).removeClass('open');
      }
      flyout.toggle(300, function() {
        // callback after flyout animation
      });
    });

    // Sharebar window pop-ups
    $('.facebook a, .twitter a, .googleplus a, .pinterest a').click(function(e) {
        e.preventDefault();
        if (!$(this).hasClass('disabled')) {
          //Krux event tracking
          var tracker = $(this).parent().attr('class');
          if(settings.zeus_sharebar.pixel_tracking[tracker] !== 'undefined'){
            (new Image()).src = settings.zeus_sharebar.pixel_tracking[tracker];
          }

          //if(settings.zeus_sharebar.pixel_tracking.)
            window.open($(this).attr('href'), 'socialShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        }
        return false;
    });
    
    

  }
};

})(jQuery);
;
/**
 * @file
 * Used to add a class to the top level element when an external font is ready.
 */

/* global Drupal:false */

/**
 * Run the check.
 *
 * @param string key
 *   The class name to add to the html tag.
 * @param string value
 *   The font name.
 */
function advagg_run_check(key, value) {
  // Only run if window.FontFaceObserver is defined.
  if (window.FontFaceObserver) {
    new window.FontFaceObserver(value).check().then(function () {
      // Only alpha numeric value.
      key = key.replace(/[^a-zA-Z0-9\-]/g, '');

      // Set Class.
      if (Drupal.settings.advagg_font_no_fout != 1) {
        window.document.documentElement.className += ' ' + key;
      }

      // Set Cookie for a day.
      if (Drupal.settings.advagg_font_cookie == 1) {
        expire_date = new Date(new Date().getTime() + 86400 * 1000);
        document.cookie = 'advaggfont_' + key + '=' + value + ';'
          + ' expires=' + expire_date.toGMTString() + ';'
          + ' path=/;'
          + ' domain=.' + document.location.hostname + ';';
      }
    }, function() {});
  }
  else {
    // Try again in 100 ms.
    window.setTimeout(function() {
      advagg_run_check(key, value);
    }, 100);
  }
}

/**
 * Get the list of fonts to check for.
 */
function advagg_font_add_font_classes_on_load() {
  for (var key in Drupal.settings.advagg_font) {
    var html_class = (' ' + window.document.documentElement.className + ' ').indexOf(' ' + key + ' ');
    // If the class already exists in the html element do nothing.
    if (html_class === -1) {
      // Wait till the font is downloaded, then set cookie & class.
      advagg_run_check(key, Drupal.settings.advagg_font[key]);
    }
  }
}

/**
 * Make sure jQuery and Drupal.settings are defined before running.
 */
function advagg_font_check() {
  if (window.jQuery && window.Drupal && window.Drupal.settings) {
    advagg_font_add_font_classes_on_load();
  }
  else {
    // Try again in 20 ms.
    window.setTimeout(advagg_font_check, 20);
  }
}

// Start the process.
advagg_font_check();
;
