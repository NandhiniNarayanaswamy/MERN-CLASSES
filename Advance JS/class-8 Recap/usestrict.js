
// Spread operator (...) allows to expend the elements (array, object or strings)

// without spread operator

// let arr1 = [1, 2, 3, 4, 5]; //original array
// let arr2 = arr1; //assining the reference, not copying

// arr2.push(6, 7, 8, 9);

// console.log(arr1); //[1, 2, 3, 4, 5];
// console.log(arr2); //[1, 2, 3, 4, 5, 6, 7, 8, 9];

// with spead operator

// let arr1 = [1, 2, 3, 4, 5]; //original array
// let arr2 = [...arr1]; //copying

// arr2.push(6, 7, 8, 9);

// console.log(arr1); //[1, 2, 3, 4, 5];
// console.log(arr2); //[1, 2, 3, 4, 5, 6, 7, 8, 9];

// merging arrays

//without 
// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7];

// let merge = arr1.concat(arr2);
// console.log(merge)


// with
// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7];

// let merge = [...arr1, ...arr2]
// console.log(merge)

// adding the elements to an array

// let numbers = [2, 3, 4, 5];
// let numbers2 = [20, 30, 40, 50];
// // let newNumbers = [1].concat(numbers).concat([6]);
// let newNumbers = [1, ...numbers, 5, 6, ...numbers2]
// console.log(newNumbers)

// let obj1 = {name: "Ram"};
// let obj2 = {age: 100};

//let merged = Object.assign(obj1, obj2) //without
// let merged = {...obj1, ...obj2}
// console.log(merged)

// i wanted convert a String into an Array

// let str = "venkat";
// // let chars = str.split("");
// let chars = [...str]
// console.log(chars)


// remove the duplicate items in the given array

// let numbers = [1, 2, 3, 4, 1, 2, 3, 4, 5, 5, 6, 7, 5, 6, 7];
// let removeDuplicates = [...new Set(numbers)];
// console.log(removeDuplicates)

//real time examples
// let apiData = {id: 1, name: "venkat", role: "user"};
// let updatedData = {...apiData, role: "admin"};
// console.log(updatedData)
// console.log(apiData)


let user = {
    name: "Venkat",
    address: {
        city: "Chennai",
        area: "T nagar"
    }
}

// updating the city
let updatedUser = {
    ...user,
    address: { ...user.address, area: "marina beach" }
};

console.log(updatedUser);
console.log(user)