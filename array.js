// array
// 1) Using square brackets :
var number = [1, 2, 3, 4, 5];
// console.log(number);
// 2) using array constructor :
var number1 = new Array(1, 2, 3, 4, 5);
// console.log(number1);
// 3) using the array.of method : 
// 
// const names = Array.of("ravi","akash","shyam");
// console.log(names);
// ************************** How to use array inbuilt methods ******************************* 
var fndNames = ["ravi", "akash", "shyam"];
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
var numbers = [1, 2, 3, 4, 5, 6, 7];
// const evenNumber = numbers.filter((curVal) => curVal % 2 === 0);
// console.log(evenNumber)
// get maximum number 
var maxNumber = function (num) {
    return Math.max.apply(Math, num);
};
var maximumNumber = maxNumber(numbers);
console.log(maximumNumber);
// multi datatype in array
var data = ["ravi", 12, "akash", 13, true];
var dataFind = function (num) {
    return num;
};
var result = dataFind(data);
console.log(result);
// array of object 
var arrayOfObj = [{ name: "dhaval", roll: 122 }, "ravi", 12, "akash", 13, { name: "manish" }, true];
var getData = function (num) {
    return num;
};
var getResult = getData(arrayOfObj);
console.log(getResult);
