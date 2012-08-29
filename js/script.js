/* Author: Manuel


*/

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

$(document).ready(function(){

// SLIDE TO

				$(".l1").click(function(){
					$("#idea1").slideto({highlight_color: '#48AE2F',slide_duration: "slow"});
				});

				$(".l2").click(function(){
					$("#idea2").slideto({highlight_color:'yellow', slide_duration:"slow"});
				});

				$(".l3").click(function(){
					$("#idea3").slideto({highlight_color: 'red',slide_duration: "slow"});
				});

				$(".l4").click(function(){
					$("#idea4").slideto({highlight_color: 'blue',slide_duration: "slow"});
				});

// UITOTOP
				var defaults = {
	  			containerID: 'toTop', // fading element id
				containerHoverID: 'toTopHover', // fading element hover id
				scrollSpeed: 1200,
				easingType: 'linear'
	 		};


			$().UItoTop({ easingType: 'easeOutQuart' });
			});