$(document).on('turbolinks:load', function(){

	var enable_sticky_menu = true,
		enable_scrolltop_button = true;

	// When DOM is fully loaded
	jQuery(document).ready(function($) {

		"use strict";

		/* ---------------------------------------------------------------------- */
		/*	Touch Screen Detection
		/* ---------------------------------------------------------------------- */

		var isTouchScreenDevice = ( "ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch,
			isiPad = /ipad/i.test( navigator.userAgent.toLowerCase() ),
			isiPhone = /iphone/i.test( navigator.userAgent.toLowerCase() ),
			isiPod = /ipod/i.test( navigator.userAgent.toLowerCase() ),
			isAndroid = /android/i.test( navigator.userAgent.toLowerCase() );

		if ( isTouchScreenDevice ) {
			$( 'body' ).addClass( 'touch-screen' );
		} else {
			$( 'body' ).addClass( 'no-touch-screen' );
		}
		if ( isAndroid ) {
			$( 'body' ).addClass( 'android-device' );
		}


		/* ---------------------------------------------------------------------- */
		/*	Layout Adjust
		/* ---------------------------------------------------------------------- */

		(function() {

			// Add "col-sm-12" class to "columns" if needed
			$( '#page-content.fullwidth-layout .stripe .container > .row > .columns, #page-content.sidebar-layout #main-content .row > .columns' ).each(function() {
				var $column = $( this );

				if ( $column.attr( 'class' ).indexOf( 'col-sm-' ) == -1 ) {
					if ( $column.attr( 'class' ).indexOf( 'col-xs-' ) > -1 ) {
						if ( $column.hasClass( 'col-xs-12' ) ) {
							$column.addClass( 'col-sm-12' );
						}
					} else {
						$column.addClass( 'col-sm-12' );
					}
				}
			});

			// Add "mb-last-child" to the last visible widget in sidebar and "sidebar-visible-sm-down" to the sidebar
			function lastWidgetStyle() {
				var $visibleWidgets = $( '#sidebar .widget:not([class*="hidden-"])' ),
					visWidgetsNum = $visibleWidgets.length;

				if ( visWidgetsNum > 0 ) {
					$( '#sidebar' ).addClass( 'sidebar-visible-sm-down' );

					$visibleWidgets.each(function( index, element ) {
						if ( index == visWidgetsNum-1 ) {
							$( element ).addClass( 'mb-last-child' );
						}
					});
				}
			}

			if ( $( '#sidebar' ).length ) {
				lastWidgetStyle();
			}

			// Add "col-hidden-content" class to "columns" if no visible content inside
			function getEmptyColumn() {
				$( '#page-content.fullwidth-layout > .stripe .container > .row > .columns, #page-content.sidebar-layout #main-content .row > .columns' ).each(function() {
					var $column = $( this );

					/* Not implemented currently */
				});
			}

			getEmptyColumn();

			$(window).on( 'resize', function() {
				var timer = window.setTimeout(function() {
					window.clearTimeout( timer );
					getEmptyColumn();
				}, 30 );
			});

		})();


		/* ---------------------------------------------------------------------- */
		/*	Main Navigation
		/* ---------------------------------------------------------------------- */
		/*
		 * jQuery Superfish Menu Plugin - v1.7.9
		 * Copyright (c) 2016 Joel Birch
		 *
		 * Dual licensed under the MIT and GPL licenses:
		 *	http://www.opensource.org/licenses/mit-license.php
		 *	http://www.gnu.org/licenses/gpl.html
		 */

		;!function(a,b){"use strict";var c=function(){var c={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},d=function(){var b=/^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);return b&&a("html").css("cursor","pointer").on("click",a.noop),b}(),e=function(){var a=document.documentElement.style;return"behavior"in a&&"fill"in a&&/iemobile/i.test(navigator.userAgent)}(),f=function(){return!!b.PointerEvent}(),g=function(a,b,d){var e,f=c.menuClass;b.cssArrows&&(f+=" "+c.menuArrowClass),e=d?"addClass":"removeClass",a[e](f)},h=function(b,d){return b.find("li."+d.pathClass).slice(0,d.pathLevels).addClass(d.hoverClass+" "+c.bcClass).filter(function(){return a(this).children(d.popUpSelector).hide().show().length}).removeClass(d.pathClass)},i=function(a,b){var d=b?"addClass":"removeClass";a.children("a")[d](c.anchorClass)},j=function(a){var b=a.css("ms-touch-action"),c=a.css("touch-action");c=c||b,c="pan-y"===c?"auto":"pan-y",a.css({"ms-touch-action":c,"touch-action":c})},k=function(a){return a.closest("."+c.menuClass)},l=function(a){return k(a).data("sfOptions")},m=function(){var b=a(this),c=l(b);clearTimeout(c.sfTimer),b.siblings().superfish("hide").end().superfish("show")},n=function(b){b.retainPath=a.inArray(this[0],b.$path)>-1,this.superfish("hide"),this.parents("."+b.hoverClass).length||(b.onIdle.call(k(this)),b.$path.length&&a.proxy(m,b.$path)())},o=function(){var b=a(this),c=l(b);d?a.proxy(n,b,c)():(clearTimeout(c.sfTimer),c.sfTimer=setTimeout(a.proxy(n,b,c),c.delay))},p=function(b){var c=a(this),d=l(c),e=c.siblings(b.data.popUpSelector);return d.onHandleTouch.call(e)===!1?this:void(e.length>0&&e.is(":hidden")&&(c.one("click.superfish",!1),"MSPointerDown"===b.type||"pointerdown"===b.type?c.trigger("focus"):a.proxy(m,c.parent("li"))()))},q=function(b,c){var g="li:has("+c.popUpSelector+")";a.fn.hoverIntent&&!c.disableHI?b.hoverIntent(m,o,g):b.on("mouseenter.superfish",g,m).on("mouseleave.superfish",g,o);var h="MSPointerDown.superfish";f&&(h="pointerdown.superfish"),d||(h+=" touchend.superfish"),e&&(h+=" mousedown.superfish"),b.on("focusin.superfish","li",m).on("focusout.superfish","li",o).on(h,"a",c,p)};return{hide:function(b){if(this.length){var c=this,d=l(c);if(!d)return this;var e=d.retainPath===!0?d.$path:"",f=c.find("li."+d.hoverClass).add(this).not(e).removeClass(d.hoverClass).children(d.popUpSelector),g=d.speedOut;if(b&&(f.show(),g=0),d.retainPath=!1,d.onBeforeHide.call(f)===!1)return this;f.stop(!0,!0).animate(d.animationOut,g,function(){var b=a(this);d.onHide.call(b)})}return this},show:function(){var a=l(this);if(!a)return this;var b=this.addClass(a.hoverClass),c=b.children(a.popUpSelector);return a.onBeforeShow.call(c)===!1?this:(c.stop(!0,!0).animate(a.animation,a.speed,function(){a.onShow.call(c)}),this)},destroy:function(){return this.each(function(){var b,d=a(this),e=d.data("sfOptions");return e?(b=d.find(e.popUpSelector).parent("li"),clearTimeout(e.sfTimer),g(d,e),i(b),j(d),d.off(".superfish").off(".hoverIntent"),b.children(e.popUpSelector).attr("style",function(a,b){return b.replace(/display[^;]+;?/g,"")}),e.$path.removeClass(e.hoverClass+" "+c.bcClass).addClass(e.pathClass),d.find("."+e.hoverClass).removeClass(e.hoverClass),e.onDestroy.call(d),void d.removeData("sfOptions")):!1})},init:function(b){return this.each(function(){var d=a(this);if(d.data("sfOptions"))return!1;var e=a.extend({},a.fn.superfish.defaults,b),f=d.find(e.popUpSelector).parent("li");e.$path=h(d,e),d.data("sfOptions",e),g(d,e,!0),i(f,!0),j(d),q(d,e),f.not("."+c.bcClass).superfish("hide",!0),e.onInit.call(this)})}}}();a.fn.superfish=function(b,d){return c[b]?c[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?a.error("Method "+b+" does not exist on jQuery.fn.superfish"):c.init.apply(this,arguments)},a.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:a.noop,onBeforeShow:a.noop,onShow:a.noop,onBeforeHide:a.noop,onHide:a.noop,onIdle:a.noop,onDestroy:a.noop,onHandleTouch:a.noop}}(jQuery,window);

		// Correct the position of those submenus that overlap the right margin of a page
		(function() {

			var menuItemPadding = parseInt( $( '#main-menu>li>a' ).css( 'padding-left' ) ),
				menuWidth = $( '#primary-nav' ).width() + menuItemPadding,
				mWidth = menuWidth,
				overlapWidth = 3;

			$( '#main-menu > li' ).each(function() {
				// needed to determine the correct width of submenu with arrows before menu plugin initialization
				$( this ).find( 'ul > li' ).has( 'ul' ).children( 'a' ).addClass( 'sf-with-ul' );

				var $liTop = $(this),
					topItemWidth = $liTop.width(),
					submenuWidth = $liTop.children( 'ul' ).width();

				if ( submenuWidth > mWidth ) {
					$liTop.children( 'ul' ).css( 'left', ( mWidth - submenuWidth ) + 'px' );
				}

				$liTop.find( '> ul > li' ).has( 'ul' ).each(function() {
					var $liSub = $( this ),
						submenu2Width = $liSub.children( 'ul' ).width(),
						submenu2Left;

					if ( submenuWidth > mWidth || ( submenuWidth + submenu2Width - overlapWidth ) > mWidth ) {
						submenu2Left = -submenu2Width + overlapWidth;
					} else {
						submenu2Left = submenuWidth - overlapWidth;
					}
					$liSub.children( 'ul' ).css( 'left', submenu2Left + 'px' );

					$liSub.find( '> ul > li' ).has( 'ul' ).each(function() {
						var $liSub2 = $( this ),
							submenu3Width = $liSub2.children( 'ul' ).width(),
							submenu3Left;

						if ( ( submenu2Left + submenu2Width + submenu3Width - overlapWidth ) > mWidth ) {
							submenu3Left = -submenu3Width + 2 * overlapWidth;
						} else {
							submenu3Left = submenu2Width - overlapWidth;
						}
						$liSub2.children( 'ul' ).css( 'left', submenu3Left + 'px' );
					});

				});

				// megamenu: set width and position
				if ( typeof $liTop.attr( 'class' ) != 'undefined' && $liTop.attr( 'class' ).indexOf( 'sf-mega-parent' ) > -1 ) {
					var $megaMenu = $liTop.find( '.sf-mega' ),
						$megaMenuTable = $liTop.find( '.sf-mega > .sub-menu' ),
						megaWidth = 0,
						megaWidthFull,
						megaPadding = parseInt( $megaMenu.css( 'padding-left' ) ),
						sectionClassWidth;

					$megaMenuTable.children( '.sf-mega-section' ).each(function( i ) {
						var $this = $( this ),
							megaSectionPadding = parseInt( $this.css( 'padding-left' ) ),
							megaSectionMinWidth = parseInt( $this.css( 'min-width') );

						sectionClassWidth = parseInt( $this.attr( 'class' ).replace( /[^0-9]/g, '' ) );
						megaWidth += isNaN( sectionClassWidth ) ? ( $this.innerWidth() ? $this.innerWidth() : megaSectionMinWidth ) : sectionClassWidth;
					});

					megaWidthFull = megaWidth + 2 * megaPadding;
					if ( megaWidth > 0 ) {
						$megaMenu.css( 'width', megaWidthFull + 'px' );
					}
					if ( megaWidthFull > mWidth ) {
						$megaMenu.css( { 'left': 'auto', 'right': -menuItemPadding + 'px' } );
					} else {
						$megaMenu.css( 'left', ( menuWidth - mWidth ) + 'px' );
					}
				}

				mWidth -= topItemWidth;
			});

		})();

		// Initialise plugin
		$( '#main-menu' ).superfish({
			delay: 200,									// delay on mouseout
			animation: { opacity: 'show' },				// fade-in (opacity: 'show') and slide-down (height: 'show') animation
			speed: 'fast',								// animation speed
			cssArrows: true,							// enable/disable generation of arrow mark-up
			disableHI: true,							// disable/enable hoverIntent detection
			onInit: function(){

				// do nothing when clicking the menu items with "#" href attribute
				$( 'a[href="#"]', this ).on( 'click', function(e) {
					return false;
				});

				if ( isTouchScreenDevice && $(window).width() >= 992 ) {
					hideOnTouchOutside();
				}
			}
		});

		// (For touch screens) Hide opened submenus when user clicks outside the menu's area
		function hideOnTouchOutside() {
			$( 'html' ).on( 'touchend', function(e) {
				$( '#main-menu > li.sfHover' ).mouseout();
			});
			$( '#main-menu' ).on( 'touchstart touchend', function(e){
				e.stopPropagation();
			});
		}


		/* ---------------------------------------------------------------------- */
		/*	Responsive Menu
		/* ---------------------------------------------------------------------- */
		/*
		 * Sidr v1.2.1 - 2013-11-06
		 * https://github.com/artberri/sidr
		 *
		 * Copyright (c) 2013 Alberto Varela
		 * Licensed under the MIT license.
		 */

		(function(e){var t=!1,i=!1,n={isUrl:function(e){var t=RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");return t.test(e)?!0:!1},loadContent:function(e,t){e.html(t)},addPrefix:function(e){var t=e.attr("id"),i=e.attr("class");"string"==typeof t&&""!==t&&e.attr("id",t.replace(/([A-Za-z0-9_.\-]+)/g,"sidr-id-$1")),"string"==typeof i&&""!==i&&"sidr-inner"!==i&&e.attr("class",i.replace(/([A-Za-z0-9_.\-]+)/g,"sidr-class-$1")),e.removeAttr("style")},execute:function(n,s,a){"function"==typeof s?(a=s,s="sidr"):s||(s="sidr");var r,d,l,c=e("#"+s),u=e(c.data("body")),f=e("html"),p=c.outerWidth(!0),g=c.data("speed"),h=c.data("side"),m=c.data("displace"),v=c.data("onOpen"),y=c.data("onClose"),x="sidr"===s?"sidr-open":"sidr-open "+s+"-open";if("open"===n||"toggle"===n&&!c.is(":visible")){if(c.is(":visible")||t)return;if(i!==!1)return o.close(i,function(){o.open(s)}),void 0;t=!0,"left"===h?(r={left:p+"px"},d={left:"0px"}):(r={right:p+"px"},d={right:"0px"}),u.is("body")&&(l=f.scrollTop(),f.css("overflow-x","hidden").scrollTop(l)),m?u.addClass("sidr-animating").css({width:u.width(),position:"absolute"}).animate(r,g,function(){e(this).addClass(x)}):setTimeout(function(){e(this).addClass(x)},g),c.css("display","block").animate(d,g,function(){t=!1,i=s,"function"==typeof a&&a(s),u.removeClass("sidr-animating")}),v()}else{if(!c.is(":visible")||t)return;t=!0,"left"===h?(r={left:0},d={left:"-"+p+"px"}):(r={right:0},d={right:"-"+p+"px"}),u.is("body")&&(l=f.scrollTop(),f.removeAttr("style").scrollTop(l)),u.addClass("sidr-animating").animate(r,g).removeClass(x),c.animate(d,g,function(){c.removeAttr("style").hide(),u.removeAttr("style"),e("html").removeAttr("style"),t=!1,i=!1,"function"==typeof a&&a(s),u.removeClass("sidr-animating")}),y()}}},o={open:function(e,t){n.execute("open",e,t)},close:function(e,t){n.execute("close",e,t)},toggle:function(e,t){n.execute("toggle",e,t)},toogle:function(e,t){n.execute("toggle",e,t)}};e.sidr=function(t){return o[t]?o[t].apply(this,Array.prototype.slice.call(arguments,1)):"function"!=typeof t&&"string"!=typeof t&&t?(e.error("Method "+t+" does not exist on jQuery.sidr"),void 0):o.toggle.apply(this,arguments)},e.fn.sidr=function(t){var i=e.extend({name:"sidr",speed:200,side:"left",source:null,renaming:!0,body:"body",displace:!0,onOpen:function(){},onClose:function(){}},t),s=i.name,a=e("#"+s);if(0===a.length&&(a=e("<div />").attr("id",s).appendTo(e("body"))),a.addClass("sidr").addClass(i.side).data({speed:i.speed,side:i.side,body:i.body,displace:i.displace,onOpen:i.onOpen,onClose:i.onClose}),"function"==typeof i.source){var r=i.source(s);n.loadContent(a,r)}else if("string"==typeof i.source&&n.isUrl(i.source))e.get(i.source,function(e){n.loadContent(a,e)});else if("string"==typeof i.source){var d="",l=i.source.split(",");if(e.each(l,function(t,i){d+='<div class="sidr-inner">'+e(i).html()+"</div>"}),i.renaming){var c=e("<div />").html(d);c.find("*").each(function(t,i){var o=e(i);n.addPrefix(o)}),d=c.html()}n.loadContent(a,d)}else null!==i.source&&e.error("Invalid Sidr Source");return this.each(function(){var t=e(this),i=t.data("sidr");i||(t.data("sidr",s),"ontouchstart"in document.documentElement?(t.bind("touchstart",function(e){e.originalEvent.touches[0],this.touched=e.timeStamp}),t.bind("touchend",function(e){var t=Math.abs(e.timeStamp-this.touched);200>t&&(e.preventDefault(),o.toggle(s))})):t.click(function(e){e.preventDefault(),o.toggle(s)}))})}})(jQuery);

		(function() {

			$( '#mobile-menu-button' ).sidr({
				name: 'mobile-nav',
				source: '#primary-nav',
				side: 'right',
				speed: 400,
				displace: false
			});

			$( '#mobile-nav' ).prepend( '<div class="sidr-inner"><a id="mobile-menu-close" href="#"><i class="fa fa-times"></i></a><div class="clear"></div></div>' );

			$( '#mobile-menu-close' ).on( 'click', function(e) {
				e.preventDefault();
				$.sidr( 'close', 'mobile-nav' );
				return false; // IE9 hack
			});

			// add arrow icon to a menu item with submenu
			$( '#mobile-nav .sidr-class-menu-item-has-children > a, #mobile-nav .sidr-class-sf-mega-section.sidr-class-has-children > h6' ).append( '<span class="dropdown-toggle"><i class="fa fa-angle-down"></i></span>' );

			var $trigger = $( '#mobile-nav .dropdown-toggle' ),
				$container = $( '#mobile-nav .sidr-class-sub-menu' );

			$container.stop( true, true );

			$trigger.on( 'click', function(e) {
				e.preventDefault();
				var $a = $( this ).parent();
				if ( $a.next().is( ':hidden' ) ) {
					$a.next().slideDown( 200 );
				} else {
					$a.next().slideUp( 200 );
				}
				return false; // IE9 hack
			});
		})();


		/* ---------------------------------------------------------------------- */
		/*	Sticky Menu
		/* ---------------------------------------------------------------------- */

		(function() {

			var $header = $( '#header' ),
				$logo = $( '#logo' ),
				headerHeight = $header.height(),
				headerYPos = 0,
				minScroll = headerHeight + 100,
				minHeightDif = 250, // min difference between page height and browser window height at which sticky mode is enabled
				heightDif;

			window.adjustStickyMenu = function () {
				if ( enable_sticky_menu ) {
					heightDif = $(document).height() - $(window).height();

					if ( $(window).scrollTop() > minScroll && $(window).width() >= 992 && heightDif > minHeightDif ) {
						if ( $( 'body' ).hasClass( 'sticky-menu-active' ) ) {
							return false;
						}
						$( 'body' ).addClass( 'sticky-menu-active' );
						$header.animate( { top: headerYPos }, 400 );
					} else {
						if ( $( 'body' ).hasClass( 'sticky-menu-active' ) ) {
							$( 'body' ).removeClass( 'sticky-menu-active' );
							$header.css( 'top', '' );
						}
					}
				} else {
					if ( $( 'body' ).hasClass( 'sticky-menu-active' ) ) {
						$( 'body' ).removeClass( 'sticky-menu-active' );
						$header.css( 'top', '' );
					}
				}
			};

			adjustStickyMenu();

			$(window).on( 'resize', function() {
				var timer = window.setTimeout(function() {
					window.clearTimeout( timer );
					adjustStickyMenu();
				}, 30);
			});

			$(window).on( 'scroll', function() {
				adjustStickyMenu();
			});

		})();


		/* ---------------------------------------------------------------------- */
		/*	Scroll Top
		/* ---------------------------------------------------------------------- */

		(function() {

			// Scroll to the top of the page
			$( '.scroll-top' ).on( 'click', function(e) {
				$( 'html, body' ).animate( { scrollTop: 0 }, 700, 'easeInOutQuad' );
				return false;
			});

			var $scrollTop = $( '#footer-bottom .scroll-top' ),
				minScroll = 700,
				minHeightDif = 1000, // min difference between page height and browser window height at which "scroll top" mode is enabled
				heightDif;

			window.adjustScrollTopButton = function () {
				if ( enable_scrolltop_button ) {
					heightDif = $(document).height() - $(window).height();

					if ( $(window).scrollTop() > minScroll && heightDif > minHeightDif ) {
						if ( $( '#footer-bottom' ).hasClass( 'scrolltop-active' ) ) {
							return false;
						}
						$scrollTop.fadeIn( 'fast', function() {
							$( '#footer-bottom' ).addClass( 'scrolltop-active' );
						});
					} else {
						if ( $( '#footer-bottom' ).hasClass( 'scrolltop-active' ) ) {
							$scrollTop.fadeOut( 'fast', function() {
								$( '#footer-bottom' ).removeClass( 'scrolltop-active' );
							});
						}
					}
				} else {
					if ( $( '#footer-bottom' ).hasClass( 'scrolltop-active' ) ) {
						$( '#footer-bottom' ).removeClass( 'scrolltop-active' );
					}
				}
			};

			$(window).on( 'scroll', function() {
				adjustScrollTopButton();
			});

			$(window).on( 'resize', function() {
				var timer = window.setTimeout(function() {
					window.clearTimeout( timer );
					adjustScrollTopButton();
				}, 30);
			});

		})();


		/* ---------------------------------------------------------------------- */
		/*	Owl Carousel
		/* ---------------------------------------------------------------------- */

		(function() {

			var $owlCarousel = $( '.owl-carousel' );

			$owlCarousel.each(function() {
				var $carousel = $( this ),
					options = {};

				options.margin = 30; // margin

				// items num
				if ( $carousel.data( 'items' ) == 6 ) { // 6 visible items
					options.responsive = {
						0:    { items: 1 },
						480:  { items: 2 },
						700:  { items: 3 },
						992:  { items: 4 },
						1200: { items: 6 }
					};
				} else if ( $carousel.data( 'items' ) == 5 ) { // 5 visible items
					options.responsive = {
						0:    { items: 1 },
						480:  { items: 2 },
						700:  { items: 3 },
						992:  { items: 4 },
						1200: { items: 5 }
					};
				} else if ( $carousel.data( 'items' ) == 4 ) { // 4 visible items
					if ( $carousel.hasClass( 'picture-boxes' ) ) {
						options.responsive = {
							0:    { items: 1 },
							480:  { items: 2 },
							700:  { items: 3 },
							992:  { items: 4 },
							1200: { items: 4, margin: 40 }
						};
					} else {
						options.responsive = {
							0:    { items: 1 },
							480:  { items: 2 },
							768:  { items: 3 },
							1200: { items: 4 }
						};
					}
				} else if ( $carousel.data( 'items' ) == 3 ) { // 3 visible items
					if ( $carousel.hasClass( 'box-filled-bg' ) ) {
						options.responsive = {
							0:    { items: 1 },
							700:  { items: 2, margin: 15 },
							992:  { items: 2, margin: 20 },
							1200: { items: 3, margin: 15 }
						};
					} else {
						options.responsive = {
							0:    { items: 1 },
							480:  { items: 2 },
							700:  { items: 2, margin: 40 },
							992:  { items: 3 },
							1200: { items: 3, margin: 40 }
						};
					}
				} else if ( $carousel.data( 'items' ) == 2 ) { // 2 visible items
					if ( $carousel.hasClass( 'left-icon-box' ) ) {
						options.responsive = {
							0:    { items: 1, nav: true },
							480:  { items: 1 },
							570:  { items: 2 },
							1200: { items: 2, margin: 40 }
						};
					} else {
						options.responsive = {
							0:   { items: 1 },
							570: { items: 2	},
							992: { items: 2, margin: 40 }
						};
					}
				} else if ( $carousel.data( 'items' ) == 1 ) { /* Slideshow mode */
					options.items = 1;
					options.margin = 0;
					if ( $carousel.data( 'animation' ) == 'fade' ) {
						options.animateOut = 'fadeOut';
					}
				} else {
					options.responsive = {
						0:   { items: 1 },
						480: { items: 2 },
						768: { items: $carousel.data( 'items' ) }
					};
				}

				options.loop = $carousel.data( 'loop' ); // loop
				options.nav = $carousel.data( 'nav' ); // nav
				options.dots = $carousel.data( 'dots' ); // dots
				options.autoplay = $carousel.data( 'autoplay' ); // autoplay
				options.autoplayTimeout = $carousel.data( 'autoplay-timeout' ); // autoplayTimeout
				options.smartSpeed = $carousel.data( 'smart-speed' ); // smartSpeed
				options.autoplayHoverPause = $carousel.data( 'autoplay-hover-pause' ); // autoplayHoverPause
				options.autoWidth = $carousel.data( 'autowidth' ); // autoWidth
				options.navText = []; // navText

				$carousel.owlCarousel( options );

				setNavPosition( $carousel );
				$carousel.on( 'resized.owl.carousel', function(event) {
					setNavPosition( $( this ) );
				});
			});

			function setNavPosition( carousel ) {
				if ( carousel.hasClass( 'picture-boxes top-picture-box' ) ) {
					var $nav = carousel.find( '.owl-nav' ),
						$navButton = $nav.find( '.owl-prev' ),
						navButtonHeight = $navButton.height(),
						imgHeight = carousel.find( '.carousel-item .box-image' ).height();

					if ( imgHeight > 10 ) {
						$nav.css( { top: ( imgHeight/2 - navButtonHeight/2 ) + 'px', margin: 0 } );
					}
				}
			}

		})();


		/* ---------------------------------------------------------------------- */
		/*	Image Overlay Functionality (for touch screens)
		/* ---------------------------------------------------------------------- */

		(function() {

			if ( isTouchScreenDevice ) {
				$( '.overlay-enabled' ).on( 'touchend', function(e) {
					var $current = $( this );

					if ( $( '> .image-overlay > a', this ).hasClass( 'mfp-lightbox' ) ) {

						// not to be applied to image slider (carousel)
						if ( ! $current.parent().is( '.owl-item' ) && ! $current.parent().parent().is( '.carousel-item' ) ) {
							e.stopPropagation();

							$( '.overlay-enabled' ).each(function( index ) {
								if ( $( this )[0] !== $current[0] ) {
									// not to be applied to image slider (carousel)
									if ( ! $( this ).parent().is( '.owl-item' ) && ! $( this ).parent().parent().is( '.carousel-item' ) ) {
										$( '.image-overlay span', this ).css( 'display', 'none' );
										$( '.image-overlay', this ).css( 'opacity', '0' );
										// gallery item - caption
										$( this ).parent( '.gallery-item' ).find( '.item-label' ).css( { 'display': 'none', 'opacity': '0' } );
										// gallery item (preview image list) - caption bg
										$( this ).parent( '.gallery-item' ).removeClass( 'label-bg-active' );
									}
								}
							});

							if ( $( '.image-overlay span', this ).css( 'display' ) == 'none' ) {
								e.preventDefault();
								$( '.image-overlay span', this ).css( 'display', 'block' );
								$( '.image-overlay', this ).css( 'opacity', '1' );
								// gallery item - caption
								$current.parent( '.gallery-item' ).find( '.item-label' ).css( { 'display': 'block', 'opacity': '1' } );
								// gallery item (preview image list) - caption bg
								$current.parent( '.gallery-item' ).addClass( 'label-bg-active' );
							}
						}
					}
				});

				$( 'html' ).on( 'touchend', function() {
					$( '.overlay-enabled' ).each(function() {

						if ( $( '> .image-overlay > a', this ).hasClass( 'mfp-lightbox' ) ) {

							// not to be applied to image slider (carousel)
							if ( ! $( this ).parent().is( '.owl-item' ) && ! $( this ).parent().parent().is( '.carousel-item' ) ) {
								$( '.image-overlay span', this ).css( 'display', 'none' );
								$( '.image-overlay', this ).css( 'opacity', '0' );
								// gallery item - caption
								$( this ).parent( '.gallery-item' ).find( '.item-label' ).css( { 'display': 'none', 'opacity': '0' } );
								// gallery item (preview image list) - caption bg
								$( this ).parent( '.gallery-item' ).removeClass( 'label-bg-active' );
							}
						}
					});
				});
			}

		})();



		/* ---------------------------------------------------------------------- */
		/*	Magnific Popup - responsive lightbox plugin
		/* ---------------------------------------------------------------------- */

		(function() {

			// Initialise plugin: single image - fade animation (default)
			$( '.mfp-lightbox' ).magnificPopup({
				disableOn: 0,
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false,
				mainClass: 'mfp-fade',
				gallery: {
					// options for gallery
					enabled: false
				},
				image: {
					// options for image content type
					titleSrc: 'title'
				}
			});

			// Initialise plugin: single image - zoom animation
			$( '.mfp-lightbox[data-mfp-animation="zoom"]' ).magnificPopup({
				disableOn: 0,
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false,
				mainClass: 'mfp-with-zoom',
				zoom: {
					enabled: true,
					duration: 300,
					easing: 'ease-in-out',
					opener: function(openerElement) {
						return openerElement.is( 'img' ) ? openerElement : openerElement.parent().parent().find( 'img' );
					}
				},
				gallery: {
					// options for gallery
					enabled: false
				},
				image: {
					// options for image content type
					titleSrc: 'title'
				}
			});

			// Initialise plugin: gallery
			$( '.gallery-standard, .gallery-metro, .owl-carousel' ).each(function() {
				$( '.gallery-item .mfp-lightbox, .owl-item .mfp-lightbox', this ).magnificPopup({
					disableOn: 0,
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false,
					mainClass: 'mfp-fade',
					gallery: {
						// options for gallery
						enabled: true
					},
					image: {
						// options for image content type
						titleSrc: 'title'
					}
				});
				$( '.gallery-item .mfp-lightbox[data-mfp-animation="zoom"], .owl-item .mfp-lightbox[data-mfp-animation="zoom"]', this ).magnificPopup({
					disableOn: 0,
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false,
					mainClass: 'mfp-with-zoom',
					zoom: {
						enabled: true,
						duration: 300,
						easing: 'ease-in-out',
						opener: function(openerElement) {
							return openerElement.is( 'img' ) ? openerElement : openerElement.parent().parent().find( 'img' );
						}
					},
					gallery: {
						// options for gallery
						enabled: true
					},
					image: {
						// options for image content type
						titleSrc: 'title'
					}
				});
			});

			// Initialise plugin: inline element
			$( '.mfp-lightbox.mfp-inline' ).magnificPopup({
				disableOn: 0,
				removalDelay: 160,
				preloader: false,
				fixedContentPos: 'auto',
				fixedBgPos: true,
				overflowY: 'auto',
				closeBtnInside: true,
				midClick: true,
				mainClass: 'mfp-fade mfp-profile',
			});

		})();


		/* ---------------------------------------------------------------------- */
		/*	Accordion
		/* ---------------------------------------------------------------------- */

		(function() {

			var $trigger = $( '.accordion .toggle-trigger' ),
				$container = $( '.accordion .toggle-container' );

			$container.stop( true, true ).hide();
			$( '.accordion .toggle-trigger.active' ).next().show();

			$trigger.on( 'click', function(e) {
				e.preventDefault();
				var $this = $( this );
				if ( $this.next().is( ':hidden' ) ) {
					$this.siblings( '.toggle-trigger' ).removeClass( 'active' ).next().slideUp( 300 );
					$this.toggleClass( 'active' ).next().slideDown( 300 );
				}
				return false; // IE9 hack
			});

		})();


		/* ---------------------------------------------------------------------- */
		/*	Toggle
		/* ---------------------------------------------------------------------- */

		(function() {

			var $trigger = $( '.toggles .toggle-trigger' ),
				$container = $( '.toggles .toggle-container' );

			$container.stop( true, true ).hide();
			$( '.toggles .toggle-trigger.active' ).next().show();

			$trigger.on( 'click', function(e) {
				e.preventDefault();
				var $this = $( this );
				$this.toggleClass( 'active' );
				if ( $this.next().is( ':hidden' ) ) {
					$this.next().slideDown( 300 );
				} else {
					$this.next().slideUp( 300 );
				}
				return false; // IE9 hack
			});
		})();


		/* ---------------------------------------------------------------------- */
		/*	Tabs
		/* ---------------------------------------------------------------------- */

		(function() {

			var $tabsNav = $( '.tabs .tabs-nav' ),
				$tabsNavLis = $tabsNav.find( '.tabs-list' ).children( 'li' );

			$tabsNav.each(function() {
				var $this = $( this );

				$this.next( '.tabs-content' ).children( '.tab-pane' ).stop( true, true ).hide();

				if ( $this.find( '.tabs-list' ).children( 'li' ).hasClass( 'active' ) ) {
					var $li_active = $this.find( '.tabs-list' ).children( 'li.active' ),
						li_active_id = $li_active.find( 'a' ).attr( 'href' );

					$this.next( '.tabs-content' ).children( li_active_id + '.tab-pane' ).show();
				} else {
					$this.next( '.tabs-content' ).children( '.tab-pane' ).first().show();
					$this.find( '.tabs-list' ).children( 'li' ).first().addClass( 'active' ).stop( true, true ).show();
				}
			});

			$tabsNavLis.on( 'click', function(e) {
				var $this = $( this );
				e.preventDefault();

				if ( $this.not( '.active' ) ) {
					$this.siblings().removeClass( 'active' ).end().addClass( 'active' );
					$this.parent().parent().next( '.tabs-content' ).children( '.tab-pane' ).stop( true, true ).hide()
						.siblings( $this.find( 'a' ).attr( 'href' ) ).show();
				}
				return false; // IE9 hack
			});

		})();


		/* ---------------------------------------------------------------------- */
		/*	Tabs
		/* ---------------------------------------------------------------------- */

		(function() {

			var $tabsNav = $( '#tabs-fw .tabs-nav' ),
				$tabsNavLis = $( '#tabs-fw .tabs-nav .tabs-list' ).children( 'li' );

			$tabsNav.each(function() {
				var $this = $( this );

				$this.next( '.tabs-content' ).children( '.tab-pane' ).stop( true, true ).hide();

				if ( $this.find( '.tabs-list' ).children( 'li' ).hasClass( 'active' ) ) {
					var $li_active = $this.find( '.tabs-list' ).children( 'li.active' ),
						li_active_id = $li_active.find( 'a' ).attr( 'href' );

					$this.next( '.tabs-content' ).children( li_active_id + '.tab-pane' ).show();
				} else {
					$this.next( '.tabs-content' ).children( '.tab-pane' ).first().show();
					$this.find( '.tabs-list' ).children( 'li' ).first().addClass( 'active' ).stop( true, true ).show();
				}
			});

			$tabsNavLis.on( 'click', function(e) {
				var $this = $( this );
				e.preventDefault();

				if ( $this.not( '.active' ) ) {
					$this.siblings().removeClass( 'active' ).end().addClass( 'active' );
					$( '#tabs-fw .tabs-content' ).children( '.tab-pane' ).stop( true, true ).hide()
						.siblings( $this.find( 'a' ).attr( 'href' ) ).show();
				}
				return false; // IE9 hack
			});

		})();

	});
});
