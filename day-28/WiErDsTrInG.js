function toWeirdCase(string) {
	// Your code goes here
	let weirdCaseString = []
	for (let i = 0; i < string.length; i++) {
		if (i % 2 === 0) {
			weirdCaseString[i] = string[i].toUpperCase()
		} else {
			weirdCaseString[i] = string[i].toLowerCase()
		}
	}

	return weirdCaseString.join('')
}

console.log(`The weird case of ${'"This"'} is ${toWeirdCase('"This"')}`)
console.log(
	`The weird case of ${'"This is a test"'} is ${toWeirdCase(
		'"This is a test"'
	)}`
)
console.log(
	`The weird case of ${'"A test case"'} is ${toWeirdCase('"A test case"')}`
)
