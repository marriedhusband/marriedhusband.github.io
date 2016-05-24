(function($) {
  Drupal.behaviors.workout_center_search = {
    attach: function(context, settings) {
      //If this is mobile, show the loading link
      if (zeus.isMobile()) {
        $('#wc-open-filter').show();
        var parent = $('#wc-filters');
        if($.cookie) {
          var cookieValue = $.cookie("openfacetfilter");
          if(cookieValue === '1'){
            $('#wc-open-filter').text('Close Filters');
            parent.addClass('open');
          }
          else{
            parent.hide();
          }
        }else{
          parent.hide();
        }
        
        $('#wc-open-filter').on('click', function(e){
          e.preventDefault();
          var element = $(this);
          parent.slideToggle( "fast", function() {
            if(parent.hasClass('open')){
              if($.cookie) {
                $.cookie("openfacetfilter", 0);
              }
              element.text('Open Filters');
              parent.removeClass('open');
            }
            else{
              if($.cookie) {
                $.cookie("openfacetfilter", 1);
              }
              element.text('Close Filters');
              parent.addClass('open');
            }
          });
        });
      }

        if(jQuery().masonry){
          zeus.wc_masonry = new Masonry('.masonry', {
            itemSelector: '.card',
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer',
            percentPosition: true
          });

          var loadMoreSlot = 1;
          var page_count = 1; // counting ads page views
          if (typeof page_no !== 'undefined') {
            page_count = page_no;
          }

          $(window).bind('views_load_more.new_content', function () {
            // Generate next slot name
            var slotName = generateNextSlotName();
            wcAdRefresh(slotName, page_count);
            // Reload the masonry view after "load more"
            zeus.wc_masonry.reloadItems();
            zeus.wc_masonry.layout();
          });
          $('#views-exposed-form-workout-center-search-panel-pane-1').ajaxComplete(function (event, xhr, settings) {
            if (typeof settings.iframeSrc !== 'undefined') {
              //Unique to ajax submission.
              if (typeof Drupal.settings.workout_center.adunit !== 'undefined') {
                googletag.pubads().refresh([googletag.slots["wc_in_search"]]);
              }
            }
          });
          if (context == document) {
            var wcAdRefresh = _.throttle(function (slotName, page_count) {
              if (typeof settings.workout_center.adunit !== 'undefined') {
                // Define the slot itself, call display() to
                // register the div and refresh() to fetch ad.
                googletag.cmd.push(function () {
                  var slot = googletag.defineSlot(settings.workout_center.adunit, JSON.parse(settings.workout_center.adsize), slotName).addService(googletag.pubads());

                  // add page view counter to DFP targeting
                  if (jQuery.cookie("zeus_ads_pv") != null) {
                    page_count = jQuery.cookie("zeus_ads_pv");
                  }
                  slot.setTargeting("pv", page_count);
                  // --------------------------------------

                  jQuery.each(settings.workout_center.targeting, function (index, obj) {
                    if (obj['target'] === 'tile' || obj['target'] === 'pv') {
                      return true;
                    }
                    slot.setTargeting(obj['target'], obj['value']);
                  });
                  try {
                    yieldbot.setSlotTargeting(slotName, slot);
                  } catch (e) {
                  }
                  // Display has to be called before
                  // refresh and after the slot div is in the page.
                  googletag.display(slotName);
                  googletag.pubads().refresh([slot]);
                });
              }
            }, 300, {trailing: false});
          }
          function generateNextSlotName() {
            if(typeof settings.workout_center.adunit !== 'undefined') {
              var id = loadMoreSlot++;
              return settings.workout_center.placeholder + '_' + id;
            }
            return false;
          }
        }


      if($.mobile){
        $( "#wc-search-wrapper .form-text" ).textinput({
          clearBtn: true
        });
      }
    }
  };
})(jQuery);
;
