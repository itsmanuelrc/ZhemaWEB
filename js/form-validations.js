jQuery(document).ready(function($) {
	// Stuff to do as soon as the DOM is ready. Use $() w/o colliding with other libs;
//o0cultar mensajes

	$("#error").hide();
	$("#success").hide();

//esto es cuando se haga click en submit del form

	$("#contactForm #submit").click(function(){

	$("#error").hide();

	var name=$("input#name").val();

		if(name=="")
		{
		$("#error").fadeIn().text("Ingrese nombre");
		$("input#name").focus();
		return false;
		}

	var email=$("input#email").val();

		if(email==""){
		$("#error").fadeIn().text("Ingrese un correo");
		$("input#email").focus();
		return false;
		}

	//para telefono no es necesario el colocar algo

	var comments=$("textarea#comments").val();

		if (comments==""){
		$("#error").fadeIn().text("Ingrese comentario");
		$("textarea#comments").focus();
		return false;
		}

	var sendMailUrl=$("#sendMailUrl").val();


	//para quien de quien y que asunto
	var to=$("#to").val();
	var from=$("#from").val();
	var subject=$("#subject").val();

	//datastring

	var dataString= 'name' + name
				+ '&email=' + email
				+ '&telf=' + telf
				+ '&comments=' + comments
				+ '&to=' + to
				+ '&from=' + from
				+ '&subject=' + subject;


	// ajax
		$.ajax({
			type:"POST",
			url: sendMailUrl,
			data: dataString,
			success: success()
		});

});

// SI ES SATISFACTORIO

function success(){
	$("#success").fadeIn();
	$("#contactForm").fadeOut();
}

return false;
});
