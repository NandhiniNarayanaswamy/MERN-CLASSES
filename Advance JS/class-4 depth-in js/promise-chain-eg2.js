function getuser(id) {
    return new Promise((resolve, reject) => {
        console.log("GOT USER ID:", id);
        setTimeout(() => {
            resolve({ id: id, name: "nandhu" })
        }, 2000)
    })
}
function getsubscription(id) {
    return new Promise((resolve, reject) => {
        console.log("YOUR SUBCRIBTION ID IS:", id);
        setTimeout(() => {
            resolve([
                { id: 1, title: "Hotstar" },
                { id: 2, title: "Disney" },
                { id: 3, title: "prime" }
            ])
        }, 2000)

    })
}
function calculatesub(subscription) {
    return new Promise((resolve, reject) => {
        console.log("Calculating sum");

        setTimeout(() => {
            resolve(subscription.length * 100)
        }, 2000)
    })
}
/*Step 2: .then(getsubscription)

.then() expects a callback function.

You gave it getsubscription (a function reference).

So when getuser(1) finishes, .then() will call your function with the resolved value:

getsubscription({ id: 1, name: "nandhu" }) 

// .then returns the promise, 
// Step 4: Key Rule
👉 Whatever you return inside .then() becomes the resolved value of the new Promise that .then() gives back.
If you return a value → .then() returns a Promise that resolves to that value.
If you return a Promise → .then() waits for it and resolves with its result.
If you throw an error → .then() returns a Promise that rejects.
Example 1 — simplest form
let p = Promise.resolve(10);

let p2 = p.then((value) => {
    console.log("Got:", value);
    return value * 2;
});

console.log(p2);
Output:
--------
Got: 10
Promise { <pending> }   // p2 is a Promise!
// 2. Why does .then() return a new Promise?

Think of .then() as a chain link:

It waits for the original promise to finish.

It runs your callback with the result.

It wraps whatever you return into a new Promise.

That’s why you can do chaining:

Promise.resolve(10)
  .then(num => num * 2)   // returns 20
  .then(num => num + 5)   // returns 25
  .then(final => console.log(final)); // 25
Each .then() makes a fresh Promise that passes its result to the next.*/
//----------------------------------using .then we solved this-------------------------------------------
// getuser(1)
//     .then(getsubscription)
//     .then(calculatesub)
//     .then(res => console.log(res));

//************************************************using async & await *********************************** */
async function displaytotalcost() {
    const userinfo = await getuser(1)  //we await(means wait) where the function takes time, typically we say to wait and give result
    const subscription = await getsubscription(userinfo)
    const calculation = await calculatesub(subscription)
    console.log(calculation); //last value needs to be logged because it stores there

}
displaytotalcost()










