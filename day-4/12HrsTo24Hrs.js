const time1 = '12:10AM'
const time2 = '5:00AM'
const time3 = '12:33PM'
const time4 = '01:59PM'
const time5 = '11:8PM'
const time6 = '10:02PM'

function convertTo24HrsFormat(time) {
	// write your solution here

	// ============= add 0's to convert time to proper format =======================
	if (time.length === 6) {
		// 11:8PM case
		if (time.charAt(2) === ':') {
			time = time.slice(0, 3) + '0' + time.slice(3, 6)
		} else {
			// 5:00AM case
			time = '0' + time
		}
	}
	let ConvertedTime
	//check for AM and PM
	// PM? change hours part for everything except 12
	// AM? change change 12 part rest everything same
	if (time.slice(-2) === 'AM') {
		if (time.slice(0, 2) === '12') {
			ConvertedTime = '00' + time.slice(2, 7)
		} else {
			ConvertedTime = time.slice(0, 7)
		}
	} else {
		if (time.slice(0, 2) === '12') {
			ConvertedTime = time.slice(0, 7)
		} else {
			let hr = (Number(time.slice(0, 2)) + 12).toString() + time.slice(2, 7)
			ConvertedTime = hr
		}
	}
	return ConvertedTime
}

console.log(`Converted time: ${convertTo24HrsFormat(time1)}`)
console.log(`Converted time: ${convertTo24HrsFormat(time2)}`)
console.log(`Converted time: ${convertTo24HrsFormat(time3)}`)
console.log(`Converted time: ${convertTo24HrsFormat(time4)}`)
console.log(`Converted time: ${convertTo24HrsFormat(time5)}`)
console.log(`Converted time: ${convertTo24HrsFormat(time6)}`)
