import { add, identity, reduce, reverse, times } from 'ramda'

function sumNums (n, total = 0) {
  while (n > 0) {
    n = n - 1
    total = total + n
  }
  return total
}

function removeNb(n) {
  return reduce(add, n, reverse(times(identity, n)))
}


reduce(R.subtract, 0, [1, 2, 3, 4])
R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]