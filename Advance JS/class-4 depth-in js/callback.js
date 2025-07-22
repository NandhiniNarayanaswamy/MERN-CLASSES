// A callback is the function that is passed  as an argument to another function.
function greet(name, callback) {  //here name holds nandhini & callback holds sayhello function
    console.log("hello", name);
    callback();
}
//callback function
function sayhello() {
    console.log("welcome");

}
greet("nandhini", sayhello) //calling the function by passing as an arument to another function

//foreach
let numbers = [1, 2, 3, 4, 5]
//using foreach
numbers.forEach(function (number) {
    console.log(number * 2);

})