/*
    CIT 281 Project 1
    Name: Alex Hart
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// function to create a string using all random characters that is 5-25 characters long
function stringGenerator() {
    // declare the lower case alphabet to pull random letters from
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    // pick a random number between 5 and 25 as per instructions
    let length = getRandomInteger(5,25);
    // declare an empty string to add randomly generated numbers into
    let stringArray = []
    // Use a for loop to run through adding random letters to the stringArray 
    // up to how ever many times chosen by the random generator
    for (i=0; i < length; i++) {
        // choose a random number between 0 and 25 to act as the placeholder for the letter
        // that will be picked from the alphabet string
        let random = getRandomInteger(0,25)
        // pull the random letter from the string and assign it to letter
        let letter = alphabet[random];
        // add the random letter to the string
        stringArray.push(letter)
    }
    // taking the stringArray and making it into a string seperating the letters by nothing
    let string = stringArray.join('')
    // return the random string with random letters amounting to a total of 5 to 25
    return string
}

stringGenerator()