var displayInfo = function (person) {
    var name = person[0], age = person[1], driverLicense = person[2];
    return "My name is ".concat(name, " and my age is ").concat(age, " and I have ").concat(driverLicense ? "a" : "not", " drive license");
};
var person1 = ['ravi', 28, true];
// const person2:PersonInfo = ['ravi',true,123]; // this is not valid because of PersonInfo allready set field type
var person2 = ['akash', 25, false];
console.log(displayInfo(person1));
console.log(displayInfo(person2));
