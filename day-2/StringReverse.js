function reverseAString(str) {
	return str.split('').reverse().join('')
}

console.log(`Reversed string is: ${reverseAString("JavaScript is awesome")}`)