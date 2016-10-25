(function (window) {
	/**
	 * Section 1 - Sanity Check
	 * =============================================================================
	 */
	if (typeof window.headertag === 'undefined' ||
		typeof window.headertag.desktop_divIds === 'undefined' ||
		typeof window.headertag.mobile_divIds === 'undefined') {
		console.warn("HTW Config Error: desktop_divIds and mobile_divIds are not defined.");
		window.googletag = window.googletag || { cmd: [] };
		window.googletag.cmd.push(function() {
			window.headertag = window.googletag;
		});
		return;
	}

	/**
	 * Section 2 - Helper Functions
	 * =============================================================================
	 */
	function filterByDivs(slotList, divs) {
		var slotsToReturn = [];
		for (var i = 0; i < slotList.length; i++) {
			var slotObj = slotList[i];
			if (slotObj.hasOwnProperty('id')) {
				if (arrayMatch([slotObj.id], divs)) {
					slotsToReturn.push(slotObj);
				}
			}
			else if (slotObj.hasOwnProperty('divs') && slotObj.hasOwnProperty('config')) {
				if (arrayMatch(slotObj.divs, divs)) {
					if (Object.prototype.toString.call(slotObj.config) === '[object Array]') {
						slotsToReturn.push.apply(slotsToReturn, slotObj.config);
					} else {
						slotsToReturn.push(slotObj.config);
					}
				}
			}
		}
		return slotsToReturn;
	}
	function arrayMatch(arr1, arr2) {
		for (var i = 0; i < arr1.length; i++) {
			for (var j = 0; j < arr2.length; j++) {
				if (arr1[i] === arr2[j]) { return true; }
			}
		}
		return false;
	}

	function isMobile() {
		var mobileBreakPoint = 768;
		var e = window.document.documentElement;
		return Math.max(e.scrollWidth, e.offsetWidth, e.clientWidth) < mobileBreakPoint;
	}
	var page_divs = isMobile() ? window.headertag.mobile_divIds
		: window.headertag.desktop_divIds;

	/**
	 * Section 3a - Yieldbot Configuration
	 * =============================================================================
	 */
	// Set YBOT pub ID
	var ybotPub;
	if (isMobile()) {
		ybotPub = '0651'; // YBOT Mobile Pub ID
	} else {
		ybotPub = '4534'; // YBOT Desktop Pub ID
	}
	// Define all YBOT slots
	var ybotSlotsList = [{
		divs: ['dfp-ad-top_728x90'],
		config: {
			id: 'dfp-ad-top_728x90',
			sizes: [[728, 90]]
		}
	}, {
		divs: ['dfp-ad-right1_300x250'],
		config: {
			id: 'dfp-ad-right1_300x250',
			sizes: [[300, 250], [300, 600]]
		}
	},  {
		divs: ['dfp-ad-mobile_top'],
		config: {
			id: 'dfp-ad-mobile_top',
			sizes: [[320, 50]]
		}
	}, {
		divs: ['dfp-ad-mobile_box'],
		config: {
			id: 'dfp-ad-mobile_box',
			sizes: [[300, 250]]
		}
	}, {
		divs: ['dfp-ad-mobile_bottom'],
		config: {
			id: 'dfp-ad-mobile_bottom',
			sizes: [[320, 50]]
		}
	}];
	// Filter YBOT slots based on page_divs
	var ybotSlots = filterByDivs(ybotSlotsList, page_divs);


	/**
	 * Section 3b - AOL Configuration
	 * =============================================================================
	 */
	var aolDesktopPageId = '866454';
	var aolMobilePageId = '866455';
	// Define all AOL placements
	var aolPlacementsList = [{
		divs: ['dfp-ad-top_728x90'],
		config: {
			// Men's Fitness Desktop 728 x 90
			id: '4094539',
			pageId: aolDesktopPageId,
			sizeId: '225'
		}
	}, {
		divs: ['dfp-ad-top_728x90'],
		config: {
			// Men's Fitness Desktop 970 x 250
			id: '4094540',
			pageId: aolDesktopPageId,
			sizeId: '2466'
		}
	}, {
		divs: ['dfp-ad-right1_300x250'],
		config: {
			// Men's Fitness Desktop 300 x 250
			id: '4153873',
			pageId: aolDesktopPageId,
			sizeId: '170'
		}
	}, {
		divs: ['dfp-ad-right1_300x250'],
		config: {
			// Men's Fitness Desktop 300 x 600
			id: '4094541',
			pageId: aolDesktopPageId,
			sizeId: '529'
		}
	}, {
		divs: ['dfp-ad-mobile_top'],
		config: {
			// Men's Fitness Mobile 320 x 50
			id: '4094544',
			pageId: aolMobilePageId,
			sizeId: '3055',
			alias: '4094544'
		}
	}, {
		divs: ['dfp-ad-mobile_box'],
		config: {
			// Men's Fitness Mobile 300 x 250
			id: '4094543',
			pageId: aolMobilePageId,
			sizeId: '170',
			alias: '4094543'
		}
	}];
	// Filter AOL placements based on page_divs
	var aolPlacements = filterByDivs(aolPlacementsList, page_divs);


	/**
	 * Section 3c - Rubicon Configuration
	 * =============================================================================
	 */
	var rubiconDesktopSiteId = '84202';
	var rubiconDesktopZoneId = '398078';
	var rubiconMobileSiteId = '84200';
	var rubiconMobileZoneId = '398068';
	var rubiconSlotsList = [{
		id: 'dfp-ad-top_728x90',
		siteId: rubiconDesktopSiteId,
		zoneId: rubiconDesktopZoneId,
		sizes: [[728, 90], [970, 90], [970, 250]],
		pos: 'atf'
	}, {
		id: 'dfp-ad-right1_300x250',
		siteId: rubiconDesktopSiteId,
		zoneId: rubiconDesktopZoneId,
		sizes: [[300, 250], [300, 600], [300, 1050]],
		pos: 'atf'
	}, {
		id: 'dfp-ad-right2_300x250',
		siteId: rubiconDesktopSiteId,
		zoneId: rubiconDesktopZoneId,
		sizes: [[300, 250]],
		pos: 'btf'
	}, {
		id: 'dfp-ad-right3_300x250',
		siteId: rubiconDesktopSiteId,
		zoneId: rubiconDesktopZoneId,
		sizes: [[300, 250]],
		pos: 'btf'
	}, {
		id: 'dfp-ad-mobile_top',
		siteId: rubiconMobileSiteId,
		zoneId: rubiconMobileZoneId,
		sizes: [[320, 50]],
		pos: 'atf'
	}, {
		id: 'dfp-ad-mobile_bottom',
		siteId: rubiconMobileSiteId,
		zoneId: rubiconMobileZoneId,
		sizes: [[320, 50]],
		pos: 'atf'
	}, {
		id: 'dfp-ad-mobile_box',
		siteId: rubiconMobileSiteId,
		zoneId: rubiconMobileZoneId,
		sizes: [[300, 250]],
		pos: 'atf'
	}];
	// Filter Rubicon slots based on page_divs
	var rubiconSlots = filterByDivs(rubiconSlotsList, page_divs);


	/**
	 * Section 3e - FB Configuration
	 * =============================================================================
	 */
	var fbAppId = '1682020602087668';
	var fbMobileSlots = [{
		code: 'dfp-ad-mobile_box',
		sizes: [[300, 250]],
		placementId: fbAppId+'_1786613384961722'
	}];
	var fbDesktopSlots = [];


	/**
	 * Section 4 - Prefetch Configuration
	 * =============================================================================
	 */
	// List all lazy-load div IDs
	var lazyload_divs = ['dfp-ad-right2_300x250', 'dfp-ad-right3_300x250'];
	// Filter the lazyload divs out of all page divs to get prefetch divs
	var prefetch_divs = [];
	for (var i = 0; i < page_divs.length; i++) {
		if (!arrayMatch([page_divs[i]], lazyload_divs)) {
			prefetch_divs.push(page_divs[i]);
		}
	}


	/**
	 * Section 4a - Index Prefetch Configuration
	 * =============================================================================
	 */
	// Define all INDX prefetch values
	var indxPrefetchList = [{
		divs: ['dfp-ad-top_728x90'],
		config: ['1','2','3']
	}, {
		divs: ['dfp-ad-right1_300x250'],
		config: ['7','8']
	}, {
		divs: ['dfp-ad-right2_300x250'],
		config: ['10']
	}, {
		divs: ['dfp-ad-right3_300x250'],
		config: ['11']
	}, {
		divs: ['dfp-ad-mobile_top'],
		config: ['18']
	}, {
		divs: ['dfp-ad-mobile_bottom'],
		config: ['19']
	}, {
		divs: ['dfp-ad-mobile_box'],
		config: ['20']
	}];
	// Filter INDX prefetch based on page_divs
	var indxPrefetch = filterByDivs(indxPrefetchList, prefetch_divs);


	/**
	 * Section 5 - Passing Configuration to Headertag
	 * =============================================================================
	 */
	window.headertagconfig = {
		siteId: 176820,
		timeout: 1000,
		disableInitialLoad: true,
		partners: {
			'INDX': {
				timeout: 1000,
				publicKey: 'IOM',
				privateKey: 'IPM',
				targetingType: 'slot',
				prefetchInfo: {
					requiredIndexSlots: indxPrefetch
				}
			},
			'YBOT': {
				timeout: 1000,
				targetingType: 'page',
				pub: ybotPub,
				slots: ybotSlots,
				prefetchInfo: {}
			},
			'AOL': {
				timeout: 1000,
				targetingType: 'page',
				networkId: '9519.1',
				apiVersion: '3.0',
				targetingKey: 'aolbid',
				region: 'na',
				placements: aolPlacements,
				prefetchInfo: {}
			},
			'RUBI': {
				targetingType: 'slot',
				networkId: '9294',
				timeout: 1000,
				slots: rubiconSlots,
				prefetchInfo: {
					divIds: prefetch_divs
				}
			},
			'FB':{
				disabled: false,
				timeout: 1000,
				targetingType: 'slot',
				appId: fbAppId,
				adUnits: {
					mobile: fbMobileSlots,
					desktop: fbDesktopSlots
				},
				prefetchInfo: {
					divIds: prefetch_divs
				}
			}
		}
	};
}(window));