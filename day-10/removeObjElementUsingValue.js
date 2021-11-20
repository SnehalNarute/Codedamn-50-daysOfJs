let array = [
	{ field: 'id', operator: 'eq' },
	{ field: 'cStatus', operator: 'eq' },
	{ field: 'money', operator: 'eq' },
]

function removeArrayElement(filterField) {
	// write your solution here
	const arr = array.filter((item) => item.field !== filterField)
	return arr
}

console.log(removeArrayElement('money'))
console.log(removeArrayElement('id'))
console.log(removeArrayElement('cStatus'))
