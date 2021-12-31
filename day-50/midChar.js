function getMiddle(s) {
	return s[Math.floor(s.length / 2)] === s[Math.floor((s.length + 1) / 2)]
		? s[Math.floor((s.length + 1) / 2)] + s[Math.floor((s.length + 1) / 2)]
		: s[Math.floor(s.length / 2)]
}

console.log(getMiddle('testing'))
console.log(getMiddle('middle'))
console.log(getMiddle('A'))
