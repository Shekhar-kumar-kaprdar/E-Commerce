

let form = document.querySelector('form');
form.addEventListener('submit',submitData)
function submitData(event) {
	event.preventDefault();
	let user = {
		name : form.name.value,
		email : form.email.value,
		phone_number : form.phone_number.value,
	}
	let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
	localStorage.setItem('users',JSON.stringify([...users,user]));
	alert("User data submitted :)");
	form.name.value = "";
	form.email.value = "";
	
	form.phone_number.value = "";
	
}