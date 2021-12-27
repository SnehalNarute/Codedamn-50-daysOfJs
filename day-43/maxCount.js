function maxCount(x) {
	//code your magic here
	let countOfLettersArr = x
		.split(' ')
		.map((word) =>
			word
				.split('')
				.reduce((acc, current) => acc + current.charCodeAt(0) - 96, 0)
		)

	let maxOfCount = countOfLettersArr.indexOf(Math.max(...countOfLettersArr))

	// we want word at maxCount index
	return x.split(' ')[maxOfCount]
}

console.log(maxCount('man i need a taxi up to ubud'))

console.log(maxCount('what time are we climbing up the volcano'))
