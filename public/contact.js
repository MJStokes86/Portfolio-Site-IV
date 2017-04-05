$(document).ready(function(){

	var name = _POST['name'];
	var email = _POST['email'];
	var phone = _POST['phone'];
	var message = _POST['message'];



	var mail_to = 'michael@mjstokes.com'
	var subject = 'Message from ' + name;

	var body_message = 'From: ' + name + "\n";
	var body_message += 'E-mail: ' + email + "\n";
	var body_message += 'Phone: ' + phone + "\n";
	var body_message += 'Message: ' + message;

	var headers = 'From: ' + email + "\r\n";
	var headers += 'Reply-To: ' + email + "\r\n";


	var mail_status = mail(mail_to, subject, message, headers);
	header("Location: thank_you.html");


	if (mail_status) {
		alert('Thank you for the message. We will contact you shortly.');

		history.back(1);
	} else {
		alert('Message failed. Please, send an email to michael@mjstokes.com');

		history.back(1);
	}




});