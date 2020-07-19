// --- Directions 
// Given a string, return a new string with the reversed 
// order of characters
// --- Examples
//      reverse('apple') === 'leepa'
//      reverse('hello') === 'olleh'
//      reverse('Greetings!') === '!sgniteerG'

// solution one:
function reverse(str) {
   const arr = str.split(''); // working with an array of characters
   arr.reverse(); // flip all elements of an array
   return arr.join('') // join all those elements back into a string
}

// code clean up for solution one:
function reverse(str) {
    return str.split('').reverse().join('')
}

// solution two, with for loop:
function reverse(str) {
    let reversed = '';

    for (let character of str) {
        reversed = character + reserved;
    }
    return reversed; 

}



 // create an empty string called 'reversed'
 // for each character provided in the string
 // take the character and add it to the start of the 'reversed'
 // return the variable 'reversed'


 // solution three, array helper:
 function reverse(str) {
   return  str.split('').reduce(() => {
        return character + reversed;
    }, '')
}

 // code clean for solution three:
 function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}


// --- Directions 
// Given a string, return a new string with the reversed 
// order of characters
// --- Examples
//      reverse('apple') === 'leepa'
//      reverse('hello') === 'olleh'
//      reverse('Greetings!') === '!sgniteerG'

// Learning 
function reverse(str) {
    return str.split('').reverse().join('')
}

function reverse(str) {
    return str.split('').reverse().join('')
}

function reverse(str) {
    return str.split('').reverse().join('')
}

function reverse(str) {
    return str.split('').reverse().join('')
}

function reverse(str) {
    return str.split('').reverse().join('')
}

function reverse(str) {
    return str.split('').reverse().join('')
}

v
