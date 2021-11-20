function randomNumber(rangeStart, rangeEnd) {
	let result = Math.random() * (rangeEnd - rangeStart + rangeStart)
	return result
}

console.log(`My random number: ${randomNumber(10, 50)}`)

console.log(`My random number: ${randomNumber(100, 200)}`)
