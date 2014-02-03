
$(document).ready(function() {

$( '.emailsignup' ).hide();

$( '.cta' ).click(function () {
    $(this).slideUp( 'fast' ).next( '.emailsignup' ).fadeIn();
});

$( '.button' ).click(function() {
	var fname = $( '.fname' ).val();
	var lname = $( '.lname' ).val();
	var email = $( '.email' ).val();
	if (fname.length < 1 || lname.length < 1) {
	 	alert('Please complete all of the form fields.')
	 } 
	 else { if (email.indexOf('@') === -1) {
		alert('It looks like you didn\'t enter your email address correctly. Please try again.')
	}
	else {
	// else {
	alert( 'Thank you ' + fname + '! We will let you know when our beta launch begins.' )
}
}
	// }}   
});

$( '.emailsignup2' ).hide();

$( '.cta2' ).click(function () {
    $(this).slideUp( 'fast' ).next( '.emailsignup2' ).fadeIn();
});

$( '.button2' ).click(function() {
	var fname2 = $( '.fname2' ).val();
	var lname2 = $( '.lname2' ).val();
	var email2 = $( '.email2' ).val();
	if (fname2.length < 1 || lname2.length < 1) {
	 	alert('Please complete all of the form fields.')
	 } 
	 else { if (email2.indexOf('@') === -1) {
		alert('It looks like you didn\'t enter your email address correctly. Please try again.')
	}
	else {
	// else {
	alert( 'Thank you ' + fname2 + '! We will let you know when our beta launch begins.' )
}
}
	// }}   
});



});