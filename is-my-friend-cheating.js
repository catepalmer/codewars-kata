import { add, identity, isEmpty, length, not, reduce, remove, times } from 'ramda'

function removeNb(n) {
  const nums = remove(0, 1, times(identity, n + 1))
  const sum = reduce(add, 0, nums)
  let arr = []

  for (let i = 0; i < length(nums); i++) {
    for (let j = 0; j < length(nums); j++) {
      let pairArr = []
      if ((nums[i] * nums[j] === sum - nums[i] - nums[j]) && i !== j) {
        pairArr.push(nums[i], nums[j])
        if (not(isEmpty(pairArr))) arr.push(pairArr)
      }
    }
  }
  return arr
}