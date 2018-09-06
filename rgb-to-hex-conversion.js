function rgb(r, g, b){
  const hexes = '0123456789ABCDEF'.split('')
  let rHex1 = hexes[Math.floor(r/16)]
  let rHex2 = hexes[r/16]-hexes[Math.floor(r/16)]
  console.log(rHex1, rHex2)
  }





  So need to figure this out with some pseudocode:
  const r1 = Math.floor(r/16)
  if (r1 > 9) {

  }



//   function rgb(r, g, b){
//     let rHex1 = ''
//     let rHex2 = ''
//     let gHex1 = ''
//     let gHex2 = ''
//     let bHex1 = ''
//     let bHex2 = ''

//     for (let i = 0; i < 256; i++) {

//     }
//   }

//   const hexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
//   const r1 = Math.floor(r/16)
//   if (r1 > 9) {
      
//   }


//   const r1 = Math.floor((r+1)/16)
//   let rHex1 = r1.forEach(num => {
      
//   })



//   function rgb(r, g, b){
//     let rHex1 = ''
//     let rHex2 = ''
//     let gHex1 = ''
//     let gHex2 = ''
//     let bHex1 = ''
//     let bHex2 = ''

//     for (let i = 0; i < 256; i++) {
        
//     }
//   }



// The rgb() method is incomplete. Complete the method so that passing 
// in RGB decimal values will result in a hexadecimal representation being 
// returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) 
// argument values that fall out of that range should be rounded to the 
// closest valid value.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3