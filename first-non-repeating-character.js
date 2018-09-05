function firstNonRepeatingLetter(str) {
  const sorted = str.toLowerCase().split('').sort().join('')
  console.log(sorted)
  const nonRepeatingLetters = sorted.filter((char, i) => {
    return (char[i] !== char[i+1])
  })
  return nonRepeatingLetters
}


function uniqChars(str) {
  return str.replace(/[\s\S](?=([\s\S]+))/g, ((c, s) => s.indexOf(c) + 1 ? '' : c))
}


function uniqueChar(str) {
  let uniq=''
  for (var i = 0; i < str.length; i++) {
    if(uniq.indexOf(str.charAt(i))==-1) {
      uniq += str[i]
    }
  }
  return uniq
}  


// function firstNonRepeatingLetter(str) {
//   const sorted = str.toLowerCase().split('').sort().join('').match(/(.)\1+/g)
//   console.log(sorted)
//   const nonRepeatingLetters = sorted.filter((char, i) => {
//     return (char[i] !== char[i+1])
//   })
//   return nonRepeatingLetters
// }


// string.slice(start, end)

// .match(/(.)\1+/g)





// Write a function named firstNonRepeatingLetter that takes a string input, 
// and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', 
// since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, 
// but the function should return the correct case for the initial letter. For example, 
// the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return the empty string ("").