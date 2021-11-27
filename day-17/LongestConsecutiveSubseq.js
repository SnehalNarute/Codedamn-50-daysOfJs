const longestConsecutiveSequence = (inputArray) => {
	// Your code here
	let arr = inputArray.sort()
	let S = new Set()
	let ans = 0,
		n = arr.length,
		set,
		j
	for (let i = 0; i < n; i++) {
		set = S.add(arr[i])
	}
	for (let i = 0; i < n; i++) {
		// start from the first element
		// go through each one
		// and ""increment element for checking sequence""
		// until we meet the end of the array
		if (!set.has(arr[i] - 1)) {
			j = arr[i]
			while (set.has(j)) {
				j++
			}
			ans = Math.max(ans, j - arr[i])
		}
	}
	return ans
}
console.log(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
