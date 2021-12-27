function sumTwoSmallestNumbers(numbers) {
	//Code below
	let sortedArr = numbers.sort((a, b) => {
		return a - b
	})
	let numTosum = [sortedArr[0], sortedArr[1]]
	let result = numTosum.reduce((acc, current) => {
		return acc + current
	})
	return result
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]))
