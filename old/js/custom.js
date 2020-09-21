$(document).on('ready', function () {
    
    "use strict";
    
    var win = $(window);
            
    
    win.on('load', function () {
        $('.loading-overlay').fadeOut(100);
    });
    
   
  
    win.on("scroll", function () {
      var wScrollTop  = $(window).scrollTop();    
        
        if (wScrollTop > 150) {
            $("#pageHeader").addClass("shrink");
        } else {
            $("#pageHeader").removeClass("shrink");
        }
    });

     // Bootstrap Scroll Spy //
       
    $("body").scrollspy({
        target: ".navbar-collapse",
        offset: 70
    });
    
     // Collapse navigation on click on nav anchor in Mobile //
       
    $(".nav a").on('click', function () {
        $("#myNavbar").removeClass("in").addClass("collapse");
    });

     // navbar Scroll //
     
    $(".navbar-nav li a, .navbar-brand, .button a").on("click", function (e) {
        var anchor = $(this);
        $("html, body").stop().animate({            
            scrollTop: $(anchor.attr("href")).offset().top - 60
        }, 1000);
        e.preventDefault();
    });
	
	 $(".sidebar-menu ul li a, .side .a-btn").on("click", function (e) {
        var anchor = $(this);
        $("html, body").stop().animate({
            
            scrollTop: $(anchor.attr("href")).offset().top
        }, 1000);
        e.preventDefault();
    });
    
    $('.sidebar-menu .fa-times').on('click', function () {
        $('.sidebar-menu').addClass('hide-menu');
        $('.toggle-menu .fa').removeClass('hide-toggle');
    });
    
    $('.toggle-menu .fa').on('click', function () {
        $('.sidebar-menu').removeClass('hide-menu');
        $(this).addClass('hide-toggle');
    });
    
   var mixerContainer = $('#portfolio #change'),
        // portfolio (MIXITUP)
        mixer = mixitup(mixerContainer, {
            selectors: {
                control: '#portfolio ul > li'
            }
        }),
        
        scrollButton = $('#scroll-top');
    
   
    $('.my-portfolio ul li').on('click', function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });
     
    
    // Caching The Scroll Top Element
    
    win.on('scroll', function () {
        if ($(this).scrollTop() >= 700) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
        }
        
    });
	
    
    // Click On Button To Scroll Top
    
    scrollButton.on('click', function () {
        
        $('html,body').animate({ scrollTop : 0 }, 1100);
        
    });
    
    $('.element').typed({
        strings: [ " Full stack developer",  "  I like C#, PHP, Python, HTML, CSS, JS"],
        loop: true,
        showCursor: true,
        startDelay: 1000,
        backDelay: 2000,
		typeSpeed: 50
    });

    $('.counter').counterUp({
        delay: 50,
        time: 2000
    });
	
	// skills section
	
	var wind = $(window);

    var main_height = $(".main-height").outerHeight();
 
    wind.on('scroll', function () {
        $(".skills-progress span").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });
    
});