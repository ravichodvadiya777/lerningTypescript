// generic function to log and return an input value
function logAndReturn(val) {
    return val;
}
// console.log(logAndReturn("ravi"))
// console.log(logAndReturn(3))
// console.log(logAndReturn(true))
// how to use multiple generic 
function multiGene(a, b) {
    console.log(typeof (a));
    console.log(typeof (b));
}
multiGene(10, "ravi");
multiGene("akash", 100);
