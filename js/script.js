/* Author: Manuel
/* EFECTO SEARCH */


// SLIDE TO
$(document).ready(function(){

	$(".l1").click(function(){
					$("#idea1 h2").slideto({highlight_color: '#4ABCE4',slide_duration: "slow"});
	});

	$(".l2").click(function(){
					$("#idea2 h2").slideto({highlight_color:'#4ABCE4', slide_duration:"slow"});
	});

	$(".l3").click(function(){
					$("#idea3 h2").slideto({highlight_color: '#4ABCE4',slide_duration: "slow"});
	});

	$(".l4").click(function(){
					$("#idea4 h2").slideto({highlight_color: '#4ABCE4',slide_duration: "slow"});
	});


	// Portfolio projects rollover --------------------------------------------- //

	$('#projects-list .project').hover(function(){
		// on rollover
		$(this).children('.project-shadow').children('.project-thumbnail').children(".cover").stop().animate({
			top: "100"
		}, "fast");
	} , function() {
		// on out
		$(this).children('.project-shadow').children('.project-thumbnail').children(".cover").stop().animate({
			top: "0"
		}, "fast");
	});


});