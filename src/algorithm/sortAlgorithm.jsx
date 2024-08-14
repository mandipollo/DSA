// bubble sort algorithm - o(n2)
//Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping
//the adjacent elements if they are in the wrong order. This algorithm is not suitable
//for large data sets as its average and worst-case time complexity is quite high

export function bubbleSort(arr) {
	var noSwaps;
	for (var i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (var j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}

	return arr;
}

// selection sort algorithm  o(n2)
// Selection sort works by taking the smallest element in
//an unsorted array and bringing it to the front.
//You'll go through each item (from left to right) until you find the smallest one.
//The first item in the array is now sorted, while the rest of the array is unsorted.

export function selectionSort(arr) {
	console.log(arr);

	// outer loop
	for (let i = 0; i < arr.length; i++) {
		let lowest = i;

		// inner loop
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}
		if (lowest !== i) {
			let temp = arr[i];
			arr[i] = arr[lowest];
			arr[lowest] = temp;
		}
	}

	console.log(arr);

	return arr;
}

// insertion algorithm
export function insertionSort(arr) {
	// outer loop
	for (let i = 1; i < arr.length; i++) {
		let currentVal = arr[i];

		// inner loop
		for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j] > currentVal;
		}
	}
	return arr;
}
