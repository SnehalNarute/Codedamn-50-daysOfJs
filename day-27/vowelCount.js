const getCount = (str) => {
	let vowelCount = 0
	const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
	for (let i = 0; i < str.length; i++) {
		if (vowels.includes(str[i])) {
			vowelCount++
		}
	}
	return vowelCount
}

console.log(getCount('abracadabra'))
console.log(getCount('THe Strings are SOO COOL'))
console.log(getCount('There exists only 5 vowels'))
