// Array destructuring in javascript allows us to extract values from an array 
// and assign to the variables in the concise and readable way.


// normal way
// let mobiles = ["LG", "OPPO", "VIVO", "IPHONE"];
// // console.log(mobiles.length)
// // we can access the elements in array using the index
// let first = mobiles[0];
// let second = mobiles[1];
// let third = mobiles[2];
// let fourth = mobiles[3];
// console.log(first, second, third, fourth)


// Array destructuring
// let mobiles = ["LG", "OPPO", "VIVO", "IPHONE"];
// let[first, second, ...moremobiles] = mobiles
// console.log(first, second, moremobiles);


// let numbers = [1, [2, 3], 4];

// let first = numbers[0];
// let second = numbers[1][0];
// let third = numbers[1][1];
// let fourth = numbers[2];

// let[first, [second, third], fourth] = numbers
// console.log(first, second, third, fourth)


let numbers = [10, 20, 30, 40, 50];
// let first = numbers[0];
// let third = numbers[2];
let [first, , third] = numbers
console.log(first, third)