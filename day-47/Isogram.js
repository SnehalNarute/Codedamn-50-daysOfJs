function isIsogram(str) {
	// your code here
	let checkuniqueStr = new Set(str.toLowerCase()).size

	return checkuniqueStr === str.length
}
console.log(isIsogram('isoOgram'))
console.log(isIsogram('isogram'))
console.log(isIsogram(''))
console.log(isIsogram('moOse'))
