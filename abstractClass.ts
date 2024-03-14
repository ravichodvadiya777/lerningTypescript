
abstract class Shape{
    constructor(protected color : string){}

    abstract calculateArea() : number;
    abstract displayArea : () => void;
}

class Square extends Shape{
    constructor(protected color : string, protected radious: number){
        super(color);
    }

    public calculateArea(): number {
        return  this.radious * this.radious;
    }

    public displayArea = () => {
        console.log(`This is ${this.color} square with radius ${this.radious}.`);
    };

}

const square = new Square('red',5);
console.log(square.calculateArea());
square.displayArea();