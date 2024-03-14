var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    Person.prototype.introduce = function () {
        return "Hi, I am ".concat(this.name, " and I am ").concat(this.age, " year old. I  live in ").concat(this.city, ".");
    };
    return Person;
}());
// create a new student class
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(name, age, city, grade) {
        var _this = _super.call(this, name, age, city) || this;
        _this.grade = grade;
        return _this;
    }
    return Students;
}(Person));
// create a instens  of the student class
var person1 = new Person("ravi", 13, "surat");
var person2 = new Person("akash", 14, "kamrej");
var students1 = new Students("akash", 14, "kamrej", 10);
console.log(person1);
console.log(person2.introduce());
console.log(students1);
console.log(person1);
