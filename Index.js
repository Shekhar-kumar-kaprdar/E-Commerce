
let form = document.querySelector('form');
form.addEventListener('submit',submitData)
function submitData(event){
    event.preventDefault();
	let user = {
		productname : form.productname.value,
		quantity : form.quantity.value,
		price : form.price.value,
	}
	let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
	localStorage.setItem('users',JSON.stringify([...users,user]));
	alert("User data submitted :)");
	form.productname.value = "";
	form.quantity.value = "";
	
	form.price.value = "";
}