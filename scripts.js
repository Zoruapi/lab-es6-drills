
// ====== Template Literals and Defaults Parameters Value

// Objectives from 1 to 4

/* function favMovie(movie) {
    console.log(`My favorite movie is ${movie}`);
}

favMovie();
 */

// Objectives from 5 to 7

/* function favMovie(movie = "The Room") {
    console.log(`My favorite movie is ${movie}`);
}

favMovie(); */

// Objectives from 8 to 10

function favMovie(movie = "The Room", name = "Tommy Wiseau") {
    console.log(`My name is ${name} and my favorite movie is ${movie}`);
}

favMovie("How to train your Dragon", "Zorua");
favMovie();

// Q: Do the default values appear in the console?
// A: Yes, they appear when I call the function without passing any values

// =========== Arrow Functions ================

// Objectives from 1 to 3

/* let favMovie = (movie = "The Room", name = "Tommy Wiseau") => {
    console.log(`My name is ${name} and my favorite movie is ${movie}`);
}

favMovie(); */

// Objective 4

/* let favMovie = (movie = "The Room", name = "Tommy Wiseau") => console.log(`My name is ${name} and my favorite movie is ${movie}`);

favMovie(); */

// Objectives from 5 to 9

/* let getFirstName = (fullName) => {
    return fullName.split(" ")[0];
}

let getFirstNameConcise = (fullName) => fullName.split(" ")[0];

console.log(`First name usign arrow function is ${getFirstName("Zorua pi")}`);
console.log(`First name usign arrow function with concise body 
    is ${getFirstNameConcise("Zorua pi")}`); */

// Objectives 10 and 11

let doMath = (x = 0, y = 0) => {
    return {
        exponent: x ** y,
        product: x * y
    }
}
let x = 3;
let y = 4;
let math = doMath(x, y);

console.log(`The exponent result of ${x} and ${y} is ${math.exponent} and the 
    product of both is ${math.product}`);

// ========= Spread Syntax ==========

// Objectives from 1 to 3

/* let showInfo = (name, location, favFood) => {
    console.log(`My name is ${name} and my favorite food is ${favFood} at ${location}`);
}

let arr = ["Zorua", "Spain", "Chicken with Rice"];

showInfo(...arr); */

// Objectives from 4 to 8

let spread = (name) => {
    let info = [...name];
    for (let i = 0; i < info.length; i++) {
        console.log(info[i]);
    }
}

let myName = "Zorua";

spread(myName);