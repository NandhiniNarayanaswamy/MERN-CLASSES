// Object destructuring in javascript allwos to extract the values from the objects and assign them to the variables

// const user = {
//     name: "venkat",
//     age: 31, 
//     email: "venkat@gmail.com"
// };
// normal way to access the object values
// let name = user.name;
// let age = user.age;
// let email = user.email
// console.log(name);
// console.log(age);
// console.log(email)

// object destructuring
// const user = {
//     name: "venkat",
//     age: 31, 
//     email: "venkat@gmail.com"
// };
// let{name, age, email} = user;
// console.log(name);
// console.log(age);
// console.log(email)


// renaming
// const employee = {
//     empName: "venkat",
//     empRole: "tech lead"
// };

// let name = employee.empName;
// let role = employee.empRole;
// let{empName:name, empRole:role} = employee
// console.log(name, role)


// const product = {
//     name: "Laptop"
// };

// let {name, price = 25000} = product;
// console.log(name, price)


// const user = {
//     name: "venkat",
//     address: {
//         city: 'chennai',
//         area: "T nagar"
//     }
// }

// let city = user.address.city;
// let area = user.address.area;
// console.log(city, area)

// let {address: {city, area}} = user;
// console.log(city, area)


// extract the spcific properties inside the fuction

// const user = {
//     name: "ram",
//     age: 25
// }

// function printUser(user) {
//     console.log(user.name, user.age)
// };

// printUser(user)


const user = {
    name: "ram",
    age: 25
}

function printUser({ name, age }) {
    console.log(name, age)
};

printUser(user)