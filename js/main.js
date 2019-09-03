// JavaScript Document

$( document ).ready(function() {
	
	"use strict";
	
	// Menu
	jQuery.fn.clickToggle = function(a,b) {
	  function cb(){ [b,a][this._tog^=1].call(this); }
	  return this.on("click", cb);
	};
	
	$(".mobMenu").clickToggle(function() {   
			$(this).addClass('open');
			$('.menuContent').addClass('isopen');
		}, function() {
			$(this).removeClass('open');
			$('.menuContent').removeClass('isopen');
	});
	
	
	if ($(window).width() < 768) {
		$('.Mainmenu').appendTo('.menuContent');
	} else{
		$('.Mainmenu').prependTo('.rightcontent');
	}
	$(window).resize(function() {
		if ($(window).width() < 768) {
			$('.Mainmenu').appendTo('.menuContent');
		} else{
			$('.Mainmenu').prependTo('.rightcontent');
		}
	});
	
	// Top Slider
	if ( $(".TopSlider").length > 0 ){
		$(".TopSlider").owlCarousel({
			items:1,
		});
	}
	//partnersSlider
	if ( $(".partnersSlider").length > 0 ){
		$(".partnersSlider").owlCarousel({
			margin:60,
			autoplay:true,
			loop:true,
			responsive:{
			  0:{
				  items:1
			  },
			  400:{
				  items:2
			  },
			  767:{
				  items:4
			  },
			  992:{
				  items:6
			  }
			}	
		});
	}
	
    // smoth scroll
    $('a[href*=\\#]').on('click', function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top-150}, 500);
    });
    $(document).on("scroll", onScroll);
    
    
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('.subMenu a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top -160 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.subMenu a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }

	// SAME HEIGHT
	
	if ( $(".productBox").length > 0 ){
		//$('.productBox').responsiveEqualHeightGrid();
		$('.img-warp').responsiveEqualHeightGrid();
		$('.productBox .title').responsiveEqualHeightGrid();
		$('.productBox .text').responsiveEqualHeightGrid();
	}
	if ( $(".newsBox").length > 0 ){
		//$('.productBox').responsiveEqualHeightGrid();
		$('.newsBox .title').responsiveEqualHeightGrid();
		$('.newsBox .text').responsiveEqualHeightGrid();
	}

	
	// scroll back to top
	
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 400) { 
			$('.elevator-button').css({'opacity':'0.5','pointer-events':'auto'});
		} else{
			$('.elevator-button').css({'opacity':'0','pointer-events':'none'});
		}
	});
	
	// body padding
	var headerHeight = $('header').outerHeight();
	$('body').css('padding-top', headerHeight);
	
	// TweenMax
	
	var controller = new ScrollMagic.Controller();
	var parallaxTl = new TimelineMax();
	var parallaxT2 = new TimelineMax();
	var parallaxT3 = new TimelineMax();
	var parallaxT4 = new TimelineMax();
	var parallaxT5 = new TimelineMax();
	var parallaxT6 = new TimelineMax();
	var parallaxT7 = new TimelineMax();
	var parallaxT8 = new TimelineMax();
	var parallaxT9 = new TimelineMax();
	
	parallaxTl
		.from('.ourhistory h1', 1, {autoAlpha: 0,x: '200', ease:Power0.easeNone})
		.from('.ourhistory .content', 1, {autoAlpha: 0,x: '-200', ease:Power0.easeNone}, 0)
		.from('.ourhistory .btn-warp', 1, {autoAlpha: 0,y: '100', ease:Power0.easeNone}, 0)
		
		;

	var slideParallaxScene1 = new ScrollMagic.Scene({
		triggerElement: '.ourhistory',
		triggerHook: 1,
		duration: '80%'
	})
	.setTween(parallaxTl)
	.addTo(controller);
	
	
	parallaxT2
		.from('.ourproducts .right-custom-border', 1, {autoAlpha: 0,x: '-100%', ease:Power0.easeNone})
		.from('.ourproducts .content .title p', 1, {autoAlpha: 0,x: '-100', ease:Power0.easeNone}, 0)
		.from('.ourproducts .content .title h1', 1, {autoAlpha: 0,x: '100', ease:Power0.easeNone}, 0)
		.from('.ourproducts .content .text', 1, {autoAlpha: 0,y: '300', ease:Power0.easeNone}, 0)
		.from('.ourproducts .content .btn-warp', 1, {autoAlpha: 0,y: '300', ease:Power0.easeNone}, 0)
		;

	var slideParallaxScene2 = new ScrollMagic.Scene({
		triggerElement: '.ourproducts',
		triggerHook: 1,
		duration: '60%'
	})
	.setTween(parallaxT2)
	.addTo(controller);
	
	
	
	parallaxT3
		.from('.recentevents h1', 1, {autoAlpha: 0,x: '200', ease:Power0.easeNone})
		.from('.recentevents .small-events-box', 1, {autoAlpha: 0,x: -150, width: 150, ease:Power0.easeNone})
		.from('.recentevents .warp', 1, {autoAlpha: 0, x: 30, ease:Power0.easeNone})
		;

	var slideParallaxScene3 = new ScrollMagic.Scene({
		triggerElement: '.recentevents .col-sm-6',
		triggerHook: 1,
		duration: '50%'
	})
	.setTween(parallaxT3)
	.addTo(controller);
	
	
	parallaxT4
		.from('.ourpartners h1', 1, {autoAlpha: 0,x: '200', ease:Power0.easeNone})
		.from('.ourpartners .partnersSlider', 1, {autoAlpha: 0, x: -200, ease:Power0.easeNone})
		;

	var slideParallaxScene4 = new ScrollMagic.Scene({
		triggerElement: '.ourpartners',
		triggerHook: 1,
		duration: '80%'
	})
	.setTween(parallaxT4)
	.addTo(controller);
	
	parallaxT5
		.from('.ourcatalogue h1', 1, {autoAlpha: 0,x: '200', ease:Power0.easeNone})
		.from('.ourcatalogue .content', 1, {autoAlpha: 0,x: '-200', ease:Power0.easeNone}, 0)
		.from('.ourcatalogue .btn-warp', 1, {autoAlpha: 0,y: '100', ease:Power0.easeNone}, 0)
		
		;

	var slideParallaxScene5 = new ScrollMagic.Scene({
		triggerElement: '.ourcatalogue',
		triggerHook: 1,
		duration: '60%'
	})
	.setTween(parallaxT5)
	.addTo(controller);
	
	
	parallaxT6
		.from('.aboutuspage h1', 1, {autoAlpha: 0,x: '200', ease:Power0.easeNone})
		;

	var slideParallaxScene6 = new ScrollMagic.Scene({
		triggerElement: '.aboutuspage h1',
		triggerHook: 1,
		duration: '50%'
	})
	.setTween(parallaxT6)
	.addTo(controller);
	
	parallaxT7
		.from('.aboutuspage .box1 .right-custom-border', 1, {autoAlpha: 0,x: '-100%', ease:Power0.easeNone})
		.from('.aboutuspage .box1 .content', 1, {autoAlpha: 0,x: '300', ease:Power0.easeNone}, 0)
		;

	var slideParallaxScene7 = new ScrollMagic.Scene({
		triggerElement: '.aboutuspage .box1',
		triggerHook: 1,
		duration: '60%'
	})
	.setTween(parallaxT7)
	.addTo(controller);
	
	
	parallaxT8
		.from('.aboutuspage .box2 .right-custom-border', 1, {autoAlpha: 0,x: '100%', ease:Power0.easeNone})
		.from('.aboutuspage .box2 .content', 1, {autoAlpha: 0,x: '-300', ease:Power0.easeNone}, 0)
		;

	var slideParallaxScene8 = new ScrollMagic.Scene({
		triggerElement: '.aboutuspage .box2',
		triggerHook: 1,
		duration: '60%'
	})
	.setTween(parallaxT8)
	.addTo(controller);
	
	
	parallaxT9
		.from('.contactuspage .title p', 1, {autoAlpha: 0,x: '-100', ease:Power0.easeNone}, 0)
		.from('.contactuspage .title h1', 1, {autoAlpha: 0,x: '100', ease:Power0.easeNone}, 0)
		.from('.contactuspage form', 1, {autoAlpha: 0,x: '100', ease:Power0.easeNone}, 0)
		;

	var slideParallaxScene9 = new ScrollMagic.Scene({
		triggerElement: '.contactuspage',
		triggerHook: 1,
		duration: '80%'
	})
	.setTween(parallaxT9)
	.addTo(controller);
	
	
	
}); // Document Ready

window.onload = function() {
	"use strict";
	
  var elevator = new Elevator({
    element: document.querySelector('.elevator-button'),
    //mainAudio: 'music/elevator.mp3',
    //endAudio: 'music/ding.mp3'
	});
  elevator.elevate();
  
};
