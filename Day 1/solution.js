let test_string = 'This is a string.';

// Program to search perticular character in string
function charInString(string = test_string) {
	console.log(`Position of i in string is ${test_string.search('i')}`);
}

// Program to convert minutes to seconds
function minToSec(minute = 50) {
	console.log(`There are ${50 * 60} seconds in ${minute} minutes`);
}

// Program to search for a element in array of string
test_array = [ 'My', 'name', 'is', 'redacted' ];
function elementInArray(array = test_array) {
	if (array.includes('is')) {
		console.log(`word 'is' found in array`);
	} else {
		console.log("The array does not contain word 'is'");
	}
}

// Program to display only elements containing 'a' in them from a array
function aInArray(array = test_array) {
	array.forEach((element) => {
		if (element.includes('a')) {
			console.log(element);
		}
	});
}

// Print array in reverse order
function reverseA(array = test_array) {
	console.log(array.reverse());
	array.forEach(function(element) {
		console.log(element);
	});
}

// Calling all of the function
charInString();
minToSec();
elementInArray();
aInArray();
reverseA();
