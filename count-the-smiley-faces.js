function countSmileys(arr) {
	const validSmileys = [':)', ':D', ':-)', ':~)', ':-D', ':~D', ';)', ';D', ';-)', ';~)', ';-D', ';~D']
	return arr.reduce((count, str) => {
		(validSmileys.includes(str)) ? count++ : count
		return count
	}, 0)
}




// function countSmileys(arr) {
// 	const validSmileys = [':)', ':D', ':-)', ':~)', ':-D', ':~D', ';)', ';D', ';-)', ';~)', ';-D', ';~D']
// 	return arr.reduce((count, str) => {
// 		if (validSmileys.includes(str)) {
// 			count++
// 		}
// 		return count
// 	}, 0)
// }