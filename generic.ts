// generic function to log and return an input value

function logAndReturn <N>(val:N):N{
    return val;
}

// console.log(logAndReturn("ravi"))
// console.log(logAndReturn(3))
// console.log(logAndReturn(true))


// how to use multiple generic 
function multiGene <t,n>(a:t,b:n){
    console.log(typeof(a))
    console.log(typeof(b))
}
 
multiGene<number , string>(10,"ravi");
multiGene("akash",100);

