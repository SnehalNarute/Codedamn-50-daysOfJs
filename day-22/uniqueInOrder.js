const uniqueInOrder = (iterable) => {
	let stringArray = Array.isArray(iterable) ? iterable : iterable.split('')
	let uniqueValue = stringArray.filter((letters, i) => {
		return stringArray[i] != stringArray[i + 1]
	})

	return uniqueValue
}
console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('ABBCcAD'))
console.log(uniqueInOrder([1, 2, 2, 3, 3]))
