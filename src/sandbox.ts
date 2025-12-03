let greet : Function;

greet = () =>{
    console.log("Hello, world")
}

// const add = (a: number, b: number, c: number | string = 10)=>{
const add = (a: number, b: number, c?: number | string)=>{
    console.log(a+b)
}

add(3,4);

const minus = (a: number, b: number)=>{
    return a+b
}

let result = minus(10,7);