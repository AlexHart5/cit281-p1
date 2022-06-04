/*
    CIT 281 Project 1
    Name: Alex Hart
*/

// Solving using multiple lines

// Declare the week array
const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// pull the current date data
let date = new Date();
// display the current day determined from the date data and with that number pull the appropriate day
console.log(week[date.getDay()]);


// Solving using one line

console.log(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()])