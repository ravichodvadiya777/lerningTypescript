// array

// 1) Using square brackets :

const number:number[] = [1,2,3,4,5];
// console.log(number);


// 2) using array constructor :

const number1:number[] = new Array(1,2,3,4,5);
// console.log(number1);

// 3) using the array.of method : 
// 
// const names = Array.of("ravi","akash","shyam");
// console.log(names);


// ************************** How to use array inbuilt methods ******************************* 

const fndNames:string[] = ["ravi","akash","shyam"];

// console.log(fndNames);

// 1) Using push
// fndNames.push("rakesh");
// console.log(fndNames);

// 2) pop
// fndNames.pop();
// console.log(fndNames);


// ********************** Loop method ***********************

// 1) for loop

// for(let i=0;i<fndNames.length;i++){
//     console.log(fndNames[i]);
// }


// 2) for of loop

// for(let fndName of fndNames){
//     console.log(fndName);
// }


// 3) for each loop

// fndNames.forEach((curVal:string) => {
//     console.log(curVal)
// })


// 4) map method

// fndNames.map((curVal) => {
//     console.log(curVal);
// })


// 5) filter method
const numbers = [1,2,3,4,5,6,7];
// const evenNumber = numbers.filter((curVal) => curVal % 2 === 0);
// console.log(evenNumber)


// get maximum number 
const maxNumber = (num:number[]) => {
    return Math.max(...num);
}
let maximumNumber = maxNumber(numbers)
console.log(maximumNumber)

// multi datatype in array
const data = ["ravi",12,"akash",13, true];
const dataFind = (num: (number | string | boolean) []) => {
    return num;
}
let result = dataFind(data)
console.log(result);


// array of object 
const arrayOfObj = [{name : "dhaval",roll : 122},"ravi",12,"akash",13,{name : "manish"}, true];
const getData = (num: (number | string | boolean | {name : string, roll? : number}) []) => {
    return num;
}
let getResult = getData(arrayOfObj)
console.log(getResult);