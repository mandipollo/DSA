// bubble sort algorithm -
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

// selection sort algorithm

export function selectionSort(arr) {
	const noSwaps = true;
	let smallestNumber;

	console.log("hello");
	// loop over array and inner loop
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < i - 1; j++) {
			console.log(j, i);
		}
	}
}
