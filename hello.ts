let message = "Hello World";
console.log(message);

function sum(a:number,b:number){
    return a + b;
}
console.log(sum(10,5));


// function perameter argument optional

const geet = (name:string,id:number = 1) => {
    if(id){
        return `welcome to ${name}, your id is ${id}.`
    }else{
        return `welcome to ${name}.`
    }
}
console.log(geet("shunyavaksh",8787));