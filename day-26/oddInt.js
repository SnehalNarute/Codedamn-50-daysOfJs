// Find odd count of element from array
const findOdd = (arr) => {
	let result,
		counterArr = []
	arr.forEach((element) => {
		if (counterArr[element]) {
			counterArr[element]++
		} else {
			counterArr[element] = 1
		}
	})
	for (const num in counterArr) {
		if (counterArr[num] % 2 === 1) {
			result = num
		}
	}
	return result
}
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]))
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]))
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))
