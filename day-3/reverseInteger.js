// Write a program to reverse a given integer number

function reverseInteger(num) {
	let reversed = 0
	while (num > 0) {
		reversed = reversed * 10 + (num % 10) //reversed = 9 98 984 9843

		num = Math.floor(num / 10) // num = 348 34 3
	}
	return reversed // 9843
}

console.log(`Reversed integer is: ${reverseInteger(3489)}`)

console.log(`Reversed integer is: ${reverseInteger(2222)}`)
