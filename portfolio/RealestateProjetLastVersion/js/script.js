
$(document).ready(function() {

	var windowWidth = $(window).width();
	
	//scroll-top button 
	if( windowWidth > 426 ) {
		$(window).bind('scroll', function() {
	    	if ($(window).scrollTop() > 400) {	

	    		$("#scroll-top").css({
	    			display: "block"
	    		})
	         }
	         else {
	           $("#scroll-top").css({
	    			display: "none"
	    		})
	         }
		});
	}

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


	$(".header__outer").click(function() {
		$("#iconMenu-js").addClass("rotate-js");

		if($("#menu-js").is(":visible")) {
			$("#menu-js").removeClass("show-js");
			$("#iconMenu-js").addClass("rotate-js");
		} else {
			$("#menu-js").addClass("show-js");
			$("#iconMenu-js").removeClass("rotate-js");
		}

	});

	$(".nav-menu__item").click(function(){
		$(this).find(".nav-menu__sub-list").slideToggle();
	});



	// model bootstrap 

	$('#nav-tab a').on('click', function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})


  
}); //end ready function