// --- Directions 
// Given an integer, return an integer that is reverse
// ordering of numbers.
// --- Examples
//      reversedInt(15) === 51
//      reversedInt(981) === 189
//      reversedInt(500) === 5
//      reversedInt(-15) === -51
//      reversedInt(-90) === -9


// Notations:
// both input and output should produce numbers not a string
//------Two ways to solve:
// 1.
// .toString turns number into string
//  Example:
// const myNumber = 200;
// myNumber.toString()
// prints a string 200
// to make into a number again use parseInt()
// const nuyNumber = 400
// parseInt(myNumber.toString())
// prints 400 as a number

// 2.
// Math.sign()
// pass in a number
// if positive, returns 1
// if negative, returns -1
// Example:
// Math.sign(4000), returns 1
// Math.sign(-4000), returns -1

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('')
    return parseInt(reversed) * Math.sign(n);
}



// learning
function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
}


function reversedInt(n) {
    const reversed = n.toString().split('').reverse().join('')
    return parseInt(reversed) * Math.sign(n);
}