function countSmileys(arr) {
	const validSmileys = [':)', ':D', ':-)', ':~)', ':-D', ':~D', ';)', ';D', ';-)', ';~)', ';-D', ';~D']
	return arr.reduce((count, str) => {
		(validSmileys.includes(str)) ? count++ : count
		return count
	}, 0)
}




// Best practices solution:

// function countSmileys(arr) {
//   return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
// }