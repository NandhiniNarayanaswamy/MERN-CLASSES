function choosefood(foodItem) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`1.Food choosen : ${foodItem}`)
            resolve({ food: foodItem, status: "choosen" })
        }, 1000)
    })
}

function placeorder(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            order.status = "order placed";
            resolve(order)
            //resolve(order);  // ← this means the task succeeded AND you're passing 'order' forward
            // It means:
            // ✅ This step is complete
            // 📦 Here’s the updated order object
            // 🔁 Send it to the next function in the.then() chain
        }, 1000)
    })
}
function preparedfood(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            order.status = "prepared"
            resolve(order)
        }, 1000)
    })
}
function packedfood(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            order.status = "packed"
            resolve(order)
        }, 1000)
    })
}
function deliveredfood(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            order.status = "Delivered"
            resolve(order)
        }, 1000)
    })
}
choosefood("biriyani")
    .then(placeorder) //This .then() runs after the promise is resolved.
    .then(preparedfood)
    .then(packedfood)
    .then(deliveredfood)
    .then((order) => {
        console.log("final order status is", order);

    })
/*
🔁 This line starts everything:

choosefood("biriyani")
This calls the choosefood function with "biriyani" as input.

After 1 second, it resolves with:

{ food: "biriyani", status: "choosen" }
📦 Then this happens:

.then(placeorder)
The .then() receives the resolved value from choosefood — which is:

{ food: "biriyani", status: "choosen" }
So this value becomes the input to placeorder.

Meaning this is happening behind the scenes:

placeorder({ food: "biriyani", status: "choosen" });
*/