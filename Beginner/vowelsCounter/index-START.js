/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


// An iterative approach to counting the number of vowels in a string of text.
const Vowels = ["a", "e", "i", "o", "u"];

function vowelsCounter(text) {
    // Initialize the counter
    let counter = 0;

    // Loop through the text to test if each character is a vowel
    for (let letter of text.toLowerCase()) {
        if (vowelsCounter.includes(letter)) {
            counter++;
        }
    }

    // Return number of vowels
    return counter;
}

// Using regular expressions

function vowelsCounter(text) {
    //Search text with Regex and store all matching instances
    let matchingInstances = text.match(/[aeiou]/gi);

    //Check if matching instances exist then calculate length
    if (matchingInstances) {
        // Return number of vowels
        return matchingInstances.length;
    } else {
        return 0;
    }
}

module.exports = vowelsCounter;
