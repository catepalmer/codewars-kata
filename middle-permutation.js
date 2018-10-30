import { length, toLower } from 'ramda'



function middlePermutation(s) {
  let words = []
  let newWord = []
  let string = s

  if (string.length === 0) {
    words.push(newWord.join(''))
    string = s
  }
  
    for (let i = 0; i < s.length; i++) {
      newWord.push(s[i])
      s.slice(i)
    }
  
    
  
}


function middlePermutation(s){
  let finalArr = []
  let tempArr = []
  for (let i = 0; i < s.length; i++) {
    tempArr.push(s[i])
    s.slice(i)
  }
}

function recursiveFunction (s, finalArr = [], tempArr = []) {
  if (length(s) === 0) {
    finalArr.push(tempArr.join(''))
    return finalArr
  }
  for (let i = 0; i < s.length; i++) {

  }

}




// function middlePermutation(s) {
//   const finalArr = []
//   const numWords = getNumWords(s)
  

// }

// function getNumWords(s) {
//   const x = length(s)
//   if (x < 0) return
//   if (x === 0) return 1
//   return x * getNumWords(x - 1)
// }






// import { forEach, length, remove, toLower } from 'ramda'

// function middlePermutation(s) {
//   let letters = toLower(s).split('').sort()
//   let tempArr = []

//   for (let i = 0; i < letters.length; i++) {
//     append(letters[i], tempArr)
//     letters.slice(i)
//     for (let j = 0; j < letters.length; j++) {
//       append(letters[j], tempArr)
//       remove(j, 1, letters)
//       for (let k = 0; k < letters.length; k++) {
//         append(letters[k], tempArr)
//         remove(k, 1, letters)
//         for (let l = 0; l < letters.length; l++) {
//           append(letters[l], tempArr)
//           remove(l, 1, letters)
//         }
//       }
//     }
//   }
//   return tempArr
// }

// function loopThrough(letters, tempArr = [], finalArr = []) {
//   if (length(letters) === 0) {
//     finalArr.push(tempArr.join(''))
//     return finalArr
//   }
//   tempArr.push(letters[0])

}


// More pseudocode: So I have to do loops within loops - the number of layers deep
// will be equal to the length of the string that's passed in (s). Could just do
// a recursive function for this, shortening the length of s each time it's called.

// Variables I need:

// An array to push all the variants containing all the letters to.
// E.g. ['act', 'atc', 'cat', 'cta', 'tac', 'tca']

// A place to store each word as it's being constructed. Store as an array and then join at
// the end? E.g. [] -> ['a'] -> ['a', 'c'] -> ['a', 'c', 't'] -> 'act'

// The letters remaining from the original string (s) that haven't been added to the word yet.
// Not sure whether to store as an array or as a string.
// E.g. 'act' -> 'ct' -> 't' -> ''
// Or ['a', 'c', 't'] -> ['c', 't'] -> ['t'] -> []

// Related to this, the length of the string/array with letters that haven't been added to the
// new word yet.
// E.g. 3 -> 2 -> 1 -> 0

// The indices of the letters to loop through. E.g. for 'act', the index of 'a' is 0,
// the index of 'b' is 1, and the index of 'c' is 2.

// If I'm calling this function recursively, I need to pass it:

// the temporary array containing the letters that have been added so far to the current
// word (this array will be joined into a string before being pushed to the final array
// containing all the words).

// the remaining letters that haven't been added to the temporary array yet.

// the final array.



// import { forEach, length, remove, toLower } from 'ramda'

// function middlePermutation(s) {
//     let letters = toLower(s).split('').sort()
//     let tempArr = []
//     let finalArr = []

//     forEach(((letter, i) => {
//         append(letter, tempArr)
//         remove(i, 1, letters)
//         forEach(((letter2, j) => {
//             append(letter2, tempArr)
//             remove(j, 1, letters)
//             forEach(((letter3, k) => {
//                 append(letter3, tempArr)
//                 remove(k, 1, letters)
//                 forEach(((letter4, l) => {
//                     append(letter4, tempArr)
//                     remove(l, 1, letters)
//                 }), letters)
//             }), letters)
//         }), letters)
//     }), letters)
//     return tempArr
// }

// function loopThrough (letters, tempArr = [], finalArr = []) {
//     if (length(letters) === 0) {
//         finalArr.push(tempArr.join(''))
//         return finalArr
//     }
//     tempArr.push(letters[0])

// }



// import { length, toLower } from 'ramda'

// function middlePermutation(s) {
//     const letters = toLower(s).split('').sort()
// }

// function loopThrough (letters, tempArr = [], finalArr = []) {
//     if (length(letters) === 0) {
//         finalArr.push(tempArr.join(''))
//         return finalArr
//     }
//     tempArr.push(letters[0])

// }


//   function recursiveFunction (letters, finalArr = [], tempArr = []) {
//       if (length(letters) === 0) {
//           finalArr.push(tempArr.join())
//           return finalArr
//       }
//       tempArr.push(letters[0])
//       letters.shift()
//       return recursiveFunction(letters, finalArr, tempArr)
//   }

//   function middlePermutation(s) {
//       let tempArr = []
//       for (let i = 0; i < s.length; i++) {
//           tempArr.push(s[i])
//           for (let j = 0; j < s.length - 1; j++) {
//               tempArr.push(s[i+1])
//           }
//       }
//   }





  // So the logic I need in order to do this: first I need to take the string
  // I receive, make it all lowercase, split it into an array of letters, and
  // sort these letters alphabetically. Then I need to loop through this array
  // of letters and create a new string for each alphabetically ordered combination
  // of letters, maybe pushing the strings that result to an array in the order
  // they're created. Then I need to select the middle on and return it.






// Task
// You are given a string s. Every letter in s appears once.

// Consider all strings formed by rearranging the letters in 
// s. After ordering these strings in dictionary order, return 
// the middle term. (If the sequence has a even length n, define 
//     its middle term to be the (n/2)th term.)

// Example
// For s = "abc", the result should be "bac".

// The permutations in order are:
// "abc", "acb", "bac", "bca", "cab", "cba"
// So, The middle term is "bac".