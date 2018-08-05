/* The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))((" */


function duplicateEncode(word){
    const strArr = word.split('')
    const sortedArr = strArr.sort()
    let uniqueChars = []
    let arrOfBrackets = []
    sortedArr.forEach((char, i) => {
      if (char[i] != char[i-1] && char[i] != char[i+1]) {
        uniqueChars.push(char[i])
        }
      strArr.map(char => {
        if (uniqueChars.find(uniqueChar => {
          char == uniqueChar
          })) {
            arrOfBrackets.push('(')
          }
        else {
          arrOfBrackets.push(')')
        }
      })
    })
  return arrOfBrackets.toString()
}
