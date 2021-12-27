const lunhAlgo = (string) => {
	if (/[^0-9-\s]+/.test(string)) return false

	let nCheck = 0,
		bEven = false
	string = string.replace(/\D/g, '')

	for (var n = string.length - 1; n >= 0; n--) {
		var cDigit = string.charAt(n),
			nDigit = parseInt(cDigit, 10)

		if (bEven && (nDigit *= 2) > 9) nDigit -= 9

		nCheck += nDigit
		bEven = !bEven
	}

	return nCheck % 10 == 0
}

console.log(lunhAlgo('4539319503436467'))
console.log(lunhAlgo('123456789'))
