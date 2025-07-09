Introduction


- Alternative to javascriptt (superset)
- Allow us to strick types
- Supports mordern features (arrow functions, let,const)
- Extra features like (generics, Interfaces, tuples ect)


Computer does note understand Typescript code
And as the compure does not understand TypeScript code we need to compile our code to JavaScript code by writing in the terminal 

=> tsc sandbox.ts sandbox.js
 - As the tx and js has the same name we can just write
=> tsc sandbox.ts // add the compiler will look for the one with js and if it does not get it it can just create a file with typescript name but with js extension.


And to let the TypeScript to be updated(compile) itself to js

=> tsc sandbox.ts -w

The main fundamental Difference between typescript and JavaScript is that
 TypeScrip uses strict types and javascript does not which means

 when typing let characters = "Victoire" which means if we define a variable as string then if TypeScript it will always be a string and it types cannot be chaged later and same would be true of any other type  so and the type change to same type , string to string.

 In TypeScript we do not use the whole number or the integers or floats / decimal numbers we only have the number type which covers the whole lot which makes it a little bit easier

 The way to git type 


const circ = (diameter: number) => {
  return Math.PI * diameter;
};
console.log(circ(10)); 

Here in the function circ we used one parameter and we can it a type to avoid errors 

and even when working with  array you cannot push an element with different type as the ones the array if you do the ts code can't be compile to the js code
 
What then when you need with different types

Then you've to declare an array with different types and you can still be able  change 

When working with Object and to did to edit sth the you need to update and it has to have same structure as the one created at first but the value can be different but repeate just key value , and value only that can be change   but with the type as in the precedent object created


Types Explicites

When write our variables in TypeScript and assign them value , TypeScript automatically infers the variable type based on the value assign


what if you just need to create a variable and you do not know yet what will be going in  how create be achieved to avoid errors

    eg: let character: string; // whch can be done to different types different from a string 


Here is the the way of doing the union of types espacially on the array 

let mixed: (string|number)[] = []; 

Any type

We use the any type in  JavaScript to say this variable is would be any type in the future could be a boolen, number, and string which means at any point in time it could change the type like now it can be a boolen and be a strint type in the future 

When start a project with TypeScript

when having a project that is more complex you might have several typeScript and several TypeScript files and you might not mixed all together you might need to separate them into different folders may be a folder for all of our cource files where we write our typeScript and a folder for all of the files that were then going to deploy at the end to some kimd of web server 
eg: public and src forder

