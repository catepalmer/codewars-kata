function countSmileys(arr) {
	const validSmileys = [':)', ':D', ':-)', ':~)', ':-D', ':~D', ';)', ';D', ';-)', ';~)', ';-D', ';~D']
	return arr.reduce((count, str) => {
		if (validSmileys.includes(str)) {
			count++
		}
		return count
	}, 0)
}



// function countSmileys(arr) {
// 	const validSmileys = [':)', ':D', ':-)', ':~)', ':-D', ':~D', ';)', ';D', ';-)', ';~)', ';-D', ';~D']
// 	arr.reduce((tally, str) => {
// 		if (str === validSmileys.find(smiley => {
// 			return smiley
// 		})) {
// 				tally++
// 		}
// 		return tally
// 	}, 0)
// }



// function countSmileys(arr) {
// 	const validSmileys = [':)', ':D', ':-)', ':~)', ':-D', ':~D', ';)', ';D', ';-)', ';~)', ';-D', ';~D']
// 	arr.reduce((tally, str) => {
// 		if (validSmileys.find(str => {
// 			tally++
// 			return tally
// 		} else {
// 			return tally
// 		}))
// 	}, 0)
// }



// function countSmileys(arr) {
// 	arr.reduce((tally, str) => {
// 		console.log(tally, str)
// 		if (str === ':)' || str === ':D' || str === ':-)' || str === ':~)' || str === ':-D' || str === ':~D' || str === ';)' || str === ';D' || str === ';-)' || str === ';-D' || str === ';~)' || str === ';~D') {
// 			tally++
// 			return tally
// 		} else {
// 			return tally
// 		}
// 	} , 0)
// }

// Possible valid smileys:
// :) :D :-) :~) :-D :~D ;) ;D ;-) ;~) ;-D ;~D