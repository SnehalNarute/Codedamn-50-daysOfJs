const nthLargest = (arr, highest) => {
	// Sort the array and get nth number in array
	let sortedArr = arr.sort((a, b) => a - b)
	return sortedArr[highest]
}

console.log(nthLargest([43, 56, 23, 89, 88, 90, 99, 652], 4))
console.log(nthLargest([10, 100, 1000, 10000], 2))
