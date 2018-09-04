function findMissingLetter(arr) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
	const alphabetIndex = alphabet.indexOf(arr[0].toLowerCase())
	const letterBeforeMissing = arr.find((letter, i) => {
	})
}

// Pseudocode:

// I need to check the alphabetIndex of each letter in arr, and if arr[i+1] 
// has an alphabetIndex of 2 greater than arr[i], the letter with the alphabetIndex 
// between arr[i] and arr[i+1] is the missing letter




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