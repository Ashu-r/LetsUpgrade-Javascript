const name = document.getElementsByName('name')[0];
const source = document.getElementsByName('source')[0];
const destination = document.getElementsByName('destination')[0];
const number = document.getElementsByName('number')[0];
const capacity = document.getElementsByName('capacity')[0];

window.onload = function() {
	bus_data = [];
	if (localStorage.getItem('buses') == null) {
		localStorage.setItem('buses', JSON.stringify(bus_data));
	}
};

function addBus(e) {
	e.preventDefault();
	let newbus = {};
	newbus.name = name.value;
	newbus.source = source.value;
	newbus.destination = destination.value;
	newbus.number = number.value;
	newbus.capacity = capacity.value;

	let buses = JSON.parse(localStorage.getItem('buses'));
	bus_data.push(newbus);
	localStorage.setItem('buses', JSON.stringify(bus_data));
	name.value = '';
	source.value = '';
	destination.value = '';
	number.value = '';
	capacity.value = '';
	display();
}
// ---

function display(showw = null) {
	let bus;
	if (showw == null) {
		bus = JSON.parse(localStorage.getItem('buses'));
	} else {
		bus = showw;
	}

	let inside = '';
	bus.forEach((element, index) => {
		inside += `<tr>
		<td>${index + 1}</td>
		<td>${element.name}</td>
		<td>${element.source}</td>
		<td>${element.destination}</td>
		<td>${element.number}</td>
		<td>${element.capacity}</td>
		</tr>`;
	});
	list.innerHTML = inside;
}
display();

const ssource = document.getElementById('bsource');
const sdest = document.getElementById('bdestination');

function bsource() {
	let in_source = ssource.value;
	let buses = JSON.parse(localStorage.getItem('buses'));
	let newsource = buses.filter(function(element) {
		return element.source.toUpperCase().indexOf(in_source.toUpperCase()) != -1;
	});
	display(newsource);
}

function bdestination() {
	let in_destination = sdest.value;
	let buses = JSON.parse(localStorage.getItem('buses'));
	let newdestination = buses.filter(function(element) {
		return element.destination.toUpperCase().indexOf(in_destination.toUpperCase()) != -1;
	});
	display(newdestination);
}
