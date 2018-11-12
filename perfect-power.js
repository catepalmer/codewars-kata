function isPP (n) {
  const upperLimit = Math.floor(Math.sqrt(n))

  for (let i = 2; i <= upperLimit; i++) {
    for (let j = 2; j <= upperLimit; j++) {
      if (Math.pow(i, j) === n) {
        return [i, j]
      }
    }
  }
  return null
}







// Both m and k will be between 2 and the square root of n. So
// check combinations of integers between these two values?



// A perfect power is a classification of positive integers:

// In mathematics, a perfect power is a positive integer that 
// can be expressed as an integer power of another positive 
// integer. More formally, n is a perfect power if there exist 
// natural numbers m > 1, and k > 1 such that mk = n.

// Your task is to check wheter a given integer is a perfect power. 
// If it is a perfect power, return a pair m and k with mk = n as a 
// proof. Otherwise return Nothing, Nil, null, NULL, None or your 
// language's equivalent.

// Note: For a perfect power, there might be several pairs. For 
// example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions. 
// However, the tests take care of this, so if a number is a perfect 
// power, return any pair that proves it.