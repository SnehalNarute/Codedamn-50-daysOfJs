function isEmpty(obj) {
	return Object.entries(obj).length === 0
}

console.log(`is empty object: ${isEmpty({})}`) //true
console.log(`is empty object: ${isEmpty({ key: 1 })}`) // false
