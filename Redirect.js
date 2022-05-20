function redirect() {
	if (document.message_form.name_field.value == "") {
		alert("Name field is empty");
		return;
	}
	if (document.message_form.email_field.value == "") {
		alert("Email field is empty");
		return;
	}
	if (document.message_form.address_field.value == "") {
		alert("Address field is empty");
		return;
	}
	if (document.message_form.postcode_field.value == "") {
		alert("Post code field is empty");
		return;
	}
	window.location = "contactconfirm.html";
}