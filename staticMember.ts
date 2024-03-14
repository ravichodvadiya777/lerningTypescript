
// craete a class but don't create an insteance

class MathOperation {
    public static PI : number = Math.PI;

    public static sum(num1 : number, num2 : number){
        return num1 + num2;
    }

    public static sub(num1 : number, num2 : number){
        return num1 - num2;
    }

    public static multi(num1 : number, num2 : number){
        return num1 * num2;
    }
    public static  division(num1:number, num2:number){
        return num1 / num2;
    }
}

console.log(MathOperation.PI);
console.log(MathOperation.sum(10,5));
console.log(MathOperation.sub(10,5));
console.log(MathOperation.multi(10,5));
console.log(MathOperation.division(10,5));