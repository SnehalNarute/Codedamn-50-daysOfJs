function validateMobile(number) {
	// write your solution here
	// +91 is optional | space is optional | must start with 7,8 or 9 | rest decimal number and of (((9))) numbers so total = (((10))) number mob no.
	const regexExpression = /^(\+91|0)?\s?[789]{1}\d{9}$/
	return regexExpression.test(number)
}

console.log(
	`is a valid Indian mobile number: ${validateMobile('+919876543210')}`
)
console.log(
	`is a valid Indian mobile number: ${validateMobile('+91 9876543210')}`
)
console.log(`is a valid Indian mobile number: ${validateMobile('09876543210')}`)
console.log(`is a valid Indian mobile number: ${validateMobile('9876543210')}`)
console.log(`is a valid Indian mobile number: ${validateMobile('99876543210')}`)
