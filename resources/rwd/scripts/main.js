$(function () {
	'use strict';

	var doit;
	window.onresize = function() {
	    clearTimeout(doit);
	    doit = setTimeout(function() {
	        skrollrAnimation();
	    }, 500);
	};

	function skrollrAnimation(){
		var winWidth = window.innerWidth;

		if(winWidth >= 639) {
			$('.landing').attr('id', 'skrollr-body');
			if($('.landing').is('#skrollr-body')) {
				var s = skrollr.init({
					smoothScrolling: true,
					forceHeight: false,
			    render: function(data) {
			    	var scroll = data.curTop
			    	var intro = $('#intro');
			    	var keymission170 = $('#keymission-170');
			    	var keymission80 = $('#keymission-80');
			    	var products = $('#products');
			    	var accessories = $('#accessories');

			    	if(scroll >= 10 && (!intro.hasClass('active'))) {
			    		introAnimation();
			    	}

			    	if(winWidth >= 1023) {
				    	if(scroll >= 1450 && (!keymission170.hasClass('active'))) {
				    		keymission170animation();
				    	}

				    	if(scroll >= 2000 && (!keymission80.hasClass('active'))) {
				    		keymission80animation();
				    	}

				    	if(scroll >= 3300 && (!products.hasClass('active'))) {
				    		productsBottomAnimation();
				    	}

				    	if(scroll >= 2488 && (!accessories.hasClass('active'))) {
				    		accessories.addClass('active');
				    	}
				    } else {
				    	if(scroll >= 1050 && (!keymission170.hasClass('active'))) {
				    		keymission170animation();
				    	}
				    	if(scroll >= 1550 && (!keymission80.hasClass('active'))) {
				    		keymission80animation();
				    	}
				    	if(scroll >= 2550 && (!products.hasClass('active'))) {
				    		productsBottomAnimation();
				    	}
				    }

			    }
				});

				$('#intro').find('.page-scroll a').attr('href', '#video');

				// IF USER NOT SCROLL, INIT THE INTRO ANIMATION AFTER 2s
				setTimeout(introAnimation, 500);

			}
		} else {
			$('.landing').removeAttr('id');
			skrollr.init().destroy();
			$('#intro').find('.page-scroll a').attr('href', '#keymission-360');
		}
	}
	skrollrAnimation();
	
	function introAnimation(){
			var s = skrollr.init();
			var intro = $('#intro');
			var introProductKeymission170 = $('#intro .product-list .product-item.170');
			var introProductKeymission360 = $('#intro .product-list .product-item.360');
			var introProductKeymission80 = $('#intro .product-list .product-item.80');

			if((!intro.hasClass('active'))){
				intro.addClass('active');

				setTimeout(function(){
					introAnimationArrow170();
					introProductKeymission170.find('figure img').removeClass('anim-start').addClass('animated bounceInDown');
					introProductKeymission170.find('figure .shadow').animate({width: '100%',opacity: '0.9'}, 1000).promise()
						   .done(function() {
								
								introProductKeymission170.addClass('finished');
							});
							
				}, 500);
				
				setTimeout(function(){
					introAnimationArrow360();
					introProductKeymission360.find('figure img').removeClass('anim-start').addClass('animated bounceInDown');
					introProductKeymission360.find('figure .shadow').animate({width: '100%',opacity: '0.9'}, 1000).promise()
						   .done(function() {
								
								introProductKeymission360.addClass('finished');
							});
				}, 3000);
			
				setTimeout(function(){
					introAnimationArrow80();
					introProductKeymission80.find('figure img').removeClass('anim-start').addClass('animated bounceInDown');
					introProductKeymission80.find('figure .shadow').animate({width: '100%',opacity: '0.9'}, 1000).promise()
						   .done(function() {
							   
								introProductKeymission80.addClass('finished');
							});
				}, 6000);
		

	  	s.refresh();
  	}
	}

	function introAnimationArrow360(){
		$('#intro .product-list .product-item.center .arrow').addClass('go').fadeIn(10);
		$('#intro .product-item.center .timer b').countTo({
			  from: 0,
			  to: 360,
			  speed: 2200,
			  refreshInterval: 13,
			  onComplete: function(value) {
			  }
		  });
	}
	
	function introAnimationArrow170(){
		$('#intro .product-list .product-item.left .arrow').addClass('go').fadeIn(10);
		$('#intro .product-item.left .timer b').countTo({
		  from: 0,
		  to: 170,
		  speed: 1800,
		  refreshInterval: 10,
		  onComplete: function(value) {
		  }
	  });
	}
	
	function introAnimationArrow80(){
		$('#intro .product-list .product-item.right .arrow').addClass('go').fadeIn(10);
		$('#intro .product-item.right .timer b').countTo({
		  from: 0,
		  to: 80,
		  speed: 1700,
		  refreshInterval: 8,
		  onComplete: function(value) {
		  }
	  });
	}
	
	function keymission170animation(){
		var keymission170 = $('#keymission-170');

		keymission170.addClass('active');
		// KEYMISSION 170 PRODUCT ANIM LAVITATE
		keymission170.find('.product-img').addClass('levitate');
		
		// KEYMISSION 170 BG ANIM
		keymission170.find('.background').addClass('keymission170bganim');
		keymission170.find('.background').removeClass('anim-start');

		// KEYMISSION 170 BUBBLE ANIM
		keymission170.find('.bubble').addClass('keymission170bubbleanim animated infinite');
		keymission170.find('.bubble').removeClass('anim-start');

		// KEYMISSION 170 MEASUREMENT ANIM
		keymission170.find('.measurement').addClass('keymission170measurementanim');
		keymission170.find('.measurement').removeClass('anim-start');
		
	}

	function keymission80animation(){
		var keymission80 = $('#keymission-80');

		keymission80.addClass('active');
		keymission80.find('.product-img').addClass('animated fadeInDown');
		keymission80.find('.shadow').animate({width: '250px',opacity: '0.9'}, 1000 , "linear");
	}

	function productsBottomAnimation() {
		var products = $('#products');

		products.addClass('active');
		var prointroProductKeymission170 = products.find('.product-item:first-child > div');
		var prointroProductKeymission360 = products.find('.product-item:not(:first-child, :last-child) > div');
		var prointroProductKeymission80 = products.find('.product-item:last-child > div');

		setTimeout(function(){
			prointroProductKeymission80.find('figure img').removeClass('anim-start').addClass('bounceInDown');
			prointroProductKeymission80.find('figure .shadow').animate({width: '100%',opacity: '0.9'}, 1500).promise()
			.done(function() {
				prointroProductKeymission80.addClass('finished');
			});
		}, 2500);

		setTimeout(function(){
			prointroProductKeymission360.find('figure img').removeClass('anim-start').addClass('bounceInDown');
			prointroProductKeymission360.find('figure .shadow').animate({width: '100%',opacity: '0.9'}, 1500).promise()
			.done(function() {
				prointroProductKeymission360.addClass('finished');
			});
		}, 1500);

		setTimeout(function(){
			prointroProductKeymission170.find('figure img').removeClass('anim-start').addClass('bounceInDown');
			prointroProductKeymission170.find('figure .shadow').animate({width: '100%',opacity: '0.9'}, 1500).promise()
			.done(function() {
				prointroProductKeymission170.addClass('finished');
			});
		}, 500);

		setTimeout(function(){
			products.find('.product-item .description').animate({opacity: '1'}, 1000 , "linear");
		}, 3800);
	}

	// PAGE SCROLL
	$('.page-scroll a, #intro .product-list a').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top - 30
      }, 750, 'swing');
      event.preventDefault();
  });

	// MOBILE FLIPSTER 3d CAROUSEL
	function flipster() {		
		var winWidth = $(window).width();
		// if(winWidth <= 639) {
			var flipContainer = $('.flipster'),
			  flipItemContainer = flipContainer.find('.flip-items'),
			  flipItem = flipContainer.find('li');

			if(!flipContainer.hasClass('flipster--active')){
				flipContainer.flipster({
					itemContainer: flipItemContainer,
					itemSelector: flipItem,
					loop: 1,
					start: 0,
					style: 'infinite-carousel',
					spacing: 0,
					scrollwheel: false,
					buttons: false,
					nav: true,
				});
			}
			
		// }
	}

	flipster();

	// COUNT PLUGIN
	$.fn.countTo = function(options) {
		// merge the default plugin settings with the custom options
		options = $.extend({}, $.fn.countTo.defaults, options || {});

		// how many times to update the value, and how much to increment the value on each update
		var loops = Math.ceil(options.speed / options.refreshInterval),
		increment = (options.to - options.from) / loops;

		return $(this).each(function() {
			var _this = this,
			loopCount = 0,
			value = options.from,
			interval = setInterval(updateTimer, options.refreshInterval);

			function updateTimer() {
				value += increment;
				loopCount++;
				$(_this).html(value.toFixed(options.decimals));

				if (typeof(options.onUpdate) == 'function') {
		    	options.onUpdate.call(_this, value);
				}

				if (loopCount >= loops) {
		    	clearInterval(interval);
		    	value = options.to;

		    	if (typeof(options.onComplete) == 'function') {
		      	options.onComplete.call(_this, value);
		    	}
				}
			}
		});
	};

  $.fn.countTo.defaults = {
      from: 0,  // the number the element should start at
      to: 100,  // the number the element should end at
      speed: 1000,  // how long it should take to count between the target numbers
      refreshInterval: 100,  // how often the element should be updated
      decimals: 0,  // the number of decimal places to show
      onUpdate: null,  // callback method for every time the element is updated,
      onComplete: null,  // callback method for when the element finishes updating
  };

  // VIDEO ON CLICK
  $('#video .background i').on('click', function () {
		$('#video .background').fadeOut();
	    player.playVideo();
	});

	// SAFARI
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 || navigator.userAgent.match(/iPad/i) != null) {
		$('#video .background').show();
		$('#video .background i').hide();
		$('#video .background .video_not_suport').show();
	}
});

// VIDEO YOUTUBE API OPTIONS
// This code loads the IFrame Player API code asynchronously.
var youtubescripttag = document.createElement('script');

youtubescripttag.src = "https://www.youtube.com/iframe_api";
var yfirstScriptTag = document.getElementsByTagName('script')[0];
yfirstScriptTag.parentNode.insertBefore(youtubescripttag, yfirstScriptTag);

var videoId = '39GOmcVvKg0';
var startSeconds = 0;
var endSeconds = 144;
var setVolume = 10;
var suggestedQuality = 'highres';

var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		playerVars: { enablejsapi: 0, controls: 1, fs: 0, autoplay: 0, rel: 0, showinfo: 0, modestbranding: 1, frameborder: 0 },
	  height: '500',
	  width: '100%',
	  videoId: videoId,
	  events: {
	    // 'onReady': onPlayerReady,
	    'onStateChange': onPlayerStateChange
	  }
	});
}

function onPlayerReady(event) {
	player.loadVideoById({'videoId': videoId, 'startSeconds': startSeconds, 'endSeconds': endSeconds, 'suggestedQuality': suggestedQuality });
	player.pauseVideo();
	// event.target.playVideo();
}

function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.ENDED) { 
    player.seekTo(0);
    player.stopVideo();
    $('#video .background').fadeIn();
  }

  if (player.getVolume() > setVolume) {
  	player.setVolume(setVolume);
  } 
}

function stopVideo() {
	player.stopVideo();
}