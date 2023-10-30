
function getFormvalue() {
   event.preventDefault();
	let form = event.target;
	let firstName = form.fname.value;
	let secondName = form.lname.value
	alert(`${firstName} ${secondName}`)
	
}
