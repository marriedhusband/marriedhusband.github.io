/**
 * @file
 * Fire callbacks for media query breakpoints
 *
 * To use this file enable the OnMediaQuery.js polyfill in your subthemes
 * appearance settings - this will load the required plugin and this file.
 *
 * This allows you to write context (media query) specific JS without hard
 * coding the media queries, aka like matchMedia. Each context matches the
 * media queries you set in theme settings (by adding the font-family
 * declarations to the responsive layout CSS).
 *
 * SEE: https://github.com/JoshBarr/js-media-queries (really, go look, lots of
 * useful documentation available).
 *
 * IMPORTANT: do not rename or move this file, or change the directory name!
 */
 
var leader = true;
(function($) {
var queries = [
  // Smartphone
  {
    context: ['smartphone_portrait', 'smartphone_landscape', 'smalltouch_portrait', 'smalltouch_landscape'],
    call_in_each_context: false,
    callback: function() {
      // Debug
      //console.log('smartphone');
      convertImages('primary');

//Load More button for Today's News
      var next_block_m = $('#block-mf-homepage-mf-homepage-rotator'),
        height_element = new Array(),
        lis = $('ul.blog-items li', '#block-mf-homepage-mf-homepage-blogs');

      for (i = 0; i <= lis.length - 1; i++) {
        height_element[i] = $('#block-mf-homepage-mf-homepage-blogs ul.blog-items li.item-' + i).outerHeight(true);
        $('#block-mf-homepage-mf-homepage-blogs ul.blog-items li.item-' + i).attr('data-height', height_element[i]);
      }

      $('#block-mf-homepage-mf-homepage-blogs ul.blog-items').height();
      next_block_m.css(
        "margin-bottom", ($('#block-mf-homepage-mf-homepage-blogs').outerHeight() + 30)
      );

      $('#blog-more').click(function () {
        if ($('ul.blog-items li.hidden', '#block-mf-homepage-mf-homepage-blogs').length > 0) {
          if ($('ul.blog-items li.hidden', '#block-mf-homepage-mf-homepage-blogs').length == 1) {
            $(this).addClass('grey-button');
          }
          var opening_li = $('ul.blog-items li.visible:last', '#block-mf-homepage-mf-homepage-blogs').next(),
            new_height = opening_li.attr('data-height');

          $('#block-mf-homepage-mf-homepage-blogs ul.blog-items').animate({
            'height': '+=' + new_height
          }, 300);
          opening_li.toggleClass('hidden visible');
          next_block_m.animate({
            'margin-bottom': '+=' + new_height
          }, 300);
        }
        return false;
      });


// American Media nav changed to select
      $("<select />").appendTo('#block-menu-menu-american-media-inc--2');
      $('#block-menu-menu-american-media-inc--2 ul.menu a').each(function() {
        var el = $(this);
        $("<option />", {
          "value"   : el.attr("href"),
          "text"    : el.text()
        }).appendTo("nav select");
      });
      $('#block-menu-menu-american-media-inc--2 select').change(function() {
        window.location = $(this).find("option:selected").val();
      });


//Added mobile jpanelmenu
      Drupal.behaviors.mobileJpanelMenu = {
        attach: function (context,settings) {
          // Instantiate the jpanelmenu
          var headerLeftPos = $("#header").position().left;
          var jPM = $.jPanelMenu({
            openPosition: '23rem',
            duration: 400,
            closeOnContentClick: true,
            afterOpen: function () {
              $('.page-wrapper').addClass('panel-opened');
            },
            afterClose:function () {
              $('.page-wrapper').removeClass('panel-opened');
            },
            beforeOpen: function () {
              $('#header').animate({left: '23rem'}, 300, function(){});
            },
            beforeClose: function () {
              $('#header').animate({left: headerLeftPos}, 300, function(){});
            }
          });

            //Turn jpanelmenu on
            jPM.on();
          $('.panel-opened #logo a').click(function(e){
            e.preventDefault();
          });
        }
      };

//Hover class on click
      $('.mobile-hover')
        .bind('mouseover', function(){
          return false;
        })
        .click(function(){
          var hovered = $(this);
          $(this).addClass('hover');
          setTimeout(function(){
            $(hovered).removeClass('hover');
          }, 300);
        });

      //Check letter availability of Authors on Topics Page
      $('ul.topics-alphabet a').each(function(){
        var letter_href = $(this).attr('href');
        letter_href = $(letter_href);
        if(letter_href.length<=0) {
          $(this).addClass('inactive').removeAttr('href');
        }
      });

      // Add mobile content tables wrappers
      Drupal.behaviors.mensfitnessMobileTables = {
        attach: function (context, settins) {
          var $contentContainer = $('.field-name-body','.node-content');
          if( $contentContainer.length ) {
            var $nodeTables = $contentContainer.find('table');
            if ($nodeTables.length) {
              $nodeTables.each(function(index,element){
                $(this).wrap('<div class="mobile-table-wrapper noSwipe"></div>');
              });
            }
          }
        }
      }
      // Changing site header position depending of page scroll.
      Drupal.behaviors.mobileHeaderPosition = {
        attach: function (context, settings) {
          var lastScrollTop = 0,
          topAd = $('.region-top-ad-mobile'),
          header = (topAd.length) ? topAd.parent() : $('#header'),
          headerPosition = header.position();
          if (headerPosition) var headerTop = headerPosition.top;
          if (topAd.length) {
            topAd.siblings().filter(function() {}).css('position', 'static');
          }
          $(window).scroll(function(e) {
            if ($('#main-nav-bar.active').length) {
              return;
            }
            var newScrollTop = $(this).scrollTop();
            if (newScrollTop > lastScrollTop) {
              if (headerTop !== -1 * header.height()) {
                headerTop = Math.max(headerTop - newScrollTop + lastScrollTop, -1 * header.height());
              }
            }
            else {
              if (newScrollTop < topAd.height()) {
                headerTop = Math.min(-1 * newScrollTop, 0);
              }
              else if (headerTop  < -1 * topAd.height()) {
                headerTop = Math.min(headerTop - newScrollTop + lastScrollTop, -1 * topAd.height());
              }
            }
            if (newScrollTop <=0) {
              headerTop = 0;
            }
            header.css('top', headerTop + 'px');
            lastScrollTop = newScrollTop;
          });
        }
      };
    }
  },
  // portrait only
  {
    context: 'smartphone_portrait',
    callback: function() {
      // Debug
      console.log('smartphone portrait');
    }
  },
  // landscape only
  {
    context: 'smartphone_landscape',
    callback: function() {
      // Debug
      console.log('smartphone_landscape ');
    }
  },


  // Tablet
  {
    context:['tablet_portrait', 'tablet_landscape'],
    call_in_each_context:false,
    callback:function () {
      // Debug
      console.log('tablet');

//Load More button for Today's News
      var next_block_t = $('#block-mf-homepage-mf-homepage-filmstrip');
      $('#blog-more').click(function () {
        if($('ul.blog-items li.hidden', '#block-mf-homepage-mf-homepage-blogs').length > 0) {
          if($('ul.blog-items li.hidden', '#block-mf-homepage-mf-homepage-blogs').length == 1) {
            $(this).addClass('grey-button');
          }
          $('ul.blog-items li.visible:last', '#block-mf-homepage-mf-homepage-blogs').next().toggleClass('hidden visible');

          var margin_increment_t = $('ul.blog-items li.visible', '#block-mf-homepage-mf-homepage-blogs').height();
          next_block_t.css(
            "margin-bottom", "+=" + margin_increment_t
          );
        }
        return false;
      });

      convertImages('secondary');

//Hover class on click
      $('.mobile-hover')
        .bind('mouseover', function(){
          return false;
        })
        .click(function(){
        var hovered = $(this);
        $(this).addClass('hover');
        setTimeout(function(){
          $(hovered).removeClass('hover');
        }, 300);
      });

      //Check letter availability of Authors on Topics Page
      $('ul.topics-alphabet a').each(function(){
        var letter_href = $(this).attr('href');
        letter_href = $(letter_href);
        if(letter_href.length<=0) {
          $(this).addClass('inactive').removeAttr('href');
        }
      });

      // Add tablet content tables wrappers
      Drupal.behaviors.mensfitnessTabletTables = {
        attach: function (context, settins) {
          var $contentContainer = $('.field-name-body','.node-content');
          if( $contentContainer.length ) {
            var $nodeTables = $contentContainer.find('table');
            if ($nodeTables.length) {
              $nodeTables.each(function(index,element){
                $(this).wrap('<div class="tablet-table-wrapper"></div>');
              });
            }
          }
        }
      };

    }
  },
  // portrait only
  {
    context: 'tablet_portrait',
    callback: function() {
      // Debug
      console.log('tablet_portrait');
    }
  },
  // landscape only
  {
    context: 'tablet_landscape',
    callback: function() {
      // Debug
      console.log('tablet_landscape');
    }
  },

  // Standard desktop context
  {
    context: 'standard',
    callback: function() {
      // Debug
      //console.log('standard desktop');
      convertImages('secondary');
    }
  }
];

var convertImages = function (type) {
	console.log('Switch' + type);
  $('img').each(function () {
    $(this)
      .attr('width', $(this).data(type + '-width'))
      .attr('height', $(this).data(type + '-height'))
      .attr('src', $(this).data(type + '-image'));
  });
}

//new header animation

$.fn.inView = function(){
    //Window Object
    var win = $(window);
    //Object to Check
    obj = $(this);
    //the top Scroll Position in the page
    var scrollPosition = win.scrollTop();
    //the end of the visible area in the page, starting from the scroll position
    var visibleArea = win.scrollTop() + win.height();
    //the end of the object to check
    var objEndPos = (obj.offset().top + obj.outerHeight());
    return(visibleArea >= objEndPos && scrollPosition <= objEndPos ? true : false)
};
// Go!
MQ.init(queries);
}(jQuery));
