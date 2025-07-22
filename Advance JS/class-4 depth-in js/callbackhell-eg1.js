//callback hell happen when multiple async operation are nested inside each other

function loginuser(username, password, callback) {
    setTimeout(() => {
        console.log("user logged in");
        callback()

    }, 1000)
}
function fetchuserdata(callback) {
    setTimeout(() => {
        console.log("user data fetched");
        callback()
    }, 1000)
}
function getorderdetails(callback) {
    setTimeout(() => {
        console.log("fetched the user order details");
        callback();

    }, 1000)
}
function processpayment(callback) {
    setTimeout(() => {
        console.log("payment processed");
        callback()
    }, 1000)
}
/*✅ Where is processPayment() called?
In this part of your code:

processPayment(function () {
  console.log("order completed")
});
Here:

You're calling processPayment()

And you're passing a function as the argument:

function () {
  console.log("order completed");
}
That function becomes the callback parameter inside processPayment.*/

loginuser("nandhini", "123", function () {
    fetchuserdata(function () {
        getorderdetails(function () {
            processpayment(function () {
                console.log("order completed");

            })
        })
    })
})