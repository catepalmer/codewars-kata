function findMissingLetter(arr) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
	const indices = arr.map(letter => alphabet.indexOf(letter.toLowerCase()))
	const indexGap = indices[0]
	const missingLetter = alphabet[indices.find((num, i) => {
		if (num - i > indexGap) {
			console.log(num)
			console.log(alphabet[num - 1])
			return (num - 1)
		}
	}) - 1]
	console.log(missingLetter)
	return (arr[0].toLowerCase() === arr[0]) ? missingLetter : missingLetter.toUpperCase()
}





// function findMissingLetter(arr) {
// 	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
// 	const indices = arr.map(letter => alphabet.indexOf(letter.toLowerCase()))
// 	const indexGap = indices[0]
// 	const missingLetter = alphabet[indices.find((num, i) => {
// 		if (num - i > indexGap) {
// 			console.log(num)
// 			console.log(alphabet[num - 1])
// 			return (num - 1)
// 		}
// 	}) - 1]
// 	console.log(missingLetter)
// 	return (arr[0].toLowerCase() === arr[0]) ? missingLetter : missingLetter.toUpperCase()
// }


// function findMissingLetter(arr) {
// 	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
// 	const indices = arr.map(letter => alphabet.indexOf(letter.toLowerCase()))
// 	console.log(indices)
// 	const missingLetter = alphabet[indices.find((num, i) => (num != i) ? i : null) - 1]
// 	return (arr[0].toLowerCase() === arr[0]) ? missingLetter : missingLetter.toUpperCase()
// }