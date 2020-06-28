// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is  not. Palindromes are strings that form
// the same word if it is reversed.
// do include spaces and punctuation in determining is the string is a palindrome.
// --- Examples:
// palidrome('abba') === true
// palidrome('abcdefg') === false

///// first attempt
function palindrome(str) {
    return pali.split('').reverse((rev, char) => char + rev ? true : false)
}

// first solution
function palindrome(str) {
  const reversed = str.split('').reverse().join('');

  return str === reversed;
}

///// second solution with array helper
// .every()
// bollean check on every element within an array
// ex. array.every((val) => val > 5);
// checks twice and first solution should be used  
function palindrome(str) {
   return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    })
}

// learning
function palindrome(str) {
  const reversed = str.split('').reverse().join('');

return str === reversed;
}

// .every() returns a boolean
// boolean check on every element in the array

function palindrome(str) {
 return str.split('').every((char, i) => {
return char === str[str.length - i - 1];
  })
}


function palindrom(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1]
  });
}

function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}



function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1]
  });
}

function palindrome(str) {
  const reversed = str.split('').reversed().join('');
  return str === reversed;
}

function palindrome(str) {
  return str.split('').every((e, i) => {
    return e  === str[str.length - i - 1];
  })
}

function palidrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

/// if case sensitive use .toLowerCase()

function palindrome(str) {
  str = str.toLowerCase()
  const resevered = str.split('').reversed().join('');
  return str === resevered;
}

// time complexity
// although methods are form of for loops
// .join('') uses linear time complexity
// O(N) time complexity  
// it has to iterate through all the elements within the input string

// space complexity
// O(N) is the same length of the input string 
