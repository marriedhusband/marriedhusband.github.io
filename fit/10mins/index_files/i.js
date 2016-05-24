//<script>
if (!(window.bouncex&&bouncex.website)) { 
	(function(){ 		var pushedData = [];
	 	if(window.bouncex && bouncex.push && bouncex.length){	 		pushedData = bouncex;
	 	} 
	 	window.bouncex = {};
	 	bouncex.pushedData = pushedData;
	 	
		bouncex.website = {"ei":0,"cookie_name":"bounceClientVisit807","base_host":"assets.bounceexchange.com","vars":{"is_logged_in":{"polling":"none","persist":"no","val":"getBounceCookie('extcache').indexOf(\"user\") > -1","default":""},"dont_show_ad":{"polling":"none","persist":"no","val":"window.top.location.href.indexOf('outdoor-adventure-center')>=0 || window.top.location.href.indexOf('most-extreme-places-to-climb')>=0","default":""},"on_site_more_than_35":{"polling":"none","persist":"permanent","val":"null","default":"false"},"gbi-criteo":{"polling":"none","persist":"no","val":"(function(){Number.isInteger=Number.isInteger||function(value){return typeof value===\"number\"&&isFinite(value)&&Math.floor(value)===value};bouncex.gbi=bouncex.gbi||{};bouncex.gbi.criteo=bouncex.gbi.criteo||{fetch:function(args){if(!args||!Number.isInteger(args.zoneId)||!Number.isInteger(args.itemsCount)||!Number.isInteger(parseInt(args.campaign_id))||typeof args.callback!==\"function\"){return}var criteoUrl=\"https:\/\/cas.criteo.com\/delivery\/0.1\/napi.jsonp?zoneid=\"+args.zoneId;var _this=this;jQuery.ajax({url:criteoUrl,dataType:\"jsonp\",jsonpCallback:\"criteo\"+args.zoneId+args.campaign_id,timeout:8e3}).done(function(res){_this.generateCriteo(res,args.itemsCount,args.campaign_id,args.callback)})},template:'<div class=\"gbi-item\"><a href=\"{click_url}\" target=\"_blank\"><div class=\"gbi-thumb\" style=\"background-image:url(\\'{image}\\');\">&nbsp;<div class=\"gbi-hover-cta\">Let\\'s Go!<\/div><\/div><div class=\"gbi-text\"><div class=\"gbi-title\">{title}<\/div><div class=\"gbi-subtitle\">{description}<\/div><div class=\"gbi-price\">{price}<\/div><\/div><\/a><\/div>',templating:function(s,d){for(var p in d){if(p===\"image\"&&d[p]&&d[p].url){s=s.replace(new RegExp(\"{\"+p+\"}\",\"g\"),d[p].url)}else s=s.replace(new RegExp(\"{\"+p+\"}\",\"g\"),d[p])}return s},generateCriteo:function(response,itemsCount,campaign_id,callback){if(!response||!Array.isArray(response.products)||!Number.isInteger(itemsCount)||!Number.isInteger(parseInt(campaign_id))||typeof callback!==\"function\"){return}var loadCounter=0;var frame=jQuery(\".gbi-frame\");var _this=this;if(frame&&frame.length&&frame.length>0){frame=jQuery(frame);jQuery(\".gbi-item\").remove();loadCounter=0;for(var i=0;i<itemsCount;i++){var o=response.products[i];if(!o){console.log(\"generateCriteo: Not enough items\");return}var str=_this.templating(_this.template,o);frame.prepend(str)}frame.find(\".gbi-item a\").bind(\"click.bcx\",function(e){bouncex.report(campaign_id,\"clicks\")});if(response.advertiser&&response.advertiser.logo_click_url&&response.advertiser.domain){var at=frame.find(\".gbi-attribution a\");at.attr(\"href\",response.advertiser.logo_click_url);at.text(response.advertiser.domain)}if(response.privacy&&response.privacy.optout_click_url){var ca=frame.find(\".gbi-choices a\");ca.attr(\"href\",response.privacy.optout_click_url)}frame.find(\".gbi-thumb\").each(function(){var img=new Image;img.onload=function(){loadCounter++;if(loadCounter===itemsCount&&jQuery(\".gbi-item\").eq(0).height()!==0){callback()}};var src=jQuery(this).css(\"background-image\").replace(\/^url\\((.*?)\\)$\/,\"$1\").replace(\/\"\/g,\"\").replace(\/'\/g,\"\");img.src=src});if(response.impression_pixels&&Array.isArray(response.impression_pixels)){window.criteoImpressionData=response.impression_pixels}}}}})();","default":"0"},"adhesion_present":{"polling":"all","persist":"no","val":"jQuery('#jpd_adhesion').is(':visible');","default":"false"},"video_ended":{"polling":"none","persist":"no","val":"null;","default":""}},"acts":[],"pi":1000,"ct":"bind_to_subdomain","tcjs":"","cjs":"\/\/CV should be named on_site_more_than_40\n\n(function () {\n  if(!window.bouncex.vars.on_site_more_than_35){\n      var timeOnSiteInt = setInterval(function () {\n        var currentTime = getTime2();\n        var visitStartTime = window.bouncex.cookie.cvt;\n        if (currentTime - visitStartTime > 85) {\n          clearInterval(timeOnSiteInt);\n          window.bouncex.setv('on_site_more_than_35', true);\n          window.bouncex.setBounceCookie();\n          if (!bouncex.overlay_visible) {\n            window.bouncex.reload_campaigns();\n          }\n        }\n      }, 1000);\n  }\n})();","PMI":500,"PDI":1000,"PMR":30,"force_https":false,"waypoints":false,"gai":"","ots":0,"sd":0,"aco":{"first_party_limit":"3500"},"id":807,"campaign_id":0,"uwc":0,"domain":"","bau":"api.bounceexchange.com","beu":"events.bounceexchange.com","is_preview":false,"mas":1,"map":1,"gar":true,"gbi_enabled":1,"burls":[{"prop":"contains","val":"begrizly.com"}],"ibx":{"cjs":"","miw":"0","mibcx":0,"te":0,"tjs":"","cart_rep":{"get":"","set":""}}};

		//<script>


var bcx_init = function(){

	if (!can_init()){
		return;
	}
	init_public_functions();

	bouncex.local_storage_enabled = bouncex.website.aco.local_storage;

	init_cookie_functions();
	var referrer = document.referrer;
	bouncex.referrer = '';
	bouncex.is_google_pla = 0;
	if(referrer){
		bouncex.referrer = encodeURIComponent(referrer.split('/')[2]);
		if(referrer.indexOf('google.')>-1){
			bouncex.is_google_pla = +(referrer.indexOf('ctype=5')>-1);
		}
	}

	bouncex.calling_url = encodeURIComponent(window.location.href);

	var proto = (bouncex.website.force_https?'https:':window.location.protocol);
	bouncex.au = proto + '//'+bouncex.website.bau;
	bouncex.eu = proto + '//'+bouncex.website.beu;
	bouncex.bu = proto + '//'+bouncex.website.base_host;

	init_visit_cookie();

	bouncex.cookie_domain = false;
	if(bouncex.website.uwc || bouncex.website.ct == 'multi_cookie'){
		if(bouncex.calling_url.indexOf(bouncex.website.domain)>0){
			bouncex.cookie_domain = bouncex.website.domain;
		}
	}

	init_browser();
	init_cookie();
	init_ibx();

	if(bouncex.website.is_preview){
		var wsize = wndsize();
		var resolution = wsize.width+'x'+wsize.height;
		baddjs(bouncex.au+'/bounce/initp.js?campaign_id='+bouncex.website.campaign_id+'&resolution='+resolution);

	} else if (!bouncex.local_storage_enabled){
		init_post_cookie();
	} else {
		//gets activated from localstorage
	}

};

function init_post_cookie(){
	initPushedData();

	if (typeof window.bxconv === "object") {
		report_conversion_sync(window.bxconv);
	}
	var waitForReady = false;

	if(bouncex.website.sd>-1 && (bouncex.website.vars || bouncex.website.acts)){
		waitForReady=true;	
	}

	var bcx_str;
	if(waitForReady){
		bcxReady(function(){
			init_vars();
			bcx_str = make_include_string();
			baddjs(bcx_str);
		});
	}else{
		init_vars();
		bcx_str = make_include_string();
		baddjs(bcx_str);
	}
}

function processPushedData(eventName, metaData){
	if(eventName=='conversion'){
		report_conversion_sync(metaData,'pushdata');
	}else{

	}
}

function initPushedData(){
	var pushedDataLength = bouncex.pushedData.length;
	for (var i = 0; i < pushedDataLength; i++) {
		processPushedData(bouncex.pushedData[i][0], bouncex.pushedData[i][1]);
	}
	bouncex.pushedData = [];

}
bouncex.push = function (pushedData){
	processPushedData(pushedData[0], pushedData[1]);
}


function can_init() {
	if(document.visibilityState){
				if(document.visibilityState === 'prerender'){
			addEvent(document, 'visibilitychange', function visibilityListener(){
				if(document.visibilityState !== 'prerender'){
					removeEvent(document, 'visibilitychange', visibilityListener);
					bcx_init();
				}
			});
			bouncex.prerendered = true;
			return false;
		}
	}
	if(bouncex.baddjs){
		return false;//only include our tag once
	}
	if(!window['postMessage']){
		return false;//only support browsers that support messages
	}
	if(!(bouncex.website.ct=='multi_cookie' && bouncex.website.aco.disable_first_party) && !bouncex.website.is_preview){
		if(document.cookie.length>6000){
			return false;
		}
	}
	if(!bouncex.website.ei && window!=window.top){
		return false;
	}
	if(!areCookiesEnabled()){
		return false;
	}
	if (bouncex.website.burls.length){
		for(var k in bouncex.website.burls){
			if (bouncex.website.burls.hasOwnProperty(k)){
				var burl = bouncex.website.burls[k];
				if (burl.prop.indexOf('contains')!=-1){
					var c = window.location.href.indexOf(burl.val);
					if ((burl.prop=='contains'&&c!=-1)||(burl.prop=='not_contains'&&c==-1)){
						return false;
					}
				} else if (burl.prop.indexOf('regex_match')!=-1){
					var m = (new RegExp(burl.val,'gi')).test(window.location.href);
					if ((burl.prop=='regex_match'&&m)||(burl.prop=='not_regex_match'&&!m)){
						return false;
					}
				}
			}
		}
	}
	return true;
}

function init_visit_cookie() {
	var c = (getBounceVisitCookie());
	if(c){
		bouncex.visit_cookie = bouncex.parseJSON(c);
	}
	
	if(!bouncex.visit_cookie){
		bouncex.visit_cookie = {};
		bouncex.visit_cookie.lp = bouncex.calling_url.substring(0,500).replace(/\+/g,'%2B').replace(/\%[A-F0-9]?[^A-F0-9]/,'');
		bouncex.visit_cookie.r = bouncex.referrer;
		setBounceVisitCookie();
	}else{
		
	}
}

function init_cookie() {
	bouncex.cookie = getBounceCookie();
}

function init_cookie_functions() {
	if(bouncex.local_storage_enabled){
		init_cookie_localstorage();
		window.setBounceCookie = bouncex.setBounceCookie = setBounceCookieLocalStorage;
		window.getBounceCookie = bouncex.getBounceCookie = getBounceCookieLocalStorage;
	}else if(bouncex.website.ct=='multi_cookie'){ 
		window.MultiCookie = MultiCookie;
		window.getBounceCookie = bouncex.getBounceCookie = getBounceCookieMulti;
		window.setBounceCookie = bouncex.setBounceCookie = setBounceCookieMulti;
	}else{
		window.getBounceCookie = bouncex.getBounceCookie = getBounceCookieSingle;
		window.setBounceCookie = bouncex.setBounceCookie = setBounceCookieSingle;
	}
	window.setBounceVisitCookie = setBounceVisitCookie;
	window.getBounceVisitCookie = getBounceVisitCookie;
	window.clearBounceCookie = clearBounceCookie;
	bouncex.stringify_cookie = stringify_cookie;

}

function init_cookie_localstorage(){
	var local_storage_frame_url = 'https://' + bouncex.website.base_host + '/assets/bounce/local_storage_frame.html';
					
	local_storage_frame_url += '#' + bouncex.website.cookie_name;
	bouncex.local_storage_frame = document.createElement("IFRAME"); 

	bouncex.local_storage_frame.style['display'] = 'none'; 
	bouncex.local_storage_frame.setAttribute('id', 'bcx_local_storage_frame');
	bouncex.local_storage_frame.setAttribute('src', local_storage_frame_url); 
	if(document.body){
		document.body.appendChild(bouncex.local_storage_frame);
	} else { 
		var wait_for_body_interval = setInterval(function(){
			if(document.body){
				document.body.appendChild(bouncex.local_storage_frame); 
				clearTimeout(wait_for_body_interval);
			}
		},100);
	}

	var cookie_listener = function(message){
		if(message.origin == 'https://' + bouncex.website.base_host){
			if(message.data=='third_party_cookies_disabled'){
				bouncex.local_storage_enabled = false;
				//redefine cookie methods to nonlocalstorage
				init_cookie_functions();
				init_post_cookie();
			} else if(message.data.indexOf('bcx_message=true') < 0) {
				var msg_cookie = message.data;
				
				if(!bouncex.local_storage_initialized){
					bouncex.local_storage_initialized = true;
					bouncex.cookie = {};

					if(msg_cookie){
						bouncex.cookie = bouncex.parseJSON(decodeURIComponent(msg_cookie));
					}else{
						if(bouncex.website.ct=='multi_cookie'){ 
							bouncex.cookie = getBounceCookieMulti();
						}else{
							bouncex.cookie = getBounceCookieSingle();
						}
						//kill first party cookie
						clearBounceCookie(true);
					}
					init_post_cookie();
				}else{
					bouncex.cookie = bouncex.parseJSON(decodeURIComponent(msg_cookie));
				}
			}
		}
	}
	addEvent(window, 'message', cookie_listener);
}

function init_public_functions() {
	window.console || (window.console = {log: function () { return {} }});
	bouncex.log = (console.log.bind ? console.log.bind(console) : window.console.log);
	bouncex.formatv = formatv;
	bouncex.setv = setv;
	bouncex.init_lightbox = init_lightbox;
	bouncex.updateQS = updateQS;
	bouncex.make_include_string = make_include_string;
	bouncex.baddjs = baddjs;
	bouncex.wndsize = wndsize;
	bouncex.init = init;

	//fills	
	bouncex.bcxReady = bcxReady;
	bouncex.stringify = stringify;
	bouncex.parseJSON = parseJSON;

	bouncex.addCss = addCss;

	bouncex.unload_campaigns = unload_campaigns;
	bouncex.unload_campaign = unload_campaign;
	bouncex.reload_campaigns = reload_campaigns;

	//forms
	bouncex.nextStep = nextStep;
	bouncex.submitCampaignStep = submitCampaignStep;
	bouncex.setJumpStep = setJumpStep;

	bouncex.placeCampaign = placeCampaign;
	bouncex.alignCampaign = alignCampaign;

	// JW: polyfill window.atob and window.btoa
	(function(g){"window"in g&&"document"in g&&function(){function h(a){a=String(a);var d=0,e=[],b=0,c=0,f;a=a.replace(/\s/g,"");0===a.length%4&&(a=a.replace(/=+$/,""));if(1===a.length%4)throw Error("InvalidCharacterError");if(/[^+/0-9A-Za-z]/.test(a))throw Error("InvalidCharacterError");for(;d<a.length;)f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d)),b=b<<6|f,c+=6,24===c&&(e.push(String.fromCharCode(b>>16&255)),e.push(String.fromCharCode(b>>8&255)),e.push(String.fromCharCode(b&255)),b=c=0),d+=1;12===c?e.push(String.fromCharCode(b>>4&255)):18===c&&(b>>=2,e.push(String.fromCharCode(b>>8&255)),e.push(String.fromCharCode(b&255)));return e.join("")}function k(a){a=String(a);var d=0,e=[],b,c,f,g;if(/[^\x00-\xFF]/.test(a))throw Error("InvalidCharacterError");for(;d<a.length;)b=a.charCodeAt(d++),c=a.charCodeAt(d++),f=a.charCodeAt(d++),g=b>>2,b=(b&3)<<4|c>>4,c=(c&15)<<2|f>>6,f&=63,d===a.length+2?f=c=64:d===a.length+1&&(f=64),e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g),"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b),"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f));return e.join("")}"atob"in g&&"btoa"in g||(g.atob=h,g.btoa=k)}()})(window);

}

function init_browser() {
	var nav = navigator.userAgent.toLowerCase();
	bouncex.browser = {};
	bouncex.browser.webkit = (/webkit/).test(nav);
	bouncex.browser.firefox = (/firefox/).test(nav);
	bouncex.browser.msie = (/trident\/7\.|msie/).test(nav);
		if (bouncex.browser.msie && nav.indexOf('msie') > 0) {
		bouncex.browser.msie = parseInt(nav.split('msie')[1]);
	}
		if (bouncex.browser.msie && nav.indexOf('rv:') > 0) {
		bouncex.browser.msie = parseInt(nav.split('rv:')[1])
	}

		bouncex.browser.edge = (/edge/).test(nav);
	if (bouncex.browser.edge) {
		bouncex.browser.edge = parseInt(nav.split('edge/')[1])
	}

	bouncex.browser.iphone = nav.indexOf('iphone') > -1;
	bouncex.browser.ipad = nav.indexOf('ipad') > -1;
	bouncex.browser.ios8 = false;
	bouncex.browser.ios9 = false;
	if (bouncex.browser.iphone||bouncex.browser.ipad) {
		bouncex.browser.ios8 = (/version\/8./).test(nav);
		bouncex.browser.ios9 = (/version\/9./).test(nav);
	}

	bouncex.browser.safari = !!(nav.indexOf('safari') != -1 && nav.indexOf('chrome') == -1);
	if(bouncex.browser.safari&&nav.indexOf('version/')>0){
		bouncex.browser.safari = parseInt(nav.split('version/')[1].replace('.',''));
	}

	if(bouncex.browser.iphone||bouncex.browser.ipad){
		bouncex.browser.chrome = (/crios/).test(nav);
		if(bouncex.browser.chrome){
			bouncex.browser.ios9 = parseInt(nav.split('crios/')[1]) > 47;
		}
	}else{
		bouncex.browser.chrome = (/chrome/).test(nav);
	}
	if(bouncex.browser.chrome&&nav.indexOf('chrome/')>0){
		bouncex.browser.chrome = parseInt(nav.split('chrome/')[1]);
	}
}

function init_post_campaign_public_function() {

	bouncex.setBounceCookie = function(){
		setBounceCookie();
	};
	bouncex.initActivationFuncs = function(){
		init_activation_funcs();
	};
	bouncex.contains = jQuery.contains&&(jQuery().jquery.indexOf('1.4.')==-1&&!(jQuery().jquery.indexOf('1.8.')>-1))?jQuery.contains:eval('document.contains||document.compareDocumentPosition?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16))}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true}}}return false};');

	bouncex.close_ad = function(ca_id, silent, no_report){ close_ad(ca_id, silent, no_report);};
	
	bouncex.report = function( ca_id, eventname, extra ){
		if( !bouncex.campaigns[ca_id] ){
			return;
		}
		return report( ca_id, eventname, extra );
	};
	bouncex.report_submit = function(ca_id,obj,complete) {return report_submit(ca_id,obj,complete)};

	bouncex.report_ga = function(action,label,bypass){report_ga(action,label,bypass)};

	bouncex.report_conversion = function(obj,source){report_conversion(obj,source);};
	window.close_bouncex_ad = close_ad;	

	bouncex.fs = fs;
	bouncex.by_parent_id = function(pid){ return by_parent_id(pid); }
	bouncex.show_ad = function(ca_id){ show_ad('manual',ca_id); }
	bouncex.align_callout = align_callout_public;
	bouncex.destroy_ad = destroy_ad;
	bouncex.unload_campaigns = unload_campaigns;
	bouncex.reload_campaigns = reload_campaigns;
	bouncex.reportGa = reportGa;
	bouncex.loadBrandStyles = loadBrandStyles;
	bouncex.loadWebfonts = loadWebfonts;
	bouncex.activate_action = activate_action;
	bouncex.activate_campaign = activate_campaign;
}

function init_ibx() {
			bouncex.ibx={wsid:bouncex.website.id,_event_store:[],_item_store:[],uid:null,bxl:null,crt:null,token:null,mode:1,cvar:{},_init:function(){this.vid=bouncex.cookie.vid,this.token=bouncex.cookie.did,this.uid=this._get("user"),this.mode=this._get("mode"),this.bxl=this._get("bx_lookup"),this.crt=this._get("cart"),this._cart("set"),this._clkthrough(),this._log("initialized"),this._log("mode: "+this.mode+" | token: "+this.token)},user:function(e,t){if(!this._validate(e))return void this._log("invalid email");this.set("user",1);var i=this._cart("get");i&&(t=t||{},t.__cart=i),this._push("user",{key:e,val:t});var r={};r["user:email"]=e,r["user:source"]=t.__src,r.agent="js",t.campaign&&(r.campaignid=t.campaign),r.eq=1,event_stream_report("user",r)},track:function(e,t,i,r){if(!e||!t)return void this._log("type and key must be set");this["_"+e+"_store"]&&this["_"+e+"_store"].push({key:JSON.stringify(i)}),r||(r="");var s={key:t,val:i,segment:r};this._push(e,s);var o={},c=t;"item"==e&&(c="item",o["item:segment"]=r,o["item:id"]=t,o["item:url"]=i.__url,o["item:imageurl"]=i.creative,o["item:imagewidth"]=i.__width,o["item:imageheight"]=i.__height,o.stringvalue=t),"cart"==e&&(c="cart");for(var a in i)i.hasOwnProperty(a)&&"__"!=a.substring(0,2)&&(o[c+":"+a]=i[a]);i&&i.stringvalue&&(o.stringvalue=i.stringvalue),o.eq=1,event_stream_report(c,o)},conv_params:function(){var e=this._auto_add({ibx_mode:this._get("mode"),ibx_clicks:this._get("clickstr")});return e.ibx_clicks&&(this._cookies.create("__ibxc0",e.ibx_clicks),this._cookies.destroy("__ibxc")),this._log("conv_params: "+(e.ibx_clicks?e.ibx_clicks:"[none]")),this._qs(e)},set:function(e,t){switch(e){case"user":this.uid=t,this._cookies.create("__ibxu",t);break;case"mode":(0==t||1==t)&&(this.mode=t,this._cookies.create("__ibxm",t));break;case"bx_lookup":this.bxl=t,this._cookies.create("__ibxl",t);break;case"cart":this.crt=t,this._cookies.create("__ibxcr",t,.5)}return t},dump:function(e){this._log(e+" = "+this._get(e))},_get:function(e){var t;switch(e){case"events":t=this._event_store;break;case"items":t=this._item_store;break;case"token":t=btoa(bouncex.cookie.did);break;case"user":t=parseInt(this._cookies.read("__ibxu")),isNaN(t)&&(t=0);break;case"mode":t="0"===this._cookies.read("__ibxm")?0:1;break;case"clickstr":t=this._cookies.read("__ibxc");break;case"clicks":t=(t=this._cookies.read("__ibxc"))?t.split(","):[];break;case"bx_lookup":t=parseInt(this._cookies.read("__ibxl")),isNaN(t)&&(t=0);break;case"cart":t=parseInt(this._cookies.read("__ibxcr")),isNaN(t)&&(t=0);break;default:t="invalid"}return t},_push:function(e,t){var i,r="type="+e+"&wsid="+this.wsid+"&gcr="+bouncex.cookie.gcr+"&vid="+bouncex.cookie.vid+"&mode=1";if(r+="&device_id="+encodeURIComponent(bouncex.cookie.did),t.val=JSON.stringify(this._auto_add(t.val||{})),r=r+"&"+this._qs(t),i="undefined"!=typeof t.key?": "+t.key:"",this._log(e.toUpperCase()+i+" // "+r),"cart"==e||"user"==e||"isr"==e){var s=bouncex.au+"/ibx/ping?"+r,o=document.createElement("img");o.src=s}},_auto_add:function(e){return e=e||{},e.hasOwnProperty("__url")||(e.__url=location.href),e.hasOwnProperty("__referrer")||(e.__referrer=document.referrer),e},_bx_lookup:function(){if(!this.bxl){if(bouncex.cookie.es&&bouncex.cookie.campaigns&&!bouncex.ibx.uid){var e=bouncex.cookie.campaigns,t=null;for(var i in e)e.hasOwnProperty(i)&&e[i].ls&&e[i].lavid&&(t=e[i].lavid);if(t){var r={vid:t,__src:"bx_lookup"},s=this._cart("get");s&&(r.__cart=s),this._push("bx_lookup",{key:t,val:r})}}this.set("bx_lookup",1)}},_cart:function(action){var cart=!1;switch(action){case"get":try{cart=eval(bouncex.website.ibx.cart_rep.get)}catch(e){cart=!1,this._log(e)}break;case"set":if(this.crt||-1==location.href.indexOf("ibx_cart"))return!1;cart=this._getparam("ibx_cart"),cart&&(eval(bouncex.website.ibx.cart_rep.set),this.set("cart",1)),cart=this.crt}return cart},_clkthrough:function(){var e,t=this._getparam("ibx_source");if(t)try{if(e=this._get("clickstr")){if(-1!=e.indexOf(t))return void this._log("click-through: "+t+" (DUPLICATE)");e+=","+t}else e=t;this._cookies.create("__ibxc",e),this._log("click-through: "+t)}catch(i){this._log(i)}},_log:function(e){0==this.mode&&bouncex.log("ibx: "+e)},_validate:function(e){var t=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)},_quick_validate:function(e){return null==e?!1:e.indexOf(".")>2&&e.indexOf("@")>0},_qs:function(e){var t=[];for(var i in e)e.hasOwnProperty(i)&&t.push(i+"="+encodeURIComponent(e[i]));return t.join("&")},_cookies:{domain:window.bouncex.cookie_domain,create:function(e,t,i){i||(i=365);var r=new Date;r.setTime(r.getTime()+24*i*60*60*1e3);var s="; expires="+r.toGMTString(),o=this.domain?"domain=."+this.domain+";":"";document.cookie=e+"="+t+s+"; path=/;"+o},read:function(e){for(var t=e+"=",i=document.cookie.split(";"),r=0;r<i.length;r++){for(var s=i[r];" "==s.charAt(0);)s=s.substring(1,s.length);if(0==s.indexOf(t))return s.substring(t.length,s.length)}return null},destroy:function(e){this.create(e,"",-1)}},_getparam:function(e,t){var i=t?"?"+t:window.location.href;e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var r="[\\?&]"+e+"=([^&#]*)",s=new RegExp(r),o=s.exec(i);return null==o?"":decodeURIComponent(o[1])}};
}

function init_website_custom_js() {
	if(bouncex.website.cjs){
		try {
			eval(bouncex.website.cjs);
		} catch(err) {
			bouncex.log(err);
		}
	}
}

function init_ibx_tracking() {
	if(bouncex.website.ibx.te&&bouncex.website.ibx.te==1){
		// auto-monitor client inputs for valid users
		if(bouncex.website.ibx.miw==1) { 
			try {
				// monitor all inputs (except exclusions) ex. input type="email"
				jQuery('input').not(':input[type=button], :input[type=submit], :input[type=reset], :input[type=hidden], :input[type=radio], :input[type=checkbox], :input[type=image], :input[type=password]').blur(function(){
					var source = jQuery(this).attr("id");
					bouncex.ibx.user( jQuery(this).val(), {__src: source } );
				});
			} catch(err) { bouncex.log(err); }
		}
		try {
			eval(bouncex.website.ibx.tjs);
		} catch(err) { bouncex.log(err); }
		bouncex.ibx._bx_lookup();
	} 
}




function attachClickReportingToIframe(container, ca_id){
	bouncex.on(container, {
		mouseenter: function() {
			bouncex.on(jQuery(window), 'blur.gbi_blur_'+ca_id, function(){
				bouncex.report(ca_id, 'click');
			});
		}, mouseleave: function() {
			bouncex.off(jQuery(window), 'blur.gbi_blur_'+ca_id);
		}}
	);
	bouncex.events[ca_id]['blur.gbi_click'] = function(){
		bouncex.off(jQuery(window), 'blur.gbi_blur_'+ca_id);
		bouncex.off(container, 'mouseenter mouseleave');
	}
}

function wrapContentInIframe(container, html){
		var oldFrame = container.find('iframe');
	if(oldFrame.length){
		oldFrame.remove();
	}
	var gbiFrame = jQuery('<iframe frameborder="0" horizontalscrolling="no" verticalscrolling="no" width="100%" height="100%" vspace="0" hspace="0" marginwidth="0" scrolling="no" marginheight="0" allowTransparency="true" target="_parent"></iframe>');
	container.append(gbiFrame);
	var frameDoc = gbiFrame.get(0).contentWindow.document;
	html = '<head><base target="_blank"/></head><body marginwidth="0" marginheight="0" leftmargin="0" topmargin="0">' + html + '</body>';

	frameDoc.open().write(html);
	frameDoc.close();
	return frameDoc;
}

bouncex.gbi = {
	init: function(ca_id){
		bouncex.campaigns[ca_id].gbi.impressionPixels = new Array();
		bouncex.campaigns[ca_id].gbi.clickPixels = new Array();
	},
	fail: function(ca_id, msg){
		bouncex.campaigns[ca_id].failed = true;
		this.clearRequestAssets(ca_id);
		this.log(ca_id, msg, true);
	},
	
	log: function(ca_id, msg, fail){
		if(bouncex.debug){
			var campaign = ca_id ? '(' + ca_id + ')' :'';
			var provider =  '(' + (bouncex.campaigns[ca_id]?(bouncex.campaigns[ca_id].gbi.provider || 'no provider') : 'stack') + ')';
	
			bouncex.log('%c gbi ' + campaign + provider + ': ' + msg, 'color: ' + (fail?'#FF0000':'#00F'));
			if(console.trace && bouncex.trace){
				console.trace()
			}
		}
	},
	report: function(ca_id, eventname, extra){
		bouncex.gbi.log(ca_id, 'reporting event "' + eventname + '"');

		if( bouncex.campaigns[ca_id].gbi.provider ){
			var pixels = '';
			if(eventname == 'pop'){
				if(bouncex.campaigns[ca_id].gbi.impressionPixels && bouncex.campaigns[ca_id].gbi.impressionPixels.length > 0){
					pixels += bouncex.campaigns[ca_id].gbi.impressionPixels.join('');
				}
			}else if(eventname == 'click'){
				if(bouncex.campaigns[ca_id].gbi.clickPixels && bouncex.campaigns[ca_id].gbi.clickPixels.length > 0){
					pixels += bouncex.campaigns[ca_id].gbi.clickPixels.join('');
				}
			}
			if(pixels){
				bouncex.gbi.log(ca_id, 'reporting provider pixel for "' + eventname +'"');
				jQuery(pixels).hide().appendTo(bouncex.body);
			}
		}
		
		if( bouncex.campaigns[ca_id].gbi.stack_id && (eventname == 'eligible' || eventname == 'pop')){
			var stackId = bouncex.campaigns[ca_id].gbi.stack_id;
			var stack = bouncex.gbi.stacks[stackId];
			var stackCampaigns = stack.campaigns;
			var controlLeader = bouncex.campaigns[stack.leader_id].ttype == 'control';
			for(var priority in stackCampaigns) {
				var stackCaId = stackCampaigns[priority];
				var isStackSelf = stackCaId == ca_id;
				var isStackLeader = stackCaId == bouncex.gbi.stacks[stackId].leader_id;
				if(eventname == 'pop' && !isStackSelf && isStackLeader){
										noteCookieAdShown(stackCaId);
				}
				if((eventname == 'eligible'  && (isStackSelf || isStackLeader)) || (eventname == 'pop' && isStackSelf)){
					buildReport(stackCaId, eventname, extra);
				}

				if( eventname == 'pop' ){
					var newEventname = 'trypop';
					var moreExtra = {};
					moreExtra['trypop:provider'] = bouncex.campaigns[stackCaId].gbi.provider || 'none';
					buildReport(stackCaId, newEventname, moreExtra);
				}

				if(isStackSelf){
					break;
				}
			}
		} else {
			buildReport(ca_id, eventname, extra);
		}
	},
	requestComplete: function (ca_id, html, onsuccess){
		var ca = bouncex.campaigns[ca_id];
		bouncex.gbi.log(ca_id, 'have a bid');
		var container;
		if(bouncex.campaigns[ca_id].ng){
		}else{
			var containerType = 'overlay';
			if (ca.bottom !== 'none') {
				containerType = 'bottom';
			} else if (ca.ctop !== 'none') {
				containerType = 'top'
			} else if (ca.callout !== 'none') {
				containerType = 'callout'
			}
			var container = jQuery('#campaign_'+ca_id+'_container_' + containerType).find('.bcx_inner');
		}
		var frameDoc;
		try{
			frameDoc = wrapContentInIframe(container, html);
		} catch (err) {
			bouncex.gbi.fail(ca_id, 'failed to wrap content in iframe');
			return false;
		}

		attachClickReportingToIframe(container, ca_id);
		loadImages(jQuery(frameDoc).find('img'), function(){
			bouncex.gbi.log(ca_id, 'image loaded');
			activateGbiCampaign(ca_id);
			if(onsuccess){
				onsuccess();
			}
		});
		
	},
	cancelRequest: function(ca_id){
		bouncex.gbi.log(ca_id,'cancelling request');
		if(bouncex.gbi.ajaxRequest){
			bouncex.gbi.ajaxRequest.abort();
		}
		bouncex.gbi.init(ca_id);
	},
	clearRequestAssets: function(ca_id){
		if(bouncex.events[ca_id]['gbiRequest']){
			clearInterval(bouncex.events[ca_id]['gbiRequest']);
			delete bouncex.events[ca_id]['gbiRequest'];
		}
	},
	an: {
		request: function(ca_id){
			bouncex.gbi.init(ca_id);
			var self = this;
			try {
				this.fetch(ca_id);
			} catch(err) {
				bouncex.gbi.fail(ca_id, err);
			}
		},
		fetch: function(ca_id){
			var self = this;
			var config = bouncex.campaigns[ca_id].gbi.config;
			var options = {
				url: config.request_url,
				type: "POST",
				dataType: "json",
				processData: false,
				xhrFields: {
					withCredentials: true
				},
				crossDomain: true,
				timeout: config.timeout || 255,
				success: function(response){
					var gbiHTML = self.processResponse(ca_id, response);
					if(!gbiHTML) {
						return bouncex.gbi.fail(ca_id, 'no bid');	
					}
					bouncex.gbi.requestComplete(ca_id, gbiHTML);
				},
				error: function(XHR, textStatus, errorThrown) {
					return bouncex.gbi.fail(ca_id, textStatus);
				}
			}
			bouncex.gbi.ajaxRequest = jQuery.ajax(options);
		},
		processResponse: function(ca_id, response){
			if(response && response.status == 'ok'){
				try {
					var resLength = response.native.length;
					if(resLength > 0){
						var html = '';
						for (var i = 0; i < resLength; i++) {
							bouncex.campaigns[ca_id].gbi.clickPixels.push('<img src="'+response.native[i].click_trackers+'"/>');
							bouncex.campaigns[ca_id].gbi.impressionPixels.push('<img src="'+response.native[i].impression_trackers+'"/>');
							html += '<a href="'+response.native[i].click_url+'"><img height="100%" width="100%" title="';
							html += response.native[i].title+'" src="'+response.native[i].main_media[0].url+'"/></a>';
						   
						}
						return html;
					}
				} catch(err) {
					bouncex.gbi.fail(ca_id, err);
				}
			}
			return '';
		}
		
	},
	dfpi: {
		request: function(ca_id){
			bouncex.gbi.init(ca_id);
			var self = this;
			try {
				this.fetch(ca_id);
			} catch(err) {
				bouncex.gbi.fail(ca_id, err);
			}
		},
		fetch: function(ca_id){
			var config = bouncex.campaigns[ca_id].gbi.config;
			var self = this;
			var options = {
				url: config.request_url + '&c='+getTime2(),
				type: "GET",
				dataType: "json",
				processData: false,
				xhrFields: {
					withCredentials: true
				},
				crossDomain: true,
				timeout: config.timeout || 1000,
				success: function(response){
					var gbiHTML = self.processResponse(ca_id, response);
					if(!gbiHTML) {
						return bouncex.gbi.fail(ca_id, 'no bid');	
					}
					bouncex.gbi.requestComplete(ca_id, gbiHTML);
				},
				error: function(XHR, textStatus, errorThrown) {
					return bouncex.gbi.fail(ca_id, 'timed out');
				}
			}
			bouncex.gbi.ajaxRequest = jQuery.ajax(options);
		},
		processResponse: function(ca_id, response){
			if( response && response.main_media){
					var impressionTrackerLength = response.impression_trackers.length;
					if(impressionTrackerLength > 0){
						for (var i = 0; i < impressionTrackerLength; i++) {
							bouncex.campaigns[ca_id].gbi.impressionPixels.push('<img src="'+response.impression_trackers[i]+'"/>');
						}
					}

					var clilckTrackerLength = response.click_trackers.length;
					if(clilckTrackerLength > 0){
						for (var i = 0; i < clilckTrackerLength; i++) {
							bouncex.campaigns[ca_id].gbi.clickPixels.push('<img src="'+response.clickPixels[i]+'"/>');
						}
					}
					
					var mediaLength = response.main_media.length;
					if(mediaLength > 0){
						var html = '';
						for (var i = 0; i < mediaLength; i++) {
							html += '<a href="'+response.click_url+'"><img height="100%" width="100%" title="';
							html += response.title+'" src="'+response.main_media[i].url+'"/></a>';
						}
						return html;
					}
				try {} catch( err ) {
					bouncex.gbi.fail(ca_id, err);
				}
			}
			return '';
		}
	},
	index: {
		request: function(ca_id){
			var self = this;
						bouncex.gbi.init(ca_id);

			try {
				this.fetch(ca_id);
				var config = bouncex.campaigns[ca_id].gbi.config;
								bouncex.events[ca_id]['gbiRequest'] = setInterval(function(){
					bouncex.gbi.init(ca_id);
					bouncex.campaigns[ca_id].activated = false;
					self.fetch(ca_id);
				}, config.reload || 60*3*1e3);
			} catch(err) {
				bouncex.gbi.fail(ca_id, err);
			}
		},
		fetch: function(ca_id){
			var config = bouncex.campaigns[ca_id].gbi.config;
			config.site = {
				"page": document.location.protocol + "//" + document.location.hostname + document.location.pathname,
				"ref":  document.location.protocol + "//" + document.location.hostname + "/"
			};
			var self = this;
			var endPointPrefix = config.production ? (window.location.protocol + '//as'): (window.location.protocol === 'https:' ? 'https://as-sec' : 'http://astest');
			var options = {
				url: endPointPrefix + '.casalemedia.com/ajaxbidder/?s=' + config.s,
				data: bouncex.stringify(config),
				mothod:"POST",
				type:"POST",
				global:false,
				dataType: "json",
				processData: false,
				xhrFields: {
					withCredentials: true
				},
				crossDomain: true,
				contentType: "application/x-www-form-urlencoded",
				timeout: config.timeout || 1000,
				complete: function(response, status){
					if(status == 'success'){
						var gbiHTML = self.processResponse(ca_id, response.responseText);
						if(!gbiHTML) {
							return bouncex.gbi.fail(ca_id, 'no bid');	
						}
						bouncex.campaigns[ca_id].gbi.html = gbiHTML;
						activateGbiCampaign(ca_id);
											} else {
						return bouncex.gbi.fail(ca_id, status);
					}
				}
			}
			
						var vernums = jQuery.fn.jquery.split('.');
			if (  (parseInt(vernums[0]) <= 1 && parseInt(vernums[1]) <= 5 && parseInt(vernums[2]) <= 1)) {
				options.xhr = function() {
				 	var xhr = jQuery.ajaxSettings.xhr();
				 	var setRequestHeader = xhr.setRequestHeader;
			        xhr.setRequestHeader = function(name, value) {
			            if (name == 'X-Requested-With') return;
			            setRequestHeader.call(this, name, value);
			        }
			        return xhr;
			    };
			}
			
			bouncex.gbi.ajaxRequest = jQuery.ajax(options);
		},
		processResponse: function(ca_id, response) {
			var tags;
			if (response) {
				try {
					response = bouncex.parseJSON(response);
					tags  = jQuery(response.seatbid[0].bid[0].adm);
				} catch (err) {
					bouncex.gbi.fail('failed to parse response with error ' + err);
					return false;
				}
				
				var html = '';
				var impressionPixel;
				tags.each(function(k, v) {
					if (v && v.src && v.src.indexOf('casalemedia.com/ifnotify?') > 0) {
						impressionPixel = v.outerHTML;
					} else {
						html += v.outerHTML;
					}
				});
				
				if (html && impressionPixel) {
					bouncex.campaigns[ca_id].gbi.impressionPixels.push(impressionPixel);
					return html;
				}
			}
			return false;
		}
	}
};

											  

bouncex.on = function(selector, events, callback){
	if(jQuery.fn.on == undefined){
		selector.bind(events, callback);
	} else {
		selector.on (events, callback);
	}
}
bouncex.off = function(selector, events){
	if(jQuery.fn.off == undefined){
		selector.unbind(events);
	} else {
		selector.off (events);
	}
}

function bcxReady(f) {
	if (!bouncex._bcxReady) {
		eval('bouncex._bcxReady=function(){function i(){if(r.isReady){return}try{document.documentElement.doScroll("left")}catch(e){setTimeout(i,1);return}r.ready()}function s(t){r.bindReady();var n=r.type(t);e.done(t)}var e,t,n={};n["[object Boolean]"]="boolean";n["[object Number]"]="number";n["[object String]"]="string";n["[object Function]"]="function";n["[object Array]"]="array";n["[object Date]"]="date";n["[object RegExp]"]="regexp";n["[object Object]"]="object";var r={isReady:false,readyWait:1,holdReady:function(e){if(e){r.readyWait++}else{r.ready(true)}},ready:function(t){if(t===true&&!--r.readyWait||t!==true&&!r.isReady){if(!document.body){return setTimeout(r.ready,1)}r.isReady=true;if(t!==true&&--r.readyWait>0){return}e.resolveWith(document,[r])}},bindReady:function(){if(e){return}e=r._Deferred();if(document.readyState==="complete"){return setTimeout(r.ready,1)}if(document.addEventListener){document.addEventListener("DOMContentLoaded",t,false);window.addEventListener("load",r.ready,false)}else if(document.attachEvent){document.attachEvent("onreadystatechange",t);window.attachEvent("onload",r.ready);var n=false;try{n=window.frameElement==null}catch(s){}if(document.documentElement.doScroll&&n){i()}}},_Deferred:function(){var e=[],t,n,i,s={done:function(){if(!i){var n=arguments,o,u,a,f,l;if(t){l=t;t=0}for(o=0,u=n.length;o<u;o++){a=n[o];f=r.type(a);if(f==="array"){s.done.apply(s,a)}else if(f==="function"){e.push(a)}}if(l){s.resolveWith(l[0],l[1])}}return this},resolveWith:function(r,s){if(!i&&!t&&!n){s=s||[];n=1;try{while(e[0]){e.shift().apply(r,s)}}finally{t=[r,s];n=0}}return this},resolve:function(){s.resolveWith(this,arguments);return this},isResolved:function(){return!!(n||t)},cancel:function(){i=1;e=[];return this}};return s},type:function(e){return e==null?String(e):n[Object.prototype.toString.call(e)]||"object"}};if(document.addEventListener){t=function(){document.removeEventListener("DOMContentLoaded",t,false);r.ready()}}else if(document.attachEvent){t=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",t);r.ready()}}}return s}()');
	}
	bouncex._bcxReady(f);
};


function updateQS(){
	var arguri=arguments.length&1,
		orig=arguri?arguments[0]:window.top.location.href,
		p=orig.split('#'),
		uri=p[0],
		hash=p.length>1?p[1]:false,
		s=[];
	for(var i=arguri;i<arguments.length;i+=2){
		var k=arguments[i],v=encodeURIComponent(arguments[i+1]),
			r=new RegExp('([?&])'+k+'=?.*?(&|$)','gi');
		if(uri.match(r)) uri=uri.replace(r,'$1'+k+"="+v+'$2');
		else s.push(k+'='+v);
	}
	if(s.length) uri+=(uri.indexOf('?')==-1?'?':(uri.slice(-1)!='&'?'&':''))+s.join('&');
	return uri+(hash?'#'+hash:'');
}

function qs(o) {
	var a=[],s='';
	for(var k in o){
		if(!o.hasOwnProperty(k)) continue;
		a.push(k+'='+encodeURIComponent(o[k]));
	}
	return a.join('&');
}

function getJString(e){var t=typeof e;if(t!="object"||e===null){if(t=="string")e='"'+e+'"';return String(e)}else{var n,r,i=[],s=e&&e.constructor==Array;for(n in e){r=e[n];t=typeof r;if(t=="string")r='"'+r+'"';else if(t=="object"&&r!==null)r=getJString(r);i.push((s?"":'"'+n+'":')+String(r))}return(s?"[":"{")+String(i)+(s?"]":"}")}};

function stringify(e){
	if(typeof JSON === 'undefined' || typeof JSON.stringify !== 'function'){
		return getJString(e);
	}else{
		return JSON.stringify(e);
	}
};

function parseJSON(e){if(window.JSON&&window.JSON.parse){return window.JSON.parse(e)}if(e===null){return e}if(typeof e==="string"&&e){var t=/^[\],:{}\s]*$/,n=/(?:^|:|,)(?:\s*\[)+/g,r=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,i=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g;if(t.test(e.replace(r,"@").replace(i,"]").replace(n,""))){return(new Function("return "+e))()}}};

function addCss(css, target) {
		var style = document.createElement('style');
	target.appendChild(style);
	if (style.styleSheet) {
		style.styleSheet.cssText = css; // IE8
	} else {
		style.innerHTML = css;
	}
	return style;
}


var MultiCookie = function(k){this.disable_first_party=!1;this.first_party_limit=999999;this.domain=window.location.host;this.best=function(a,b){return b.length>a.length?b:a};this.parse_json=function(a){return JSON.parse(a)};this.stringify_json=function(a){return JSON.stringify(a)};this.set_qs=function(a,b,c){return a=-1==a.indexOf("&"+b+"=")?a+("&"+b+"="+c):a.replace(new RegExp("&"+b+"=[^&]*"),"&"+b+"="+c)};for(var l in k)this[l]=k[l];var g=window.localStorage,h=window.globalStorage;this.set=function(a,
b){"object"==typeof b&&(b=this.stringify_json(b));this.disable_first_party||this.cookie(a,b);this.local_storage(a,b);this.global_storage(a,b);this.window_name(a,b);this.user_data(a,b)};this.get=function(a){for(var b=this.getvs(a),c="",e;e=b.pop();)c=this.best(c,e);this.set(a,c);return c};this.getvs=function(a){function b(a){a&&""!==a&&c.push(a)}var c=[];b(this.cookie(a));b(this.local_storage(a));b(this.global_storage(a));b(this.window_name(a));b(this.user_data(a));return c};this.cookie=function(a,
b){if(void 0!==b){var c=this.domain;0>window.location.host.indexOf(c)&&(c=window.location.host.split(".").slice(-2).join("."));document.cookie=a+"='; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain="+c;document.cookie.length+b.length<this.first_party_limit&&(document.cookie=a+"="+b+"; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/; domain="+c)}else return this.get_qs(a,document.cookie)};this.local_storage=function(a,b){try{if(g)if(void 0!==b)g.setItem(a,b);else return g.getItem(a)}catch(c){}};
this.global_storage=function(a,b){if(h){var c=this.getHost();try{if(void 0!==b)h[c][a]=b;else return h[c][a]}catch(e){}}};this.window_name=function(a,b){try{if(void 0!==b)window.name=this.set_qs(window.name,a,b);else return this.get_qs(a,window.name)}catch(c){}};this.user_data=function(a,b){try{var c=this.createElem("div","userdata_el",1);c.style.behavior="url(#default#userData)";if(void 0!==b)c.setAttribute(a,b),c.save(a);else return c.load(a),c.getAttribute(a)}catch(e){}};this.get_qs=function(a,
b){if("string"===typeof b){var c=a+"=",e=b.split(/[;&]/),f,d;for(f=0;f<e.length;f++){for(d=e[f];" "===d.charAt(0);)d=d.substring(1,d.length);if(0===d.indexOf(c))return d.substring(c.length,d.length)}}}};

function getBounceCookieLocalStorage(n){
	if(n!==undefined){
		return getBounceCookieSingle(n);
	}else{
		return bouncex.cookie;
	}
}

function getBounceCookieMulti(n){
	if(!bouncex.multicookie){
		bouncex.multicookie=new MultiCookie({
			domain:bouncex.website.domain,
			disable_first_party:bouncex.website.aco.disable_first_party&&bouncex.website.aco.disable_first_party?1:0,
			first_party_limit:bouncex.website.aco.first_party_limit&&bouncex.website.aco.first_party_limit?bouncex.website.aco.first_party_limit:999999,
			parse_json:bouncex.parseJSON,
			stringify_json:bouncex.stringify,
			best:function(b,o){
				if (b==='')b={};
				var obj={};
				try{
					obj=this.parse_json(o);
				}catch(e){
					return b;
				}
				var bfvt=b.fvt?b.fvt:0,
					ofvt=obj.fvt?obj.fvt:0;
				return (ofvt>bfvt)?obj:b;
			}
		});
	}
	if (n!==undefined){
		return bouncex.multicookie.cookie(n);
	} else {
		var obj = bouncex.multicookie.get(bouncex.website.cookie_name);
		if (obj==='') obj = {};
		return obj;
	}
}

function getBounceCookieSingle(name){
	if(!name){
		name = bouncex.website.cookie_name;
	}	
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++){
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==name){
			if(bouncex.website.cookie_name==name){
				return y?bouncex.parseJSON(y):{};
			}else{
				return (y);
			}
		}
	}
	//cookie not found
	if(bouncex.website.cookie_name==name){
		return {};
	}
}

function setBounceVisitCookie(){
	var c_name = bouncex.website.cookie_name+'v';
	var cookie = bouncex.visit_cookie;
	var exdate = new Date();
	exdate.setTime(exdate.getTime() + 30*60*1000);
	var c_value=((bouncex.stringify_cookie(bouncex.visit_cookie)) + "; expires=" + exdate.toUTCString());
	if(bouncex.cookie_domain){
		document.cookie =  (c_name + "=" + c_value + ";path=/;domain=."+bouncex.cookie_domain+";");
	}else{
		document.cookie =  (c_name + "=" + c_value + ";path=/;");
	}
}

function getBounceVisitCookie(name){
	if(!name){
		name = bouncex.website.cookie_name+'v';
	}	
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++){
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==name){
			return (y);
		}
	}
}

function setBounceCookieMulti(){
	var c_name = bouncex.website.cookie_name;
	bouncex.multicookie.set(c_name,bouncex.stringify_cookie(bouncex.cookie));
	var url = bouncex.au+'/capture/update_cookie?cookie_name='+c_name+'&cookie='+encodeURIComponent(bouncex.stringify(bouncex.cookie));
	var img = document.createElement('img');
	img.src = url;
}

function setBounceCookieLocalStorage(){
	var message = encodeURIComponent(bouncex.stringify(bouncex.cookie));
	if(bouncex.local_storage_frame.contentWindow){
		bouncex.local_storage_frame.contentWindow.postMessage(message, '*');
	}else{
		var interval = setInterval(function() {
			if(bouncex.local_storage_frame.contentWindow){
				bouncex.local_storage_frame.contentWindow.postMessage(message, '*');
				clearInterval(interval);
			}
		}, 100);
	}
}

function setBounceCookieSingle(){
	var c_name = bouncex.website.cookie_name;
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + 365);
	var c_value=((bouncex.stringify_cookie(bouncex.cookie)) + "; expires=" + exdate.toUTCString());
	if(bouncex.cookie_domain){
		document.cookie =  (c_name + "=" + c_value + ";path=/;domain=."+bouncex.cookie_domain+";");
	}else{
		document.cookie =  (c_name + "=" + c_value + ";path=/;");
	}
}

function clearBounceCookie(all){
	var c_name = bouncex.website.cookie_name;
	var c_value2 = '; expires=Thu, 01 Jan 1970 00:00:01 GMT';

	if(all){
		document.cookie =  (c_name + "=" + c_value2 + ";path=/;");//try to erase bctsd cookie
		document.cookie =  (c_name + "=" + c_value2 + ";path=/;domain=."+bouncex.cookie_domain+";");//try to erase bctd cookie
	}else{
		if(bouncex.cookie_domain){
			document.cookie =  (c_name + "=" + c_value2 + ";path=/;");//try to erase bctsd cookie
		}else{
			document.cookie =  (c_name + "=" + c_value2 + ";path=/;domain=."+bouncex.cookie_domain+";");//try to erase bctd cookie
		}
	}
}		

function stringify_cookie(str){
	return bouncex.stringify(str).replace(/;/g,'\\u003b').replace(/\+/g,'\\u002b').replace(/\=/g,'\\u003d');
}

function areCookiesEnabled(){
	var cookieEnabled=(navigator.cookieEnabled)? true : false   
	if (typeof navigator.cookieEnabled=="undefined" && !cookieEnabled){ 
		document.cookie="testcookie";
		cookieEnabled=(document.cookie.indexOf("testcookie")!=-1)? true : false;
	}
	return cookieEnabled;
}


var enablePersist = false;
var enablePolling = false;

function validv(v) {
	return ((typeof(v)=='number'&&!isNaN(v))||typeof(v)=='string'||typeof(v)=='boolean');
}

function maked(exp) {
	var v=null;
	try { v=eval(decodeURI(exp)); } catch(e){bouncex.log('bad cvar default ' + exp);}
	return validv(v)?v:0;
}

function makeq(exp) {
	var f=function() {return null;}
	var str = 'f = (function(){return ' + exp + '});';
	try {eval(decodeURI(str));} catch(e){bouncex.log('bad cvar expression ' + exp);}
	return f;
}

function evalv(n) {
	var r={s:true,c:false,v:bouncex.vard[n].d}; 	var nv=r.v;
	try { nv=bouncex.vard[n].q(); }
	catch(e) { r.s=false; }
	if (!validv(nv)) { r.s=false; }
	if (r.s) { 
		r.v = nv;
		r.c = r.v!=bouncex.vars[n];
	}
	return r;
}

function init_vars() {
		bouncex.cookie = getBounceCookie();
	
		bouncex.vard = {};
	bouncex.vars = {};
	bouncex.varp = {max:0,c:0,timer:null,vn:[],suc:{},def:{}};
	
	
	if(bouncex.website.vars){
		
		for(var name in bouncex.website.vars) {
			var def = bouncex.website.vars[name]['default'] ? bouncex.website.vars[name]['default'] : 0;
			var v = bouncex.website.vars[name]['val'] ? bouncex.website.vars[name]['val'] : 0;
			var poll = (bouncex.website.vars[name]['polling']!='none');
			var reload = (bouncex.website.vars[name]['polling']=='all');
			var enablePolling= enablePolling|| poll;
			var persist = bouncex.website.vars[name]['persist'] && (bouncex.website.vars[name]['persist']=='permanent'||bouncex.website.vars[name]['persist']=='visit');
	
			//no persisting yet
			enablePersist = enablePersist||persist;
			var n =  encodeURI(name.toLowerCase());
			bouncex.vard[n] = { d: maked(encodeURI(def)), q: makeq(encodeURI(v.toString().replace("\n",' '))),m:bouncex.website.vars[name]['polling'],p:(persist? true : false) };
			initv(n);	
			if(poll){
				bouncex.varp.vn.push(n);
			}
		}
		if(enablePolling){
			function checkPolling(){
				if (bouncex.varp.c >= bouncex.varp.max) {
					clearInterval(bouncex.varp.timer);
					return;
				}
				var c=false;
				var rl=false;
				var names=[];
				for(var i = 0; i < bouncex.varp.vn.length; i++) {
					var n = bouncex.varp.vn[i];
					var r=evalv(n);
					if (r.c && r.s) { 						c = true;
						setv(n, r.v);
						if (bouncex.vard[n].m=="all"){
							rl = true;
							names.push(n);
						}
					}
				}
				if (c) {
					setBounceCookie();
				}
				if (rl) {
					varnames=names.join(',');
					bouncex.varp.c++;
					reload_campaigns('variable', varnames);
				}
			}
	
			var polling_interval = (bouncex.website.pi && bouncex.website.pi>=bouncex.website.PMI) ? parseInt(bouncex.website.pi) : bouncex.website.PDI;
			bouncex.varp.max = bouncex.website.PMR;
			bouncex.varp.timer = setInterval(checkPolling,polling_interval);	
		}
	}

	setBounceCookie();
}

function formatv(nv) {
	if (nv==='true'){return true;}
	else if (nv==='false'){return false;}
	else if (typeof nv==='string' && nv.match(/^[0-9]+$/)){return parseInt(nv);}
	else if (typeof nv==='string' && nv.match(/^[0-9]+\.[0-9]+$/)){return parseFloat(nv);}
	return nv;
}

function getpv(n) { 	return (bouncex.cookie.v && bouncex.cookie.v[n]) 		? formatv(bouncex.cookie.v[n])
		: bouncex.vard[n].d;
}

function initv(n) {
	if(enablePersist){
		if (bouncex.vard[n].p) {
			var v = bouncex.vars[n] = getpv(n);
			var r = evalv(n);
			if (r.s) { 
				v = r.v; 
				bouncex.varp.suc[n] = true;
			} else {
				bouncex.varp.def[n] = bouncex.vard[n].d;
			}
			setv(n, v);
		} else {
			setv(n, evalv(n).v);
		}
	} else {
		setv(n, evalv(n).v);
	}
}

function setv(n,v) {
	bouncex.vars[n] = v;
	if (enablePersist) {
		if (bouncex.vard[n].p) {
			bouncex.cookie.v = bouncex.cookie.v || {};
			bouncex.cookie.v[n] = v;
		}
	}
}


function activate_action(act){
	bouncex.cookie['a_'+act] = 1;
	setBounceCookie();
	reload_campaigns('action', act);
}

function init_custom_actions(){
	if(bouncex.website.acts && bouncex.website.acts.length==undefined){
		for(var act_name in bouncex.website.acts){
			if(bouncex.website.acts[act_name]['val']){
				var act_el = jQuery(bouncex.website.acts[act_name]['val']);
				if(act_el.length){
					(function(name,el){
						try{
							el.bind(bouncex.website.acts[name]['action']+'.bx_act',function(){
								if (!bouncex.website.acts[name]['js_only']) {
									bouncex.activate_action(name);
								}
								if(!bouncex.website.acts[name]['activations']||bouncex.website.acts[name]['activations']=='once'){
									jQuery(bouncex.website.acts[name]['val']).unbind(bouncex.website.acts[name]['action']+'.bx_act');
								}
								if(bouncex.website.acts[name]['callback']){
									eval(bouncex.website.acts[name]['callback']);
								}
							});
						}catch(err){
							bouncex.log(err);
						}
					})(act_name,act_el);
				}
			}
		}
	}
}	


function next_sequence_id(){
	bouncex.cookie = getBounceCookie();
	if (!bouncex.cookie.hasOwnProperty('sid')) {
		bouncex.cookie.sid = 0;
	}
	bouncex.cookie.sid++;
	setBounceCookie();
	return bouncex.cookie.sid;
}

function add_namespace_to_object(obj, namespace) {
	var r = {};
	for (var k in obj) {
		if (obj.hasOwnProperty(k)) {
			r[namespace + ':' + k] = obj[k];
		}
	}
	return r;
}

function event_stream_report(eventname, params){

	var baseurl = bouncex.eu + '/track.gif/' + encodeURIComponent(eventname) + '?';

	params.mode = bouncex.cookie.m;
	params.websiteid = bouncex.website.id;
	params.visitid = bouncex.cookie.vid;
	params.deviceid = bouncex.cookie.did;
	if (bouncex.state && bouncex.state.pvid !== undefined) {
		params.pageviewid = bouncex.state.pvid;
	} else {
		params.pageviewid = (bouncex.cookie.vpv+1);
	}
	params.sequenceid = next_sequence_id();
	params.clienttimestamp = getTimeMs();
	params.clientapiversion = 'tag1';

	if (!params.source) {
		params.source = 'web';
	}

	if (!params.agent) {
		params.agent = 'user';
	}

	var url = baseurl + qs(params);
	var img = document.createElement('img');
	img.src = url;
}

function report(ca_id, eventname, extra){
	if(bouncex.campaigns[ca_id].gbi){
		bouncex.gbi.report(ca_id, eventname, extra);
	} else {
		buildReport(ca_id, eventname, extra);
	}
}


function buildReport(ca_id, eventname, extra){
	var uq=0;
	var agent='user';

	var renames = {
		'views': 'eligible',
		'pops': 'pop',
		'clicks': 'click',
		'closes': 'close'
	};

	if (renames[eventname]) {
		eventname = renames[eventname];
	}

	if(eventname=='click'){
		if(bouncex.campaigns[ca_id].impression_click_reported){
			return false;
		}else{
			bouncex.campaigns[ca_id].impression_click_reported =true;
		}
		bouncex.cookie.campaigns[ca_id].lclk = getTime2();
		
		setBounceCookie();
	}else if(eventname=='close'){
		if(bouncex.campaigns[ca_id].impression_click_reported || bouncex.campaigns[ca_id].submitted){
			return false;
		}
	}else if(eventname=='coupon'){
		agent='js';
		var cpn_id = extra['coupon:id'];
				try {
			bouncex.cookie.cpn = cpn_id;
			setBounceCookie();
		}catch(e){}
	}else if(eventname=='eligible'){
		agent='js';
		bouncex.cookie.campaigns[ca_id].vv = bouncex.cookie.campaigns[ca_id].vv? (bouncex.cookie.campaigns[ca_id].vv + 1 ) : 1;
		if(bouncex.cookie.campaigns[ca_id].vv==1){
			uq = 1;
		}
		setBounceCookie();
	}else if(eventname=='pop' || eventname=='trypop'){
		agent='js';
		if(bouncex.cookie.campaigns[ca_id].av==1){
			uq = 1;
		}
	}

	if(!bouncex.website.is_preview){
		if (typeof extra !== 'object') {
			extra = {};
		}
		if (uq) {
			extra.uq = 1;
		}

		if(eventname == 'coupon') {
			var querystring = 'website_id='+bouncex.website.id+'&c_id='+ca_id+'&v_id='+bouncex.cookie.vid+'&cpn_id='+cpn_id;
			var img = document.createElement('img');
			img.alt = 'bouncex report';
			img.src = bouncex.au+'/capture/report_coupon.gif?' + querystring;
		}

		extra.campaignid = ca_id;
		extra.source = 'bouncex';
		extra.agent = agent;
		
		event_stream_report(eventname, extra);
	}
	
	reportGa(ca_id, eventname);

	if(eventname=='click'){
		event_js_eval(ca_id,'click');
	}
}

function report_submit(ca_id, obj, complete) {
	obj.m = bouncex.cookie.m;
	obj.d = bouncex.cookie.d;
	obj.visit_id = bouncex.cookie.vid;
	obj.device_id = bouncex.cookie.did;
	obj.campaign_id = ca_id;
	obj.website_id = bouncex.website.id;
	obj.pvid = bouncex.state.pvid;
	obj.cts = getTimeMs();
	next_sequence_id();
	obj.cookie = bouncex.stringify(getBounceCookie());
	if (!obj.hasOwnProperty('step')){obj.step=1;}
	if (complete){obj.last_step=1;}
	jQuery('<img src="'+bouncex.au+'/capture/submit.gif?'+qs(obj)+'"/>');
}

function report_conversion_sync(obj,source){
	obj = obj || {};
	source = source || 'sync';

	bouncex.cookie = getBounceCookie();
	

	if (typeof obj.amount == 'undefined') obj.amount = 0;
	if (typeof obj.order_id == 'undefined') obj.order_id = '';
	if (typeof obj.email == 'undefined') obj.email = '';
	if (typeof obj.goal == 'undefined') obj.goal = '';

	var bamount = obj.amount;
	var border_id = obj.order_id;
	var bemail = obj.email;
	var bgoal = obj.goal;

	//-----
	//bouncex.cookie.lc = getTime2();
	//setBounceCookie();
	
	var sid = next_sequence_id();
	var pvid = bouncex.state ? bouncex.state.pvid : (bouncex.cookie.vpv+1);
	var url = bouncex.au+'/capture/convert.gif?m='+bouncex.cookie.m+
		'&d='+bouncex.cookie.d+
		'&goal='+encodeURIComponent(bgoal)+
		'&email='+encodeURIComponent(bemail)+
		'&order_id='+encodeURIComponent(border_id)+
		'&amount='+encodeURIComponent(bamount)+
		'&website_id='+bouncex.website.id+
		'&visit_id='+bouncex.cookie.vid+
		'&device_id='+bouncex.cookie.did+
		'&pvid='+pvid+
		'&sid='+sid+
		'&cts='+getTimeMs()+
		'&source='+source+
		'&cookie='+escape(bouncex.stringify(bouncex.cookie))+
		'&'+bouncex.ibx.conv_params();
	var img = document.createElement('img');
	img.alt = 'conversion pixel';
	img.src = url;

		if(bouncex.website.ibx.te && bouncex.website.ibx.te==1 && bouncex.cookie.did){
		if(bemail) {
			bouncex.ibx.user(bemail, {__src:'bouncex conversion'});
		}
	}

	if(bouncex.website.tcjs){
		try {
			eval(bouncex.website.tcjs);
		} catch(err) {
			bouncex.log(err);
		}
	}
	if(bouncex.website.ibx.te && bouncex.website.ibx.te==1){
		try {
			eval(bouncex.website.ibx.cjs);
		} catch(err) {
			bouncex.log(err);
		}
	}

	bouncex.cookie.lc = getTime2();
	setBounceCookie();
}

function report_conversion(obj,source){
		var bamount,border_id = 0;
		var bemail = '';
		var bgoal = '';

		if(obj){
			bamount = obj.amount;
			border_id = obj.order_id;
			bemail = obj.email;
			if (obj.goal) {
				bgoal = obj.goal;
			}
		}else {
			obj = {};
		}
		if(bouncex.state.oijs){
			if(!border_id) {
				try{ border_id = (eval(bouncex.state.oijs)); }catch(e){}
			}
		}
		if(bouncex.state.ovjs){
			if(!bamount) {
				try{ bamount = (eval(bouncex.state.ovjs)); }catch(e){}
			}
		}
		if(bouncex.state.oejs){
			if(!bemail) {
				try{ bemail = (eval(bouncex.state.oejs)); }catch(e){}
			}
		}
		if(bouncex.state.goal){
			if(!bgoal) {
				try{ bgoal = bouncex.state.goal; }catch(e){}
			}
		}

		obj.goal = bgoal;
		obj.amount = bamount;
		obj.order_id = border_id;
		obj.email = bemail;
		source = source || 'async';
		report_conversion_sync(obj,source);
}

function event_js_eval(ca_id,type,data){
	if(bouncex.campaigns[ca_id].event_js){
		var campaign_id = ca_id;
		if(typeof(bouncex.campaigns[ca_id].event_js)=='string'){
			bouncex.campaigns[ca_id].event_js = bouncex.parseJSON(bouncex.campaigns[ca_id].event_js);
		}
		if(bouncex.campaigns[ca_id].event_js[type]){
			try{
				eval(bouncex.campaigns[ca_id].event_js[type]);
			}catch(err){
				bouncex.log(err);
			}
		}
	}
}

function post_submit_redirect(mca_id){
	var is_api = bouncex.campaigns[mca_id].is_api;
	var redirect = bouncex.campaigns[mca_id].submission_redirect;
	var delay = bouncex.campaigns[mca_id].submission_redirect_delay;

	//force minimums
	if ( is_api && delay < 0.3 ){ delay = 0.3; }
	else if (!is_api){return false;}
	if(redirect){
		setTimeout(function(){
			window.top.location.href = redirect;
		},delay?delay*1000:0);
	}
}

function reportGa(ca_id, eventname) {
	var ga_eventname = eventname;
	if (eventname == 'pop') {
		ga_eventname = 'impression';
	}
	if(bouncex.website.gar && bouncex.campaigns[ca_id].ga_i && bouncex.campaigns[ca_id].ga_i[ga_eventname]) {
		bouncex.report_ga(ga_eventname,  bouncex.campaigns[ca_id].ga_i.label);
	}
}

function report_ga(action,label,bypass){
	bypass = typeof(bypass)!='undefined' && !!bypass;
	if(typeof(action)!='string'||typeof(label)!='string') return;
	var interaction = false;
	// enforce case convention
	if(!bypass) {
		action = action.charAt(0).toUpperCase() + action.slice(1).toLowerCase();
		interaction = action=='Impression';
		action = 'BounceX ' + action;
	}
	if(typeof window.ga === 'function') {
		if(bouncex.website.gai){
			window.ga('create', bouncex.website.gai);
		}
		window.ga('send','event','BounceX',action,label,{'nonInteraction':interaction});
	}
	if(typeof window._gaq === 'object') {
		if(bouncex.website.gai){
			window._gaq.push(['_setAccount', bouncex.website.gai]);
		}
		var strippedLabel = label.replace(/\(|\)/g, ''); // window._gaq encodes close paren as '1
		window._gaq.push(['_trackEvent','BounceX',action,strippedLabel,,interaction]);
	}
}

function noteCookieAdShown(ca_id){
	if(bouncex.campaigns[ca_id].gbi.stack_id){
				if(bouncex.gbi.stacks[bouncex.campaigns[ca_id].gbi.stack_id].failed){
			bouncex.gbi.log(ca_id, 'NOT saving cookie data');
			return false;
		} else {
			bouncex.gbi.log(ca_id, 'saving cookie data');
		}
	}

	bouncex.campaigns[ca_id].ad_shown = true;
	bouncex.cookie.campaigns[ca_id].lavid = bouncex.cookie.vid;
	bouncex.cookie.campaigns[ca_id].la = getTime2();
	bouncex.cookie.campaigns[ca_id].av = bouncex.cookie.campaigns[ca_id].av? (bouncex.cookie.campaigns[ca_id].av + 1) : 1;

	if(!bouncex.cookie.campaigns[ca_id].fsa){
		bouncex.cookie.campaigns[ca_id].fsa = bouncex.cookie.campaigns[ca_id].la;//first session activation time
	}

	bouncex.cookie.campaigns[ca_id].as = bouncex.cookie.campaigns[ca_id].as? (bouncex.cookie.campaigns[ca_id].as + 1) : 1;
	bouncex.cookie.campaigns[ca_id].ao = bouncex.cookie.campaigns[ca_id].ao? (bouncex.cookie.campaigns[ca_id].ao + 1) : 1;
	if((bouncex.campaigns[ca_id].type=='overlay' || bouncex.campaigns[ca_id].coverlay !== 'none') && !bouncex.campaigns[ca_id].is_man ){
		bouncex.cookie.ao++;
		bouncex.pa++;
		bouncex.cookie.as++;
		bouncex.campaigns[ca_id].ap = bouncex.campaigns[ca_id].ap?bouncex.campaigns[ca_id].ap+1:1;
	}
	
	setBounceCookie();
}

	
function baddjs(file){
	var oScript = document.createElement("script");
	oScript.setAttribute("src", file);
	oScript.setAttribute("type", "text/javascript");
	document.getElementsByTagName("head")[0].appendChild(oScript);
}

function loadBrandStyles(){
	if(bouncex.brandStyles){
		bouncex.brandStylesLoaded = bouncex.brandStylesLoaded || {};
		var newBrandStyles = '';
		for(var style_id in bouncex.brandStyles){
			if(bouncex.brandStyles.hasOwnProperty(style_id) && !bouncex.brandStylesLoaded[style_id]){
				newBrandStyles += bouncex.brandStyles[style_id];
				bouncex.brandStylesLoaded[style_id] = true;
			}
		}
		bouncex.addCss(newBrandStyles, bouncex.head[0]);
	}
}

function loadWebfonts(){
	if (bouncex.webfonts) {
		bouncex.fontCSSLoaded = bouncex.fontCSSLoaded || {};
		var newStylesheets = '';
		for (var fontFolder in bouncex.webfonts) {
			if (bouncex.webfonts.hasOwnProperty(fontFolder) && !bouncex.fontCSSLoaded[fontFolder]) {
				newStylesheets += '<link href="//assets.bounceexchange.com/fonts/' + fontFolder + '/stylesheet.css" rel="stylesheet" type="text/css" media="all" />';
				bouncex.fontCSSLoaded[fontFolder] = 1;
			}
		}
		jQuery(newStylesheets).appendTo(bouncex.head);
	}
}

function wndsize(){
	var e=0;var t=0;if(!window.innerWidth){if(!(document.documentElement.clientWidth==0)){e=document.documentElement.clientWidth;t=document.documentElement.clientHeight}else{e=document.body.clientWidth;t=document.body.clientHeight}}else{e=window.innerWidth;t=window.innerHeight}return{width:e,height:t};
}

function make_include_string(type,rltype,rlname){
	//use up a sequence id, will be used on server
	next_sequence_id();
	var tojQ = typeof jQuery;
	var bcx_persist = '';
	if(!type){
		type = 'init1';

		if (enablePersist) {
			var cookie = bouncex.cookie;
			for(var n in bouncex.varp.suc){
				bcx_persist += '&vsuc['+n+']=true';
			}
			for(var n in bouncex.varp.def){
				bcx_persist += '&vdef['+n+']='+escape(bouncex.varp.def[n]).replace(/\+/g,'%2B');
			}
		}else{
			var cookie = getBounceCookie();
		}
	}else{
		var cookie = bouncex.cookie;
		type = 'reloadCampaigns';
	}
	cookie = bouncex.stringify(cookie);
	var visit_cookie = bouncex.stringify(bouncex.visit_cookie);
	bcx_vars = '';
	var currval = null;
	for(var n in bouncex.vars) {
		var v = bouncex.vars[n];
		bcx_vars += '&vars['+n+']='+escape(v);
	}
	var tzo = new Date().getTimezoneOffset();
	var wsize = bouncex.wndsize();
	var resolution = wsize.width+'x'+wsize.height;
	var cts = getTimeMs();
	var bcx_str = bouncex.au+'/bounce/'+type+'.js?tojQ='+tojQ+'&cts='+cts+'&tzo='+tzo+'&is_preview='+(bouncex.website.is_preview?'true':'false')+'&website_id='+bouncex.website.id+'&resolution='+resolution+'&referrer='+bouncex.referrer+'&is_google_pla='+bouncex.is_google_pla+'&calling_url='+bouncex.calling_url+'&visit_cookie='+escape(visit_cookie)+'&cookie='+escape(cookie)+bcx_vars.replace(/\+/g,'%2B')+bcx_persist;
	if (type == 'reloadCampaigns') {
		bcx_str += '&pvid='+bouncex.state.pvid;
		if (rltype != undefined) {
			bcx_str += '&rltype='+rltype;
		}
		if (rlname != undefined) {
			bcx_str += '&rlname='+rlname;
		}
	}
	return bcx_str;
}

function unload_campaigns(){
	for(var ca_id in bouncex.events) {
		unload_campaign(ca_id);
	}	
}

function unload_campaign(ca_id){
	for(var e in bouncex.events[ca_id]) {
		if(typeof(bouncex.events[ca_id][e])=='object'){
			jQuery(bouncex.events[ca_id][e]).unbind(e);
		} else if (typeof(bouncex.events[ca_id][e])=='function'){
			bouncex.events[ca_id][e]();
		} else {
			clearTimeout(bouncex.events[ca_id][e]);
		}
		delete bouncex.events[ca_id][e];
	}
}

function reload_campaigns(name, type) {
	if(bouncex.state){
		bouncex.baddjs(bouncex.make_include_string('reloadCampaigns', (type || 'manual'), name));
	}
}

function init(){
	bouncex.direction = 'up';
	bouncex.events = {};
	bouncex.body = jQuery('body').eq(0);
	bouncex.head = jQuery('head').eq(0);
	bouncex.html = jQuery('html').eq(0);
	if(!bouncex.body || !bouncex.body.length){
		setTimeout(function(){
			bouncex.init();
		}, 3000);
		return false;
	}

	bouncex.overlay_visible = false;
	bouncex.server_client_time_diff = bouncex.state.tn - parseInt(new Date().getTime()/1000);
	if (bouncex.cookie.as > 0 && window.document.title.length == 0){
		/* this is a fix for a browser rewind issue, where old timer value remained cached in browser title after timer was no longer active*/
		window.document.title = window.location.hostname;
	}

	if (bouncex.cookie.v) {
		for(var n in bouncex.cookie.v) {
			if (bouncex.vard && bouncex.vard[n]) {
				if (bouncex.vard[n].p) {
					bouncex.setv(n, bouncex.formatv(bouncex.cookie.v[n]));
				}
			}
		}
	}

	init_post_campaign_public_function();
	
	bouncex.pa = 0;
	bouncex.timespaced = false;

		clearBounceCookie(bouncex.website.ct=='multi_cookie'?true:null);
	bouncex.setBounceCookie();

	bouncex.ca = activation_funcs();
	bouncex.body_margin = parseInt(bouncex.body.css('margin-top'))||0;
	
	bouncex.ibx._init();
	init_ibx_tracking();
	init_website_custom_js();
	
	listenMessages();

	if(bouncex.campaigns){
		bouncex.init_lightbox();
				bouncex.loadBrandStyles();
		bouncex.loadWebfonts();

		init_activation_funcs();
	}
	
	
		bouncex.bcxReady(function(){
		if(typeof(window.bxAsyncInit)==='function'){
			window.bxAsyncInit();
		}else{
			if(bouncex.state.rc){
				bouncex.report_conversion(null,'scraping');
			}
		}
	});
	init_custom_actions();
}


var XD = {
	postMessage	:	function(message,tar) {
		var frame = jQuery('iframe',jQuery(tar));
		if(!frame.length)
			return;
		var f = frame.get(0).contentWindow;
		var target_url = frame.attr('src');
		if (!(target_url && f && f.postMessage)) {
			return;
		}
		window.setTimeout(function() {
			f['postMessage'](message, target_url);
		}, 0);
	},
	receiveMessage : function(callback) {
		if (window['addEventListener']) {
			window['addEventListener']('message', callback, false);
		} else {
			window['attachEvent']('onmessage', callback);
		}
	}
};

function listenMessages(){
	if(bouncex.listening){
		return false;
	}
	bouncex.listening=true;
	XD.receiveMessage(function(message){
		var message_str = message.data;
		if(!message_str||((typeof message_str)!=='string')||message_str.indexOf('bcx_message')!==0)
			return false;//not bcx message;
		var messages = message_str.split('&');
		var result = [];
		for (var i = 0; i < messages.length; i++){
			var r = messages[i].split('=');
			result[r[0]] = decodeURIComponent(r[1].replace(/\+/g, ' '));
		}
		var mca_id = result['campaign_id'];
				var message = result['bcx_content']||result['message'];
		if(!parseInt(mca_id) || !bouncex.campaigns[mca_id])
			return;
		if(bouncex.cookie.d!=='d' && bouncex.campaigns[mca_id].coverlay !== 'none'){
			if(message=='move_step'||message=='had_error'){
				jQuery(window).trigger('scroll');//fix ios hide keyboard issue
			}
		}
		if(message == 'failed'){
			bouncex.campaigns[mca_id].failed = true;
			if(bouncex.campaigns[mca_id].ad_visible){
				bouncex.close_ad(mca_id, true);
			}
			return false;
		}else if(message == 'loaded'){
			activate_campaign(mca_id);	
		}else if(message == 'ios8_focused'){
			if(bouncex.browser.ios8||bouncex.browser.ios9){
				bouncex.lastScroll = jQuery(window).scrollTop();
				
				setTimeout(function(){
										var cObject = jQuery('#bcx_'+mca_id+'_iframe_overlay,#bcx_'+mca_id+'_iframe_top,#bcx_'+mca_id+'_iframe_bottom,#bcx_'+mca_id+'_iframe_callout').eq(0);
					window.scrollTo(0, cObject.offset().top);
				},500);
			}
		}else if(message == 'ios8_blured'){
			if((bouncex.browser.ios8||bouncex.browser.ios9) &&  bouncex.lastScroll>=0){
				setTimeout(function(){
										window.scrollTo(0, bouncex.lastScroll);
					bouncex.lastScroll = undefined;
				},100);
			}
		}else if(message == 'eval'){
			try{
				eval(result.js);
			}catch(e){bouncex.log(e)}
		}else if(bouncex.campaigns[mca_id].ad_visible){
			if(message == 'report_coupon') {
				reportCouponSeen(mca_id, result['code']);
			}else if(message == 'bcx_ca_email'){
				if(typeof(_veroq)=='object' && typeof(result['email'])!='undefined') {
					_veroq.push(['user', {id: result['email'], email: result['email']}]);
					_veroq.push(['track', 'Entered email overlay2']);
				}
			}else if(message == 'bcx_close_ad'){
				close_ad(mca_id);
			}else if(message == 'bcx_close_ad_silent'){
				close_ad(mca_id,false,true);
			}else if(message == 'bcx_form_subitted'){
				processSubmittedCampaignForm(result, mca_id);
			}else if(message == 'report_click'){
				report(mca_id,'click');
			}else if(message == 'had_error'){
			}else if(message =='reset_fsa'){
				bouncex.cookie.campaigns[mca_id].fsa = result['fsa'];
				setBounceCookie();
			}else if(message == 'move_step'){
				jQuery('#bcx_onsite_els_'+mca_id+'_s'+result['to_step']).show();
				jQuery('#bcx_onsite_els_'+mca_id+'_s'+result['cur_step']).hide();
				if(bouncex.campaigns[mca_id].show_close_step){
					show_close(mca_id, true);
				}
			}else if(message == 'update_title'){
				var old_title, seconds_left, str;
				seconds_left = result['seconds_left'];
				var update_time = result['update_time'];
				if(!update_time){
					bouncex.old_title = window.document.title;
				}
				//if (bouncex.timer_exists) return false;
				if (result['remove_timer'] == '1'){
					bouncex.remove_timer = true;
				} else {
					bouncex.remove_timer = false;
				}

				bouncex.timer_exists = true;
				if (seconds_left <= 0){
					window.document.title = bouncex.old_title;
					bouncex.timer_exists = false;
				}

				seconds = seconds_left % 60;
				minutes = Math.floor(seconds_left/60) % 60;
				hours =  ((result['format'].indexOf('{days}') > -1) || (result['format'].indexOf('{0days}') > -1)) ? (Math.floor(seconds_left/3600) % 24) : Math.floor(seconds_left/3600);
				days = (result['format'] == '{days}'||result['format']=='{0days}' ? Math.ceil(seconds_left/86400) : Math.floor(seconds_left/86400));

				if (minutes < 10) { minutes = "0" + minutes };
				if (seconds < 10) { seconds = "0" + seconds };
				if (hours < 10) { hours = "0" + hours };
				if((result['format'].indexOf('{0days}') > -1) && days<10){
					days = '0'+days;
				}
				str = result['format'].replace('{hours}',hours).replace('{minutes}',minutes).replace('{seconds}',seconds).replace('{days}',days).replace('{0days}',days);

				if (!bouncex.old_title && bouncex.timer_exists) {
					window.document.title = str;
				}
				else if (bouncex.old_title && bouncex.timer_exists) {
					window.document.title = str + ' | ' + bouncex.old_title;
				}
			}
		}
	});
}

function can_show_ad(ca_id, inthefuture){
	if (!bouncex.campaigns[ca_id]){
		return false;
	}

	if (bouncex.campaigns[ca_id].qbxtest && !bouncex.campaigns[ca_id].ad_visible){
		return true;
	}
	var oca_id = ca_id;
	if(bouncex.campaigns[ca_id].gbi.stack_id && ca_id != bouncex.gbi.stacks[bouncex.campaigns[ca_id].gbi.stack_id].leader_id){
		ca_id = bouncex.gbi.stacks[bouncex.campaigns[ca_id].gbi.stack_id].leader_id;
	}
	var time_now = getTime2();
	bouncex.cookie = getBounceCookie();
	bouncex.cookie.lvt = bouncex.cookie.campaigns[ca_id].lvt = time_now;
	setBounceCookie();

	if( !inthefuture){
		if((bouncex.campaigns[ca_id].coverlay!='none' || bouncex.campaigns[ca_id].type == 'overlay')&& bouncex.overlay_visible){
			//bouncex.log('FALSE:overlay_visible');
			return false;
		}
	
		if(bouncex.campaigns[oca_id].ad_visible){
			//bouncex.log('FALSE:visible');
			return false;
		}
		if(bouncex.website.ots){
			if((bouncex.campaigns[ca_id].coverlay!='none' || bouncex.campaigns[ca_id].type == 'overlay' ) && bouncex.timespaced == true){
				//bouncex.log('timespaced!');
				return false;
			}
		}
		if(bouncex.campaigns[ca_id].tvao>0){
			var top = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
			if(bouncex.campaigns[ca_id].tvao>top){
				//bouncex.log('FALSE:TVAO');
				return false;
			}
		}
	}
	if(bouncex.campaigns[oca_id].failed){
		//bouncex.log('FALSE:FAILED');
		return false;
	}
	
	if((bouncex.campaigns[ca_id].coverlay!='none' || bouncex.campaigns[ca_id].type =='overlay')&&!bouncex.campaigns[ca_id].is_man){
		if((bouncex.campaigns[ca_id].map>0&&bouncex.campaigns[ca_id].ap>=bouncex.campaigns[ca_id].map)||bouncex.website.map>0&&bouncex.pa>=bouncex.website.map){
			//bouncex.log('FALSE:MAP');
			return false;
		}
	}
	
	if(bouncex.campaigns[ca_id].mas>0){//if max per session
		//campaign level
		if(bouncex.cookie.campaigns[ca_id].as>=bouncex.campaigns[ca_id].mas){
			//bouncex.log('FALSE:max_actiavtions_session');
			return false;
		}
	}

	if(!bouncex.campaigns[ca_id].is_man && bouncex.website.mas>0 && (bouncex.campaigns[ca_id].coverlay != 'none' || bouncex.campaigns[ca_id].type == 'overlay') && bouncex.website.mas<=bouncex.cookie.as){
		//bouncex.log('FALSE:max_activations_session');
		return false;
	}

	if(bouncex.campaigns[ca_id].mao>0 && bouncex.cookie.campaigns[ca_id].ao>=bouncex.campaigns[ca_id].mao){
		//bouncex.log('FALSE:overall_activations');
		return false;
	}
	
	if((!bouncex.campaigns[ca_id].is_man&&!bouncex.campaigns[ca_id].ipc)&&(bouncex.cookie.es|| bouncex.cookie.campaigns[ca_id].ls ||  bouncex.cookie.campaigns[ca_id].submitted) && (bouncex.campaigns[ca_id].is_ec)){
		//bouncex.log('FALSE:email:submitted');
		return false;
	}
	if((bouncex.campaigns[ca_id].is_pers || bouncex.campaigns[ca_id].closed_no_show) && bouncex.cookie.campaigns[ca_id].wc){
		//bouncex.log('FALSE:closed');
		return false;
	}
	if(bouncex.campaigns[ca_id].repressed){
		//bouncex.log("FALSE:repressed")
		return false;
	}
	return true;
}

function close_ad(ca_id, silent, no_report){
	if (!bouncex.campaigns[ca_id]){
		return;
	}
	if(!bouncex.campaigns[ca_id].ad_visible)
		return;//already closed

	bouncex.campaigns[ca_id].ad_visible = false;
	
	if(!silent){
		var oca_id = ca_id;
		if(bouncex.campaigns[ca_id].gbi.stack_id && oca_id != bouncex.gbi.stacks[bouncex.campaigns[ca_id].gbi.stack_id].leader_id){
			oca_id = bouncex.gbi.stacks[bouncex.campaigns[ca_id].gbi.stack_id].leader_id;
		}
		bouncex.cookie.campaigns[oca_id].wc = getTime2();
		setBounceCookie();
		if(!no_report){
			report(ca_id,'close');
		}
		if(bouncex.campaigns[ca_id].onclose_fn){
			bouncex.campaigns[ca_id].onclose_fn();
		}
	
		if(bouncex.campaigns[ca_id].close_redirect_url){
			bouncex.events[ca_id]['timeout_close_redirect'] = setTimeout(function(){
				teleport(bouncex.campaigns[ca_id].close_redirect_type,bouncex.campaigns[ca_id].close_redirect_url);
			},300);
		};
	}
	
	if(bouncex.campaigns[ca_id].coverlay != 'none' || bouncex.campaigns[ca_id].type == 'overlay'){
		bouncex.overlay_visible = false;
		if(bouncex.website.otc){
			bouncex.timespaced = true;
			bouncex.events[ca_id]['timeout_timespace'] = setTimeout(function(){
				bouncex.timespaced = false;
			},bouncex.website.otc*1000);
		}
	}

	if(bouncex.campaigns[ca_id].ng){ 
		close_ad_ng(ca_id);
	}else{
		close_ad_og(ca_id);
	}
	
	event_js_eval(ca_id,'close');
}

function close_ad_ng(ca_id){
	if(bouncex.campaigns[ca_id].type == 'nanobar' || bouncex.campaigns[ca_id].type == 'conversionbar'){
		 jQuery('#bx-campaign-'+ca_id+'-clone').removeClass('bx-impress');
	}

	if (bouncex.campaigns[ca_id].type == 'overlay') {
		if (bouncex.browser.iphone || bouncex.browser.ipad) {
			bouncex.html.removeClass('bx-client-overlay-ios');
			bouncex.body.removeClass('bx-client-overlay-ios');
			jQuery(window).scrollTop(bouncex.preImpressScrollY);
		} else {
			bouncex.html.removeClass('bx-client-overlay');
			bouncex.body.removeClass('bx-client-overlay');
		}
	}

	bouncex.campaigns[ca_id].obj2.removeClass('bx-impress');
	bouncex.campaigns[ca_id].obj1.unbind('click.bcx_campaign_click_' + ca_id, handleClick);

	// clear auto close timeout
	var autoCloseEvent = 'timeout_auto_submission_close';
	if (bouncex.events[ca_id][autoCloseEvent]) {
		clearTimeout(bouncex.events[ca_id][autoCloseEvent]);
		delete bouncex.events[ca_id][autoCloseEvent];
	}

	// clear all timer intervals
	var timerEvent = 'campaign_timer';
	for (var eventName in bouncex.events[ca_id]) {
		if (eventName.indexOf(timerEvent) !== -1) {
			clearInterval(bouncex.events[ca_id][eventName]);
			delete bouncex.events[ca_id][eventName];
		}
	}

		if (bouncex.campaigns[ca_id].blur_gate_enabled && (bouncex.campaigns[ca_id].type == 'agilityzone' || bouncex.campaigns[ca_id].type == 'annotation')) {
		blurGateRemove(ca_id);
	}
}

function close_ad_og(ca_id){
	
	var ef = bouncex.campaigns[ca_id].te.substr(0,1);
	var cs = jQuery('#campaign_'+ca_id+'_container_overlay,#campaign_'+ca_id+'_container_top,#campaign_'+ca_id+'_container_bottom,#campaign_'+ca_id+'_container_callout');

	if(bouncex.timer_exists && bouncex.remove_timer){
		clearInterval(bouncex.timer_interval);
		window.document.title = bouncex.old_title;
		bouncex.timer_exists = false;
	}

	if(ef=='r'){
				if(bouncex.campaigns[ca_id].overlay!='none'){
			var lbx = document.getElementById('campaign_'+ca_id+'_lightbox');
			setTimeout(function(){
				setOpacity(lbx,0);
			},150);
		}
		cs.removeClass('bcx_after');
		setTimeout(function(){
			cs.hide().css('display','none');
		},300);
	}else{
		cs.hide().css('display','none');
	}

	
	if(bouncex.campaigns[ca_id].callout!='none'){
		jQuery(window).unbind('bcx_callout_'+ca_id);
	}
		
	if(bouncex.campaigns[ca_id].top!='none'){
		var push = document.getElementById('campaign_'+ca_id+'_pusher_top');
		if(push){
			bSlideUp(push);
			jQuery(window).trigger('bx_ad_hide', [parseInt(getStyle(push, 'height'))]);
		}
	}
	if(bouncex.campaigns[ca_id].bottom!='none'){
		jQuery('#campaign_'+ca_id+'_pusher_bottom').appendTo('body').slideUp('slow');
	}

	if(bouncex.campaigns[ca_id].overlay=='code' || bouncex.campaigns[ca_id].overlay=='email' || bouncex.campaigns[ca_id].overlay=='genie'){
		flash_objects.css('visibility','visible');
	}
	
}

function show_ad( type, ca_id ){
	if(!can_show_ad(ca_id)){
		return;
	}	
	var ca = bouncex.campaigns[ca_id];
	if(ca.gbi && ca.gbi.provider == 'index' && !ca.gbi.contentLoaded){
		bouncex.gbi.clearRequestAssets(ca_id);
		bouncex.gbi.requestComplete(ca_id, ca.gbi.html, function(){
			ca.gbi.contentLoaded = true;
			show_ad( type, ca_id );
		});
		return false;
	}
	bouncex.campaigns[ca_id].ad_visible = true;
	bouncex.campaigns[ca_id].impression_click_reported = false;
	bouncex.campaigns[ca_id].submitted = false;
	noteCookieAdShown(ca_id);
	report(ca_id,'pop',{'pop:activation':type});

	if(bouncex.campaigns[ca_id].ng){ 
		show_ad_ng(type, ca_id);
	} else {
		show_ad_og(type, ca_id);
	}

	if(bouncex.campaigns[ca_id].overlay!='teleport'){
		show_close(ca_id);
		if(bouncex.campaigns[ca_id].ad_auto_close){
			var delay = bouncex.campaigns[ca_id].is_pers?calc_delay_cvt(bouncex.campaigns[ca_id].ad_auto_close):bouncex.campaigns[ca_id].ad_auto_close*1000;
			bouncex.events[ca_id]['timeout_auto_close'] = setTimeout(function(){
				close_ad(ca_id);
			},delay);
		}
	}

	if(bouncex.campaigns[ca_id].supress_overlay || bouncex.campaigns[ca_id].supress_top || bouncex.campaigns[ca_id].supress_bottom){
		for(var nca_id in bouncex.campaigns) {
			if(nca_id!=ca_id &&(bouncex.campaigns[ca_id].supress_overlay && (bouncex.campaigns[nca_id].coverlay!='none' || bouncex.campaigns[nca_id].type == 'overlay')
			||
			bouncex.campaigns[ca_id].supress_top && (bouncex.campaigns[nca_id].ctop!='none'  || bouncex.campaigns[nca_id].type == 'nanobar')
			||
			bouncex.campaigns[ca_id].supress_bottom && (bouncex.campaigns[nca_id].cbottom!='none' || bouncex.campaigns[nca_id].type == 'conversionbar')
			)){
				close_ad(nca_id,true);
			}
		}	
	}
	if(bouncex.campaigns[ca_id].repress_overlay || bouncex.campaigns[ca_id].repress_top || bouncex.campaigns[ca_id].repress_bottom){
		
		for(var nca_id in bouncex.campaigns) {
			if(nca_id!=ca_id &&(bouncex.campaigns[ca_id].repress_overlay && (bouncex.campaigns[nca_id].coverlay!='none' || bouncex.campaigns[nca_id].type == 'overlay')
			||
			bouncex.campaigns[ca_id].repress_top && (bouncex.campaigns[nca_id].ctop!='none'  || bouncex.campaigns[nca_id].type == 'nanobar')
			||
			bouncex.campaigns[ca_id].repress_bottom && (bouncex.campaigns[nca_id].cbottom!='none' || bouncex.campaigns[nca_id].type == 'conversionbar')
			)){ 
				bouncex.campaigns[nca_id].repressed = true;
			}
		}	
	}

	event_js_eval(ca_id, 'impression');
	if(bouncex.campaigns[ca_id].osfn_website){
		try{
			eval(bouncex.campaigns[ca_id].osfn_website);
		}catch(err){
			bouncex.log(err);
		}
	}	
}

function show_ad_ng(type, ca_id){
	//control
	if(bouncex.campaigns[ca_id].control){
		return false;
	}
	//step
	bouncex.campaigns[ca_id].forceLastStep = false;
	bouncex.campaigns[ca_id].obj2.addClass('bx-impress');
	if(bouncex.campaigns[ca_id].current_step){
		bouncex.campaigns[ca_id].next_step = 1;
		bouncex.nextStep(ca_id);
	}else{
		bouncex.campaigns[ca_id].next_step = 2;
		bouncex.campaigns[ca_id].current_step = 1;
	}

		bouncex.campaigns[ca_id].obj1.bind('click.bcx_campaign_click_' + ca_id, {ca_id: ca_id}, handleClick);

		if ([].map) {// Zero clipboard requires Array.prototype.map which some browsers don't have
		var ctc = bouncex.campaigns[ca_id].obj1.find('.bx-click-to-copy');
		if(ctc.length > 0){
			enableZc(function(){
				bouncex.zc.clip( ctc );
			});
		}
	}

		var timers = bouncex.campaigns[ca_id].obj2.find('.bx-timer');
	if(timers.length > 0){
		var index = 0;
		timers.each(function(k, obj){
			var timer_id = 'campaign_timer_' + (++index);
			if(!bouncex.events[ca_id][timer_id]){//don't start timers that are already running
				var timer = jQuery(obj);
				var countTo = timer.attr('data-count-to');
				var countFrom = timer.attr('data-count-from');
				var format = timer.attr('data-format');
				var onComplete = timer.attr('data-on-complete');
				var reset = parseInt(timer.attr('data-reset'));
				var hasDays = /{0?days}/.test(format);

				run_timer(countTo, countFrom, format, hasDays, onComplete, reset, timer, timer_id, ca_id);
				bouncex.events[ca_id][timer_id] = setInterval(function() {
					run_timer(countTo, countFrom, format, hasDays, onComplete, false, timer, timer_id, ca_id);//don't reset expired timer while it is running
				} , 1000);
			}
		});
	}

		var inputs  = bouncex.campaigns[ca_id].obj1.find('.bx-input, .bx-textarea');
	if((!bouncex.browser.msie || bouncex.browser.msie > 8) && inputs.length > 0){
		var bindEvents = 'keydown.bcx_campaign_input_' + ca_id + ' focus.bcx_campaign_input_' + ca_id + ' blur.bcx_campaign_input_' + ca_id + ' change.bcx_campaign_input_' + ca_id + ' paste.bcx_campaign_input_' + ca_id + ' keyup.bcx_campaign_input_' + ca_id;
		bxBind(inputs, bindEvents, handleInputEvents);
	}

		bouncex.campaigns[ca_id].obj1.addClass('bx-impress');

		validateCouponsSeen(ca_id);

	if (bouncex.campaigns[ca_id].type == 'overlay') {
		bouncex.overlay_visible = true;
		if (bouncex.browser.iphone || bouncex.browser.ipad) {
						bouncex.preImpressScrollY = jQuery(window).scrollTop();
						bouncex.html.addClass('bx-client-overlay-ios');
			bouncex.body.addClass('bx-client-overlay-ios');
						bouncex.campaigns[ca_id].obj1[0].style.display='none';
			bouncex.campaigns[ca_id].obj1[0].offsetHeight;
			bouncex.campaigns[ca_id].obj1[0].style.display='';
		} else {
						var htmlOverflow = getStyle(bouncex.html[0], 'overflow-y');
			if (htmlOverflow == 'auto' || htmlOverflow == 'scroll') {
				bouncex.html.addClass('bx-client-overlay');
			} else {
				bouncex.body.addClass('bx-client-overlay');
			}
		}
	} else if (bouncex.campaigns[ca_id].type == 'nanobar' || bouncex.campaigns[ca_id].type == 'conversionbar') {
		var clone = jQuery('#bx-campaign-'+ca_id+'-clone').detach().addClass('bx-impress');
		if (bouncex.campaigns[ca_id].type == 'nanobar') {
			bouncex.body.prepend(clone);
		} else if (bouncex.campaigns[ca_id].type == 'conversionbar') {
			bouncex.body.append(clone);
		}
	} else if (bouncex.campaigns[ca_id].type == 'annotation') {
		bxBind(window, 'resize.bx_annotation_' + ca_id, function(e) {
			alignCampaign(ca_id);
		}, ca_id);
	}
	alignCampaign(ca_id);

		if (bouncex.campaigns[ca_id].blur_gate_enabled && (bouncex.campaigns[ca_id].type == 'agilityzone' || bouncex.campaigns[ca_id].type == 'annotation')) {
		blurGateAdd(ca_id);
	}
}

function blurGateAdd(ca_id) {
	var ca = bouncex.campaigns[ca_id];

		ca.blur_gate_targets = jQuery(ca.callout_t + ' ~ *')
		.add(ca.blur_gate_inclusions)
		.not(ca.blur_gate_exclusions)
		.not('.bxc');

		ca.blur_gate_filler_placement = ca.calloutTarget.next().is(ca.obj1) ? ca.obj1 : ca.calloutTarget;
		ca.blur_gate_filler = jQuery();

		if (bouncex.browser.msie && bouncex.browser.msie <= 9) {
				blurGateAddUsingRedactedContent(ca_id);
	} else if (bouncex.browser.msie === 10 || bouncex.browser.msie === 11 || bouncex.browser.edge) {
				blurGateAddUsingTextShadow(ca_id);
	} else {
				blurGateAddUsingCssFilters(ca_id);
	}
}

function blurGateAddUsingRedactedContent(ca_id) {
	var ca = bouncex.campaigns[ca_id];

		var contentHeight = 0;
	ca.blur_gate_targets.each(function(i, el) {
		contentHeight += jQuery(el).height();
	});

		blurGateFillWithDummyContent(ca_id, ca.blur_gate_redacted_filler, contentHeight, 0);

		var textColor = getStyle(ca.calloutTarget[0], 'color') || '#000';
	var styles = '.bx-blur-'+ca_id+'.bx-blur-redacted b { color:'+textColor+'!important; background-color:'+textColor+'!important; }';
	bouncex.addCss(styles, ca.obj1[0]);
		ca.blur_gate_filler = ca.blur_gate_filler.add(styles);

		ca.blur_gate_targets.addClass('bx-blur-'+ca_id+' bx-blur-hide');
}

function blurGateAddUsingTextShadow(ca_id) {
	var ca = bouncex.campaigns[ca_id];

		blurGateAddFillerIfNeeded(ca_id, ca.blur_gate_lorem_filler);

		var textColor = getStyle(ca.calloutTarget[0], 'color') || '#000';
	var styles = '.bx-blur-'+ca_id+'.bx-blur-textshadow { text-shadow: 0 0 8px 1px '+textColor+'!important; }';
	bouncex.addCss(styles, ca.obj1[0]);

		ca.blur_gate_targets
		.add(ca.blur_gate_filler)
		.addClass('bx-blur-'+ca_id+' bx-blur-textshadow');

		ca.blur_gate_filler = ca.blur_gate_filler.add(styles);
}

function blurGateAddUsingCssFilters(ca_id) {
	var ca = bouncex.campaigns[ca_id];

		blurGateAddFillerIfNeeded(ca_id, ca.blur_gate_lorem_filler);

		ca.blur_gate_targets
		.add(ca.blur_gate_filler)
		.addClass('bx-blur-'+ca_id+' bx-blur');
}

function blurGateRemove(ca_id) {
	var ca = bouncex.campaigns[ca_id];

		if (ca.blur_gate_filler) {
		ca.blur_gate_filler.remove();
	}

	if (ca.blur_gate_targets) {
				ca.blur_gate_targets
			.removeClass('bx-blur-'+ca_id+' bx-blur bx-blur-hide bx-blur-textshadow');
	}
}

function blurGateAddFillerIfNeeded(ca_id, fillerType) {
	var ca = bouncex.campaigns[ca_id];

		var minHeight = 600;
	var contentHeight = 0;
	ca.blur_gate_targets.each(function(i, el) {
		contentHeight += jQuery(el).height();
				return contentHeight < minHeight;
	});

	var fillerAmountNeeded = minHeight - contentHeight;
	if (fillerAmountNeeded > 0) {
		blurGateFillWithDummyContent(ca_id, fillerType, fillerAmountNeeded, 0);
	}
}

function blurGateFillWithDummyContent(ca_id, fillerType, targetHeight, currentHeight) {
	var ca = bouncex.campaigns[ca_id];

		if (currentHeight < targetHeight) {
		var fillerVariationIndex = ca.blur_gate_filler.length % fillerType.length;
		var filler = jQuery(fillerType[fillerVariationIndex]);
		ca.blur_gate_filler_placement.after(filler);
		var fillerHeight = filler.height()
		if (fillerHeight > 0) {
			ca.blur_gate_filler = ca.blur_gate_filler.add(filler);
			blurGateFillWithDummyContent(ca_id, fillerType, targetHeight, currentHeight + fillerHeight);
		}
	}
}

function show_ad_og(type, ca_id){

	var zx = 2147483646;
	var msg = 'bcx_pop&cookie=';
	msg += encodeURIComponent(bouncex.stringify_cookie(getBounceCookie()));
	
	if(bouncex.campaigns[ca_id].top!='none'){
		var top = document.getElementById('campaign_'+ca_id+'_container_top');
		if(top){
			show_ca_el(ca_id,top);
			if(bouncex.campaigns[ca_id].header_top_nano){
				var h = document.getElementById('campaign_'+ca_id+'_pusher_top');
				document.body.insertBefore(h,document.body.firstChild);
				if(bouncex.campaigns[ca_id].htna=='anypage' || (bouncex.campaigns[ca_id].htna=='landing'&&bouncex.state.iol)){
					bSlideDown(h,'height');
					jQuery(window).trigger('bx_ad_show', [parseInt(getStyle(top, 'height'))]);
				}else{
					h.style.display = 'block';
					jQuery(window).trigger('bx_ad_show');
				}
			}
			center_campaign(ca_id,top);
			XD.postMessage(msg,top);
		}
	}
	if(bouncex.campaigns[ca_id].bottom!='none'){
		var bottom = document.getElementById('campaign_'+ca_id+'_container_bottom');
		if(bottom){
			show_ca_el(ca_id,bottom);
			
			if(bouncex.campaigns[ca_id].header_bottom_nano){
				var h = document.getElementById('campaign_'+ca_id+'_pusher_bottom');
				
				jQuery(document.body).append(h);
				
				if(bouncex.campaigns[ca_id].hbna=='anypage' || (bouncex.campaigns[ca_id].hbna=='landing'&&bouncex.state.iol)){
					bSlideDown(h,'height');
				}else{
					h.style.display = 'block';
				}
			}
			center_campaign(ca_id,bottom);
			XD.postMessage(msg,bottom);
		}
	}
	if(bouncex.campaigns[ca_id].callout!='none'){
		var callout = jQuery('#campaign_'+ca_id+'_container_callout');
		bouncex.campaigns[ca_id].c_button = jQuery(bouncex.campaigns[ca_id].callout_t).eq(0);
		if(callout.length&&bouncex.campaigns[ca_id].c_button.length){
			var callout_obj = callout.get(0);
			show_ca_el(ca_id,callout_obj);
			XD.postMessage(msg,callout_obj);

			align_callout(callout, ca_id);
			bxBind(window,'resize.bcx_callout_'+ca_id+' bx_ad_show.bcx_callout_'+ca_id+' bx_ad_hide.bcx_callout_'+ca_id+' scroll.bcx_callout_'+ca_id,function(e, anim_h){
				var anim = false;
				if (e.type === 'bx_ad_show') anim = 'down';
				if (e.type === 'bx_ad_hide') anim = 'up';
				align_callout(callout, ca_id, anim, anim_h);
			}, ca_id);	
			
		}
	}
	if(bouncex.campaigns[ca_id].overlay!='none'){
		if(bouncex.campaigns[ca_id].overlay=='email' || bouncex.campaigns[ca_id].overlay=='genie' || bouncex.campaigns[ca_id].overlay=='code'){
			var middle = document.getElementById('campaign_'+ca_id+'_container_overlay');
			if(middle){
				bouncex.overlay_visible = true;
				var mid = document.getElementById('campaign_'+ca_id+'_middle');
				if(!bouncex.fs()){
					middle.style.top = middle.style.left =0;
					mid.style.position = 'absolute';
				}
				
				show_ca_el(ca_id,middle);
				show_lightbox(ca_id);
				center_campaign(ca_id,middle);
				if(top){
					top.style.zIndex = zx;
				}
				if(bottom){
					bottom.style.zIndex = zx;
				}
				
				if(bouncex.state.mobile){
					//zoomDisable(w);
					jQuery(window).resize(function(){
						center_campaign(ca_id,middle);
					});
				}
				hide_flash();
			}
			XD.postMessage(msg,middle);
		}else if(bouncex.campaigns[ca_id].overlay==='teleport'){
			setTimeout(function(){
				teleport(bouncex.campaigns[ca_id].overlay_teleport_type,bouncex.campaigns[ca_id].overlay_teleport_html);
			},300);
		}
	}
}

function destroy_ad(ca_id, keepObject) {
	unload_campaign(ca_id);
	close_ad(ca_id, true);
	if(bouncex.campaigns[ca_id].ng){
		jQuery('#bx-campaign-'+ca_id+',#bx-campaign-'+ca_id+'-clone').remove();
	}else{
		jQuery('#campaign_'+ca_id+'_container_overlay,#campaign_'+ca_id+'_container_callout,#campaign_'+ca_id+'_container_top,#campaign_'+ca_id+'_container_bottom,#campaign_'+ca_id+'_pusher_top,#campaign_'+ca_id+'_pusher_bottom').remove();
	}
	if(bouncex.campaigns[ca_id] && !keepObject){
		delete bouncex.campaigns[ca_id];
	}
}

var zcCallbacks = [];
function getScript (url,onsuccess){
	jQuery.ajax({
		url: url,
		cache: true,
		dataType:'script',
		success: onsuccess
	});
}
function enableZc(callback){
	if(typeof(bouncex.zc) == 'object'){//if zc is loaded
		callback();
	}else{//if zc is not loaded
		zcCallbacks.push(callback);
		if(!bouncex.zc_loaded){
			bouncex.zc_loaded = true;
			getScript('//' + bouncex.website.bau + "/assets/global/plugins/zeroclipboard2/ZeroClipboard.min.js",
				function(){
					ZeroClipboard.config( { swfPath: '//' + bouncex.website.bau + "/assets/global/plugins/zeroclipboard2/ZeroClipboard.swf" ,
									zIndex: 2147483647,
									forceHandCursor: true,
									containerId: 'bcx_zc',
									swfObjectId: 'bcx_zc_swf',
									containerClass: 'bcx_zc'} );
					bouncex.zc = new ZeroClipboard();
					bouncex.zc.on( 'ready', function(event) {
						bouncex.zc.on( 'copy', function(event) {
								var textEl = jQuery(event.target);
								var originalText = textEl.text().trim();
								if(originalText!='Copied!'){
									event.clipboardData.setData('text/plain', originalText);
									textEl.text('Copied!')
									setTimeout(function(){
										textEl.text(originalText);
									},1000);
								}else{
									textEl.text(originalText);
								}
						} );   
					} );
					for(i in zcCallbacks){
						zcCallbacks[i]();
						delete zcCallbacks[i];
					}
				}
			);
		}
	}
}
function showGenieFormErrors(ca_id, jform, response){
	var errors = response ? response.errors : false;
	if(errors){
		for(var input_name in errors) { 
			if (errors.hasOwnProperty(input_name)) {
				var err_field = jform.find('.bx-error-'+ca_id+'-'+input_name);
				err_field.text(errors[input_name]).closest('.bx-row').addClass('bx-row-validation');
			}
		}
		return false;
	} else {
		return true;
	}
}

function processSubmittedCampaignForm(result, ca_id){
	bouncex.cookie = getBounceCookie();
	bouncex.campaigns[ca_id].submitted = true;
	bouncex.cookie.es = true; 
	bouncex.cookie.campaigns[ca_id].ls = getTime2();
	setBounceCookie();
	if(bouncex.website.ibx.te && bouncex.website.ibx.te==1 && bouncex.website.ibx.mibcx==1) {
		bouncex.ibx.user(result['email'],{__src:"bouncex overlay",campaign:ca_id});
	}
	reportGa(ca_id, 'submission');
	event_js_eval(ca_id,'submission',result);
	if(typeof(bouncex.onformsubmit)=='function'){
		bouncex.onformsubmit(result['email']);
	}
	post_submit_redirect(ca_id);
}

function validateForm(jform, ca_id){
		if(bouncex.formSubmitting){
		return false;
	}else{
		bouncex.formSubmitting = true;
	}
	//use up a sequence id, will be used on server
	next_sequence_id();
	var isLastStep = (bouncex.campaigns[ca_id].next_step == bouncex.campaigns[ca_id].numSteps && !bouncex.campaigns[ca_id].noPostSubmit) || bouncex.campaigns[ca_id].forceLastStep;
	var noPostSubmit = bouncex.campaigns[ca_id].current_step == bouncex.campaigns[ca_id].numSteps && (bouncex.campaigns[ca_id].numSteps === 1 || bouncex.campaigns[ca_id].noPostSubmit);
	var last_step = isLastStep || noPostSubmit ? 1 : 0;
	var serial = jform.serialize();
	serial += '&step=' + bouncex.campaigns[ca_id].current_step + '&visit_id=' + bouncex.cookie.vid + '&m=' +bouncex.cookie.m + '&d=' + bouncex.cookie.d;
	serial += '&cookie=' + encodeURIComponent(bouncex.stringify(bouncex.cookie));
	serial += '&pos=overlay&step_name=before';//old genie validation compatability
	serial += '&last_step=' + last_step;
	serial += '&device_id=' + bouncex.cookie.did;
	serial += '&cts=' + getTimeMs();
	serial += '&pvid=' + bouncex.state.pvid;
	
	// custom vars
	for (var key in bouncex.vars) {
		serial += '&var[' + key + ']=' + encodeURIComponent(bouncex.vars[key]);
	}

	var action = jform.attr('action');
	jform.find('.bx-row-validation').removeClass('bx-row-validation');
	var options = {
		url: action,
		data: serial,
		dataType: "jsonp",
		contentType: "multipart/form-data",
		crossDomain: true,
		global: false,
		success: function(response){
			bouncex.formSubmitting = false;
			if(showGenieFormErrors(ca_id, jform, response)){
				bouncex.nextStep(ca_id);
				if(last_step){
					var result = [];
					var qsSplit = bouncex.campaigns[ca_id].obj1.find('.bx-input').serialize().split('&');
					for(var i=0; i<qsSplit.length; i++){
						var superSplit = qsSplit[i].split('=');
						result[superSplit[0]] = superSplit[1] ? decodeURIComponent(superSplit[1].replace(/\+/g, ' ')) : '';
					}

					processSubmittedCampaignForm(result, ca_id);

					if(bouncex.campaigns[ca_id].acas){
						bouncex.events[ca_id]['timeout_auto_submission_close'] = setTimeout(function(){
							bouncex.close_ad(ca_id);
						}, bouncex.campaigns[ca_id].acas * 1000);
					}
					if (noPostSubmit) {
						bouncex.close_ad(ca_id, false, true);
					}
				}
			}
			jQuery.event.trigger({
				campaign_id: ca_id,
				isEmptyResponse: !response,
				response: response,
				stepNumber: bouncex.campaigns[ca_id].current_step,
				type: 'bxValidateFormComplete'
			});
		},
		error: function(){ 
			bouncex.formSubmitting = false;
			bouncex.nextStep(ca_id);
			if(last_step){
				
			}
		}
	}
	if(!bouncex.campaigns[ca_id].edw){
		options.timeout = 2500;
	}
	jQuery.ajax(options);
}

function submitCampaignStep(form, ca_id){
	var jform = jQuery(form);
	if(jform.find('.bx-input').length > 0){
		validateForm(jform, ca_id);
	} else {
		report(ca_id, 'click');
		nextStep(ca_id);
	}
	return false;
}

function setJumpStep(ca_id, jumpStep, forceLastStep) {
	bouncex.campaigns[ca_id].jumpStep = jumpStep;
	bouncex.campaigns[ca_id].forceLastStep = forceLastStep;
}

function nextStep(ca_id){
	if(bouncex.campaigns[ca_id].jumpStep){
		bouncex.campaigns[ca_id].next_step = bouncex.campaigns[ca_id].jumpStep;
		bouncex.campaigns[ca_id].jumpStep = false;
	}

	if (bouncex.campaigns[ca_id].next_step <= bouncex.campaigns[ca_id].numSteps) {
		bouncex.campaigns[ca_id].obj2.find('.bx-step-' + ca_id + '-' + bouncex.campaigns[ca_id].current_step).removeClass('bx-active-step');
		bouncex.campaigns[ca_id].obj2.find('.bx-step-' + ca_id + '-' + bouncex.campaigns[ca_id].next_step).addClass('bx-active-step');

		bouncex.campaigns[ca_id].obj2
			.removeClass('bx-active-step-' + bouncex.campaigns[ca_id].current_step)
			.addClass('bx-active-step-' + bouncex.campaigns[ca_id].next_step);
		
		bouncex.campaigns[ca_id].current_step = bouncex.campaigns[ca_id].next_step;
		bouncex.campaigns[ca_id].next_step++;

		validateCouponsSeen(ca_id);
		show_close(ca_id);
		alignCampaign(ca_id);
	}
}

function handleInputEvents( event ){
	var input = jQuery( this );
	var parent = input.closest('.bx-row');
	switch ( event.type ){
		case 'focus':
			parent.addClass('bx-has-focus');
			break;
		case 'blur':
			parent.removeClass('bx-has-focus');
			break;
		case 'keydown':
			input.css('min-height', input.outerHeight());
			var ignoredKeys= {8:null,9:null,13:null,16:null,17:null,18:null,20:null,37:null,38:null,39:null,40:null,91:null,93:null,224:null};
			if(!ignoredKeys.hasOwnProperty( event.keyCode )){
				parent.addClass('bx-has-text');
			}
			break;
		case 'change': case 'paste': case 'keyup':
			if (input.val().length > 0) {
				parent.addClass('bx-has-text');
			} else {
				parent.removeClass('bx-has-text');
			}
		break;
	}
}

function handleClick(e) {
	var ca_id = e.data.ca_id;
	var el = jQuery(e.target);
	
	var anchor = el.is('a') ? el : el.parents('a');

	// click tracking
	if (anchor.is('a') && !anchor.hasClass('bx-close-link')) {
		bouncex.report(ca_id, 'click');
		var target = anchor.attr('target');
		if (!target || target == '_top') {
			setTimeout(function() {
				window.location.href = anchor.attr('href');
			}, 300);
			return false;
		}

	// clicked shroud (bx-slab because it has higher z-index)
	} else if (bouncex.campaigns[ca_id].clickShroudToClose && el.hasClass('bx-slab')) {
		bouncex.close_ad(ca_id);
		return false;
	}
	return true;
}

function validateCouponsSeen(ca_id) {
	var coupons = bouncex.campaigns[ca_id].obj1.find('.bx-step-' + bouncex.campaigns[ca_id].current_step + ' .coupon:visible');
	coupons.each(function(i) {
		var id = jQuery(this).attr('id');
		if (id && id.substr(0, 4).toLowerCase() === 'cpn_') {
			reportCouponSeen(ca_id, id.substr(4));
		}
	});
}

function reportCouponSeen(ca_id, coupon_id) {
	var id = parseInt(coupon_id);
	if (id && (!bouncex.cookie.cpn || bouncex.cookie.cpn !== id)) {
		bouncex.cookie.cpn = id;
		bouncex.report(ca_id, 'coupon', {'coupon:id':id});
	}
}

function run_timer(count_to, count_from, format, hasDays, on_complete, resetIfExpired, timer, timer_id, ca_id) {
	var firstSeen = bouncex.cookie.campaigns[ca_id].fsa;
	var isRelativeTimer = count_from === 'first_impression';
	var now = getTime2();
	var end = count_to - now;

	if (isRelativeTimer) {
				if (resetIfExpired && (firstSeen + end <= 0)) {
			firstSeen = bouncex.cookie.campaigns[ca_id].fsa = now;
			setBounceCookie();
		}
				end += firstSeen;
	}
	
	if (end <= 0) {
		clearInterval(bouncex.events[ca_id][timer_id]);
		end = 0; 		if (on_complete === 'close') {
			close_ad(ca_id);
		}
	}
	var new_timer_html = format.replace(/{(.*?)}/gi, function(query, unit, index, string) {
		var units = 0;
		var operation = 'floor';
		var spanOpen = '<span class="bx-timer-units bx-timer-' + unit + '">';
		var spanClose = '</span>';
		switch(unit) {
			case '0days':
			case 'days':
				operation =  string.split("{").length - 1 === 0 ? 'ceil': 'floor';//if we only count days then ceil, else floor
				units = end/60/60/24;
				break;
		    case 'hours':
		        units = hasDays ? end/60/60%24 : end/60/60;
		        break;
		    case 'minutes':
		        units = end/60%60;
		        break;
		    case 'seconds':
		    	units = end%60;
		    	break;
		}
		units = Math[operation](units);
		return spanOpen + (units < 10 && unit != 'days'? '0' + units : units) + spanClose;
	});
	timer.html(new_timer_html);
}

function by_parent_id(pid){
	for(var cid in bouncex.campaigns){
		if (bouncex.campaigns[cid].pid == pid){
			return cid;
		}
	}
	return null;
}

function show_close(ca_id, force) {
	if (bouncex.campaigns[ca_id].ng) { 
		show_close_ng(ca_id, force);
	} else {
		show_close_og(ca_id, force);
	}	
}

function show_close_ng(ca_id, force) {
	
	// performs DOM show/hide
	function swapCloseClasses(placement) {
		bouncex.campaigns[ca_id].obj2.removeClass('bx-has-close-inside bx-has-close-outside');
		if (placement) {
			bouncex.campaigns[ca_id].obj2.addClass('bx-has-close-' + placement);
		}
	}

	var newPlacement = bouncex.campaigns[ca_id].closePlacement[bouncex.campaigns[ca_id].current_step - 1];

	if (force) {
		// force show close, default to "outside"
		newPlacement = newPlacement || 'outside';
		swapCloseClasses(newPlacement);

	} else if (bouncex.campaigns[ca_id].current_step === 1) {
		// step 1: hide close and set timeout to show
		if (bouncex.campaigns[ca_id].close_button_delay) {
			swapCloseClasses(false);
			bouncex.events[ca_id]['timeout_close_delay'] = setTimeout(function() {
				swapCloseClasses(bouncex.campaigns[ca_id].closePlacement[bouncex.campaigns[ca_id].current_step - 1]);
				delete bouncex.events[ca_id]['timeout_close_delay'];
			}, bouncex.campaigns[ca_id].close_button_delay * 1000);
		}
	} else {
		// step 2+: show new step close placement, clear timeout
		if (bouncex.campaigns[ca_id].show_close_step || !bouncex.events[ca_id]['timeout_close_delay']) {
			swapCloseClasses(newPlacement);
			if (bouncex.events[ca_id]['timeout_close_delay']) {
				clearTimeout(bouncex.events[ca_id]['timeout_close_delay']);
				delete bouncex.events[ca_id]['timeout_close_delay'];
			}
		}
	}
}

function show_close_og(ca_id, force){
	if(bouncex.campaigns[ca_id].close_button_delay || !bouncex.campaigns[ca_id].show_close){
		var closes;
		
		var poses = ['_top','_bottom','_overlay','_callout'];
		if(!force){
			for (var index = 0; index < poses.length; index++) {
				closes = document.getElementById('bcx_close_'+ca_id+poses[index]);
				if(closes){
					closes.style.display = 'none';
				}
			};
		}
		if(bouncex.campaigns[ca_id].show_close){
			bouncex.events[ca_id]['timeout_close_delay'] = setTimeout(function(){
				for (var index = 0; index < poses.length; index++) {
					closes = document.getElementById('bcx_close_'+ca_id+poses[index]);
					if(closes){
						closes.style.display = 'block';
					}
				};
			
			},force?0:(bouncex.campaigns[ca_id].close_button_delay*1000));
		}
	}
}

function show_lightbox(ca_id){
	if(!bouncex.campaigns[ca_id].ngs){
		var ef = bouncex.campaigns[ca_id].te.substr(0,1);
		var lbx = document.getElementById('campaign_'+ca_id+'_lightbox');
		lbx.style.backgroundColor = bouncex.campaigns[ca_id].color;
		lbx.style.display='block';
		if(ef=='r'){
			setTimeout(function(){
				setOpacity(lbx,bouncex.campaigns[ca_id].opacity);
			},0);
		}else{
			setOpacity(lbx,bouncex.campaigns[ca_id].opacity);
		}
	}
}

function show_ca_el(ca_id,element){
	var te = bouncex.campaigns[ca_id].te;
	var ef = te.substr(0,1);
	if(te=='fade'){
		fade(element,bouncex.campaigns[ca_id].tes);
	}else if(te=='slide'){
		slide(element,bouncex.campaigns[ca_id].tes,ca_id);
	}else if(ef=='r'){
		element.style.display='block';
		setTimeout(function(){
			jQuery(element).addClass('bcx_after');
		},123);
	}else{
		element.style.display='block';
	}
}

function center_campaign(ca_id,el){
	if(!bouncex.state.mobile){
		if(!bouncex.fs()){
			var valign = el.getAttribute("data-valign");
			var height = parseInt(getStyle(el,'height'));
			var type = el.getAttribute('data-type');
			var wsize = bouncex.wndsize();
			var wheight = wsize.height;
			el.style.position = 'absolute';						
			scroll_campaign(valign,type,el,wheight,height);
			jQuery(window).bind('scroll',function(k,v){
				scroll_campaign(valign,type,el,wheight,height);
			});
		}
	}
}

function scroll_campaign(valign,type,el,wheight,height){
	var top = get_top();
	if(valign=='middle'){
		if(type=='overlay'){
			el.style.top = top+'px';
		}else{
			el.style.top = (top+wheight/2-height/2)+'px';
		}
	}else if(valign=='bottom'){	
		
		el.style.top = (top+wheight-height)+'px';
	}else if(valign=='top'){
		el.style.top = (top)+'px';
	}
}

function placeCampaign(ca_id) {
	if (bouncex.campaigns[ca_id].ng && (bouncex.campaigns[ca_id].type === 'agilityzone' || bouncex.campaigns[ca_id].type === 'annotation')) {
		placeCallout(ca_id);
	} else {
		bouncex.body.append(bouncex.campaigns[ca_id].html);
	}
}

function placeCallout(ca_id) {
	bouncex.campaigns[ca_id].calloutTarget = bouncex.campaigns[ca_id].calloutTarget || jQuery(bouncex.campaigns[ca_id].callout_t).eq(0);
	if (bouncex.campaigns[ca_id].calloutTarget.length && bouncex.campaigns[ca_id].dom_placement_method) {
		var campaignBody = bouncex.campaigns[ca_id].obj1 || jQuery(bouncex.campaigns[ca_id].html);
		if (bouncex.campaigns[ca_id].type !== 'annotation') {
			campaignBody.css({
				marginTop: parseInt(bouncex.campaigns[ca_id].callout_voffset) + 'px',
				marginLeft: parseInt(bouncex.campaigns[ca_id].callout_hoffset) + 'px'
			});
		}
		bouncex.campaigns[ca_id].calloutTarget[bouncex.campaigns[ca_id].dom_placement_method](campaignBody);
	} else {
		bouncex.campaigns[ca_id].failed = true;
	}
}

function alignCampaign(ca_id) {

	var hOffset = parseInt(bouncex.campaigns[ca_id].callout_hoffset) || 0;
	var vOffset = parseInt(bouncex.campaigns[ca_id].callout_voffset) || 0;

	if (bouncex.campaigns[ca_id].type == 'nanotab' || bouncex.campaigns[ca_id].type == 'conversioncorner') {
		if (bouncex.campaigns[ca_id].lastCalloutPos) {
			bouncex.campaigns[ca_id].obj1.removeClass('bx-fixed-' + bouncex.campaigns[ca_id].lastCalloutPos);
		}
		bouncex.campaigns[ca_id].obj1.addClass('bx-fixed-' + bouncex.campaigns[ca_id].callout_pos);
		bouncex.campaigns[ca_id].lastCalloutPos = bouncex.campaigns[ca_id].callout_pos;
		bouncex.campaigns[ca_id].obj1.find('.bx-slab').css('margin-left', hOffset + 'px');
		if (bouncex.campaigns[ca_id].callout_pos.indexOf('b') !== -1) {
			bouncex.campaigns[ca_id].obj1.find('.bx-align').css('margin-bottom', (-vOffset) + 'px');
		} else {
			bouncex.campaigns[ca_id].obj1.find('.bx-align').css('margin-top', vOffset + 'px');
		}

	} else if (bouncex.campaigns[ca_id].type == 'annotation' && bouncex.campaigns[ca_id].calloutTarget.length) {
		
		var target = bouncex.campaigns[ca_id].calloutTarget;
		var placement = bouncex.campaigns[ca_id].dom_placement_method;
		var hAlign = bouncex.campaigns[ca_id].callout_anchor_pos.substr(0,1);
		var vAlign = bouncex.campaigns[ca_id].callout_anchor_pos.substr(1,2);
		var creative = bouncex.campaigns[ca_id].obj1.find('.bx-creative');

				if (!bouncex.campaigns[ca_id].obj1.hasClass('bx-annotation-' + bouncex.campaigns[ca_id].callout_pos)) {
			if (bouncex.campaigns[ca_id].lastCalloutPos) {
				bouncex.campaigns[ca_id].obj1.removeClass('bx-annotation-' + bouncex.campaigns[ca_id].lastCalloutPos);
			}
			bouncex.campaigns[ca_id].obj1.addClass('bx-annotation-' + bouncex.campaigns[ca_id].callout_pos);
			bouncex.campaigns[ca_id].lastCalloutPos = bouncex.campaigns[ca_id].callout_pos;
		}

		var targetSize = {
			height: parseInt(target.height()),
			width: parseInt(target.width()),
			outerHeight: parseInt(target.outerHeight()),
			outerWidth: parseInt(target.outerWidth())
		};

		var siblingOffset = {
			x: 0,
			y: 0
		};

		var boxAdjust = {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		};

				if (targetSize.outerHeight - targetSize.height || targetSize.outerWidth - targetSize.width) {
			for (var side in boxAdjust) {
				boxAdjust[side] = parseInt(target.css('padding-' + side)) + parseInt(target.css('border-' + side + '-width'));
			}
		}

		var marginLeft = {
			l: -boxAdjust.left - targetSize.width / 2,
			c: (boxAdjust.right - boxAdjust.left) / 2,
			r: boxAdjust.right + targetSize.width / 2
		}[hAlign];

		var marginBottom = {
			t: boxAdjust.top,
			m: boxAdjust.top - targetSize.outerHeight / 2,
			b: -boxAdjust.bottom - targetSize.height
		}[vAlign];

				if (placement === 'before' || placement === 'after') {
			var leftRightMarginDiff = parseInt(target.css('marginLeft')) - parseInt(target.css('marginRight'));
			siblingOffset.x = (boxAdjust.left - boxAdjust.right + leftRightMarginDiff) / 2;

			if (placement === 'before') {
				siblingOffset.y = -boxAdjust.top;
			}
			if (placement === 'after') {
				siblingOffset.y = targetSize.height + boxAdjust.bottom + parseInt(target.css('marginBottom'))
			}
		}

		creative.css('margin', '0 0 ' + (marginBottom + siblingOffset.y - vOffset) + 'px ' + (marginLeft + siblingOffset.x + hOffset) + 'px');
	}
}

function align_callout(callout, ca_id,anim,anim_h){
	anim = typeof anim !== 'undefined' ? anim : false;
	var button = bouncex.campaigns[ca_id].c_button,
		ca = bouncex.campaigns[ca_id];
	var bcx_offset = button.offset();
	var bcx_top = parseInt(bcx_offset.top);
	var bcx_left = parseInt(bcx_offset.left);
	var cheight = parseInt(callout.height());
	var cwidth = parseInt( callout.width());
	var awidth = parseInt(button.outerWidth(false));
	var aheight = parseInt(button.outerHeight(false));
	var callout_h = ca.callout_pos.substr(0,1);
	var callout_v = ca.callout_pos.substr(1,2);
	var anchor_h = ca.callout_anchor_pos.substr(0,1);
	var anchor_v = ca.callout_anchor_pos.substr(1,2);
	
	if(callout_h == 'l'){
		bcx_left += 0;
	}else if(callout_h == 'c'){
		bcx_left -= parseInt(cwidth/2);
	}else if(callout_h == 'r'){
		bcx_left -= (cwidth);
	}
	if(anchor_h == 'r'){
		bcx_left += awidth;
	}else if(anchor_h == 'c'){
		bcx_left += parseInt(awidth/2);
	}else if(anchor_h == 'l'){
		bcx_left += 0;
	}
	
	if(callout_v == 't'){
		bcx_top += 0;
	}else if(callout_v == 'm'){
		bcx_top -= parseInt(cheight/2);
	}else if(callout_v == 'b'){
		bcx_top -= cheight;
	}
	if(anchor_v == 'b'){
		bcx_top += aheight;
	}else if(anchor_v == 'm'){
		bcx_top += parseInt(aheight/2);
	}else if(anchor_v == 't'){
		bcx_top += 0;
	}
	bcx_top += parseInt(ca.callout_voffset);
	bcx_left += parseInt(ca.callout_hoffset);
	if (anim == 'down' && typeof anim_h !== 'undefined') {
		callout.animate({'top':(bcx_top+anim_h)+'px'},400);
	} else if (anim == 'up') {
		callout.animate({'top':(bcx_top-anim_h)},400);
	} else {
		callout.css({'top':bcx_top+'px','left':bcx_left+'px'});
	}
}

function align_callout_public(ca_id) {
	bouncex.campaigns[ca_id].c_button  = jQuery(bouncex.campaigns[ca_id].callout_t).eq(0);
	var callout = jQuery('#campaign_'+ca_id+'_container_callout');
	align_callout(callout, ca_id);
}


function init_activation_funcs(){
	for(var ca_id in bouncex.campaigns) {
		bouncex.campaigns[ca_id].failed = false;
		bouncex.events[ca_id] = bouncex.events[ca_id] || {};
		if(can_show_ad(ca_id,true)&&!bouncex.campaigns[ca_id].ad_visible){
			(function(ca_id){
				var delay = 0;
				if(bouncex.campaigns[ca_id].activation_delay){
					delay = calc_delay_cvt(bouncex.campaigns[ca_id].activation_delay);
				}
				bouncex.events[ca_id]['timeout_activation'] = setTimeout(function(){
					init_activation(ca_id);
				},delay);
			})(ca_id);
		}
	}
}

function processGbiStack(stackId){
	var stack = bouncex.gbi.stacks[stackId];
	if(stack.finished){
		bouncex.gbi.log(false, 'stack [' + stackId +'] already finished');
		return false;
	}

	bouncex.gbi.stacks[stackId].processCount  = bouncex.gbi.stacks[stackId].processCount || 0;
	bouncex.gbi.stacks[stackId].processCount++;
	bouncex.gbi.log(false, 'processing stack [' + stackId +'] (' + bouncex.gbi.stacks[stackId].processCount + ') ...')
	var stackCampaigns = stack.campaigns;
	bouncex.gbi.stacks[stackId].failedCount = 0;

	for(var priority in stackCampaigns){
		var ca_id = stackCampaigns[priority];
		if(bouncex.campaigns[ca_id].failed){
			bouncex.gbi.stacks[stackId].failedCount++;
			bouncex.gbi.log(ca_id, 'has failed');
		} else if (bouncex.campaigns[ca_id].ttype == 'control' && ca_id == bouncex.gbi.stacks[stackId].leader_id) {
			bouncex.gbi.stacks[stackId].failedCount++;
		} else if(bouncex.campaigns[ca_id].gbi.ready){
			selectAdStackCampaign(ca_id);
			finishGbiStack(stackId, true);
			return true;
		}else{
			bouncex.gbi.log(ca_id, 'not ready');
		}
	}
	if(bouncex.gbi.stacks[stackId].failedCount === stackCampaigns.length){
		bouncex.gbi.log(false, 'stack [' + stackId + ']: all campaigns have failed');
		finishGbiStack(stackId, false);
	} else {
		return false;
	}
	return false;
}

function finishGbiStack(stackId, success){
	bouncex.gbi.stacks[stackId].failed = false;
	clearInterval(bouncex.events[bouncex.gbi.stacks[stackId].leader_id]['gbiStack']);
	delete bouncex.events[bouncex.gbi.stacks[stackId].leader_id]['gbiStack'];
	var hasControlLeader = bouncex.campaigns[bouncex.gbi.stacks[stackId].leader_id].ttype == 'control';
	if(!success){
		bouncex.gbi.stacks[stackId].failed = true;
		if(hasControlLeader){
			selectAdStackCampaign(bouncex.gbi.stacks[stackId].leader_id);
		}
	}
	bouncex.gbi.log(false, 'done looking at stack [' + stackId +'] ' + (bouncex.gbi.stacks[stackId].failed?'failed':'success'));
}

function selectAdStackCampaign(ca_id){
	var stackId = bouncex.campaigns[ca_id].gbi.stack_id;

	bouncex.gbi.stacks[stackId].finished = true;
	bouncex.gbi.log(ca_id, 'selected');
	initActivationInstruments(ca_id);
	bouncex.gbi.stacks[stackId].selectedCampaign = ca_id;

		clearGbiStackCampaigns(stackId, ca_id);
}

function clearGbiStackCampaigns(stackId, winner_ca_id){
	bouncex.gbi.log(false, 'clearing other campaigns...');
	for(var priority in bouncex.gbi.stacks[stackId].campaigns){
		var cca_id = bouncex.gbi.stacks[stackId].campaigns[priority];
		if(cca_id != winner_ca_id){
			bouncex.gbi.cancelRequest(cca_id);
			bouncex.destroy_ad(cca_id, true);
		}
	}
}

function initGbiStack(stackId, timeout){
	bouncex.gbi.log(false, 'Starting stack [' + stackId + ']')
	bouncex.gbi.stacks[stackId].started = true;
	bouncex.events[bouncex.gbi.stacks[stackId].leader_id]['gbiStack'] = setTimeout(function(){
		if( processGbiStack(stackId) ){
					} else if ( bouncex.gbi.stacks[stackId].processCount > 9 ){
			bouncex.gbi.log(false, 'stack [' + stackId + ']: ran out of tries');
			finishGbiStack(stackId, false);
		} else if(!bouncex.gbi.stacks[stackId].finished) {
			bouncex.gbi.log(false, 'stack [' + stackId + ']: no winners yet. Trying again...');
			initGbiStack(stackId, 1000);
		}
	}, timeout);
}

function init_activation(ca_id){
	if(bouncex.campaigns[ca_id].html){
		placeCampaign(ca_id);
	}
	if(bouncex.campaigns[ca_id].gbi && bouncex.campaigns[ca_id].gbi.stack_id){
		var stackId = bouncex.campaigns[ca_id].gbi.stack_id;
		if(!bouncex.gbi.stacks[stackId].started){
			initGbiStack(stackId);
		}
	}
	if(bouncex.website.gbi_enabled && bouncex.campaigns[ca_id].gbi.provider) { //v1+gbi
		bouncex.gbi.log(ca_id, 'requesting ad unit')
		bouncex.gbi[bouncex.campaigns[ca_id].gbi.provider].request(ca_id);
	} else if (bouncex.campaigns[ca_id].ng && !bouncex.campaigns[ca_id].failed) {//genie v2
		bouncex.campaigns[ca_id].obj1 = jQuery('#bx-campaign-'+ca_id);
		bouncex.campaigns[ca_id].obj2 = jQuery('.bx-campaign-'+ca_id);

		if (bouncex.campaigns[ca_id].styles) {
			bouncex.addCss(bouncex.campaigns[ca_id].styles, bouncex.campaigns[ca_id].obj1[0]);
		}

		var images = bouncex.campaigns[ca_id].images || [];
		loadImages(images, function(){
			activate_campaign(ca_id);
		});
	}else if(bouncex.campaigns[ca_id].html) {
			}else{
				activate_campaign(ca_id);
	}
}

function loadImages(images, callback){
	var count = imagesLength = images.length;
	if(count) {
		for (var k = 0; k < imagesLength; k += 1) {
						if (bouncex.browser.msie === 8 && images[k].indexOf('.svg') !== -1) {
				count--;
				if (count === 0) {
					callback();
				}
			} else {
				var image = typeof images[k] === 'string' ? jQuery('<img src="//' + images[k] +'"/>') : jQuery(images[k]);
				image.one('load', function(){
					count--;
					if (count === 0) {
						callback();
					}
				});
				if (image.complete) {
					image.load();
				}
			}
		};
	} else {
		callback();
	}
}

function activate_campaign( ca_id ) {
	if(bouncex.campaigns[ca_id].gbi){
		if(!bouncex.campaigns[ca_id].gbi.provider){
			activateGbiCampaign(ca_id);
		} else {
					}
	} else {
		initActivationInstruments(ca_id);
	}
}

function activateGbiCampaign(ca_id) {
	bouncex.gbi.log(ca_id, 'activate gbi campaign');
	if(bouncex.campaigns[ca_id].gbi.ready){
		return true;
	}
	bouncex.campaigns[ca_id].gbi.ready = true;

	if(!bouncex.campaigns[ca_id].gbi.stack_id){
				bouncex.gbi.log(ca_id, 'activating out of stack campaign');
		initActivationInstruments(ca_id);
	} else {
		var stackId = bouncex.campaigns[ca_id].gbi.stack_id;
		if(bouncex.gbi.stacks[stackId].leader_id == ca_id && bouncex.campaigns[ca_id].ttype == 'control'){
					} else {
						bouncex.gbi.log(ca_id, 'a campaign in the stack is ready, processing stack...');
			processGbiStack(stackId);
		}
	}
}

function initActivationInstruments(ca_id){
	if (bouncex.campaigns[ca_id].activated) {
		return false;
	}
	bouncex.campaigns[ca_id].activated = true;

	for(var i in bouncex.campaigns[ca_id].activations) {
		if(bouncex.campaigns[ca_id].activations.hasOwnProperty(i)){
			var act = bouncex.campaigns[ca_id].activations[i];
			if(act.activation){
				bouncex.ca[act.activation](act.prop,act.val,ca_id,act.prop2,act.prop3,act.prop4,act.prop5,act.prop6);
			}
		}
	}
	report(ca_id, 'eligible');
	event_js_eval(ca_id, 'activation');
}

function activation_funcs(){var c=[];c.manual=function(e,b,a){};c.control=function(e,b,a){show_ad("control",a)};c.inter=function(e,b,a){bouncex.cookie.vpv>=e&&show_ad("inter",a)};c.bounce=function(e,b,a){bxBind("html,body","mouseout.bouncex_show_"+a,function(b){process_mouse_out(b,a)},a);(bouncex.browser.msie||bouncex.browser.safari&&50>=bouncex.browser.safari)&&bxBind("html,body","mousemove.bouncex_show_"+a,function(b){process_mouse_move(b,a)},a)};c.timer=function(e,b,a){bouncex.events[a].timeout_timer=
setTimeout(function(){show_ad("timer",a)},1E3*parseInt(b))};c.back=function(e,b,a){b=!1;"landing_page"==e?bouncex.state.iol&&(b=!0):b=!0;if(b)if(history.pushState){if(!history.state||!history.state.bx_rewind)if(bouncex.browser.chrome&&(bouncex.browser.iphone||bouncex.browser.ipad)){var d="touchend.bcx_rewind_fix_"+a;bxBind(bouncex.body,d,function(){bouncex.body.unbind(d);history.pushState({bx_rewind:"bx_rewind1"},"","")},a)}else history.pushState({bx_rewind:"bx_rewind1"},"","");bouncex.original_hash=
window.location.hash;bxBind(jQuery(window),"popstate.bcx_popstate_"+a,function(b,d,c){history.state||"landing_page"==e&&bouncex.browser.safari&&history.state&&history.state.bx_rewind||bouncex.original_hash!==window.location.hash||history.state&&history.state.bx_rewind||"popstate"!=b.type||(show_ad("back",a),can_show_ad(a,!0)||jQuery(window).unbind("popstate.bcx_popstate_"+a),bouncex.campaigns[a].control&&setTimeout(function(){history.back()},300))},a)}else"."!=window.location.hash.replace("#","")&&
(window.location.hash="."),bouncex.events[a].timeout_rewind=setTimeout(function(){bxBind(jQuery(window),"hashchange.hash_"+a,function(b,d,e){show_ad("back",a);can_show_ad(a,!0)||jQuery(window).unbind("hashchange.hash_"+a)},a)},50)};c.pers=function(e,b,a){b=!1;bouncex.campaigns[a].is_pers=!0;"landing_page"==e&&bouncex.state.iol?b=!0:"landing_page"!=e&&(b=!0);b&&show_ad("pers",a)};c.worm=function(e,b,a){noteCookieAdShown(a);report(a,"pop",{"pop:activation":"worm"});teleport("_self",b)};c.inactivity=
function(e,b,a){var d="mousemove.bouncex_inactivity_"+a+" keydown.bouncex_inactivity_"+a+" DOMMouseScroll.bouncex_inactivity_"+a+" mousewheel.bouncex_inactivity_"+a+" mousedown.bouncex_inactivity_"+a+" touchstart.bouncex_inactivity_"+a+" touchmove.bouncex_inactivity_"+a+" focus.bouncex_inactivity_"+a;bxBind(window,d,function(){clearTimeout(bouncex.events[a].inactivity);bouncex.events[a].inactivity=setInactivityTimeout(a,b,d)},a);bouncex.events[a].inactivity=setInactivityTimeout(a,b,d)};c.reactivity=
function(e,b,a){var d="mousemove.bouncex_activity_"+a+" keydown.bouncex_activity_"+a+" DOMMouseScroll.bouncex_activity_"+a+" mousewheel.bouncex_activity_"+a+" mousedown.bouncex_activity_"+a+" touchstart.bouncex_activity_"+a+" touchmove.bouncex_activity_"+a+" focus.bouncex_activity_"+a;bxBind(window,d,function(){clearTimeout(bouncex.events[a].reactivity);bouncex.events[a].reactivity=setReactivityTimeout(a,b,d)},a);bouncex.events[a].reactivity=setReactivityTimeout(a,b,d)};c.scroll=function(e,b,a){bouncex.oldSy=
100;bxBind(window,"scroll.bouncex_"+a,function(){var d=jQuery(this),e=bouncex.wndsize(),d=(d=d.scrollTop())?d:document.body.scrollTop,e=(d+e.height)/jQuery(document).height()*100;100<parseInt(e)+parseInt(b)&&e>bouncex.oldSy&&!bouncex.campaigns[a].ad_shown&&(show_ad("scroll",a),can_show_ad(a,!0)||jQuery(window).unbind("scroll.bouncex_"+a));bouncex.oldSy=e},a)};c.mclick=function(e,b,a){if("left"==e&&"teleport"==bouncex.campaigns[a].overlay&&"_self"!==bouncex.campaigns[a].overlay_teleport_type){var d=
function(){show_ad("mclick",a)};addEvent(window.document,"click",d)}else d=function(b){var c=b.keyCode||b.which||b.button;b.button&&2==b.button&&(c=3);("left"==e&&1==c||"any"==e)&&show_ad("mclick",a);("right"==e&&3==c||"any"==e)&&show_ad("mclick",a);can_show_ad(a,!0)||removeEvent(window.document,"mousedown",d)},addEvent(window.document,"mousedown",d)};c.hover=function(e,b,a){var d=b.replace(/\W/g,""),c=function(){bouncex.events[a]["timeout_"+d]=setTimeout(function(){show_ad("hover",a);if(!can_show_ad(a,
!0))bouncex.events[a]["listener_hover"+d]()},500)},g=function(){clearTimeout(bouncex.events[a]["timeout_"+d]);delete bouncex.events[a]["timeout_"+d]};"undefined"!=typeof bouncex.body.on?(bouncex.body.on("mouseenter.bx"+a+d,b,c),bouncex.body.on("mouseleave.bx"+a+d,b,g),bouncex.events[a]["listener_hover"+d]=function(){bouncex.body.off("mouseenter.bx"+a+d,b,c);bouncex.body.off("mouseleave.bx"+a+d,b,g)}):(bouncex.body.delegate(b,"mouseenter.bx"+a+d,c),bouncex.body.delegate(b,"mouseleave.bx"+a+d,g),bouncex.events[a]["listener_hover"+
d]=function(){bouncex.body.undelegate(b,"mouseenter.bx"+a+d,c);bouncex.body.undelegate(b,"mouseleave.bx"+a+d,g)})};c.clickon=function(e,b,a){var d=b.replace(/\W/g,""),c=function(){if(jQuery(b).length&&(show_ad("clickon",a),!can_show_ad(a,!0)))bouncex.events[a]["listener_clickon"+d]()};"undefined"!=typeof bouncex.body.on?(bouncex.body.on("click.bx"+a+d,b,c),bouncex.events[a]["listener_clickon"+d]=function(){bouncex.body.off("click.bx"+a+d,b,c)}):(bouncex.body.delegate(b,"click.bx"+a+d,c),bouncex.events[a]["listener_clickon"+
d]=function(){bouncex.body.undelegate(b,"click.bx"+a+d,c)})};c.change=function(c,b,a){var d=b.replace(/\W/g,""),f=function(){if(jQuery(b).length&&(show_ad("change",a),!can_show_ad(a,!0)))bouncex.events[a]["listener_change"+d]()};"undefined"!=typeof bouncex.body.on?(bouncex.body.on("change.bx"+a+d,b,f),bouncex.events[a]["listener_change"+d]=function(){bouncex.body.off("change.bx"+a+d,b,f)}):(bouncex.body.delegate(b,"change.bx"+a+d,f),bouncex.events[a]["listener_change"+d]=function(){bouncex.body.undelegate(b,
"change.bx"+a+d,f)})};c.waypoint=function(c,b,a,d,f,g,p,h){f=!!f;g=!!g;p=!!p;h=!!h;offsetUnitIsPercent=!!d;c=parseInt(c)||0;var k=jQuery(b).eq(0);if(k.length){var r=function(){return q.scrollTop()+(g?q.height():0)},w="scroll.bx.waypoint."+a+" resize.bx.waypoint."+a,q=jQuery(window),t=null,l=r(),u=crossedWaypointDown=hasCrossedWaypoint=hasReversedWaypoint=isScrollingDown=isScrollingUp=!1,m,v,x,n,y=function(){v=k.height();x=offsetUnitIsPercent?v*c/100:c;n=k.offset().top+x+(p?0:v);m=r();isScrollingUp=
m<l;isScrollingDown=m>l;u=isScrollingUp&&n<l&&n>m;crossedWaypointDown=isScrollingDown&&n>l&&n<m;hasCrossedWaypoint=u&&f||crossedWaypointDown&&!f;hasReversedWaypoint=u&&!f||crossedWaypointDown&&f;hasCrossedWaypoint&&(show_ad("waypoint",a),can_show_ad(a,!0)||q.unbind(w));hasReversedWaypoint&&h&&close_ad(a,!0);l=r()};bxBind(window,w,function(){t&&clearTimeout(t);t=setTimeout(y,30)},a)}};c.highlight_text=function(c,b,a,d){c=parseInt(c)||5;d=parseInt(d)||5;b=jQuery(b).eq(0);if(b.length){var f=jQuery.trim(b.text().toLowerCase()),
g="mouseup.bouncex_highlight_text_"+a;bxBind(bouncex.body,g,function(){var b="";window.getSelection?b=window.getSelection().toString().toLowerCase():document.selection&&"Control"!=document.selection.type&&(b=document.selection.createRange().text.toLowerCase());var h=b.substring(b.length-c,b.length),k=b.substring(0,c);b.length>=c&&(-1<b.indexOf(f)||-1<f.indexOf(b)||h.length>=c&&-1<f.indexOf(h)||k.length>=c&&-1<f.indexOf(k))&&b.length<=f.length+d&&(show_ad("highlight_text",a),can_show_ad(a,!0)||bouncex.body.unbind(g))},
a)}};return c}function setInactivityTimeout(c,e,b){return setTimeout(function(){show_ad("inactivity",c);jQuery(window).unbind(b)},1E3*e)}
function setReactivityTimeout(c,e,b){return setTimeout(function(){jQuery(window).unbind(b);var a="mousemove.bouncex_reactivity_"+c+" keydown.bouncex_reactivity_"+c+" DOMMouseScroll.bouncex_reactivity_"+c+" mousewheel.bouncex_reactivity_"+c+" mousedown.bouncex_reactivity_"+c+" touchstart.bouncex_reactivity_"+c+" touchmove.bouncex_reactivity_"+c+" focus.bouncex_reactivity_"+c;bxBind(window,a,function(){jQuery(window).unbind(a);show_ad("reactivity",c);can_show_ad(c,!0)&&bxBind(window,b,function(){clearTimeout(bouncex.events[c].reactivity);
bouncex.events[c].reactivity=setReactivityTimeout(c,e,b)},c)},c)},1E3*e)};


function process_mouse_move(b,a){bouncex.direction=18>=(b.layerY?b.layerY:b.pageY)-(document.body.scrollTop||document.documentElement.scrollTop)?"up":!1;if(0<bouncex.campaigns[a].iao||0<bouncex.campaigns[a].rao){var e=b.layerX?b.layerX:b.pageX;bouncex.lastX=0<e?e:1}}
function process_mouse_out(b,a){var e=b?b:window.event,c=e.toElement,d=e.relatedTarget,e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(!d||d!==this&&!bouncex.contains(this,d))if(!c||"HTML"==c.nodeName)if(bouncex.browser.msie&&"up"==bouncex.direction){if(0<bouncex.campaigns[a].iao&&(c=bouncex.lastX,c<bouncex.campaigns[a].iao)||0<bouncex.campaigns[a].rao&&(c=bouncex.lastX,e-c<bouncex.campaigns[a].rao))return!1;show_ad("bounce",a);can_show_ad(a,!0)||jQuery("html,body").unbind("mouseout.bouncex_show_"+
a)}else if(!bouncex.browser.msie&&(5>b.clientY&&-50<b.clientY||bouncex.browser.safari&&(-32768==b.clientY||671==b.clientY)&&"up"==bouncex.direction)){if(0<bouncex.campaigns[a].iao&&(c=b.layerX?b.layerX:b.pageX,c<bouncex.campaigns[a].iao)||0<bouncex.campaigns[a].rao&&(c=b.layerX?b.layerX:b.pageX,e-c<bouncex.campaigns[a].rao))return!1;40<bouncex.browser.chrome?(bouncex.events[a].bouncex_timeout||(bouncex.events[a].bouncex_timeout=setTimeout(function(){show_ad("bounce",a);bouncex.events[a].bouncex_timeout=
!1;jQuery(document).unbind("mouseenter.bx_bouncex_mousenter_"+a);can_show_ad(a,!0)||jQuery("html,body").unbind("mouseout.bouncex_show_"+a)},0)),bxBind(document,"mouseenter.bx_bouncex_mousenter_"+a,function(){jQuery(document).unbind("mouseenter.bx_bouncex_mousenter_"+a);clearTimeout(bouncex.events[a].bouncex_timeout);bouncex.events[a].bouncex_timeout=!1},a)):(show_ad("bounce",a),can_show_ad(a,!0)||jQuery("html,body").unbind("mouseout.bouncex_show_"+a))}}
function teleport(b,a){if("underlay"==b||"_blank"==b)if("_blank"==b)window.open(a,"_blank");else{var e=bouncex.wndsize(),c=self.window.open(a,"bouncex","toolbar=0,scrollbars=1,location=1,statusbar=1,menubar=0,resizable=1,width="+e.width+",height="+e.height);c.blur();c.opener.window.focus();window.self.window.focus();window.focus();try{if(bouncex.browser.firefox){var d=window.open("about:blank");d.focus();d.close()}else if(bouncex.browser.webkit){d=document.createElement("a");d.href="data:text/html,<script>window.close();\x3c/script>";
document.getElementsByTagName("body")[0].appendChild(d);var f=document.createEvent("MouseEvents");f.initMouseEvent("click",!1,!0,window,0,0,0,0,0,!0,!1,!1,!0,0,null);d.dispatchEvent(f);d.parentNode.removeChild(d)}else bouncex.browser.msie&&setTimeout(function(){c.blur();c.opener.window.focus();window.self.window.focus();window.focus()},100)}catch(g){bouncex.log(g)}}else window.open(a,b)};

var flash_objects = {};

function init_lightbox(){
	bouncex.css_added=true;
	addStyle((bouncex.website.force_https ? 'https:' : '') + '//assets.bounceexchange.com/assets/bounce/css/bouncev2.be08a76c52.css');
}

function bxBind(obj, type, fn, ca_id){
	var obj = jQuery(obj);
	if(ca_id){
		bouncex.events[ca_id][type] = obj;
	}
	obj.bind(type, fn);
}

function addEvent( obj, type, fn ) {
	if (obj.addEventListener)
		obj.addEventListener(type, fn, false);
	else if (obj.attachEvent) 
		obj.attachEvent('on' + type, function(){ fn.apply(obj, new Array(window.event)); });
}

function removeEvent( obj, type, fn ) {
	if (obj.removeEventListener)
			obj.removeEventListener(type, fn, false);
	else if (obj.attachEvent) 
			obj.detachEvent('on' + type, function() { return fn.apply(obj, new Array(window.event));});
}

function hide_flash(){
	flash_objects = jQuery('object,embed');
	flash_objects.css('visibility','hidden');
}

function calc_delay_cvt(delay_time){
	var delay = (bouncex.cookie.cvt-getTime2()+delay_time)*1000;
	return delay<0?0:delay;
}

function fs(){
	if(!bouncex.browser.msie){
		return true;
	}
	if(typeof(bouncex.fixed_supported)=='undefined'){
		bouncex.fixed_supported = isFixedSupported();
	}
	
	return bouncex.fixed_supported;
}

function isFixedSupported(){var e=document.body;if(document.createElement&&e&&e.appendChild&&e.removeChild){var t=document.createElement("div");if(!t.getBoundingClientRect)return null;t.innerHTML="x";t.style.cssText="position:fixed;top:100px;";e.appendChild(t);var n=e.style.height,r=e.scrollTop;e.style.height="3000px";e.scrollTop=500;var i=t.getBoundingClientRect().top;e.style.height=n;var s=i===100;e.removeChild(t);e.scrollTop=r;return s}return null}

function addStyle(e){var t=document.createElement("link");t.setAttribute("href",e);t.setAttribute('id','bcx_stylesheet');t.setAttribute("rel","stylesheet");t.setAttribute("media","all");t.setAttribute("type","text/css");document.getElementsByTagName("head")[0].appendChild(t)}

function getTime2(){
	var timeDiff = bouncex.server_client_time_diff ? bouncex.server_client_time_diff : 0;
	return parseInt(new Date().getTime()/1000)+timeDiff;
}

function getTimeMs(){
	return (new Date().getTime());
}

function zoomDisable(w){
	/*var agent = navigator.userAgent.toLowerCase();
	var supported =   agent.indexOf('chrome')>0||agent.indexOf('firefox')>0;*/
	//jQuery('head').prepend('<meta name="viewport" content="user-scalable=no"/>');
}

function zoomEnable(){
	//jQuery('head meta[name=viewport]').remove();
	//jQuery('head').prepend('<meta name="viewport" content="user-scalable=yes"/>');
}

function get_top(){
	return ((document.documentElement && document.documentElement.scrollTop)?(document.documentElement.scrollTop):document.body.scrollTop);
}

function getStyle(e,t){if(e.currentStyle)var n=e.currentStyle[t];else if(window.getComputedStyle)var n=document.defaultView.getComputedStyle(e,null).getPropertyValue(t);return n}

function slide(what,duration,ca_id){
	var mid = document.getElementById('campaign_'+ca_id+'_middle');
	if(mid){
		mid.style.display = 'none';
		bSlideDown(mid,'top');
	}
	what.style.display='block';
}

function fade(what, duration) {
	jQuery(what).fadeIn(duration*10+500);
}

function setOpacity(el,val){
	el.style.opacity = val;
	el.style.filter = 'alpha(opacity='+val*100+')';
}

function bSlideDown(el,prop,onsuccess){
	var props = {};
	props[prop] = (getStyle(el,prop));
	el.style[prop] = 0;
	el.style.display = 'block';
	jQuery(el).animate(props, {duration: 400, complete: function() {
		jQuery(window).trigger('scroll');
		if (typeof onsuccess !== 'undefined') onsuccess();
	}});
}

function bSlideUp(el,onsuccess){
	jQuery(el).animate({'height': 0}, {duration: 400, complete: function() {
		el.style.display = 'none';
		jQuery(window).trigger('scroll');
		if (typeof onsuccess !== 'undefined') onsuccess();
	}});
}

		if(bouncex.website.sd>0){
			setTimeout(bcx_init, bouncex.website.sd);
		}else{
			bcx_init();
		}

	})(); 
} 