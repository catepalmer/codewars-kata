function firstNonRepeatingLetter(str) {
  const arr = str.toLowerCase().split('')
  const uniqChars = arr.filter(char => arr.indexOf(char) === arr.lastIndexOf(char)).join('')
  const firstNonRepeating = arr.find(char => (char.toLowerCase() === uniqChars[0]))
  
}




// Write a function named firstNonRepeatingLetter that takes a string input, 
// and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', 
// since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, 
// but the function should return the correct case for the initial letter. For example, 
// the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return the empty string ("").