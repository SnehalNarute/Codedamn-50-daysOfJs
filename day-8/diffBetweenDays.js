function getDaysBetweenDates(dateText1, dateText2) {
	// write your solution here
	let day1 = new Date(dateText1).getTime()
	let day2 = new Date(dateText2).getTime()

	// difference between Time in milliseconds convert it to days
	let daysInBetween = (day2 - day1) / (1000 * 86400)
	return daysInBetween
}

console.log(
	`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`
)
console.log(
	`Days difference: ${getDaysBetweenDates('11/10/2021', '11/12/2021')}`
)
console.log(
	`Days difference: ${getDaysBetweenDates('11/01/2020', '11/05/2020')}`
)
