// frequency counter pattern
const frequencyCounter = arr1 => {
	const frequency = {};

	// loop through the array and record the number of instances of a character in an key value pair
	for (const el of arr1) {
		frequency[el] = (frequency[el] || 0) + 1;
	}

	return frequency;
};

console.log(frequencyCounter([1, 2, 3, 3, 4, 4]));

// anaragam pattern
// given two strings check if the second is the anaragam of the first.
const checkAnaragam = (str1, str2) => {
	// check the lenght of the strings
	if (str1.length !== str2.length) return false;

	// object to hold the instances of a character
	const str1Object = {};
	const str2Object = {};

	// account the number of charcter instances
	for (const str of str1) {
		str1Object[str] = (str1Object[str] || 0) + 1;
	}

	for (const str of str2) {
		str2Object[str] = (str1Object[str] || 0) + 1;
	}

	// check if the count of characters are equal

	for (let i = 0; i < str1Object.length; i++) {
		console.log(str1Object[i]);
	}
};

// multiple pointers pattern
// count unique values of an aray of sorted numbers
const countUniqueValues = array => {
	if (array.length === 0) return null;
	let i = 0;

	for (let j = 1; j < array.length; j++) {
		if (array[i] !== array[j]) {
			i++;
			array[i] = array[j];
		}
	}

	return i + 1;
};

// console.log(countUniqueValues([1, 3, 2, 6, 4, 3]));

// sliding door pattern
// return the max sum of n elements in an array
const maxSumArray = (array, num) => {
	if (array.length < num) return null;

	let tempSum = 0;
	let maxSum = 0;

	// sum the first num elements
	for (let i = 0; i < num; i++) {
		maxSum += array[i];
	}

	// find the largest sum of remaing ele num

	for (let i = num; i < array.length; i++) {
		tempSum = tempSum - array[i - num] + array[i];

		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
};

// linear search , time complexity o(n)

const linearSearch = (arr, value) => {
	// loop thorough the array if the value is present return the index , if not return false

	for (const el of arr) {
		if (el === value) return;
		else false;
	}
};

// console.log(linearSearch([1, 2, 3, 4], 4));

// binary search algorith , works on sorted arrays ,time compplexity O(logN)

const binarySearch = (array, ele) => {
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
