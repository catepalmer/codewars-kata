function getPermsLength (str, count = 1, len = length(str)) {
  if (len === 1) return count
  count *= len
  len--
  return getPermsLength(str, count, len)
}

function permutations (str, perms = [], newStr = str, perm = '', idx = 0) {
  const permsLength = getPermsLength(str)

  if (length(perms) === permsLength) return perms

  if (length(perm) === length(str)) {
    append(perm, perms)
    perm = ''
    newStr = str
  }

  perm += newStr[idx]
  newStr = concat(slice(idx + 1, length(newStr), newStr), slice(0, idx, newStr))
  idx++
  
  return (str, perms, newStr, perm, idx)
}


// // In this kata you have to create all permutations of an input string 
// // and remove duplicates, if present. This means, you have to shuffle 
// // all letters from the input in all possible orders.

// // Examples:

// // permutations('a'); // ['a']
// // permutations('ab'); // ['ab', 'ba']
// // permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba'