function truncateWithWordLimit(str, wordLimit) {
	// write your solution here
	return str.split(' ').splice(0, wordLimit).join(' ')
}

console.log(
	`Truncated string: ${truncateWithWordLimit(
		'JavaScript is simple but not easy to master',
		3
	)}`
)

console.log(
	`Truncated string: ${truncateWithWordLimit(
		'Codedamn is the best place to learn to code',
		5
	)}`
)
