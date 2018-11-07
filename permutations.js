function getPermsLength (str, count = 1, len = length(str)) {
  if (len === 1) return count
  count *= len
  len--
  return getPermsLength(str, count, len)
}

function permutations (string) {
  const permsLength = getPermsLength(string)
  let perms = []
  let perm = string

  for (let i = 0; i < permsLength; i++) {
    perms.push(perm)
    perm = concat(perm[length(perm) - 3], concat(slice(0, length(perm) - 3, perm), slice(length(perm) - 2, length(perm), perm)))
  }
  return perms
}

['abc', 'acb', 'bac', 'bca', 'cab', 'cba']







function getPermsLength (str, count = 1, len = length(str)) {
  if (len === 1) return count
  count *= len
  len--
  return getPermsLength(str, count, len)
}

function permutations (string) {
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