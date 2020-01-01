$(document).ready(function(){

	$(".wrapIcon-js").click(function() {
		$(this).find(".iconUp-js").toggleClass("showIcon-js");
		$(this).find(".iconDown-js").toggleClass("hideIcon-js");
		$(".subList-js").toggleClass("showBlock");

		if( $(".subList-js").is(":visible") ) {
			$("#changeText").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
		}else {
			$("#changeText").text("Выберите нужные параметры");
		}

	});

	$(".subContenItem-js").click(function() {
		$(".subContenItem-js").css({background:"#fff", color:"#000"});
		
		$(this).find(".subEltList").toggleClass("showBlock");

		if( $(".subEltList").is(":visible") ) {
			$(this).find(".subRight-js").css({opacity: "0"});
			$(this).find(".subCheck-js").css({opacity: "1"});
			$(this).css({background:"#c54004"});

			//$("#changeText").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit.");

		} else {
			$(this).find(".subRight-js").css({opacity: "1"});
			$(this).find(".subCheck-js").css({opacity: "0"});
			$(this).css({background:"#4f4e4e"});
		}

	});


//===========popupJs===============//

	// $(".userIcon-js").click(function(){
	// 	$(".popup-js").addClass("showBlock");
	// 	var userId = $(this).closest("li").attr("data-userId");
	// 	$("#userId").val(userId);
	// });

	// $(".closePopup-js").click(function(){
	// 	$(".popup-js").removeClass("showBlock");
	// });

	// $(".deleteUser-js").click(function(){
	// 	var userId = $("#userId").val();
	// 	var data = {
	// 		userId: userId
	// 	};
		
	// 	$("#user-" + userId).hide();
	// 	$("#userId").val("");
		
	// 	console.log(data);
	// 	$(".popup-js").removeClass("showBlock");

	// });

});