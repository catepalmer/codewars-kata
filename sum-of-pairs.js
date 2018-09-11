const sum_pairs = (ints, s) => {
  for (let i = 0; i < ints.length; i++) {
    for (let j = 0; j < ints.length; j++) {
      if ((ints[i] + ints[j] === s) && (i !== j)) {
        return new Array(ints[i], ints[j])
      }
    }
  }
}




function sumPairs(ints, s) {
  for (let i = 0; i < ints.length; i++) {
    for (let j = 0; j < ints.length; j++) {
      if ((ints[i] + ints[j] === s) && (i !== j)) {
        return new Array(ints[i], ints[j])
      }
    }
  }
}


  let firstInt, secondInt
  ints.find((int1, i) => {
    return int1 + ints.find((int2, j) => {
      if (i !== j){
        if (int1 + int2 === s) {
          firstInt = int1
          secondInt = int2
          console.log(`firstInt on line 25: ${firstInt}, secondInt: ${secondInt}, ${int1}, ${i}, ${int2}, ${j}`)
        }
      }
    }) === s
  })
  console.log(`firstInt on line 30: ${firstInt}, secondInt: ${secondInt}`)
  if (firstInt !== undefined) return new Array(firstInt, secondInt)
}




// function sumPairs(ints, s) {
//   let firstInt, secondInt
//   ints.find((int1, i) => {
//     return int1 + ints.find((int2, j) => {
//       if (i !== j){
//         if (int1 + int2 === s) {
//           firstInt = int1
//           secondInt = int2
//           console.log(`firstInt on line 25: ${firstInt}, secondInt: ${secondInt}, ${int1}, ${i}, ${int2}, ${j}`)
//         }
//       }
//     }) === s
//   })
//   console.log(`firstInt on line 30: ${firstInt}, secondInt: ${secondInt}`)
//   if (firstInt !== undefined) return new Array(firstInt, secondInt)
// }


// function sumPairs(ints, s) {
//   const firstInt = ints.find((int1, i) => {
//     return int1 + ints.find((int2, j) => {
//       if (i !== j) return (int1 + int2 === s)
//     }) === s
//   })
//   if (firstInt !== undefined) return new Array(firstInt)
// }



// Sum of Pairs
// Given a list of integers and a single sum value, return the first two 
// values (parse from the left please) in order of appearance that add 
// up to form the sum.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 
// elements. Be sure your code doesn't time out.