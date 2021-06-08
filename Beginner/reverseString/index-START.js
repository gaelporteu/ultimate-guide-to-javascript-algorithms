/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    // Test 1
    // return text.split("").reverse().join("");
    
    // Test 2 spread operator
    // return [...text].reverse().join('');
    
    // Test 3 for loop
    // let result = "";
    // for (let i = text.length -1; i >= 0; i--) {
    //     result += text[i];
    // }
    // return result;

    // Test 4 for...of
    // let result = "";
    // for (let char of text) {
    //     result = char + result;
    // }
    // return result;

    // Test 5 using if else and .substr
    // if (text === "") {
    //     return "";
    // } else {
    //     return reverseString(text.substr(1)) + text[0];
    // }

    // Test 6 using the reduce() method
    return text.split('').reduce((acc, char) => char + acc, "");

}



module.exports = reverseString