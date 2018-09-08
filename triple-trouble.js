function tripleDouble(num1, num2) {
const triples = num1.toString().match(/(\d)\1{2,}/g)
const doubles = num2.toString().match(/(\d)\1{1,}/g)

}
  

  // str.match(/ain/g);
  // \d{3}
  // /\d{3}/g
  // (/\d\2+/)
  // (/(.)\1{3,}/g)

  // const doubleNums = num2Arr.filter((num, i) => {
  //   // if (i < num1Arr.length - 1) {
  //     return (num == num[i+1] && tripleNums.find(item => item == num))
    
  // })

  // for (let i = 0; i < num1Arr.length - 2; i++) {
  //   if ((num1Arr[i] == num1Arr[i+1]) && (num1Arr[i] == num1Arr[i+2])) {
  //     triples.push(num1Arr[i])
  //   }
  // }

  // for (let i = 0; i < num1Arr.length - 1; i++) {
  //   if ((num2Arr[i] == num2Arr[i+1])) {
  //     doubles.push(num2Arr[i])
  //   }
  // }



// Pseudocode:
// Need to loop through num1 and check if each value is the same as the next two 
// values after it. If there is a value for which this is true, return this value 
// to a variable, then search num2 for a double of this value. Need to do this for 
// any and all triples in num1, so should be able to return more than one value 
// from the function that loops over num1 to check for triples - so return these to 
// an array and then map over them when running the function on num2.




// function tripleDouble(num1, num2) {

//   const num1Arr = num1.toString().split('')
//   const num2Arr = num2.toString().split('')
//   let triples = []
//   let doubles = []
//   let match = false

//   for (let i = 0; i < num1Arr.length - 2; i++) {
//     if ((num1Arr[i] == num1Arr[i+1]) && (num1Arr[i] == num1Arr[i+2])) {
//       triples.push(num1Arr[i])
//     }
//   }

//   for (let i = 0; i < num1Arr.length - 1; i++) {
//     if ((num2Arr[i] == num2Arr[i+1])) {
//       doubles.push(num2Arr[i])
//     }
//   }

  
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