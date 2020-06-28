// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is  not. Palindromes are strings that form
// the same word if it is reversed.
// do include spaces and punctuation in determining is the string is a palindrome.
// --- Examples:
// palidrome('abba') === true
// palidrome('abcdefg') === false

///// first attempt
function palidrome(str) {
    return pali.split('').reverse((rev, char) => char + rev ? true : false)
}

// first solution
function palidrome(str) {
  const reversed = str.split('').reverse().join('');

  return str === reversed;
}

///// second solution with array helper
// .every()
// bollean check on every element within an array
// ex. array.every((val) => val > 5);
// checks twice and first solution should be used  
function palidrome(str) {
   return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    })
}

