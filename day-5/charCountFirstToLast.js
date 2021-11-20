// count the count of character passed between first and last occurance

function getTheGapX(str) {
	// write your solution here
	let count = 0
	if (str.includes('X')) {
		for (let i = str.indexOf('X'); i < str.lastIndexOf('X'); i++) {
			count++
		}
	} else if (!str.includes('X')) {
		count = -1
	}
	return count
}

console.log(`Gap between the X's: ${getTheGapX('XeroX')}`)
console.log(`Gap between the X's: ${getTheGapX('Xamarin')}`)
console.log(`Gap between the X's: ${getTheGapX('JavaScript')}`)
console.log(`Gap between the X's: ${getTheGapX('F(X) !== G(X) !== F(X)')}`)
