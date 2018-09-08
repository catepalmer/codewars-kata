function countBits(n) {
    let binary = []
    let bitCount = 0
    if (n >= 0 && n <= 4294967295) {
        for (let i = 0; n > 0; i++) {
            binary.push(n % 2)
            n = Math.floor(n / 2)
        }
    }
    binary = binary.reverse().join('')
    bitCount = binary.match(/1/g).length
    console.log(bitCount, binary)
  }






//   function countBits(n) {
//     let binary = []
//     let bitCount = 0
//     if (n >= 0 && n <= 4294967295) {
//         for (let i = 0; n > 0; i++) {
//             binary.push(n % 2)
//             n = Math.floor(n / 2)
//         }
//     }
//     binary = binary.reverse().join('')
//     bitCount = binary.match(/1/g).length
//     console.log(bitCount, binary)
//   }





// Write a function that takes an (unsigned) integer as input, 
// and returns the number of bits that are equal to one in the 
// binary representation of that number.

// Example: The binary representation of 1234 is 10011010010, 
// so the function should return 5 in this case.