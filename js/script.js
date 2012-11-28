/* Author: Manuel */


// SLIDE TO
$(document).ready(function(){

	$(".l1").click(function(){
					$("#idea1 h2").slideto({highlight_color: '#4ABCE4',slide_duration: "slow"});
	});

	$(".l2").click(function(){
					$("#idea2 h2").slideto({highlight_color: '#4ABCE4', slide_duration: "slow"});
	});

	$(".l3").click(function(){
					$("#idea3 h2").slideto({highlight_color: '#4ABCE4',slide_duration: "slow"});
	});

	$(".l4").click(function(){
					$("#idea4 h2").slideto({highlight_color: '#4ABCE4',slide_duration: "slow"});
	});



  $(".botonAcceder").click(function() {
    var name= $("input#name").val();
    var email=$("input#email").val();
    var asunto=$("input#asunto").val();
    var message=$("textarea#message").val();

    var dataString = 'name='+ name + '&email=' + email + '&asunto=' + asunto + '&message=' + message;
    //alert (dataString);return false;

    $.ajax({
      type: "POST",
      url: "process.php",
      data: dataString,
      success: function() {
        $('#formContacto').html("<div class='grid_5 omega ideas3' id='mini_contact'></div>");
        $('#mini_contact').html(" <div id='despacio'><span><b>Gracias, todo listo!</b> <br></span></div>")
        .hide()
        .fadeIn(1500, function() {
          $('#mini_contact').append("<div id='dnombre'><i class='foundicon-smiley smiley'></i><span class='parrafo'>Te enviaremos un e-mail pronto.</span> </div>");
        });
       }
      //,

      // error: function() {
      //      $('#formContacto').html("<div id='messageContact'></div>");
      //            $('#messageContact').html("<h3>ERROR</h3>")
      //   }
     });
    return false;
  });

});
