function getCount(num, count = 1) {
  if (num === 1) return count
  count *= num
  num--
  return getCount(num, count)
}


function getFactorials(num) {
  let arr = []
  let dec = num

  for (let i = 0; i < num; i++) {
    arr.push(getCount(dec))
    dec--
  }
  return arr
}


function loopThing (string) {
  const strLen = length(string)
  const facs = getFactorials(strLen)
  const num = facs[0]
  let perms = []
  let str = string
  
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      str = str
    }
    else if (i % 2 === 1) {
      str = slice(0, strLen-2, str) + str[strLen-1] + str[strLen-2]
    }
    else if (i === num - (num / strLen)) {
      str = str[strLen-1] + slice(1, strLen-1, str) + str[0]
    }
    else if (i % (num / strLen) === 0) {
      str = slice(0, strLen-4, str) + str[strLen-3] + str[strLen-4] + slice(strLen-2, strLen, str)
    }
    else {
      str = (isNil(slice(0, strLen-4, str)) ? '' : (slice(0, strLen-4, str))) + str[strLen-2] + str[strLen-3] + str[strLen-1]
    }
    perms.push(str)
  }
  return perms
}

loopThing('cate')

















function getCount(num, count = 1) {
  if (num === 1) return count
  count *= num
  num--
  return getCount(num, count)
}


function getFactorials(num) {
  let arr = []
  let dec = num

  for (let i = 0; i < num; i++) {
    arr.push(getCount(dec))
    dec--
  }
  return arr
}


function permutations(newStr, perms = [], idx = 0, num = 0) {
  const strLen = strLen
  const permsLengths = getFactorials(strLen)
  
  for (let i = 0; i < permsLengths[num]; i++) {
    if (idx === 0) str = str

    else if (idx % (permsLen / strLen) === 0) {
      if ((permsLengths - idx) === (permsLengths / strLen - 1)) {
        str = str[strLen - 1] + slice(1, strLen - 1, str) + str[0]
      }
      else {
        str = str[1] + str[0] + slice(2, strLen, str)
      }
    }
    else if (idx % ((permsLengths / strLen) / (strLen - 1)) === 0) {
      str = slice(0, strLen - 2, str) + str[strLen - 1] + str[strLen - 2]
    }
    else {
      str = slice(0, strLen - 2, str) + str[strLen - 1], str[strLen - 2]
    }
    perms.push(str)
    idx++
  }
  return perms
}








// function getCount(num, count = 1) {
//   if (num === 1) return count
//   count *= num
//   num--
//   return getCount(num, count)
// }


// function getFactorials(num) {
//   let arr = []
//   let dec = num

//   for (let i = 0; i < num; i++) {
//     arr.push(getCount(dec))
//     dec--
//   }
//   return arr
// }


// function permutations(str, perms = [], idx = 0) {
//   const strLen = length(str)
//   const permsLengths = getFactorials(strLen)
  
//   for (let i = 0; i < permsLengths; i++) {

//     if (idx === 0) str = str

//     else if (idx % (permsLen / strLen) === 0) {
//       if ((permsLengths - idx) === (permsLengths / strLen - 1)) {
//         str = str[strLen - 1] + slice(1, strLen - 1, str) + str[0]
//       }
//       else {
//         str = str[1] + str[0] + slice(2, strLen, str)
//       }
//     }
//     else if (idx % ((permsLengths / strLen) / (strLen - 1)) === 0) {
//       str = slice(0, strLen - 2, str) + str[strLen - 1] + str[strLen - 2]
//     }
//     else {
//       str = slice(0, strLen - 2, str) + str[strLen - 1], str[strLen - 2]
//     }
//     perms.push(str)
//     idx++
//   }
//   return perms
// }











// function getPermsLength(num, count = 1) {
//   if (num === 1) return count
//   count *= num
//   num--
//   return getPermsLength(num, count)
// }


// function permutations(str, perms = [], idx = 0) {
//   const strLen = length(str)
//   const permsLen = getPermsLength(strLen)
  
//   while (idx < permsLen) {

//     if (idx === 0) str = str

//     else if (idx % (permsLen / strLen) === 0) {
//       if ((permsLen - idx) === (permsLen / strLen - 1)) {
//         str = str[strLen - 1] + slice(1, strLen - 1, str) + str[0]
//       }
//       else {
//         str = str[1] + str[0] + slice(2, strLen, str)
//       }
//     }
//     else if (idx % ((permsLen / strLen) / (strLen - 1)) === 0) {
//       str = slice(0, strLen - 2, str) + str[strLen - 1] + str[strLen - 2]
//     }
//     else {
//       str = slice(0, strLen - 2, str) + str[strLen - 1], str[strLen - 2]
//     }
//     perms.push(str)
//     idx++
//   }
//   return perms
// }








// function permutations(str, perms = [], idx = 0) {
//   const permsLen = getPermsLength(strLen)
//   const strLen = length(str)

//   while (true) {

//     if (idx === permsLen) return perms
//     if (idx === 0) {
//       str = str
//     }
//     else if (idx % (permsLen / strLen) === 0) {
//       if ((permsLen - idx) === (permsLen / strLen - 1)) {
//         str = str[strLen - 1] + slice(1, strLen - 1, str) + str[0]
//       }
//       else {
//         str = str[1] + str[0] + slice(2, strLen, str)
//       }
//     }
//     else if (idx % ((permsLen / strLen) / (strLen - 1)) === 0) {
//       str = str[0] + str[2] + str[1] + str[strLen - 1]
//     }
//     else {
//       str = slice(0, strLen - 2, str) + str[strLen - 1], str[strLen - 2]
//     }
//     perms.push(str)
//     idx++

//     return permutations(str, perms, idx)
    
//     break
//   }
// }








// for (let h = 0; h < permsLength; h++) {
//   if (h === 0) {
//     perm = perm
//   }
//   else if (h % (permsLength / str.length) === 0) {
//     if (this is the last one of this kind) {
//       perm = switch perm[0] and perm[3], leave [1] and [2] the same
//     }
//     perm = switch perm[0] and perm[1], leave rest of string the same
//   }
//   else if (h % ((permsLength / str.length) / (str.length -1)) === 0) {
//     perm = switch perm[1] and perm[2], leave rest of string the same
//   }
//   else {
//   perm = switch perm[2] and perm[3], leave rest of string the same
//   }
//   perms.push(perm)
// // Then pass the modified form of perm to the next call of the function
// }



// To change the output each time, need to also pass to the recursive function call
// an iterator for the characters that are being swapped.




// function getPermsLength (num, count = 1) {
//   if (num === 1) return count
//   count *= num
//   num--
//   return getPermsLength(num, count)
// }


// function permutations(str, perms = [], strLen = length(str)) {
//   const permsLen = getPermsLength(strLen)
//   let perm = ''

//   if (length(perms) === permsLen) return perms

//   for (let i = 0; i < strLen; i++) {
//     perm += str[i]
//   }
//   perms.push(perm)
//   return permutations(perm, perms, strLen)
// }




// function getPermsLength (num, count = 1) {
//   if (num === 1) return count
//   count *= num
//   num--
//   return getPermsLength(num, count)
// }


// function permutations(str, perms = [], perm = '', strLen = length(str)) {
//   const permsLen = getPermsLength(strLen)

//   if (length(perms) === permsLen) return perms

//   for (let i = 0; i < strLen; i++) {
//     perm += str[i]
//   }
//   perms.push(perm)
//   perm = ''
//   return permutations(str, perms, perm, strLen)
// }


// function permutations(str, perms = [], perm = '', strLen = length(str)) {
//   while (true) {
//     if(length(perm) === length(str)) perms.push(perm)
//     strLen--

//     if (strLen < 1) break
//   }
//   return perms
// }




// function permutations(string) {
//   let perms = []
//   let perm = string
//   let string2 = string

//   while (length(string2) > 0) {
//     for (let i = 0; i < length(string2); i++) {
//       perms.push(perm)
//     }
//     string2--
//   }
//   return perms
// }






// function getPermsLength (num, count = 1) {
//   if (num === 1) return count
//   count *= num
//   num--
//   return getPermsLength(num, count)
// }

// function permutations (string) {
//   const permsLength = getPermsLength(strLen)
//   let perms = []
//   let perm = string
//   let string2 = string

//   for (let i = 0; i < length(string2); i++) {

//     string2--
//     for (let j = 0; j < length(string2) - 1; j++) {
//       perms.push(perm)


//       perm = concat(perm[length(perm) - 3], concat(slice(0, length(perm) - 3, perm), slice(length(perm) - 2, length(perm), perm)))
//     }
//   }
//   return perms
// }

// ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']







function getPermsLength(str, count = 1, len = length(str)) {
  if (len === 1) return count
  count *= len
  len--
  return getPermsLength(str, count, len)
}

function permutations(string) {
  const permsLength = getPermsLength(string)
  let perms = []
  let perm = string

  for (let i = 0; i < permsLength; i++) {
    perms.push(perm)
    if (i < length(string)) {
      perm = concat(slice(i + 1, length(string), perm), slice(0, i + 1, perm))
    }
    else if (i < length(string) * 2) {
      perm = concat(slice(i + 1, length(string), perm), slice(0, i + 1, perm))
    }

  }
  return perms
}

// perm += newStr[idx]
//   newStr = concat(slice(idx + 1, length(newStr), newStr), slice(0, idx, newStr))
//   idx++

// permsLength(1) === 1
// permsLength(2) === 2
// permsLength(3) === 6
// permsLength(4) === 24
// permsLength(5) === 120

0 = 'cate' // perm
1 = 'caet' // When i === permsLength(2) - 1, switch perm[3] with perm[2]
2 = 'cate' // When i === permsLength(3) - 
3 = 'ceat' // perm[0] switch with perm[1]
4 = 'aect' // perm[0] switch with perm[2]
5 = 'teca' // perm[0] switch with perm[3]
6 = 'etca' // perm[0] switch with perm[1]
7 = 'ctea' // perm[0] switch with perm[2]
8 = 'atec' // perm[0] switch with perm[3]
9 = 'taec' // perm[0] switch with perm[1]
10 = 'eatc' // perm[0] switch with perm[2]
11 = 'cate' // perm[0] switch with perm[3]
12 = 'ctae' // perm[1] switch with perm[2]
13 = 'ceat' // perm[1] switch with perm[3]
14 =
  15
16
17
18
19
20
21
22
23


// function permutations (str, perms = [], newStr = str, perm = '', idx = 0) {
//   const permsLength = getPermsLength(str)

//   if (length(perms) === permsLength) return perms

//   if (length(perm) === length(str)) {
//     append(perm, perms)
//     perm = ''
//     newStr = str
//   }

//   perm += newStr[idx]
//   newStr = concat(slice(idx + 1, length(newStr), newStr), slice(0, idx, newStr))
//   idx++

//   return permutations (str, perms, newStr, perm, idx)
// }




// function permutations (string) {
//   const permsLength = getPermsLength(string)
//   let perms = []
//   let newStr = string
//   let perm = ''

//   for (let i = 0; i < permsLength; i++) {

//     for (let j = 0; j < length(string); j++) {
//       perm += newStr[j]
//       newStr = concat(slice(j+1, length(newStr), newStr), slice(0, j, newStr))

//       if (length(perm) === length(string)) {
//       perms.push(perm)
//       perm = ''
//       newStr = string
//     }

//     }


// function permutations (string) {
//   const permsLength = getPermsLength(string)
//   let perms = []
//   let newStr = string
//   let perm = ''

//   for (let i = 0; i < permsLength; i++) {

//     if (length(perm) === length(string)) {
//       perms.push(perm)
//       perm = ''
//       newStr = string
//     }
//     perm += newStr[0]
//     newStr = slice(1, length(newStr), newStr)
//   }
//   return perms
// }


// function getPermsLength (str, count = 1, len = length(str)) {
//   if (len === 1) return count
//   count *= len
//   len--
//   return getPermsLength(str, count, len)
// }

// function permutations (string) {
//   const permsLength = getPermsLength(string)
//   let perms = []
//   let newStr = string
//   let newStr2 = string
//   let perm = ''

//   for (let i = 0; i < permsLength; i++) {
//     for (let j = 0; j < length(string); j++) {
//       perm += newStr[j]
//     }
//     newStr2 = 

//     }



// function permutations (string) {
//   const permsLength = getPermsLength(string)
//   let perms = []
//   let newStr = string
//   let perm = ''
//   let idx = 0

//   for (let i = 0; i < permsLength; i++) {
//     if (length(perm) === length(string)) {
//       append(perm, perms)
//       perm = ''
//       newStr = string
//       idx = 0
//     }

//     perm += newStr[idx]
//     newStr = concat(slice(idx + 1, length(newStr), newStr), slice(0, idx, newStr))
//     idx++
//   }
//   return perms
// }



// function permutations (str, perms = [], newStr = str, perm = '', idx = 0) {
//   const permsLength = getPermsLength(str)

//   if (length(perms) === permsLength) return perms

//   if (length(perm) === length(str)) {
//     append(perm, perms)
//     perm = ''
//     newStr = str
//   }

//   perm += newStr[idx]
//   newStr = concat(slice(idx + 1, length(newStr), newStr), slice(0, idx, newStr))
//   idx++

//   return permutations (str, perms, newStr, perm, idx)
// }

// // In this kata you have to create all permutations of an input string 
// // and remove duplicates, if present. This means, you have to shuffle 
// // all letters from the input in all possible orders.

// // Examples:

// // permutations('a'); // ['a']
// // permutations('ab'); // ['ab', 'ba']
// // permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba'