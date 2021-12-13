const uniqueValueOfArray = (arr) => {
	return [...new Set(arr)]
}

console.log(
	'unique values of [1, 2, 2, 4, 5, 6, 6] is: ',
	uniqueValueOfArray([1, 2, 3, 4, 5, 6])
)

console.log(
	'unique values of [1, 1, 1, 1] is: ',
	uniqueValueOfArray([1, 1, 1, 1])
)
