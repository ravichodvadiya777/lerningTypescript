var message = "Hello World";
console.log(message);
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 5));
// function perameter argument optional
var geet = function (name, id) {
  if (id === void 0) {
    id = 1;
  }
  if (id) {
    return "welcome to ".concat(name, ", your id is ").concat(id, ".");
  } else {
    return "welcome to ".concat(name, ".");
  }
};
console.log(geet("shunyavaksh", 8787));
