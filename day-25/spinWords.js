// If any word's length is greater than or equal to 5
// then reverse that rest remains same

const spinWords = (string) => {
	let stringArr = string.split(' ')
	for (let i = 0; i < stringArr.length; i++) {
		if (stringArr[i].length >= 5) {
			let wordToReverse = stringArr[i]
			stringArr[i] = wordToReverse.split('').reverse().join('')
		}
	}
	return stringArr.join(' ')
}

console.log(spinWords('Hey fellow warriors'))
console.log(spinWords('You are almost to the last test'))
console.log(spinWords('Seriously this is the last one'))
