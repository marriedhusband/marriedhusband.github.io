/*
 * New Responsive OpenBarre
 * 24/10/2014 - Mise en place du nouveau code
 */

(function( $ ) {
	'use strict';
	$(function() {
		$('html').addClass('js');
		$('#breadcrumb').addClass('nav-toggle-show');
		$('#openbarre').append($('#breadcrumb'));
		$('.js-show').removeClass('js-show');

		$('body').css('margin-top', $('#openbarre').height() + 'px');

    if ($.isFunction($().promise)) {
	    $('.icon-nav').on('click', function() {
		    $(this).parent().toggleClass('nav-toggle', 0, null).promise().done(function(){
		      $('body').css('margin-top', $('#openbarre').height() + 'px');
        });
      });
    } else {
      // TODO - Bruno > This condition must be removed after upgrading jQuery to a version higher than 1.4 see : http://api.jquery.com/promise/
	    $('.icon-nav').live('click', function() {
		    $(this).parent().toggleClass('nav-toggle', '');
	      $('body').css('margin-top', $('#openbarre').height() + 'px');
	    });
    }

		$('form.autoSubmit select').change(function() {
			this.form.submit();
		});

		window.onresize = function() {
			$('body').css('margin-top', $('#openbarre').height() + 'px');
		};

		// used for lang switch with <select>
		/*
		var lang = jQuery('html').attr('lang');
		if(lang){
			lang = lang.substring(0,2);
			var strLoading = {
				fr:'Chargement...',
				en:'Loading...',
				es:'Cargando...',
				it:'Caricamento...',
				de:'Ladend...',
				pt:'A carregar...'
			};

			jQuery('#openbarre form').submit(function() {
				window.location.href = jQuery(this).find(':selected').val();
				return false;
			});

			var ok = jQuery('form.autoSubmit input').hide();

			jQuery('form.autoSubmit select').change(function() {
				var opt = jQuery(this).find(':selected');
				if (jQuery(this).attr('id') == 'selectLang') {
					lang = opt.val();
				}
				opt.text(strLoading[lang] !== undefined ? strLoading[lang] : strLoading['fr']);
				jQuery(this).blur().addClass('loading').parents('form').submit();
			});
		}
		*/

		// Share buttons
		var pageTitle = document.title; //HTML page title
		var pageUrl = location.href; //Location of the page
		// pageTitle < 93 chars
		var pageTitleCut = pageTitle;
		if (pageTitle.length > 93) {
			pageTitleCut = pageTitle.substr(0, 93) + '...';
			}
		$('.button-wrap').click(function(event) {
			var shareName = $(this).attr('class').split(' ')[0]; //get the first class name of clicked element
			switch (shareName) {
				case 'facebook':
				var openLink = 'https://www.facebook.com/sharer.php?u=' + encodeURIComponent(pageUrl) + '&title=' + encodeURIComponent(pageTitle);
				break;
				case 'twitter':
				var openLink = 'http://twitter.com/share?text='+encodeURIComponent(pageTitleCut)+'&url='+encodeURIComponent(pageUrl)+'&via=openeditionsays';
				break;
				case 'google':
				var openLink = 'https://plus.google.com/share?url=' + encodeURIComponent(pageUrl) + '&title=' + encodeURIComponent(pageTitle);
				break;
			}
			//Parameters for the Popup window
			var winWidth    = 650;
			var winHeight   = 450;
			var winLeft     = ($(window).width()  - winWidth)  / 2;
			var winTop      = ($(window).height() - winHeight) / 2;
			var winOptions   = 'width='  + winWidth  + ',height=' + winHeight + ',top='    + winTop    + ',left='   + winLeft;
			//open Popup window and redirect user to share website.
			window.open(openLink,'Share This Link',winOptions);
			return false;
		});

		function hideOrShowNav(el, hs) {
			if (el !== null) {
				var $this = $(el);
				$('#openbarre').find('ul.submenu > li').each( function() {
					if ($(this)[0] == $this[0]) {
						$this.toggleClass("openbarre-ElementState--active", "");
					} else {
						$(this).removeClass("openbarre-ElementState--active");
					}
				});
			} else {
				$('#openbarre').find('ul.submenu > li').each( function() {
					$(this).removeClass("openbarre-ElementState--active");
				});
			}
		}

		$('#openbarre').find('ul.submenu > li > span').live("click", function(event) {
			hideOrShowNav($(this).parent(), false);
			event.stopPropagation();
		});

		/* Hide OpenBarre nav on ESC pressed key */
		$(document).keyup(function(e) {
			if (e.keyCode == 27) {
   			$('#openbarre').removeClass('nav-toggle');
			}
		});

		/* Hide OpenBarre nav on click anywhere on the page */
		$('body').click( function() {
			if ( $('#openbarre:hover').length == 0 ) {
				hideOrShowNav(null, true);
				$('#openbarre').removeClass('nav-toggle');
				$('body').css('margin-top', $('#openbarre').height() + 'px');
			}
		});
	});
})(jQuery);


/*
 * cleo.js
 * requiert jQuery - http://jquery.com
 * 24/10/2014 - Ce code n'est plus utilisé.
 */


/*
jQuery(document).ready(function($) {



		// Move the Breadcrumb below the Context block
		$('#breadcrumb').addClass('nav-toggle-show');
		$('#openbarre').append($('#breadcrumb'));
		// If JS is enabled then display the elements that works only with JS enabled.
    jQuery('.js-show').removeClass('js-show');
    // RWD - Hide/Show elements in media queries.
    jQuery('.icon-nav').live('click', function() {
			$parent = jQuery(this).parent();
      $parent.toggleClass('nav-toggle', '');
			if ($parent.hasClass('nav-toggle')) {
				// Move global page down
				var size = $('#openbarre').height();
				$('body').attr('style', 'margin-top: ' + size + 'px !important;');
			} else {
				$('body').attr('style', '');
			}
    });

});
*/
