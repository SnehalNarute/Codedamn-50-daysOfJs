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

console.log(wave('hello')) // ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']

console.log(wave('two words')) // ['Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS']

console.log(wave('gap')) // ['Gap', 'gAp', 'gaP']
