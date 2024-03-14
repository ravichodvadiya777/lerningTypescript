var Student = /** @class */ (function () {
    function Student(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    return Student;
}());
// create a instens  of the student class
var std = new Student("ravi", 13, "surat");
var std1 = new Student("akash", 14, "kamrej");
console.log(std);
console.log(std1);
