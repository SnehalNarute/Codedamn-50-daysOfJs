const factorial = (n) => {
	let fact = n > 1 ? n * factorial(n - 1) : 1
	return fact
}

console.log(`Factorial of 4 is ${factorial(4)}`)
console.log(`Factorial of 5 is ${factorial(5)}`)
console.log(`Factorial of 10 is ${factorial(10)}`)
