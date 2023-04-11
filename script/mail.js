$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			document.querySelector(".popup__save").classList.add('sent_mail');
			document.querySelector(".popup__save").innerHTML = "ЗАЯВКА ОТПРАВЛЕНА"
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});