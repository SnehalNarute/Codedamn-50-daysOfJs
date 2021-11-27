function eachThree(n) {
	let numStr = n.toString()
	console.log('number is:', n)

	console.log('String length:', numStr.length)
	const units = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
	]
	const teens = [
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen',
	]

	const doubleDigit = [
		'twenty',
		'thirty',
		'forty',
		'fifty',
		'sixty',
		'seventy',
		'eighty',
		'ninety',
	]

	//  for single digit

	if (numStr.length === 1) {
		return units[n]
	}
	// for double digits whose length is 2 & lies in teens
	if (numStr.length === 2) {
		if (parseInt(numStr.charAt(numStr.length - 2)) === 1) {
			return teens[n % 10]
		} else if (n % 10 === 0) {
			// for double digits whose length is 2 & is divisible by 10
			return doubleDigit[Math.floor(n / 10) - 2]
		} else {
			// for double digits whose length is 2 & is NOT divisible by 10
			const partOne = doubleDigit[Math.floor(n / 10) - 2]
			const partTwo = units[n % 10]
			return partOne + '-' + partTwo
		}
	}
	// for three digit number & is divisible by 100
	if (n % 100 === 0) {
		return units[n / 100] + ' hundred'
	}
	// for remaining digits of three digit number
	const remainingNumber = n % 100
	const remainingNumStr = remainingNumber.toString()

	// 310 in case of 300 remaining number is 10

	// 301, rem = 01
	if (remainingNumStr.length === 1) {
		return units[Math.floor(n / 100)] + ' hundred and ' + units[remainingNumber]
	}

	// 316 , rem = 16
	if (parseInt(remainingNumStr.charAt(remainingNumStr.length - 2)) === 1) {
		return (
			units[Math.floor(n / 100)] + ' hundred and ' + teens[remainingNumber % 10]
		)
	}

	// 450 , rem = 50
	if (remainingNumber % 10 === 0) {
		return (
			units[Math.floor(n / 100)] +
			' hundred and ' +
			doubleDigit[Math.floor(remainingNumber / 10) - 2]
		)
	}

	// 459 , rem = 59/10 => 5 remainder = 9

	return (
		units[Math.floor(n / 100)] +
		' hundred and ' +
		doubleDigit[Math.floor(remainingNumber / 10) - 2] +
		'-' +
		units[remainingNumber % 10]
	)
}
// 4555 units +
function spellNumber(n) {
	if (n < 0 && n > 999999999999) {
		return 'Invalid Range'
	}
	if (n.toString().length <= 3) {
		//Less than 3 digit number
		return eachThree(n)
	}
	// 8043 % 1000
	const UPPER_SUFFIX = ['thousand', 'million', 'billion']
	const nString = n.toString()
	let dividedArray = []

	let currLoop = 0
	let currentPointer = nString.length
	let currentStr = ''

	// 8392 // 2938
	while (currentPointer >= 0) {
		currentPointer--
		currentStr += nString.charAt(currentPointer)
		currLoop++
		console.log(currentStr, currLoop, currentPointer)

		if (currLoop === 3 || currentPointer === 0) {
			dividedArray.push(currentStr)
			currentStr = ''
			currLoop = 0
			console.log(dividedArray)
		}
	}

	let finalString = ''
	let finalCounter = -1

	for (let i = 0; i < dividedArray.length; i++) {
		let partialResult = eachThree(parseInt(dividedArray[i]))

		if (partialResult.split(' ')[0] === 'zero') {
			finalString += ''
			finalCounter++
			continue
		}

		if (finalCounter > -1) {
			finalString =
				partialResult + ' ' + UPPER_SUFFIX[finalCounter] + ' ' + finalString
			finalCounter++
			continue
		}

		finalString = partialResult + '' + finalString
		finalCounter++
	}
	// if (finalString === '') {
	// 	return 'zero'
	// }
	return finalString
}
console.log(spellNumber(1323))
