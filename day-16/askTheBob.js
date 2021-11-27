function hey(message) {
	// Code here
	let Yell, silence
	Yell = message.toUpperCase()
	silence = message.trim()
	lastChar = message.length - 1

	if (message === Yell && message.charAt(lastChar) === '?') {
		return "Calm down, I know what I'm doing!"
	} else if (message === Yell && Yell !== message.toLowerCase()) {
		return 'Whoa, chill out!'
	} else if (message.charAt(lastChar) === '?') {
		return 'Sure.'
	} else if (silence === '') {
		return 'Fine. Be that way!.'
	}
	return 'Whatever'
}

console.log(hey(''))
console.log(hey('WHY YOU DID THIS?'))
console.log(hey('WHY you?'))
console.log(hey('what'))
