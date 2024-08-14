// with out helper function -- the recursion function concats the array to form an array of odd values

export const collectOddValues = arr => {
	// empty array
	let newArr = [];
	// base case
	if (arr.length === 0) return newArr;

	if (arr[0] % 2 !== 0) {
		newArr.push(arr[0]);
	}

	newArr = newArr.concat(collectOddValues(arr.slice(1)));

	return newArr;
};
