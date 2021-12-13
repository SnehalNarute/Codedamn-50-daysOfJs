const gcd = (a, b) => {
	const result = b === 0 ? a : gcd(b, a % b)
	return result
}

console.log('The GCD of ' + 12 + ' ', 'and ' + 4 + ' is ' + gcd(12, 4))

console.log('The GCD of ' + 2154 + ' ', 'and ' + 458 + ' is ' + gcd(2154, 458))

console.log('The GCD of ' + 333 + ' ', 'and ' + 3333 + ' is ' + gcd(333, 3333))
