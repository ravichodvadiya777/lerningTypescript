type BrandType = {
    name : string;
    price:number;
    quntity:number;
    geet : (country : string) => string
}
const brand1:BrandType = {
    name : "parle",
    price : 5,
    quntity : 10,
    geet : (countryy : string) => `${brand1.price * brand1.quntity} this is my product price and i am from ${countryy}`
}
const brand2:BrandType = {
    name : "parle",
    price : 5,
    quntity : 100,
    geet : (countryy : string) => `${brand2.price * brand2.quntity} this is my product price and i am from ${countryy}`
}

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