"use strict";
//let greet: Function;
// example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
calc = (num1, num2, action) => {
    if (action === "add") {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
// example 3
let loginDetails;
loginDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
