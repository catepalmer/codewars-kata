import { add, identity, isEmpty, length, not, reduce, remove, times } from 'ramda'

function removeNb(n) {
  const nums = remove(0, 1, times(identity, n + 1))
  const sum = reduce(add, 0, nums)
  let arr = []

  nums.forEach((num1, i) => {
    nums.forEach((num2, j) => {
      let pair = []
      if (num1 * num2 === sum - num1 - num2 && i !== j) pair.push(num1, num2)
      if (not(isEmpty(pair))) arr.push(pair)
    })
  })
  return arr
}




function removeNb2 (n) {
  const nums = [...Array(n+1).keys()].slice(1, n+1)
  const sum = nums.reduce((acc, num) => acc + num, 0)
  let arr = []

  nums.forEach((num1, i) => {
    nums.forEach((num2, j) => {
      let pair = []
      if (num1 * num2 === sum - num1 - num2 && i !== j) pair.push(num1, num2)
      if (pair.length > 0) arr.push(pair)
    })
  })
  return arr
}
