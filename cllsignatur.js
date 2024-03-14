var brand1 = {
    name: "parle",
    price: 5,
    quntity: 10,
    geet: function (countryy) { return "".concat(brand1.price * brand1.quntity, " this is my product price and i am from ").concat(countryy); }
};
var brand2 = {
    name: "parle",
    price: 5,
    quntity: 100,
    geet: function (countryy) { return "".concat(brand2.price * brand2.quntity, " this is my product price and i am from ").concat(countryy); }
};
// const brand3:BrandType = {
//     name : "parle",
//     price : 50,
//     quntity : 10
// }
// console.log(brand1,brand2,brand3);
// how to re-use type 
// const calculateTotalPrice1 = (brand3:BrandType, quntity = brand2.quntity || 0) => {
//     return quntity * brand3.price;
// }
console.log(brand1.geet('india'));
console.log(brand2.geet('nepal'));
