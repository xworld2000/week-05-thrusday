let arr3 = [];
function flatten(arr) {
	// Create a new array
	let arr1 = [];

	// Loop through every item in the array
	// If the item is an array, add its items to the new array

	for (let index = 0; index < arr.length; index++) {
		if (Array.isArray(arr[index])) {

			arr1 = arr1.concat(arr[index]);

		}
		else arr1.push(arr[index]);
	}
	// If not add the item itself to the new array
	//else { arr1.push(arr[index]); }

	// return the new array
	arr3 = arr1;
}

let arr2 = [1, 2, ['nickels', 'dimes', 'pennies', 'dollarbillyall'], 4, 5];
flatten(arr2);
console.log(arr3)