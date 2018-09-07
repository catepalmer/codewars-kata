function tripleDouble(num1, num2) {

  const num1Arr = num1.toString().split('')
  const num2Arr = num2.toString().split('')

  console.log(num1Arr)

  return num1Arr.filter((num, i) => {
    console.log(num1Arr.length - 3, num, num[i+1] , num[i+2])
    return (i < num1Arr.length - 3 && num == num[i+1] && num == num[i+2])
  })


}






// The find() method returns the value of the first element in an array 
// that pass a test (provided as a function).
// The find() method executes the function once for each element present 
// in the array:

// If it finds an array element where the function returns a true value, 
// find() returns the value of that array element (and does not check 
// the remaining values)
// Otherwise it returns undefined

// array.find(function(currentValue, index, arr),thisValue)







// for (let i = 0; i < num1.length - 2; i++) {
//   (num1[i] == num1[i+1] && num1[i] == num1[i+2]) ? num1[i] : null
// }




// const tripledNum = num1Arr.find((num, i) => {
//   (num == num[i+1] && num == num[i+2])
// })
// console.log(tripledNum)


  // function tripleDouble(num1, num2) {
  //   const tripledNum = num1.toString().split('').reduce((total, val, i) => {
  //     (i < num1.length - 1 && val[i] === val[i+1] && val[i] === val[i+2]) ? val : null
  //   }, null)
  //   console.log(tripledNum)
  
  // }
  


// function tripleDouble (num1, num2) {
//     const tripledNum = num1.toString().split().filter((num, i) => {
//         console.log(num, i, num[i+1], num[i+2])
//         return (num === num[i+1] && num === num[i+2])
//     })
//     console.log(tripledNum)

// }





// Write a function

// tripledouble(num1,num2)
// which takes in numbers num1 and num2 and returns 1 if there is a straight 
// triple of a number at any place in num1 and also a straight double of the 
// same number in num2.
// For example:
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1
// If this isn't the case, return 0