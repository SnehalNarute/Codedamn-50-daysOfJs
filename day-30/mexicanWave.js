function wave(str) {
	// don't include original str inside array

	let waves = [...str]
		.map(
			(char, index) =>
				`${str.slice(0, index)}${char.toUpperCase()}${str.slice(index + 1)}`
		)
		.filter((char) => char != str)
	return waves
}

console.log(wave('hello'))
console.log(wave('two words'))
console.log(wave('gap'))
