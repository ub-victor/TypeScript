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

