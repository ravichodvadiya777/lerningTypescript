type ProductType = {
    name : string;
    price:number;
    quntity?:number
}
const product1:ProductType = {
    name : "parle",
    price : 5,
    quntity : 10
}
const product2:ProductType = {
    name : "parle",
    price : 5,
    quntity : 10
}
const product3:ProductType = {
    name : "parle",
    price : 50,
}
// console.log(product1,product2,product3);

// how to re-use type 

const calculateTotalPrice = (product3:ProductType, quntity = product2.quntity || 0) => {
    return quntity * product3.price;
}


    console.log(calculateTotalPrice(product3));
