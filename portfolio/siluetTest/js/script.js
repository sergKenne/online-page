function refresh() {
   location.reload(); 
}

$(document).ready(function() {
	var windowWidth = $(window).width();

   if (windowWidth > 769 ){
   	  //var offsetBottom = $("#left-bottom").offset().top;
      var navpos = $('#mainnav').offset();
    
      $(window).bind('scroll', function() {
      	//var ecart = offsetBottom - $(window).scrollTop();
      	if($(window).scrollTop() > 550) {
      		$("#left-top").css({
		   	   top: 0,
		   	   position: "static"
		   	});
      	} else {
      		$("#left-top").css({
      			position: "absolute",
		   	 	top: $(window).scrollTop()+"px"
		   	 });
      	}

        if ($(window).scrollTop() > navpos.top) {
         $('#mainnav').addClass('navbar-fixed-top');
         }
         else {
           $('#mainnav').removeClass('navbar-fixed-top');
         }
      });
   }

});