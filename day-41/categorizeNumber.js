function openOrSenior(data) {
	let result = data.map(([age, handicap]) =>
		age > 54 && handicap > 7 ? 'Senior' : 'Open'
	)

	return result
}

let output = openOrSenior([
	[45, 12],
	[55, 21],
	[19, -2],
	[104, 20],
])

console.log(output)
