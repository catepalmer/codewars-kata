import { length, slice } from 'ramda'

function factorial (str, fac = 1) {
    if (length(str) === 1) return fac
    fac *= length(str)
    slice(0, length(str)-1, str)
    return factorial(fac, str)
}

function permutations(string) {
  let newStr = ''
  let arr = []

  newStr += string[0]
  newStr += string[1]
  newStr += string[2]
  newStr += string[3]

  arr.push(newStr)

  newStr = ''

  newStr += string[0]
  newStr += string[1]
  newStr += string[3]
  newStr += string[2]

  arr.push(newStr)

  newStr = ''
}


function permutations(arr = [], string) {


    let newStr = ''

    for (let i = 0; i < string.length; i++) {
        newStr += string[i]
    }
    
    arr.push(newStr)
    count++
  
    newStr = ''
  
    newStr += string[0]
    newStr += string[1]
    newStr += string[3]
    newStr += string[2]
  
    arr.push(newStr)
  
    newStr = ''
  }

// permutations('cate'):

// ['acet', 'acte', 'aect', 'aetc', 'atce', 'atec',
// 'caet', 'cate', 'ceat', 'ceta', 'ctae', 'ctea',
// 'eact', 'eatc', 'ecat', 'ecta', 'etac', 'etca',
// 'tace', 'taec', 'tcae', 'tcea', 'teac', 'teca']


// Want a temporary result (a new string) that
// contains a permutation as it's being built. Then when
// the length of this new string === the length of the
// string that's passed in as an argument, the new string
// is pushed to the array of permutations (that will be returned
// at the end of the function once all the permutations
// have been pushed to it).




// In this kata you have to create all permutations of an input string 
// and remove duplicates, if present. This means, you have to shuffle 
// all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba'