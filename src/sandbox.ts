type StringOrNum = string| number;
type objWithName = {name: string, uid: StringOrNum};

const logDetails = (uid: StringOrNum, item: String)=>{
    console.log(`${item} has a uid of ${uid}`);
}


const greet = (user: )=>{
    console.log(`${user.name} says hello`);
}