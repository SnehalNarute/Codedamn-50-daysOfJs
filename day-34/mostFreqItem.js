const mostFreqItem = (arr) => {
	let frequencyOfElement = 1 // existing array element already has freq count as 1
	let count = 0,
		element

	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				count++
			}
			if (count > frequencyOfElement) {
				frequencyOfElement = count
				element = arr[i]
			}
		}
		count = 0 // for each elem count will reset
	}
	return element + ' ' + frequencyOfElement
}

console.log(mostFreqItem([1, 2, 2, 4, 5, 6, 6]))

console.log(mostFreqItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))
