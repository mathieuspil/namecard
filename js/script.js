$(document).ready(function(){
	var counter = 0;
	
	// Change the background in loops
	background();
	
	function background() {
		if(counter < 8) {
			counter++;
		} else {
			counter = 1;
		}
		if($(document).width() > 1019) {
			setTimeout(function() {
				$(".other_background.active").css('background-image', 'url("img/backgrounds/' + counter + '.jpg")');
				$(".other_background").toggleClass('active');
		    background();
			}, 20000);
		} else {
			setTimeout(function() {
		    background();
			}, 5000);
		}
	}
});
