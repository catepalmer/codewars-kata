function firstNonRepeatingLetter(str) {
  const sorted = str.toLowerCase().split('').sort().join('').match(/(.)\1+/g)
  console.log(sorted)
  const nonRepeatingLetters = sorted.filter((char, i) => {
    return (char[i] !== char[i+1])
  })
  return nonRepeatingLetters
}







// Write a function named firstNonRepeatingLetter that takes a string input, 
// and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', 
// since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, 
// but the function should return the correct case for the initial letter. For example, 
// the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return the empty string ("").