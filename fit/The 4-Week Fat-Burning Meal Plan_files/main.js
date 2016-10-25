(function($) {
  Drupal.mensfitness = Drupal.mensfitness ||  { 'clearInputs': {} };

  Drupal.mensfitness.clearInputs = function (wrapper, context) {
	$(wrapper, context).once(function(){
	  var inputElement = $(this).find('input.form-text'),
		  defaultValue = inputElement.val();
	  $(inputElement).focus(function(){
		if (this.value == this.defaultValue) {
		  $(this).val('');
		}
	  });
	  $(inputElement).blur(function() {
		if (this.value == ''){
		  $(this).val(this.defaultValue);
		}
	  });
	  $(this).submit(function() {
		if (inputElement.val() == defaultValue) {
		  return false;
		}
	  });
	});
  }

  Drupal.behaviors.clear_search = {
	attach: function (context) {
	  Drupal.mensfitness.clearInputs('#sailthru-basic-newsletter-form, form[id^=search-block-form]', context);
	}
  }

  Drupal.behaviors.newsletterInputs = {
	attach:function (context, settings) {
	  $('input.form-checkbox', '#sailthru-newsletters-form,#sailthru-newsletters-page-form')
		.attr('checked', 'checked')
		.closest('div.form-type-checkbox').addClass('checked')
		.addClass('checked')
		.change(function () {
		  $(this).toggleClass('checked');
		  if ($(this).hasClass('checked')) {
			$(this).closest('div.form-type-checkbox').addClass('checked');
		  }
		  else {
			$(this).closest('div.form-type-checkbox').removeClass('checked');
		  }
		});
	}
  };

  // Replace selectes by custom ones.
  Drupal.behaviors.customSelect = {
	attach:function (context, settings) {
	  if ($("select").is(".replaced")) {
		$("select.replaced").customSelect();
	  }
	}
  };
	
})(jQuery);

(function (fallback) {

	fallback = fallback || function () { };

	// Function to trap most of the console functions from the FireBug Console API.
	var trap = function () {
		// Create an Array from the arguments Object.
		var args = Array.prototype.slice.call(arguments);
		// Console.raw captures the raw args, without converting toString.
		console.raw.push(args);
		var message = args.join(' ');
		console.messages.push(message);
		fallback(message);
	};

	// Redefine console.
	if (typeof console === 'undefined') {
		console = {
			messages: [],
			raw: [],
			dump: function() { return console.messages.join('\n'); },
			log: trap,
			debug: trap,
			info: trap,
			warn: trap,
			error: trap,
			assert: trap,
			clear: function() {
				  console.messages.length = 0;
				  console.row.length = 0 ;
			},
			dir: trap,
			dirxml: trap,
			trace: trap,
			group: trap,
			groupCollapsed: trap,
			groupEnd: trap,
			time: trap,
			timeEnd: trap,
			timeStamp: trap,
			profile: trap,
			profileEnd: trap,
			count: trap,
			exception: trap,
			table: trap
		};
	}
})(null); // to define a fallback function, replace null with the name of the function (ex: alert)

jQuery(document).ready(function(){
	var isMobile = false;
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
	|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

	if(isMobile && jQuery('#block-mf-homepage-mf-homepage-videos').is('div') && jQuery('#block-mf-zergnet-mf-zergnet').is('div')){                                                                                                                                                                           
		jQuery('#block-mf-zergnet-mf-zergnet').insertBefore(jQuery('#block-mf-homepage-mf-homepage-videos'));
	} 

	// Detect Internet Explorer
    jQuery(function($){
      var ua = window.navigator.userAgent,
          trident = ua.indexOf('Trident/'),
          edge = ua.indexOf('Edge/'),
          msie = ua.indexOf('MSIE ');

      if (msie > 0 || trident > 0 || edge > 0) {
        $('body').addClass('IE');
      }
    });
    //

	changeHeaderId();

	// BEGIN -- CODE FOR STICKY BANNERS
	var objSidebar = jQuery('div#sidebar_interior_for_banners div.region-inner'); // install this on the site's html
	if(!(objSidebar.is('div'))) objSidebar = jQuery('div.region-sidebar-second div.region-inner');
	if(!(objSidebar.is('div'))) objSidebar = jQuery('div.region-sidebar-first div.region-inner');
	var objMiddleColumn = jQuery('div#content');
	var objFooterAdContainer = jQuery('footer');
	objSidebar.append(jQuery('<div id="dummy_ad_anchor" class="sticky_banner" style="height:0px; clear:both;"></div>')); // creating a fake "last" sidebar banner for Flex
	jQuery('div#top-ad div.region-top-ad').addClass('sticky_banner');
	var objLeaderboardWrap = jQuery('div#top-ad');
	jQuery('div.sticky-ad').parent().parent().parent().parent().parent().addClass('sticky_banner');
	jQuery('div.region-sidebar-first div.region-inner div#block-dfp-right1-300x250').addClass('sticky_banner');
	jQuery('div.region-sidebar-first div.region-inner div#block-dfp-right2-300x250').addClass('sticky_banner');
	var blnIsMobile = isMobile;
	if(blnIsMobile) jQuery('body').addClass('mobile'); 

	// Wordpress top bar when user is logged in pushes everything down by 32px -- drupal admin-menu pushes by 29px.
	var intAdditionalPageHeight = 0;
	if(jQuery('#admin-menu').is('div')) intAdditionalPageHeight = 29;

	var strCSS = '<style type=\"text/css\">';
	// if (screen.width == 768 /*ipad portrait*/) {
	// 	strCSS += ' .fixedLeaderA{position:fixed!important; top:' + (22 + intAdditionalPageHeight) + 'px; left:0; padding-bottom:10px; padding-top:30px; width:100%!important; text-align:center; background:transparent; z-index:70000}';
	// } 
	if (screen.width >= 768 && screen.width <= 929 ) { //Disable sticky banner on tablet
		strCSS += ' .fixedLeaderA{position:relative!important;';
		console.log('tablet')
	}
	else {
		strCSS += ' .fixedLeaderA{position:fixed!important; top:' + (-20 + intAdditionalPageHeight) + 'px; left:0; padding-bottom:10px; padding-top:10px; width:100%!important; text-align:center; background:transparent; z-index:70000}';
	}
	strCSS += ' .fixedLeaderA DIV.region-inner{width:' + (parseInt(jQuery('#columns').css('width').replace(/px$/, '')) + 20) + 'px; background:#ffffff; margin:0 auto; padding:10px 0 10px 0}';  // has to have width 940px for desktop
	strCSS += ' @media screen and (max-width: 768px) {.fixedLeaderA DIV.region-inner{width:100%}}';
	strCSS += ' .mobile .fixedLeaderA{background-color:white!important; padding-bottom:0; width:100%}';
	strCSS += ' .mobile .post-container .fixedLeaderA{padding-bottom:10px}';
	strCSS += ' .fixedSideBar{position:fixed; width:300px}';
	strCSS += ' DIV.top-advertisement:nth-of-type(2){margin-top:-7px; margin-bottom:-25px; padding-top:0; padding-bottom:0; position:relative; z-index:10; background:white}';
	strCSS += ' DIV.top-advertisement:nth-of-type(2) DIV.region-footer-ad{padding-top:15px; padding-bottom:25px}';
	if(jQuery('div.page-wrapper').hasClass('nh') && screen.width >= 980){ // Men's fitness specific for when the header is fixed
		strCSS += ' .fixedLeaderA{top:' + (-27 + intAdditionalPageHeight) + 'px; margin-top:100px}';
	}
	strCSS += '</style>';
	jQuery('head').append(strCSS);

	var arStickyTime = [6, 6, 11, 6, 6]; // seconds for sticky banners to always be visible -- first number is for the top leaderboard, second number is for the RHS square 1 etc.
	var arBnr = jQuery('.sticky_banner'); // the classname of the *CONTAINER* of the banners
	var intLastBnr = arBnr.length - 1 // the last banner's position in the array -- this banner is usually found in the sidebar
	var arStickyClass = ['fixedLeaderA', 'unused', 'unused', 'unused', 'unused']; // the className which when applied makes banner sticky -- currently only used for the leaderboard
	var arIsStickyFromNowOn = [true, true, true, false, false]; // true if the element is to be fixed or false otherwise -- is set automatically to false when the timer for each elemnet runs out // MODIFIED THIS FOR FLEX TO DISABLE STICKING OF LAST SIDEBAR BANNER
	var arIsCurrentlySticky = [false, false, false, false, false]; // true if the element is to be fixed or false otherwise -- is set automatically to false when the timer for each elemnet runs out
	var arTimeStarted = [false, false, false, false, false]; // whether the timeout has been set for the specific element
	var arTimeExpired = [false, false, false, false, false]; // whether the timeout for an element has expired
	var arInSidebar = [false, false, false, false, false]; // whether an element belongs to the sidebar or not
	var arBnrPosY = []; // the current initial position of the banners
	var blnInSidebar = function (intElmIdx) {
		if (blnIsMobile) return false;
		try { // adblockers could throw an error so we must catch it, just in case
			return !(arBnr[intElmIdx].find('div#block-boxes-dfp-top-728-90').is('div') || arBnr[intElmIdx].find('div#block-dfp-bottom-728x90').is('div') || arBnr[intElmIdx].find('div#block-boxes-top-728x90').is('div')); 
		} catch (err) {
			console.log(err);
		}
	};
	jQuery.each(arBnr, function (index, value) {
		arBnr[index] = jQuery([arBnr[index]]);  // getting the chance to jQuerify the objects here
		arBnrPosY[index] = parseInt(arBnr[index].offset().top); // inaccurate initial calculation -- needs to be recalculated when sticking a banner
		arInSidebar[index] = blnInSidebar(index); // calculate here whether a banner is in the sidebar or not by using the above function
	});
	var intPositionRecalculations = 0;
	var recalculatePosY = function () {
		if(intPositionRecalculations >= 70) return false;
		// CAUTION: This function assumes that the last element of the sidebar is a banner! Do not place anything else below the last banner of the sidebar!!
		// this function is to be called in a sneaky fashion ie. on banner unstick or stick, so we get more accurate positions of banners
		if (blnIsMobile) {
			jQuery.each(arBnr, function (index, value) {
				arBnrPosY[index] = parseInt(arBnr[index].offset().top);
			});
		} else {
			if(typeof arBnr[intGetFirstSidebarBanner()] === 'undefined') return false;
			intLastBannerHeight = 350; //fake last banner height (the last banner is used as an anchor)
			intHeightOnTopOfFirstBanner=arBnr[intGetFirstSidebarBanner()].position().top;
			if (arInSidebar[intLastBnr]) {
				arBnrPosY[intLastBnr] = objSidebar.height() + objLeaderboardWrap.height() - arBnr[intLastBnr].height() + 50;
			}
			// Now that we know where the last banner is, we can easily locate the middle banner of the sidebar
			var intScrollOffset = parseInt(arBnr[intLastBnr].offset().top) - arBnrPosY[intLastBnr];
			if (arInSidebar[intGetFirstSidebarBanner()] && arInSidebar[intGetFirstSidebarBanner() + 1]){
				arBnrPosY[intGetFirstSidebarBanner() + 1] = parseInt(arBnr[intGetFirstSidebarBanner() + 1].offset().top) - intScrollOffset;
				if(intLastBnr == 4 && intGetFirstSidebarBanner() == 1){ // for when the homepage has 4 sidebar banners
					arBnrPosY[intGetFirstSidebarBanner() + 2] = parseInt(arBnr[intGetFirstSidebarBanner() + 2].offset().top) - intScrollOffset;
				} 
				// Finally the first sidebar banner:
				arBnrPosY[intGetFirstSidebarBanner()] = parseInt(arBnr[intGetFirstSidebarBanner()].offset().top) - intScrollOffset;
			}
		}
		intPositionRecalculations++;
	};
	var intScrollTop = jQuery(window).scrollTop(); // current vertical position of user's viewport (careful: this won't always be 0 here if the user refreshes while having scrolled down to the middle of the page)
	var intWindowHeight = jQuery(window).height(); // the height of our viewport -- careful: won't be updated on window resize
	var blnLastBannerIsFrozen = false;  // is set to true when the last banner of the sidebar is frozen and thus make it stick permanently
	var intSidebarBoundaryTop, intSidebarBoundaryBottom; // the scrolling boundaries of the sidebar
	var intExtraHeightAddedByStuckLeaderboard = 0; // when a leaderboard is sticky this has a positive value and it pushes the sidebar lower while the leaderboard remains stuck
	var intExtraHeightAddedByVideoPlayer = 0; // when a video player pushes everything down
	var intExtraHeightAddedByStuckLeaderboardBuffer = 0; // when a leaderboard is sticky this has a positive value and it pushes the sidebar lower while the leaderboard remains stuck
	var blnIsHomepage = jQuery('body.front').is('body'); // whether we are on the homepage or not
	var blnIsGalleryPage = jQuery('body').hasClass('node-type-gallery'); // whether we are viewing a gallery page or not
	var blnIsVideoPage = jQuery('body').hasClass('node-type-video'); // whether we are viewing a video page or not
	var blnIsArticlePage = jQuery('body').hasClass('node-type-article'); // whether we are viewing an article page or not
	var intLastBannerHeight = 0; // the height of last banner, declared here but used in blnIsVisible() and intGetElementOffset() -- it's calculated elsewhere for better performance
	var intMiddleHeight = 0;
	if(objMiddleColumn.is('div')) intMiddleHeight = objMiddleColumn.height();
	var intSidebarHeight = objSidebar.height(); // this calculation at this point is inaccurate. It's reevaluated in fixMiddleColumnHeight which is called when all the elements have loaded properly
	var setExtraHeightAddedByVideoPlayer = function(){
		if(blnIsVideoPage) intExtraHeightAddedByVideoPlayer = jQuery('#o2player_1').height() + 280; // we may need to edit this constant because now video pages have two widgets on top of first banner
	};
	var fixMiddleColumnHeight = function () {
		// Necessary fix for when the central column is shorter than the sidebar
		if (blnIsMobile || !objMiddleColumn.is('div')) return false;
		intSidebarHeight = objSidebar.height();
		if (intMiddleHeight < intSidebarHeight + 400){
			objMiddleColumn = jQuery('.content-inner');
			objMiddleColumn.css('min-height', (intSidebarHeight + 400) + 'px');
			objMiddleColumn.height();
		}
	};
	fixMiddleColumnHeight();
	setExtraHeightAddedByVideoPlayer();
	var blnIsVisible = function (intObjectVerticalPosition, intPageTop, index) {
		var arExtraOffset = [99, 99 + intExtraHeightAddedByStuckLeaderboardBuffer, 99 + intExtraHeightAddedByStuckLeaderboardBuffer, (2 * intLastBannerHeight) + 110];
		if (arBnr.length == 5){
			arExtraOffset = [99, 99 + intExtraHeightAddedByStuckLeaderboardBuffer, 99 + intExtraHeightAddedByStuckLeaderboardBuffer, 200 + intExtraHeightAddedByStuckLeaderboardBuffer, (2 * intLastBannerHeight) + 110];
		}
		if (blnIsMobile) arExtraOffset = [120, 120, 120, undefined]; // leaderboards on mobile are hanging a bit lower
		return intObjectVerticalPosition - arExtraOffset[index] > intPageTop;
	};
	var blnContainsAd = function (intElmIdx) {
		if (intElmIdx == intLastBnr && !blnIsMobile) return true; // we don't care if the last banner div contains an ad or not
		else return (arBnr[intElmIdx].find('iframe').is('iframe') || arBnr[intElmIdx].find('img').is('img'));
	};
	var blnHasAboveFooterBanner = function(){return objFooterAdContainer.is('div') && objFooterAdContainer.height() > 0};
	var intFooterBannerHeight = 0;
	var repairLeaderboardHeight = function (intBannerHeight, blnApplyCorrections) {
		var intHeightCorrection = 0
		var intToSubtract = 0;  // experimental value for drupal sites
		if (blnApplyCorrections){ 
			intHeightCorrection = intAdditionalPageHeight;
			intToSubtract = 0;
		}
		objLeaderboardWrap.css('height', (intBannerHeight + intHeightCorrection - intToSubtract) + 'px');
	};
	var intGetFirstSidebarBanner = function () {
		if (arInSidebar[0]) return 0; else return 1;
	}; // this could cause an error on mobile, I should consider returning -1 if there's no sidebar at all.
	var intHeightOnTopOfFirstBanner = 0;
	var intGetElementOffset = function (intElmIdx) {
		if (blnIsMobile) return false; // this function is sidebar-specific and isn't needed for mobile
		recalculatePosY();
		var intNavHeight = jQuery('#page-subnav').height();
		if (intElmIdx == intGetFirstSidebarBanner()) { // 1st sidebar elm
			return objSidebar.parent().position().top + arBnr[intElmIdx].position().top - intNavHeight - intExtraHeightAddedByStuckLeaderboardBuffer + 90;
		} else if ((intElmIdx == (intGetFirstSidebarBanner() + 1) || intElmIdx == (intGetFirstSidebarBanner() + 2)) && intElmIdx != intLastBnr) { // 2nd or additional middle sidebar elm
			return objSidebar.parent().position().top + arBnr[intElmIdx].position().top - 2 * intNavHeight - 20;
		} else if (intElmIdx == intLastBnr) {
			return objSidebar.parent().position().top + arBnr[intElmIdx].position().top - intNavHeight - 82;
		}
		return arBnrPosY[intElmIdx]; // very unlikely that we ever reach this line
	};

	var stick = function (intElmIdx) {
		if (!arIsStickyFromNowOn[intElmIdx] || arIsCurrentlySticky[intElmIdx]) return false;
		if ((intElmIdx > 1 && arInSidebar[intElmIdx]) || (intElmIdx > 0 && blnIsMobile)) { // check if element is in sidebar for desktop or of the element is not the first leaderboard for mobile
			// this is the second or third element of the sidebar -- if the timeout of the previous element hasn't expired, do nothing
			if (!arTimeExpired[intElmIdx - 1] && blnContainsAd(intElmIdx - 1)) return false;
		}
		// setting the timeout:
		if (!arTimeStarted[intElmIdx] && arIsStickyFromNowOn[intElmIdx] && (blnIsMobile || intElmIdx < intLastBnr) || !arTimeStarted[intElmIdx] && arIsStickyFromNowOn[intElmIdx] && intLastBnr == 0) {
			arTimeStarted[intElmIdx] = true;
			setTimeout(function () {
				unstick(intElmIdx, true);
			}, arStickyTime[intElmIdx] * 1000);
		} else if (!arTimeStarted[intElmIdx] && intElmIdx == intLastBnr) {
			blnLastBannerIsFrozen = true;
		}
		// calculate ad container height here, because it may have changed since the page ready event
		var intBannerHeight = arBnr[intElmIdx].height();
		var intOffsetToMove = 100;
		if (!arInSidebar[intElmIdx]) {
			if (intElmIdx == 0) repairLeaderboardHeight(intBannerHeight, false);
			arBnr[intElmIdx].css('width', objLeaderboardWrap.width() + 'px');
			intExtraHeightAddedByStuckLeaderboard = intBannerHeight;
			intExtraHeightAddedByStuckLeaderboardBuffer = intBannerHeight + 40;
			arBnr[intElmIdx].addClass(arStickyClass[intElmIdx]);
		} else {
			objSidebar.addClass('fixedSideBar');
			intOffsetToMove = intGetElementOffset(intElmIdx);
			objSidebar.css('margin-top', '-' + intOffsetToMove + 'px');
			if (!(intSidebarBoundaryTop < 0) && intElmIdx == intGetFirstSidebarBanner()) {
				intSidebarBoundaryTop = -intOffsetToMove;
				// console.log('set intSidebarBoundaryTop to be ' + intSidebarBoundaryTop);
			}
			if (!(intSidebarBoundaryBottom < 0) || (-arBnr[intElmIdx].offset().top - arBnr[intElmIdx].height() - 100 > intSidebarBoundaryBottom)) {
				intSidebarBoundaryBottom = -intOffsetToMove;
				// console.log('set intSidebarBoundaryBottom to be ' + intSidebarBoundaryBottom);
			}
		}
		arIsCurrentlySticky[intElmIdx] = true;
	};

	var unstick = function (intElmIdx, blnCalledFromTimeout) {
		// console.log('calling unstick with parameters ' + intElmIdx + ', ' + blnCalledFromTimeout);
		recalculatePosY(); // fix last banner bug
		if(blnHasAboveFooterBanner()){
			intFooterBannerHeight = objFooterAdContainer.height() + jQuery('footer').height()+ 170;
		}
		if (!blnCalledFromTimeout) {
			if (!arInSidebar[intElmIdx]) {
				if (intElmIdx == 0) {
					var intBannerHeight = arBnr[intElmIdx].height();
					repairLeaderboardHeight(intBannerHeight, true);
				}	
				arBnr[intElmIdx].removeClass(arStickyClass[intElmIdx]);
			} else {
				// Set a new bottom boundary
				if (intElmIdx != intLastBnr) intSidebarBoundaryBottom = -intGetElementOffset(intElmIdx + 1);
			}
			if (arTimeExpired[intElmIdx]) {
				arIsStickyFromNowOn[intElmIdx] = false;
			}
			arIsCurrentlySticky[intElmIdx] = false;
		} else {
			// called from timeout -- soft unstick ie. do not actually unstick but mark to be unstuck on next scroll
			arTimeStarted[intElmIdx] = false;
			arIsStickyFromNowOn[intElmIdx] = false;
			arTimeExpired[intElmIdx] = true;
			if (arInSidebar[intElmIdx]) {
				fixMiddleColumnHeight();	
				setExtraHeightAddedByVideoPlayer();
				// immediately stick the next element of sidebar right here:
				if (!arTimeStarted[intElmIdx + 1] && intElmIdx + 1 < intLastBnr) setTimeout(function () {
					unstick(intElmIdx + 1, true);
					arTimeStarted[intElmIdx + 1] = true;
				}, arStickyTime[intElmIdx + 1] * 1000);
				else if (!arTimeStarted[intElmIdx + 1] && intElmIdx + 1 == intLastBnr) {
					blnLastBannerIsFrozen = true;
				}
				if (!(intSidebarBoundaryBottom < 0) || (-arBnr[intElmIdx + 1].offset().top - arBnr[intElmIdx + 1].height() - 100 > intSidebarBoundaryBottom)) {
					intSidebarBoundaryBottom = -intOffsetToMove;
				}
				var intOffsetToMove = intGetElementOffset(intElmIdx + 1);
				arIsCurrentlySticky[intElmIdx + 1] = true;
				if (!(intSidebarBoundaryBottom < 0) || (-arBnr[intElmIdx + 1].offset().top - arBnr[intElmIdx + 1].height() - 100 != intSidebarBoundaryBottom)) {
					intSidebarBoundaryBottom = -intOffsetToMove;
				}
			} else {
				// Reaching here, we have just unstuck the leaderboard. We will now revert the sidebar to its original margin-top by subtracting the extra offset added because of the leaderboard
				intSidebarBoundaryTop -= intExtraHeightAddedByStuckLeaderboard + 24; //- 60;
				intExtraHeightAddedByStuckLeaderboard = 0;
			}
		}
	};

	var stickBannersOnScroll = function () {
		var intCurrentScrollTop = jQuery(window).scrollTop();
		var intMiddleColumnPaddingBottom = parseInt(objMiddleColumn.css('padding-bottom').replace(/px$/, ''));
		if (intScrollTop < intCurrentScrollTop) var blnScrollDown = true; else var blnScrollDown = false; // check whether we are scrolling up or down
		intScrollDiff = intScrollTop - intCurrentScrollTop;
		jQuery.each(arBnr, function (index, value) {
			if (arIsCurrentlySticky[index] && arTimeExpired[index] && !arIsStickyFromNowOn[index]) unstick(index, false); // unstick any "soft unstuck" banners (see function unstick)
			if (!blnIsVisible(arBnr[index].offset().top, intCurrentScrollTop, index) && blnScrollDown) {
				if (!arIsCurrentlySticky[index] && arIsStickyFromNowOn[index] && blnContainsAd(index)) {
					// console.log('calling stick() for ' + index);
					stick(index);
				}
			} else if ((index == 0 || blnIsMobile) && !arInSidebar[index] && !blnScrollDown && arIsCurrentlySticky[index] && blnIsVisible(arBnrPosY[index], jQuery(window).scrollTop(), index)) { // leaderboard to unstick on scroll up
				// this needs to be edited for mobile (index won't always be 0, page may have many leaderboards)
				unstick(index, false);
			}
		});

		intScrollTop = intCurrentScrollTop; // this is important to remain RIGHT here and nowhere else

		if (!blnIsMobile) {
			// correct bottom limit if last banner has frozen
			if (blnLastBannerIsFrozen && intSidebarBoundaryBottom != -intGetElementOffset(intLastBnr)) {
				intSidebarBoundaryBottom = -intGetElementOffset(intLastBnr);
				// console.log('bottom ad corrected at: ' + arBnrPosY[intLastBnr]);
			}
			// moving sidebar behavior
			var intCurrentMarginTop = parseInt(objSidebar.css('margin-top'));
			var intMarginTopAfterScroll = intCurrentMarginTop + intScrollDiff;
			var intMarginTopAfterScrollReverse = intCurrentMarginTop - intScrollDiff;
			var blnMovementDoesntExceedTopLimit = intMarginTopAfterScroll - intExtraHeightAddedByStuckLeaderboardBuffer < intSidebarBoundaryTop + 1;
			if (!arIsCurrentlySticky[intGetFirstSidebarBanner()]) {
				// console.log('intCurrentMarginTop:' + intCurrentMarginTop + ', LIMITS: top:' + intSidebarBoundaryTop + ', bottom:' + intSidebarBoundaryBottom + ', intExtraHeightAddedByStuckLeaderboardBuffer:' + intExtraHeightAddedByStuckLeaderboardBuffer);
				// Careful: If a tall leaderboard has increased the height, we need to make sure we revert gradually on user scroll and that's why the intExtraHeightAddedByStuckLeaderboardBuffer is used here:
				if (intExtraHeightAddedByStuckLeaderboardBuffer > 0 && intScrollDiff > 0) intExtraHeightAddedByStuckLeaderboardBuffer -= intScrollDiff;
				if (intExtraHeightAddedByStuckLeaderboardBuffer > 0 && intScrollDiff < 0 && !arIsStickyFromNowOn[intGetFirstSidebarBanner()]) {
					intExtraHeightAddedByStuckLeaderboardBuffer += intScrollDiff;
					objSidebar.css('margin-top', (intMarginTopAfterScroll) + 'px');
				}
				if (intExtraHeightAddedByStuckLeaderboardBuffer < 0) intExtraHeightAddedByStuckLeaderboardBuffer = 0;
				if (
						blnMovementDoesntExceedTopLimit
					&&  (
						  (!blnLastBannerIsFrozen && intMarginTopAfterScroll > intSidebarBoundaryBottom - 100)
						|| blnScrollDown && blnLastBannerIsFrozen && intMarginTopAfterScroll + intExtraHeightAddedByVideoPlayer > intSidebarBoundaryBottom - intLastBannerHeight // scrolling down while last banner is locked
						|| !blnScrollDown && intExtraHeightAddedByStuckLeaderboardBuffer == 0 && blnLastBannerIsFrozen && intMarginTopAfterScroll + intExtraHeightAddedByVideoPlayer > intSidebarBoundaryBottom - intLastBannerHeight // scrolling up while last banner is locked
						)
				) {
					objSidebar.css('margin-top', (intMarginTopAfterScroll) + 'px');
				} else if(intExtraHeightAddedByStuckLeaderboardBuffer > 0 && !blnScrollDown && intMarginTopAfterScrollReverse <= -intSidebarBoundaryTop) { // we have exceeded the top limit but we can still move the sidebar upwards because of a recently unstuck leaderboard
					objSidebar.css('margin-top', (intMarginTopAfterScrollReverse) + 'px');
				} else if(intExtraHeightAddedByStuckLeaderboardBuffer == 0 && !blnScrollDown && intMarginTopAfterScrollReverse <= -intSidebarBoundaryTop && objSidebar.css('position') == 'fixed'){
					objSidebar.css('margin-top', intSidebarBoundaryTop);
					if(intMiddleColumnPaddingBottom > 200){
						// gradually reversing fix for short middle columns (with a jump if needed)
						if(intMiddleColumnPaddingBottom > intSidebarHeight + 500){
							var intFooterOffset = objFooterAdContainer.offset().top;
							setTimeout(function() {
								// the delay serves as a time buffer because Chrome triggers the scrollTo method before even the user's input from the scrollbar 
								window.scrollTo(0, intFooterOffset - intMiddleColumnPaddingBottom);
								objMiddleColumn.css('padding-bottom', (intSidebarHeight + 500) + 'px');
							},300)
						} else {
							objMiddleColumn.css('padding-bottom', (intMiddleColumnPaddingBottom - intScrollDiff) + 'px');
						}
					}
				} else if(arIsCurrentlySticky[intGetFirstSidebarBanner() + 1] && jQuery('body').hasClass('page-mf-homepage')){
						intMiddleColumnPaddingBottom = 'auto';
						var scrollFromTop = jQuery(window).scrollTop(),
							rightRailHeight = jQuery('#sidebar_interior_for_banners .region-inner').height();
						if (intMiddleHeight - jQuery(window).scrollTop() < intSidebarHeight - parseInt(objSidebar.css('margin-top').replace(/px$/, '')) + 1200) {
							if(blnScrollDown) objMiddleColumn.css('padding-bottom', (scrollFromTop - (rightRailHeight / 2)) + 'px');
						}
						if(!blnScrollDown && intMiddleColumnPaddingBottom > 200){
							// gradually reversing fix for short middle columns
							objMiddleColumn.css('padding-bottom', (intMiddleColumnPaddingBottom - intScrollDiff) + 'px');
						}
					} else if(arIsCurrentlySticky[intGetFirstSidebarBanner() + 1]){
					// fix for short middle columns
					// intMiddleColumnPaddingBottom = parseInt(objMiddleColumn.css('padding-bottom').replace(/px$/, ''));
					intMiddleColumnPaddingBottom = 'auto';
					if (intMiddleHeight - jQuery(window).scrollTop() < intSidebarHeight - parseInt(objSidebar.css('margin-top').replace(/px$/, '')) + 1200) {
						if(blnScrollDown) objMiddleColumn.css('padding-bottom', (intMiddleColumnPaddingBottom - intScrollDiff) + 'px');
					}
					if(!blnScrollDown && intMiddleColumnPaddingBottom > 200){
						// gradually reversing fix for short middle columns
						objMiddleColumn.css('padding-bottom', (intMiddleColumnPaddingBottom - intScrollDiff) + 'px');
					}
				}
			} else {
				// fix for short middle columns
				if (blnScrollDown && objSidebar.css('position') == 'fixed' && intMiddleHeight - jQuery(window).scrollTop() < intSidebarHeight - parseInt(objSidebar.css('margin-top').replace(/px$/, '')) + 1200) {
					// fix for short middle columns
					intMiddleColumnPaddingBottom = parseInt(objMiddleColumn.css('padding-bottom').replace(/px$/, ''));
					if(blnScrollDown) objMiddleColumn.css('padding-bottom', (intMiddleColumnPaddingBottom - intScrollDiff) + 'px');
				} else if(!blnScrollDown && intMiddleColumnPaddingBottom > 200){
					// gradually reversing fix for short middle columns
					objMiddleColumn.css('padding-bottom', (intMiddleColumnPaddingBottom - intScrollDiff) + 'px');
				}
			}
			// Revert sidebar to "position:relative" when scrolling past the top boundary
			if ((intScrollTop == 0) || (intScrollTop <= -intSidebarBoundaryTop && objSidebar.css('position') == 'fixed')) {
				objMiddleColumn.css('padding-bottom', '10px');
				// console.log('Bounds exceeded -- reinforcing');
				recalculatePosY(); // increase precision (Note: this also has to be in the following else if)
				objSidebar.css('position', 'relative').css('margin-top', '0');
			} else if (intScrollTop > -intSidebarBoundaryTop && objSidebar.css('position') == 'relative') {
				// console.log('refixating side bar');
				objMiddleColumn.css('padding-bottom', '10px');
				recalculatePosY(); // increase precision
				objSidebar.css('position', 'fixed');
				objSidebar.css('margin-top', intSidebarBoundaryTop + 'px');
			} else if (blnLastBannerIsFrozen && intScrollTop >= jQuery(document).height() - intWindowHeight - intFooterBannerHeight + 200) {
				// console.log(('bottom almost reached' + "\n" + jQuery(document).height() + ',' + intWindowHeight + ',' + arBnr[intLastBnr].height()));
				/*
				if(blnMovementDoesntExceedTopLimit){
					objSidebar.css('margin-top', (intMarginTopAfterScroll) + 'px');
					if(intScrollTop >= jQuery(document).height() - intWindowHeight){
						console.log(('bottom reached' + "\n" + jQuery(document).height() + ',' + intWindowHeight + ',' + arBnr[intLastBnr].height()));
						recalculatePosY();
						// disabling this for flex since the last banner is a fake one:
						//objSidebar.css('margin-top', '-' + (objSidebar.height() + objLeaderboardWrap.height() + intHeightOnTopOfFirstBanner + intExtraHeightAddedByVideoPlayer - jQuery(window).height() +intFooterBannerHeight) + 'px');
					}
				} 
				*/
			}
		}
	};

	// jQuery(document).on({
	// 	'touchmove': function (e) {
	// 		stickBannersOnScroll();
	// 	},
	// 	'scroll': function (e) {
	// 		stickBannersOnScroll();
	// 	}
	// });

	// END -- CODE FOR STICKY BANNERS

});

jQuery(window).resize(function() {
	changeHeaderId();
});

// On mobile layout, If there are two headers on the page, change ID of the invisible header, 
// not to interrupt the normal work of jpanelmenu plugin (solves issue MF-1127)
function changeHeaderId() {
	var invisibleHeader = jQuery('.mobile-invisible>header');

	if (jQuery(window).width() < 768) {
		jQuery(invisibleHeader).attr('id', 'header_invisible');
	}
	if (jQuery(window).width() >= 768) {
		jQuery(invisibleHeader).attr('id', 'header');
	}
}
//



jQuery(document).ready(function(){
	//MF-1328 Title/Subtitle limitations on HP in Latest/Video Block 
	if(jQuery('body').hasClass('page-mf-homepage') && window.innerWidth > 979) {
		jQuery('.blog-items .blog-item').each(function(){
			// Title vars
			var title = jQuery(this).find('.title'),
				titleHeight = title.height();
				titleLineHeight = title.css('line-height'),
				titleLineHeight = parseFloat(titleLineHeight),
				titleRows = titleHeight / titleLineHeight,
				titleRows =  Math.round(titleRows);
			// Subtitle vars
			var blurb = jQuery(this).find('.blurb a'),
				blurbHeight = blurb.height();
				blurbLineHeight = blurb.css('line-height'),
				blurbLineHeight = parseFloat(blurbLineHeight),
				blurbLineHeight = parseInt(blurbLineHeight, 10),
				blurbRows = blurbHeight / blurbLineHeight,
				blurbRows =  Math.round(blurbRows);

			if (titleRows == 1) {
				blurb.css('max-height', blurbLineHeight * 3 + 'px');
			} else if (titleRows == 2) {
				blurb.css('max-height', blurbLineHeight * 2 + 'px');
			} else if (titleRows > 2) {
				blurb.css('max-height', blurbLineHeight + 'px');
			}
		});
	}
	// END MF-1328

	// MF-1302 Subscription validation
	jQuery(function(){
		var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
		var	subscribeForm = jQuery('.sailthru-newsletters-form'),
			subscribeInput = jQuery('.sailthru-newsletters-form .form-item-email input');

		subscribeForm.submit(function(e){
			if(subscribeInput.val() !== ''){
					if(subscribeInput.val().search(pattern) == 0){
						console.log('subscription ok')
					}else{
						subscribeForm.append('<div class="subscribe-error">Please enter a valid email address</div>');
						return false;
					}
				}else{
					subscribeForm.append('<div class="subscribe-error">Please enter a valid email address</div>');
					return false;
				}
		});
		jQuery(document).on('focus click', subscribeInput, function() {
			if(jQuery('.subscribe-error').length) {
				jQuery('.subscribe-error').remove();
			}
		})
	})
	// END MF-1302
	
	// Allow sticky ads
	var $stickyAd = true;

	// HC-Sticky Init
	function stickyInit() {
		if (jQuery('.region-sidebar-second').length && window.innerWidth >= 980) {
			if (jQuery('#top-ad').length && $stickyAd === true) {
				jQuery(window).load(function(){
					var $leaderboardHeight = jQuery('#top-ad').outerHeight(),
						$headerHeight = jQuery('header').outerHeight(),
						$jointHeight = $leaderboardHeight + $headerHeight;
						
					jQuery('.region-sidebar-second').hcSticky({
						innerTop: -$jointHeight,
						offResolutions: [-768],
					});
				});
			} else {
				jQuery('.region-sidebar-second').hcSticky({
					innerTop: -110,
					offResolutions: [-768],
					stickTo: '.page-wrapper'
				});
			} 
		} else if (jQuery('.region-sidebar-second').length && window.innerWidth < 980) {
			jQuery('.region-sidebar-second').hcSticky({
				innerTop: -10,
				offResolutions: [-768]
			});
		}
	};
	stickyInit();
	// END HC-Sticky Init

	// Fix content column height if RR is higher
	function fixColumnHeight() {
		if(jQuery('.region-sidebar-second').length && window.innerWidth >= 768) {
			var sidebarHeight = jQuery('.region-sidebar-second').height(),
				contentColumn = jQuery('#content-column'),
				contentColumnHeight = contentColumn.height();

			if (sidebarHeight > contentColumnHeight) {
				contentColumn.css('min-height', sidebarHeight);
			} 
		}
	}	
	fixColumnHeight();

	jQuery('.region-sidebar-second').bind("DOMSubtreeModified", function() {
		fixColumnHeight();
	});
	// END Fix

	// MF-1459 Sticky Leaderboard in the header - node templates only
    jQuery(function($){
      if($('body').hasClass('page-node') && window.innerWidth >= 980) {
        var $leaderboard = $('#top-ad'),
            $mainContent = $('.page-wrapper'),
            $rightRail = $('.region-sidebar-second'),
            $headerHeight = $('#header').height(),
            $adTimer = Drupal.settings.leaderboardStickySec * 1000, //Convert sec to milisec
            $timer = true;


        $(window).scroll(function() {
          // fallback for IE scrollTop
          if (!$('body').hasClass('IE')) {
            var $scrollTop = $('body').scrollTop();
          } else if ($('body').hasClass('IE')) {
            var $scrollTop = document.documentElement.scrollTop;
          }
          var $leaderboardHeight = $leaderboard.height();
            
          if($scrollTop>22 && $timer===true) {
            $leaderboard.addClass('sticky-leaderboard');
            $mainContent.css('margin-top', $leaderboardHeight + $headerHeight);
          } else {
            $leaderboard.removeClass('sticky-leaderboard');
            $mainContent.css('margin-top', '')
          }
          setTimeout(function(){
          	if($timer===true) {
	            $leaderboard.removeClass('sticky-leaderboard');
	            $mainContent.css('margin-top', '')
	            $timer = false;
	            $stickyAd = false;
	            stickyInit();
	           }
	        }, $adTimer)
        });
      }
	});
  	//


	  // Align slick buttons
	jQuery(function(){
		jQuery('.slick-arrow').on('click touchstart',function(){
		  setInterval(function(){
		    alignBtns();
		  }, 300);
		});
		});

		jQuery(window).load(function(){
		if(jQuery('.slick-arrow').length) {
		  alignBtns();
		}
		})

		function alignBtns() {
			if(jQuery('.slick-current .media--image').length) {
			  var $slickMediaHeight = jQuery('.slick-current .media__image').outerHeight(),
			      $slickCalcHeight = $slickMediaHeight / 2;
			} else {
			  var $slickCalcHeight = jQuery('.slick-current').height() / 2 ;
			}

			jQuery('.slick__arrow').css('top', $slickCalcHeight);
		}
	//

	// Toggle show all slides on gallery
	jQuery('.gallery-top-bar .view-all, .back-to-gallery').click(function(e){
		e.preventDefault();
		var $currentSlideHeight = jQuery('.slick-current .media--image').height(),
			$currentTitleHeight = jQuery('.slick-current .slide__title').outerHeight(),
			$backToGalleryHeight = jQuery('.back-to-gallery').outerHeight(),
			$calculatedHeight = $currentSlideHeight + $currentTitleHeight - $backToGalleryHeight;
	    
        jQuery('.all-slides-thumbs-list').css('max-height', $calculatedHeight);
	    jQuery('.all-slides-wrapper').slideToggle(400);
	})
	//


	// Update slick gallery height on thumbnails click
	function updateSlideHeight() {
		if(jQuery('.slick-current .media').length) {
			var setSlideHeight = setInterval(function(){
			  if(!jQuery('.slick-current .media').hasClass('media--loading')) {
			    var $currentImgHeight = jQuery('.slick-current img').height(),
			    	$currentTitleHeight = jQuery('.slick-current .slide__title').outerHeight();
			    jQuery('.slick-list').css('height', $currentImgHeight + $currentTitleHeight);
			    clearInterval(setSlideHeight);
			  }
			}, 500);
		}
	}
	// 

	// Go to slide on thumbnail click
	jQuery('.all-slides-thumbs-list .thumb a').click(function(e){
		e.preventDefault();
		var attrib = 'data-index-desktop';
		if (window.innerWidth <= 1024) {
			var attrib = 'data-index';
		}
		var $goToSlide = jQuery(this).attr(attrib);
		jQuery('.slick__slider').slick('slickGoTo', parseInt($goToSlide));
		jQuery('.all-slides-wrapper').slideToggle(400);
		setTimeout(updateSlideHeight, 2000)
	});
	//

	function cloneCaption() {
		var $currentDescription = jQuery('.slick-current .slide__description').clone();
        jQuery('.slick-slide-description').hide(500).html($currentDescription).show(500);
	}


	jQuery('.slick').on('afterChange', function(event, slick, currentSlide){
		cloneCaption();
		updateSlideHeight();
	});

	jQuery(document).ready(function(){
		cloneCaption();
	});
	//

});