function findOutlier(integers) {
	let even = integers.filter((n) => n % 2 === 0)
	let odd = integers.filter((n) => n % 2 !== 0)
	return even.length === 1 ? even[0] : odd[0]
}

console.log(findOutlier([2, 6, 8, 10, 3]))
console.log(findOutlier([0, 0, 3, 0, 0]))
console.log(findOutlier([1, 1, 0, 1, 1]))
