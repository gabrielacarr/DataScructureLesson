// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// "fizz" instead of the number and for the multiples
// of both three and five print "fizzbuzz".
// --- Example
// fizzBuzz(5);
// 1
// 2
// fizz 
// 4 
// buzz

function fizzbuzz(n) {
    for (let i = 1; i <= n; i++) {
        // Is the number a multiple of 3 and 5?
        if (i % 3 === 0 && i % 5 === 0){
            // Is the number a multiple of 3?
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            // Is the number a multple of 3?
        } else if (i % 5 === 0) {
            // Is the number a multple of 5?
            console.log('buz')
        } else {
            console.log(i);
        }
    }
}