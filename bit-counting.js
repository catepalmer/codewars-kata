function countBits(n) {
  let binary = []
  for (let i = 0; n > 0; i++) {
    binary.push(n % 2)
    n = Math.floor(n / 2)
  }
  return (binary.length > 0) ? binary.reverse().join('').match(/1/g).length : 0
}



// Write a function that takes an (unsigned) integer as input, 
// and returns the number of bits that are equal to one in the 
// binary representation of that number.

// Example: The binary representation of 1234 is 10011010010, 
// so the function should return 5 in this case.