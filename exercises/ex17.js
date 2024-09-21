/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

function laughter (times) {

    let laught = "";
    for (let x = 1; x <= times; x++) {
        laught += "ha"
    }
      
    console.log(`${laught}!`)
}


laughter(5)