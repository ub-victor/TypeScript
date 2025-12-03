"use strict";
let greet;
greet = () => {
    console.log("Hello, world");
};
// const add = (a: number, b: number, c: number | string = 10)=>{
// void is the complete lack on value
const add = (a, b, c) => {
    console.log(a + b);
};
add(3, 4);
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
