x<!-- RECOPILO INFO -->
<?php
if ((isset($_POST['name'])) && (strlen(trim($_POST['name']))>0)) {
	$name=stripslashes(strip_tags($_POST['name']));
}
else {
  $name='No se ingreso el nombre.';}



if ((isset($_POST['email'])) && (strlen(trim($_POST['email'])) > 0)) {
	$email = stripslashes(strip_tags($_POST['email']));
}
else {
  $email = 'No se ingreso correo';}



if ((isset($_POST['asunto'])) && (strlen(trim($_POST['asunto'])) > 0)) {
	$asunto = stripslashes(strip_tags($_POST['asunto']));
} else {
  $asunto = 'Ningun asunto ingresado';}



if ((isset($_POST['message'])) && (strlen(trim($_POST['message'])) > 0)) {
	$message = stripslashes(strip_tags($_POST['message']));
} else {
  $message = 'Ningun mensaje.';}

ob_start();
?>

<html>
<head>
<style type="text/css">
  table{
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.05em;
    line-height: 1.5em;
  }
</style>
</head>
<body>
<table width="550" border="0" cellspacing="2" cellpadding="2">
  <tr bgcolor="#ddecf8">
    <td>Nombre</td>
    <td><?=$name;?></td>
  </tr>
  <tr bgcolor="#ddecf8">
    <td>Email</td>
    <td><?=$email;?></td>
  </tr>
  <tr bgcolor="#e5f1f9">
    <td>Asunto</td>
    <td><?=$asunto;?></td>
  </tr>
  <tr bgcolor="#f6fafd">
    <td>Mensaje</td>
    <td><?=$message;?></td>
  </tr>
</table>
</body>
</html>

<?
$body = ob_get_contents();

// $to = 'someone@example.com';
// $email = 'email@example.com';
// $fromaddress = "you@example.com";
// $fromname = "Online Contact";

require("phpmailer.php");

$mail = new PHPMailer();

$mail->From     = "manuelrc@outlook.com";
$mail->FromName = "Contacto Zhema";
$mail->AddAddress("themanuelrc@gmail.com","Manuel");
// $mail->AddAddress("zherly1@gmail.com","Zherly");

$mail->WordWrap = 50;
$mail->IsHTML(true);

$mail->Subject  =  "Contacto para Zhema!";
$mail->Body     =  $body;
$mail->AltBody  =  "This is the text-only body";

if(!$mail->Send()) {
  $recipient = 'themanuelrc@gmail.com';
  $subject = 'Contact form failed';
  $content = $body;
  mail($recipient, $subject, $content, "From: manuelrc@outlook.com\r\nReply-To: $email\r\nX-Mailer: DT_formmail");
  exit;
}
?>


