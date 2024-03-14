// what is diffrent between type and interface
;
var BioData = /** @class */ (function () {
    function BioData(name, rollNo, city, state) {
        this.name = name;
        this.rollNo = rollNo;
        this.city = city;
        this.state = state;
    }
    return BioData;
}());
var stu1 = new BioData("ravi", 23, "suart", "gujarat");
console.log(stu1);
