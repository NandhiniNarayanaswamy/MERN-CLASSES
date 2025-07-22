function calculate(num1, num2, callback) {
    return callback(num1, num2)
}
function sub(a, b) {
    return a - b
}
function add(a, b) {
    return a + b
}
function mul(a, b) {
    return a * b
}
console.log(calculate(10, 5, add));
