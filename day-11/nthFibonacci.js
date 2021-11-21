function fibonacci(n) {
	// write your solution here
	// =======================    Recursive Approach    ===========================
	/*
	if (n === 0) {
		return 0
	} else if (n <= 2) {
		return 1
	} else {
		return fibonacci(n - 2) + fibonacci(n - 1)
	}
    */
	// ======================    Iterative Approach    =============================

	let prev = 0,
		next = 1,
		current

	if (n === 0) {
		return 0
	} else if (n === 1) {
		return 1
	} else if (n >= 2) {
		for (let i = 2; i <= n; i++) {
			current = prev + next
			prev = next
			next = current
		}
		return current
	}
}

console.log(`fibonacci value at position 5: ${fibonacci(0)}`) //0 1 1 2 3 5 8 13 21
console.log(`fibonacci value at position 5: ${fibonacci(1)}`) //0 1 1 2 3 5 8 13 21
console.log(`fibonacci value at position 5: ${fibonacci(5)}`) //0 1 1 2 3 5 8 13 21
console.log(`fibonacci value at position 5: ${fibonacci(6)}`) //0 1 1 2 3 5 8 13 21
console.log(`fibonacci value at position 5: ${fibonacci(8)}`) //0 1 1 2 3 5 8 13 21
//console.log(`fibon value at position 5: ${fibonacci(5)}`)   //0 1 2 3 4 5 6  7  8
