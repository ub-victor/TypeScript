type StringOrNum = string| number;

const logDetails = (uid: String | Number, item: String)=>{
    console.log(`${item} has a uid of ${uid}`);
}


const greet = (user: {name: string, uid: String | number})=>{
    console.log(`${user.name} says hello`);
}