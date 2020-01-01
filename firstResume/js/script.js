$(document).ready(function() {
	$(".js-view-portfolio").click(function() {
		$(this).css({
			"border":"1px dotted #fff",
			"color":"#045F8C"
		});

	});


	$(".js-nav-bar").click(function(){
		$(".js-show-list").slideToggle();
		// $(this).ToggleClass("icon-btn-active");
	});


});//end ready;