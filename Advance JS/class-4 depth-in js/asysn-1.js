console.log("start");
console.log("a");
console.log("b");
console.log("c");
console.log("d");
function addsum() {
    let sum = 0;
    for (let i = 1; i <= 40; i++) {
        sum += i;
        console.log(("adding", i, "current sum", sum));

    }
    console.log("final sum is", sum);
}
setTimeout(() => {
    addsum();
}, 1000)
console.log("e");
console.log("f");





