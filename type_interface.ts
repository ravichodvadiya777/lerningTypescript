
// what is diffrent between type and interface

// type
// type student11 = {
//     name : string;
//     rollNo : number
// }

// type student12 = {
//     city : string;
//     state : string
// }

// const s1 : student11 | student12 = {
//     name: "ravi",
//     rollNo: 23,
//     city : "surat"
// }

// console.log(s1);


// interface
interface student11 {
    name : string;
    rollNo : number
}

interface student12 {
    city : string;
    state : string
}

interface Data extends student11, student12 {}; 

class BioData implements Data{
    constructor(
        public name: string,
        public rollNo: number,
        public city : string,
        public state : string
    ){}
}
const stu1 = new BioData("ravi",23,"suart","gujarat");
console.log(stu1)
