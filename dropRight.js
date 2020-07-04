function dropRight(arr, n) {
	// if n is larger than array length return []  
	if (n > arr.length) {
		return arr;
	}
	// Use n to count in from the end to get the index 

	let index = (arr.length - n);

	// return a slice of the array using the index as the end

	return arr.slice(0, index);
}
