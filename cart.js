let users = JSON.parse(localStorage.getItem('users'));
console.log(users);
let userRow = "";
for(const index in users) {
	userRow += `<tr>
	<td>${Number(index)+1}</td>
	<td>${users[index].productname}</td>
	<td>${users[index].quantity}</td>
	
	<td>${users[index].price}</td>
	
	</tr>`
}



document.querySelector('.table-body').innerHTML = userRow;