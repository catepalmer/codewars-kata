function findMissingLetter(arr) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
	const indices = arr.map(letter => alphabet.indexOf(letter.toLowerCase()))
	const missingLetter = alphabet[indices.find((num, i) => (num - i > indices[0]) ? (num - 1) : null) - 1]
	return (arr[0].toLowerCase() === arr[0]) ? missingLetter : missingLetter.toUpperCase()
}