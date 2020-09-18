const data = document.getElementById('data');
const list = document.getElementById('list');
const name = document.getElementById('sname');
const city = document.getElementById('scity');
let row = data.insertRow(0);
let database = [
	{
		name: 'Michael',
		age: 40,
		city: 'Scranton',
		salary: 10000
	},
	{
		name: 'Chandler',
		age: 30,
		city: 'New York',
		salary: 500000
	},
	{
		name: 'Bruce',
		age: 35,
		city: 'Gotham',
		salary: 9999999
	},
	{
		name: 'Steve',
		age: 100,
		city: 'Washington DC',
		salary: 10000
	},
	{
		name: 'Human',
		age: 50,
		city: 'Somewhere',
		salary: 00002
	}
];

function display(showw) {
	let inside = '';
	showw.forEach((element, index) => {
		inside += `<tr>
		<td>${index + 1}</td>
		<td>${element.name}</td>
		<td>${element.age}</td>
		<td>${element.city}</td>
		<td>${element.salary}</td>
		<td>
		<button onclick="delete_this(${index})">Delete</button>
		</td>
		</tr>`;
	});
	list.innerHTML = inside;
}
display(database);

function sname() {
	let in_name = name.value;
	let newname = database.filter(function(element) {
		return element.name.toUpperCase().indexOf(in_name.toUpperCase()) != -1;
	});
	display(newname);
}

function delete_this(index) {
	database.splice(index, 1);
	display(database);
}

function scity() {
	let in_city = city.value;
	let newcity = database.filter(function(element) {
		return element.city.toUpperCase().indexOf(in_city.toUpperCase()) != -1;
	});
	display(newcity);
}
