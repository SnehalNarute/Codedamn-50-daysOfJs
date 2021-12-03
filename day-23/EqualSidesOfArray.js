const findEqualIndex = (arr) => {
	let leftSideSum = 0,
		rightSideSum = 0,
		length = arr.length
	if (length == 0) {
		return -1
	}
	for (let i = 0; i < length; i++) {
		if (i === 0) {
			rightSideSum = arr.slice(1).reduce((prev, next) => prev + next, 0)
			if (rightSideSum === i) {
				return i
			}
		} else {
			leftSideSum = arr.slice(0, i).reduce((prev, next) => prev + next, 0)
			rightSideSum = arr.slice(i + 1).reduce((prev, next) => prev + next, 0)
			if (leftSideSum === rightSideSum) {
				return i
			}
		}
	}
	return -1
}
console.log(findEqualIndex([]))
console.log(findEqualIndex([1, 2, 3, 4, 5, 6]))
console.log(findEqualIndex([1, 2, 3, 4, 3, 2, 1]))
console.log(findEqualIndex([1, 100, 50, -51, 1, 1]))
console.log(findEqualIndex([20, 10, 30, 10, 10, 10, 0]))
