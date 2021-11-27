function isPangram(input) {
	// Code here
	const alphabetArr = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	]

	const lowerCaseInput = input.toLowerCase().split('')

	let isPangram = true

	alphabetArr.forEach((el) => {
		if (!lowerCaseInput.includes(el)) {
			isPangram = false
		}
		return isPangram
	})
	return isPangram
}
console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
