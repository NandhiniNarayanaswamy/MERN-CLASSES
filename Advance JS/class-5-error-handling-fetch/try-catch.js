try {
    console.log(name);
} catch (error) {
    console.log("error", error.message);

}
//---------------------------------------------

try {
    let num = 10;
    num(); //trying to call a function but it is variable name
} catch (error) {
    console.log("error", error.message);

} finally { //finally is going to execute in both case error or not an error
    console.log("done");

}

// Throwing Custom Errors
// You can create and throw your own errors using throw.
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    divide(10, 0);
} catch (err) {
    console.log("Custom Error:", err.message);
}

// error handling in javascript is used to manage and respond to runtime errors/

//javascript provides multiple ways to handle the errors we can use try, catch, throw and finally....


// let x = 10;
// // let a = 2
// let y = x / a;
// console.log(y)


// try {
//     let x = 10;
//     let y = x / a;
// } catch(error){
//     console.log("an error occurred", error.message)
// }



// function checkAge(age){
//     if(age < 18){
//         throw new Error("You must be 18 or older to vote")
//     }
//     return "Access granted to enter the vote booth "
// }


// try {
//     console.log(checkAge(10))
// } catch(error){
//     console.log("Error is:", error.message)
// }



// something();

// try {
//     something();
// } catch(error){
//     console.log("Error is", error.message)
// }

// finally is the block where it is going to execute both the case positive and neg....
// finally block always exectutes regardless of whether an error occurs.

