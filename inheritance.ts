class Person {
    name : string;
    age : number;
    city : string;

    constructor(name:string, age:number, city:string){
        this.name = name;
        this.age = age; 
        this.city = city;
    }

    introduce(): string{
        return `Hi, I am ${this.name} and I am ${this.age} year old. I  live in ${this.city}.`;
    }
}

// create a new student class
class Students extends Person{
    grade : number;
    constructor(name:string, age:number, city:string, grade:number){
        super(name, age, city);
        this.grade = grade; 
    }
    // introduce(): string{
    //     return `Hi, I am ${this.name} and I am ${this.age} year old. I  live in ${this.city}.I am in ${this.grade}th Grade.`;
    // }
}

// create a instens  of the student class

const person1:Person = new  Person("ravi", 13, "surat");
const person2:Person = new  Person("akash", 14, "kamrej");
const students1:Person = new  Students("akash", 14, "kamrej",10);
console.log(person1)
console.log(person2.introduce())
console.log(students1)
console.log(person1)