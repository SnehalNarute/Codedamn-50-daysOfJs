const convertDigitsToAskedBase = (digits, baseA, baseB) => {
	let num = digits.join('')

	let conv_num = Number(num).toString(baseB)
	console.log(conv_num)
	let c_arr = conv_num.split('')
	console.log(c_arr)

	function isNum(val) {
		return !isNaN(val)
	}

	c_arr = c_arr.map((el) => {
		if (isNum(el)) {
			return Number(el)
		} else {
			return el.charCodeAt(0) - 87
		}
	})

	return c_arr
}
console.log(convertDigitsToAskedBase([5, 8], 10, 16))
