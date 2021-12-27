const isLeapYear = (year) => {
	let result = (year % 4 === 0 && year % 100 === 0) || year % 400 === 0
	return result
}
console.log(isLeapYear(2022))
console.log(isLeapYear(2020))
console.log(isLeapYear(2000))
