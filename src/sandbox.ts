// var character = 'victor';
// console.log(`Hello, ${character}!`);
// var inputs = document.querySelectorAll('input');
// console.log(inputs);


// inputs.forEach(input => {
//   console.log(input);
// });


// const circ = (diameter: number) => {
//   return Math.PI * diameter;
// };
// console.log(circ(10)); 

// Arrays 
// let names = ["victoire", "Vincent", "Vainqueur",]
// names.push("Victorine")
// name.push(12); // it cannot works

// let mixed = ["ken", 4, 'chun-li', 8, 9]
// mixed.push("virginie") // it work

// mixed[0] = 3


// Object
// let victor = {
//   name: "Ushindi",
//   belt: "back",
//   age: 30
//   };
//   // victor.Skills = ["S.E", "Com", "BS"] // it won't work as we didn't add it  inthesa


//   victor.name = "Ushindi";
//   victor.belt = "back";
//   victor.age = 20;
// console.log(victor)
 
// Explicit Types

// let character: string;
// let age: number;
// let isLoggedIn: boolean;

// // age = "Victor" // This is a mistake and will cause an error as we declare  age as number not string type
// age = 20  // here the code wsill run and be compile

// // Array

// let victors: string[];
// // let victors: string[]=[]; // here you can push as there is an empty array

// // victors = [10,20] // the will never get run as the are of the other type different for the one in 

// victors = ["vick", "Tob"] // here we initialize with [] and we did not initialize it with an empty array


// Union  Types : here the way to say it could be of one of two or one of three types

// let mixed: (string|number)[] = [];
// mixed.push("Winner");
// mixed.push(12)
// mixed.push(true) // here it will output an error as we did not declare a boolean type  


// // Object

// let vick1: object;
// vick1 = {name: "Ushindi", age:20}

// let vick2 : {
//   name: string,
//   age: number,
//   beltcolour:string
// }

// vick2 = {name: "Winner", age: 25, beltcolour: "Red"}// and we cannot add anything apart from what we initialize the object with

// Any type


// let age: any =  25; // same as writing let age : any; age = 15;

// age = true


// console.log(age);

// age = "Victoite";
// console.log(age)

// age = {name: "Victoire"}

// console.log(age);

// let mixed: any[] = [];

// mixed.push(5)
// mixed.push("Victoire")
// mixed.push(false)
// console.log(mixed)

// let ninja:{name: any, age:any};
// ninja = {name:12, age: "age"}


console.log("ninja")


