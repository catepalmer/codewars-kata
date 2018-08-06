// The goal of this exercise is to convert a string to a new string where each character 
// in the new string is '(' if that character appears only once in the original string, or 
// ')' if that character appears more than once in the original string. Ignore capitalization 
// when determining if a character is a duplicate.

// Examples:

// "din" => "((("
// "recede" => "()()()"
// "Success" => ")())())"
// "(( @" => "))(("


function duplicateEncode(word) {
  const strArr = word.split('')
  const sortedArr = word.split('').sort()
  const uniqueChars = getUniqueChars(sortedArr)
  const bracketArr = replaceWithBrackets(strArr, uniqueChars)
  return bracketArr.toString().replace(/,/g, "");
}


function getUniqueChars(sortedArr) {
  let uniqueChars = []
  if (sortedArr[0] != sortedArr[1]) {
    uniqueChars.push(sortedArr[0])
  }
  for (let i=1; i < sortedArr.length-1; i++) {
    if (sortedArr[i] != sortedArr[i-1] && sortedArr[i] != sortedArr[i+1]) {
      uniqueChars.push(sortedArr[i])
    }
  }
  if (sortedArr[sortedArr.length-1] != sortedArr[sortedArr.length-2]) {
    uniqueChars.push(sortedArr[sortedArr.length-1])
  }
  return uniqueChars
}


function replaceWithBrackets(strArr, uniqueChars) {
  let bracketArr = []
  for (let i=0; i < strArr.length; i++) {
    let matchedChars = uniqueChars.filter(char => {
      return char == strArr[i]
    })
    if (matchedChars.length > 0) {
      bracketArr.push('(')
    } else {
      bracketArr.push(')')
    }
  }
  return bracketArr
}