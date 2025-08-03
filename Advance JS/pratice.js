function choosefood(fooditem) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`you have choosen : ${fooditem}`);
            resolve({ food: fooditem, status: "choosen" })
        }, 1000)
    })
}
function placeorder(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            order.status = "placed"
            resolve(order)
        }, 1000)
    })
}
function preparefood(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            order.status = "Food is preparing"
            resolve(order)
        }, 1000)
    })
}
function packfood(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            order.status = "Food has packed"
            resolve(order)
        }, 1000)
    })
}
function delivery(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            order.status = "Delivered"
            resolve(order)
        }, 1000)
    })
}
choosefood("biriyani")
    .then((order) => {
        console.log("current status is ", order);
        return placeorder(order)
    })
    .then((order) => {
        console.log("current status is ", order);
        return preparefood(order)
    })
    .then((order) => {
        console.log("current status : ", order);
        return packfood(order)
    })
    .then((order) => {
        console.log("current status : ", order);
        return delivery(order)
    })
    .then((order) => {
        console.log("Your final status is : ", order);
    })