function comp(a, b) {
	if (a.length !== b.length) {
		return false
	} else {
		const aSquared = a.map(num => Math.pow(num, 2))
		for (let i = 0; i < a.length; i++) {
			if(aSquared[i] !== b[i]) {
				return false
			} else {
				return true
			}
		}
	}
}





function arraysEqual(arr1, arr2) {
	if(arr1.length !== arr2.length)
			return false;
	for(var i = arr1.length; i--;) {
			if(arr1[i] !== arr2[i])
					return false;
	}

	return true;
}



// function comp(a, b) {
// 	if (a.length !== b.length) {
// 		return false
// 	} else {
// 		const newA = a.map(num => Math.pow(num, 2)).sort((c, d) => c - d)
// 		const newB = b.sort((c, d) => c - d)
// 		const isSame = newA.every(num => {

// 		})
// 	}
	

// }


// function comp(a, b) {
// 	if (a.length !== b.length) {
// 		return false
// 	} else {
// 	const squaredArr = a.map(num => Math.pow(num, 2))

// 	}	
// 	return squaredArr
// }







// function comp(a, b) {
// 	let isSame = true
// 	for (let i = 0; i < a.length; i++) {
// 		if (b[i] !== Math.pow(a[i], 2)) {
// 			isSame = false
// 		}
// 	}
// 	return isSame
// }


var found = array1.find(function(element) {
  return element > 10;
});