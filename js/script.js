/* Author: Manuel
/* EFECTO SEARCH */

var	search = document.getElementById('livesearch'),
    searchurl = document.getElementById('searchurl');
  	search.onkeyup = updatesearch;

function updatesearch() {
  // classList(document.body)[ search.value !== '' ? 'add' : 'remove']('searchvalue');
  if (search.value != '') {
    searchurl.href='./#' + search.value;
    searchurl.className = 'active';
  } else {
    searchurl.className = '';
  }
}

// SLIDE TO
$(document).ready(function(){

	$(".l1").click(function(){
					$("#idea1").slideto({highlight_color: '#4ABCE4',slide_duration: "slow"});
	});

	$(".l2").click(function(){
					$("#idea2").slideto({highlight_color:'#4ABCE4', slide_duration:"slow"});
	});

	$(".l3").click(function(){
					$("#idea3").slideto({highlight_color: '#4ABCE4',slide_duration: "slow"});
	});

	$(".l4").click(function(){
					$("#idea4").slideto({highlight_color: '#4ABCE4',slide_duration: "slow"});
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

// PORTAFOLIO DEL HOME
// ********************

	// fade in isotope images
	// $('#contenido-porta .element').hover(function () {
	// 	$(this).siblings().css({
	// 		'opacity': '0.3'
	// 	});
	// 	$(this).css({
	// 		'opacity': '1'
	// 	});
	// });

	// fade out isotope images
	// $('#contenido-porta').mouseleave(function () {
	// 	$(this).children().fadeTo("fast", 1.0);
	// });


});