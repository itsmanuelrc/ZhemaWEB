jQuery(document).ready(function($){

	// Thumbs rollover --------------------------------------------- //

	$(".thumbs-rollover li a img").hover(function(){
		// on rollover
		$(this).stop().animate({
			opacity: "0.5"
		}, "fast");
	} , function() {
		// on out
		$(this).stop().animate({
			opacity: "1"
		}, "fast");
	});



});

