const needsLicense = (kind) => {
	// code here
	if (kind === 'car' || kind === 'truck') return true
	else return false
}

const chooseVehicle = (option1, option2) => {
	// code here
	let first = [option1, option2].sort()[0]
	return `${first} is clearly the better choice.`
}

const calculateResellPrice = (originalPrice, age) => {
	// code here
	let factor
	if (age > 10) {
		factor = 0.5
	} else if (age > 3 && age < 10) {
		factor = 0.7
	} else {
		factor = 0.8
	}
	return factor * originalPrice
}
console.log(needsLicense('car'))
console.log(chooseVehicle('Wuling Hongguang', 'Toyota Corolla'))
console.log(calculateResellPrice(1000, 1))
