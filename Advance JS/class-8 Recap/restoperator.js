// rest operator ... allows us to collect muliple elements into an array or object. It helps us in handling 
// "variable length arugments" in functions with dynamic data structure.


// function addUser(a, b, c){
//  return a + b + c;
// }
// console.log(addUser(10, 50, 70, 80, 90, 100))


// function addUser(...users){
//  return users.reduce((total, num) => total + num)
// }
// // console.log(addUser(10, 50, 70, 80, 90, 100));
// console.log(addUser(10, 100));
// console.log(addUser(10, 100, 200, 500));


// total = accumulator 10
// num = currentvalue
// initialvalue = 10


// if wanted extract the spcific properties from an object
let student = {
    name: "venkat",
    age: 31,
    grade: "A",
    city: "Chennai",
    country: "INDIA"
}

let { name, age, ...otherDetails } = student
console.log(name)
console.log(age);
console.log(otherDetails)