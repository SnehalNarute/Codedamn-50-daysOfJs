const unionOfArrays = (arr1, arr2) => {
	let union = [...new Set([...arr1, ...arr2])]
	return union
}
console.log(
	'Union of arrays are: ',
	unionOfArrays(['a', 'b', 'c'], ['a', 1, 2, 'd'])
)
