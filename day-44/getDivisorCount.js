function getDivisorsCnt(num) {
	let arr = []
	for (let i = 1; i <= num; i++) {
		if (i % num === 0 || i % num === 1 || num % i === 0) {
			arr.push(i)
		}
	}
	return arr.length
}
console.log(getDivisorsCnt(10))
console.log(getDivisorsCnt(11))
console.log(getDivisorsCnt(54))
