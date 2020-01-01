
$(document).ready(function() {

	$(window).load(function() {

		var windowWidth = $(window).width();

      		//var navpos = $('#mainnav').offset();

		$(window).bind('scroll', function() {

	    	if ($(window).scrollTop() > 140) {

	         	$('#mainnav').addClass('navbar-fixed-top');
	         	$(".color-js").addClass("narbar-color-fixed");
	         	$(".barBtn-js").addClass("narbar-color-fixed");
	         	$(".navbar-brand img").attr("src", "img/logo-dark.png");
	         	$(".nav-icon").addClass("btn-fixed");

	         	$(".color-js").click(function() {
	         		$(".color-js").removeClass("activeLink-js");
	         		$(this).addClass("activeLink-js");

	         		$(".navbar-collapse").removeClass("show");
	         		$(".nav-icon_1").removeClass("nav-icon--first");
					$(".nav-icon_2").removeClass("nav-icon--middle");
					$(".nav-icon_3").removeClass("nav-icon--last");
	         	});

	        }
	        else {
	           	$('#mainnav').removeClass('navbar-fixed-top');
	           	$(".color-js").removeClass("narbar-color-fixed");
	           	$(".barBtn-js").removeClass("narbar-color-fixed");
	           	$(".navbar-brand img").attr("src","img/logo-transparent.png");
	           	$(".nav-icon").removeClass("btn-fixed");
	           	$(".color-js").removeClass("activeLink-js");
	        }
		});


  		if ( windowWidth < 769 ) {

  			$(window).bind('scroll', function() {
	        	if ($(window).scrollTop() > 140) {
		         	
		         	$(".home-link").addClass("currentNavLink-js");

		         	$(".color-js").click(function() {
		         		$(".home-link").removeClass("currentNavLink-js");
		         		$(".color-js").removeClass("currentNavLink-js");
		         		$(this).addClass("currentNavLink-js");
		         	});

		         }
		         else {
		           $(".home-link").removeClass("currentNavLink-js");
		         }
      		});

  		}


  		$(window).bind('scroll', function() {
        	if ($(window).scrollTop() > 1000) {	

        		$(".linkToHome").css({
        			right: "30px"
        		})
	         }
	         else {
	           $(".linkToHome").css({
        			right: "-40px"
        		})
	         }
  		});





		$(".navbar-toggler").click(function() {
			if( $(".navbar-collapse").is(":visible") ) {

				$(".nav-icon_1").removeClass("nav-icon--first");
				$(".nav-icon_2").removeClass("nav-icon--middle");
				$(".nav-icon_3").removeClass("nav-icon--last");

			} else {
				$(".nav-icon_1").addClass("nav-icon--first");
				$(".nav-icon_2").addClass("nav-icon--middle");
				$(".nav-icon_3").addClass("nav-icon--last");

				$(".color-js").removeClass("currentNavLink-js");

			}
		});


		$("#open-js").click(function(){
			$("#slideMenu-js").addClass("toggleLeft-js");
		});

		$("#close-js").click(function(){
			$("#slideMenu-js").removeClass("toggleLeft-js");
		});


		$(".slide-menu__link").click(function() {
			$("#slideMenu-js").removeClass("toggleLeft-js");
		});




// Smooth Scrolling
		$('a[href*="#"]:not([href="#"])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html, body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        return false;
		      }
		    }
		});

		// $('.flexslider').flexslider({
		//     animation: "fade",
		// 	animationSpeed: 1600  
		// });
	});


//slick  slider

	// $('.responsive').slick({
		
	//   dots: false,
	//   infinite: false,
	//   speed: 300,
	//   slidesToShow: 3,
	//   slidesToScroll: 3,

	//   nextArrow:false,
	//   prevArrow:false,
	
	//   responsive: [
	//     {
	//       breakpoint: 1024,
	//       settings: {
	//         slidesToShow: 3,
	//         slidesToScroll: 3,
	//         infinite: true,
	//         dots: true
	//       }
	//     },
	//     {
	//       breakpoint: 769,
	//       settings: {
	//         slidesToShow: 2,
	//         slidesToScroll: 2
	//       }
	//     },
	//     {
	//       breakpoint: 480,
	//       settings: {
	//         slidesToShow: 1,
	//         slidesToScroll: 1
	//       }
	//     }
	//   ]
	// });


	// $('.responsive2').slick({
		
	//   dots: true,
	//   infinite: false,
	//   slidesToShow: 3,
	//   slidesToScroll: 3,

	//   nextArrow:false,
	//   prevArrow:false,
	
	//   responsive: [
	//     {
	//       breakpoint: 1024,
	//       settings: {
	//         slidesToShow: 3,
	//         slidesToScroll: 3,
	//         infinite: true,
	//         dots: true
	//       }
	//     },
	//     {
	//       breakpoint: 769,
	//       settings: {
	//         slidesToShow: 2,
	//         slidesToScroll: 2
	//       }
	//     },
	//     {
	//       breakpoint: 480,
	//       settings: {
	//         slidesToShow: 1,
	//         slidesToScroll: 1
	//       }
	//     }
	//   ]
	// });



	// $('.logo-responsive').slick({
		
	//   dots: false,
	//   infinite: false,
	//   speed: 300,
	//   slidesToShow: 5,
	//   slidesToScroll: 5,

	//   nextArrow:false,
	//   prevArrow:false,
	
	//   responsive: [
	//     {
	//       breakpoint: 1024,
	//       settings: {
	//         slidesToShow: 4,
	//         slidesToScroll: 4,
	//         infinite: true,
	//         dots: true
	//       }
	//     },
	//     {
	//       breakpoint: 600,
	//       settings: {
	//         slidesToShow: 2,
	//         slidesToScroll: 2
	//       }
	//     },
	//     {
	//       breakpoint: 480,
	//       settings: {
	//         slidesToShow: 1,
	//         slidesToScroll: 1
	//       }
	//     }
	//   ]
	// });



//range slider

	// $(".js-range-slider1").ionRangeSlider({
	// 	min: 0,
 //        max: 100,
 //        from: 75
	// });

	// $(".js-range-slider2").ionRangeSlider({
	// 	min: 0,
 //        max: 100,
 //        from: 95
	// });

	// $(".js-range-slider3").ionRangeSlider({
	// 	min: 0,
 //        max: 100,
 //        from: 65
	// });



	// $("#open-js").click(function(){
	// 	$("#slideMenu-js").addClass("toggleLeft-js");
	// });

	// $("#close-js").click(function(){
	// 	$("#slideMenu-js").removeClass("toggleLeft-js");
	// });





});  //end of ready