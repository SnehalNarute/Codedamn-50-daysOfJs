const totalGrains = () => {
	// Code here
	return Math.pow(2, 64) - 1
}

const grainsOn = (input) => {
	// Code here
	return Math.pow(2, input - 1)
}

console.log(`Grains on 5th square: ${grainsOn(3)}`)
console.log(`Total grains on the Chess Board: ${totalGrains()}`)
