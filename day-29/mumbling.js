function mumbling(str) {
	return str
		.split('')
		.map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
		.join('-')
}
console.log(
	`The Output for string ZpglnRxqenU is: \n${mumbling('ZpglnRxqenU')}`
)
// [ "Z", "p", "g", "l", "n", "R", "x", "q", "e", "n", "U" ]
console.log(
	`The Output for string NyffsGeyylB is: \n${mumbling('NyffsGeyylB')}`
)
console.log(
	`The Output for string MjtkuBovqrU is: \n${mumbling('MjtkuBovqrU')}`
)
