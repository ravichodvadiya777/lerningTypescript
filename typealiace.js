var product1 = {
    name: "parle",
    price: 5,
    quntity: 10
};
var product2 = {
    name: "parle",
    price: 5,
    quntity: 10
};
var product3 = {
    name: "parle",
    price: 50,
};
// console.log(product1,product2,product3);
// how to re-use type 
var calculateTotalPrice = function (product3, quntity) {
    if (quntity === void 0) { quntity = product2.quntity || 0; }
    return quntity * product3.price;
};
console.log(calculateTotalPrice(product3));
