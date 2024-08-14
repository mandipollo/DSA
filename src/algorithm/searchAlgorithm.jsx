// linear search , time complexity o(n)

export const linearSearch = (arr, value) => {
	// loop thorough the array if the value is present return the index , if not return false

	for (const el of arr) {
		if (el === value) return;
		else false;
	}
};

// console.log(linearSearch([1, 2, 3, 4], 4));

// binary search algorith , works on sorted arrays ,time compplexity O(logN)

export const binarySearch = (array, ele) => {
	// pointers
	let start = 0;
	let end = array.length - 1;
	let middle = Math.floor((start + end) / 2);

	while (array[middle] !== ele && start <= end) {
		console.log(start, middle, end);

		if (array[middle] < ele) {
			start = middle + 1;
		} else {
			end = middle - 1;
		}
		middle = Math.floor((start + end) / 2);
	}
	if (array[middle] === ele) {
		return middle;
	}
	return -1;
};

// console.log(binarySearch([1, 2, 3, 4, 5, 12, 15], 12));
