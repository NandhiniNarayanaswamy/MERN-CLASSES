const mypromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("operation is successfull")
    } else {
        reject("operation is rejected")
    }
})
// handling the promise... we are going to handle the promise using .then(), .catch(), .finally()

mypromise
    .then((result) => {
        console.log("success:", result);
    })
    .catch((error) => {
        console.log("error:", error);
    })
    .finally(() => {
        console.log("promise completed");

    })