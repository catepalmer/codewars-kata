function whoIsNext(names, r) {
  let names2 = names

  for (let i = 0; i < r; i++) {
    if (i % 1000 === 0) {
      setTimeout(() => {
        names2.push(names2[i])
      })
    }
    else {
      names2.push(names2[i])
    }
  }
  return names2[r]
}



// Need to find away around page timing out/maximum call stack being exceeded.


// function whoIsNext(names, r, count = 0) {
//   if (count === r) return names[r]
//   if (count % 1000 === 0) {
//     setTimeout(() => {
//       names.push(names[count], names[count])
//       count++
//     })
//   } else {
//     names.push(names[count], names[count])
//     count++
//   }
//   return whoIsNext(names, r, count)
// }





// (function foo(i) {
//   console.log(i);
//   if(i % 1000 === 0){
//     setTimeout(function() {
//       foo(i+1);
//     }); //don't need 0 at the end.
//   } else {
//     foo(i+1);
//   }
// })(0);









// Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a 
// "Double Cola" drink vending machine; there are no other people in 
// the queue. The first one in the queue (Sheldon) buys a can, drinks 
// it and doubles! The resulting two Sheldons go to the end of the 
// queue. Then the next in the queue (Leonard) buys a can, drinks it 
// and gets to the end of the queue as two Leonards, and so on.

// For example, Penny drinks the third can of cola and the queue will 
// look like this:

// Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
// Write a program that will return the name of the person who will 
// drink the n-th cola.

// Input
// The input data consist of an array which contains at least 1 name, 
// and single integer n.

// 1  ≤  n  ≤  1000000000
// Output / Examples
// Return the single line — the name of the person who drinks the n-th 
// can of cola. The cans are numbered starting from 1.

// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1) == "Sheldon"
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52) == "Penny"
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951) == "Leonard"