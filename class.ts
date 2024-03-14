
class Student {
    name : string;
    age : number;
    city : string;

    constructor(name:string, age:number, city:string){
        this.name = name;
        this.age = age; 
        this.city = city;
    }
}

// create a instens  of the student class

const std:Student = new  Student("ravi", 13, "surat");
const std1:Student = new  Student("akash", 14, "kamrej");
console.log(std)
console.log(std1)