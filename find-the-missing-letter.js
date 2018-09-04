function findMissingLetter(arr) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
	const indices = arr.map(letter => alphabet.indexOf(letter.toLowerCase()))
	const missingLetterIndex = indices.find((num, i) => {
		if (num != i) {
			return i
		}
	}) - 1
	if (arr[0].toLowerCase() === arr[0]) {
		return alphabet[missingLetterIndex]
	} else {
		return alphabet[missingLetterIndex].toUpperCase()
	}
}







// function findMissingLetter(arr) {
// 	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
// 	const indices = arr.map(letter => alphabet.indexOf(letter.toLowerCase()))
// 	const indexOfMissingLetter = indices.find((num, i) => {
// 		if (num != i) {
// 			return i
// 		}
// 	}) - 1
// 	return alphabet[indexOfMissingLetter]
// }




// Pseudocode:

// I need to check the alphabetIndex of each letter in arr, and if arr[i+1] 
// has an alphabetIndex of 2 greater than arr[i], the letter with the alphabetIndex 
// between arr[i] and arr[i+1] is the missing letter
// Variables I need: alphabetIndex of each letter in arr




// function findMissingLetter(arr) {
// 	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
// 	const alphabetIndices = arr.map(letter => alphabet.indexOf(letter.toLowerCase()))
// 	const indexBeforeMissing = alphabetIndices.find((number, i) => {
// 		if (number[i] === number[i+1] + 2) {
// 			return number[i]
// 		}
// 	})
// 	console.log(indexBeforeMissing)

// }






// function findMissingLetter(arr) {
// 	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
// 	for (let i = 0; i < alphabet.length; i++) {
// 		let letterBeforeMissing = arr.find((letter, index) => {
			
// 		})
// 	}



// function findMissingLetter(arr) {
// 	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
// 	const firstLetterIndex = alphabet.indexOf(arr[0].toLowerCase())
// 	const letterBeforeMissing = arr.find((letter, i) => {
// 	})
// }



// array.find(function(currentValue, index, arr),thisValue)

// function findMissingLetter(arr) {
// 	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
// 	arr.find((letter, i) => {
// 		if (letter[i])
// 	})

// }




// Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input 
// and that returns the missing letter in the array.

// You will always get a valid array. And it will be always exactly one letter be 
// missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)