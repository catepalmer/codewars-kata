function diamond(n){
    let diam = ""
    if (n % 2 === 0 || n < 1) return null
    let numA = 1
    let numS = (n - 1) / 2
    let a = "*"
    let s = " "
    const newLine = "\n"

    for (let i = 0; i <= numS + 1; i++) {
        console.log("numA: " + numA + ", numS: " + numS + ", a: " + a + ", s: " + s + ", i: " + i)
        diam += s.repeat(numS) + a.repeat(numA) + newLine
        s--
        a = a + 2
    }
  
    return diam;
  }




//   function diamond(n){
//     let diam = ""
//     if (n % 2 === 0 || n < 1) return null
//     let numAsts = 1
//     let numSpaces = (n - 1) / 2

//     for (let i = 0; i < n; i++) {
//         diam += s * " " + a * " " + "\n"
//         s--
//         a = a + 2
//     }
  
//     return diam;
//   }