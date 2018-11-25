import { isNil, join, length, remove, slice, sort, split, toString } from 'ramda'

function nextSmaller(num) {
  const numArr = split('', toString(num))
  const len = length(numArr)
  let idx

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (numArr[i] > numArr[j]) idx = i
    }
  }

  if (len < 2 || isNil(idx)) return -1
  const startOfNum = join('', slice(0, idx, numArr))
  const endOfNum = join('', sort(((a, b) => b - a), join('', remove(0, length(startOfNum), remove(idx + 1, 1, numArr)))))
  const finalNum = startOfNum + numArr[idx + 1] + endOfNum
  return finalNum
}




// Write a function that takes a positive integer and returns 
// the next smaller positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// Return -1 (for Haskell: return Nothing), when there is no 
// smaller number that contains the same digits. Also return -1 
// when the next smaller number with the same digits would require 
// the leading digit to be zero.