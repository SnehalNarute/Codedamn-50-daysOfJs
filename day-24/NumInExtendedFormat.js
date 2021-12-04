const numExpanded = (num) => {
	return num
		.toString()
		.split('')
		.reverse()
		.map((digit, i) => {
			return digit * Math.pow(10, i)
		})
		.reverse()
		.join('+')
}
console.log(numExpanded(734)) // 7 * (10 pow(2)) + 3 * (10 pow(1)) + 4 * (10 pow(0))
// 700 + 30 + 4
