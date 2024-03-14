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
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    return Shape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color, radious) {
        var _this = _super.call(this, color) || this;
        _this.color = color;
        _this.radious = radious;
        _this.displayArea = function () {
            console.log("This is ".concat(_this.color, " square with radius ").concat(_this.radious, "."));
        };
        return _this;
    }
    Square.prototype.calculateArea = function () {
        return this.radious * this.radious;
    };
    return Square;
}(Shape));
var square = new Square('red', 5);
console.log(square.calculateArea());
square.displayArea();
