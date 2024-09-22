
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];


//Write a loop under each comment in the file.
//Under the first, write a while loop that prints out each item of ingredients.

let x = 0;
while(x < ingredients.length) {
    console.log(ingredients[x])
    x++;
}

//Under the second, write a for loop that does the same thing.

for(let x = 0; x < ingredients.length; x++) {
    console.log(ingredients[x])
}
    

//And under the third, write any loop, while or for that prints out each item of ingredients but backwards (that is, the first should be "bananas" and the last "eggs").

for(let x = ingredients.length - 1; x >= 0; x-- ) {
    console.log(ingredients[x])
}
    






