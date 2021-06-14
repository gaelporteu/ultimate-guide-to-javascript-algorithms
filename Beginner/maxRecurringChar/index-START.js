/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



// function maxRecurringChar(text) {
//     // initialize the charMap to an empty object
//     let charMap = {};
//     let maxCharValue = 0;
//     let maxChar = '';

//     // use a for..of loop to iterate through the string
//     // for every character we check if it has been mapped already
//     // is a property of the charMap object -> by calling the .hasOwnProperty() method
//     // if it is then we increment its value, otherwise its property is set to 1
//     for (let char of text) {
//         if (charMap.hasOwnProperty(char)) {
//             charMap[char]++;
//         } else {
//             charMap[char] = 1;
//         }
//     }

//     for (let char in charMap) {
//         if (charMap[char] > maxCharValue) {
//             maxCharValue = charMap[char];
//             maxChar = char;
//         }
//     }

//     return maxChar;
// }

function maxRecurringChar(text) {
    let charMap = {};
    let charArray = [];
    let vaulesArray = [];
    let maxCharValue = 0;

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    charArray = Object.keys(charMap);
    vaulesArray = Object.values(charMap);
    maxCharValue = Math.max(...vaulesArray);

    return charArray[vaulesArray.indexOf(maxCharValue)];
}



module.exports = maxRecurringChar;