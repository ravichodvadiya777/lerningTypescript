type PersonInfo = readonly[string,number,boolean];


const displayInfo = (person:PersonInfo) => {
    const [name, age, driverLicense] = person;
    return `My name is ${name} and my age is ${age} and I have ${driverLicense ? "a" : "not"} drive license`;
}



const person11:PersonInfo = ['ravi',28,true];
// const person2:PersonInfo = ['ravi',true,123]; // this is not valid because of PersonInfo allready set field type
const person22:PersonInfo = ['akash',25,false];

console.log(displayInfo(person11));
console.log(displayInfo(person22));