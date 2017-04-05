<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];


$mail_to = 'mjstokes1986@att.net';
$subject = 'Message from '. $name;


$body_message = 'From: ' . $name . "\n";
$body_message .= 'E-mail: ' . $email . "\n";
$body_message .= 'Message: ' . $message;

$headers = 'From: '. $email ."\r\n";
$headers .= 'Reply-To: '. $email ."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);
header("Location: thank_you.html");



if ($mail_status) { ?>

	<script language="javascript" type="text/javascript">
		alert('Thank you for the message. We will contact you shortly.');
		history.back(1);
		
	</script>
	
	<?php 

}

else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please, send an email to michael@mjstokes.com');

		history.back(1);
	</script>
	<?php 

}

	 ?>
		 


