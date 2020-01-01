//function refresh page in body 
function refresh() {
   location.reload(); 
}



$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});



var windowScreen = window.innerWidth;
if ( windowScreen <= 768) {
	var ArrImages = ['img/mobileSlide/slider_1min.jpg', 'img/mobileSlide/slider_2min.jpg',
			'img/mobileSlide/slider_3min.jpg', 'img/mobileSlide/slider_4min.jpg'];

	var images = document.getElementsByClassName('small-img');

	 for (var i = 0; i < images.length; i++) {
	 	images[i].src= ArrImages[i]
	 }
	
}



var startBtn  = document.getElementById("start");
start.addEventListener('click', function(e) {
	setTimeout(function(){
		document.querySelector(".overSlide").classList.add('js-hide');
	}, 5000);
});
