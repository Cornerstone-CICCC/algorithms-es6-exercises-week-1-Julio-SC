/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

/*function emotions(emotion, action) {
    console.log (`I am ${emotion},${action}!`)
}
    
  emotions("happy", "hahaha")*/

  function emotions (emotion, action) {
    console.log (`I am ${emotion}, ${action(2)}!`)
  }

  emotions ("happy", function(num){
    let laugh = ""

    for(let x = 1; x <= num; x++) {
        laugh += "ha"
    }
    return laugh
  })