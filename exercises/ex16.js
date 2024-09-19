/*
For this quiz, you're going to create a function called buildTriangle() that will accept an input (the triangle at its widest width) and will return the string representation of a triangle. See the example output below.

buildTriangle(10);
Returns:

* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * * 
* * * * * * * 
* * * * * * * * 
* * * * * * * * * 
* * * * * * * * * * 
We've given you one function makeLine() to start with. The function takes in a line length, and builds a line of asterisks and returns the line with a newline character.

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}
You will need to call this makeLine() function in buildTriangle().

This will be the most complicated program you've written yet, so take some time thinking through the problem before diving into the code. What tools will you need from your JavaScript tool belt? Professionals plan out their code before writing anything. Think through the steps your code will need to take and write them down in order. Then go through your list and convert each step into actual code. Good luck!
*/

function makeLine(length) { // funcion recibe el largo de la linea
    var line = ""; // variable que almacenara el largo
    for (var j = 1; j <= length; j++) { // bucle que nos generara las lineas del piramide
      line += "* " // asignacion individual de cada asterisco por linea
    }
    return line + "\n"; // retornamos una linea de la piramide
}


function buildTriangle(num) {// funcion para la altura de la piramide
  let py = ""; // variable que almacenara las lineas mandadas por makeline
  for (let p = 1; p <= num; p++) {//bucle que nos va a indicar en que linea se encuentra el codigo
    py+=makeLine(p)//almacenamos el valor regresado por la funcion  make line en cada iteracion
  }
  console.log(py)// imprimimos el resultado
}

buildTriangle (25)