// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples:
// maxChar('abccccccd') === 'c'
// maxChar('apple 1231111') === '1'

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';
    
    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    // console.log(charMap);
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}



// ---- Notations
// Common String Questions:
// What is the most common character in a string?
// Does string A have the same characters as string B? (is it an anagram?)
// Does the given string have any repeated characters in it?

// -----
// turn the string into an object
// where the objects keys are the letters of the string
// that hold values assigned with the number of times repeated
// find the property with the highest value
// with a value greater than one, means it is repeated

// --- Lesson
const string = "Hello There"
const chars = {};

for (let char of string) {
    chars[char] = chars[char] + 1 || 1; // if falsy, otherwise add 1
}

chars;

// --- Learning
// using a character map 
// object that takes every character of a source string
// add it as a key to the object 
// value of that key is the number of times it appears in the string


function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charMap[char]){
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
        }
        // console.log(charMap)
        for (let char in charMap) {
            if (charMap[char] > max) {
                max = charMap[char];
                maxChar = char;
            }
        }
        return maxChar;
    }

    // for (let char in charMap)
    // char is the objects keys, not value
    // object starts with o
    // do not use for let of loop to iterate through it
    // use for let in


    function maxChar(str) {
        
        const maxChar = '';
        const max = 0;
        const charMap = '';

       for (let char of str) {
        if (maxChar[char] > max) {
            charMap[char] ++;
        } else {
            charMap[char] = 1
        }
        }

        for ( let char in str) {
            if(charMap[char] > max){
                max = charMap[char]
                maxChar = char
            }
        }
        return maxChar;
    }