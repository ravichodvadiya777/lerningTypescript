// craete a class but don't create an insteance
var MathOperation = /** @class */ (function () {
    function MathOperation() {
    }
    MathOperation.sum = function (num1, num2) {
        return num1 + num2;
    };
    MathOperation.sub = function (num1, num2) {
        return num1 - num2;
    };
    MathOperation.multi = function (num1, num2) {
        return num1 * num2;
    };
    MathOperation.division = function (num1, num2) {
        return num1 / num2;
    };
    MathOperation.PI = Math.PI;
    return MathOperation;
}());
console.log(MathOperation.PI);
console.log(MathOperation.sum(10, 5));
console.log(MathOperation.sub(10, 5));
console.log(MathOperation.multi(10, 5));
console.log(MathOperation.division(10, 5));
