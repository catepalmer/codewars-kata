function countSmileys(arr) {
	arr.reduce((tally, str) => {
		if (str === ':)' || str === ':D' || str === ':-)' || str === ':~)' || str === ':-D' || str === ':~D' || str === ';)' || str === ';D' || str === ';-)' || str === ';-D' || str === ';~)' || str === ';~D') {
			tally++
			return tally
		}
	} , 0)
}


// Possible valid smileys:
// :) :D :-) :~) :-D :~D ;) ;D ;-) ;~) ;-D ;~D