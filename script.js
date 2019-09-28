/*
	To Do:
	--Use smart type Jquery Plugin and optimize--
	--Dev.  navbar, toggle function, scroll function--
	--Dev. More studies with percentage effect with easy-pie-chart Plugin--
	--Make a slideshow --
	--Smooth Scroll on click--
	--Make GSAP animations, and ScrollMagic Animations /HTML SCRIPT--
	--Optimize Code--

*/ 

	
	//Smart Typing Plugin Controll Javascript
	var typed = new Typed('.smart-typing', {
		strings: ['Developer','Designer','Creator'],
			  smartBackspace: true,
			typeSpeed: 100,
			backSpeed: 100,
			loop: true
	  })
	// Menu Bar and Nav Toggle Function
		  $("document").ready(function () {
			  $(".menu").click(function () {
				  $(".menu").toggleClass("active");
				  $("nav").toggleClass("nav-active");
			  });
		  });
	  
	// Navigation Scroll Dark Animation
		  $(window).on('scroll', function() {
		  if($(window).scrollTop()) {
			  $('nav').addClass('dark-on-scroll');
		  } else {
			  $('nav').removeClass('dark-on-scroll');
		  }
	  })

	  	
	  $(function() {
		$('.chart').easyPieChart({
			size: 110,
			barColor: '#17d3e6',
			scaleColor: false,
			lineWidth: 10,
			trackColor: '#525252',
			animate: 7000 // Animation Duration
		});
	});
	  
	// Animate On Scroll Plugin
		  AOS.init({
			  duration: 3000,
		  });


	



