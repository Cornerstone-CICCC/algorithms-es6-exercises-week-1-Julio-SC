/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

function laughter (times) {

    let laughter = "";
    for (let x = 1; x <= times; x++) {
        laughter = laughter + "ha"
    }
      
    console.log(`${laughter}!`)
}


laughter(5)