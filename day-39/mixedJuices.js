const timeToMixJuice = (name) => {
	switch (name) {
		case 'Pure Strawberry Joy':
			return 0.5
		case 'Energizer':
			return 1.5
		case 'Green Garden':
			return 1.5
		case 'Tropical Island':
			return 3
		case 'All or Nothing':
			return 5
		default:
			return 2.5
	}
}

console.log(timeToMixJuice('Tropical Island'))

const limesToCut = (wedgesNeeded, limes) => {
	// code here
	let currentCount = 0
	let i = 0
	while (currentCount < wedgesNeeded && i < limes.length) {
		const lime = limes[i]
		switch (lime) {
			case 'small': {
				currentCount += 6
				break
			}
			case 'medium': {
				currentCount += 8
				break
			}
			case 'large': {
				currentCount += 10
				break
			}
		}
		i++
	}
	return i
}
console.log(limesToCut(25, ['small', 'small', 'large', 'medium', 'small']))

const remainingOrders = (timeLeft, orders) => {
	// code here
	let prepareTime = 0
	while (prepareTime < timeLeft && orders.length > 0) {
		prepareTime += timeToMixJuice(orders.shift())
	}
	return orders
}
console.log(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']))
