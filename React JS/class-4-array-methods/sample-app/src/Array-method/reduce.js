//reduce() in js
// function App() {
//     const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     const reducenum = number.reduce((acc, cur) => (acc + cur), 0)
//     return (
//         <>
//             {reducenum}
//         </>
//     )
// }
// export default App

//reduce() in array od object
// function App() {
//     const product = [
//         { product: "LG", price: 10000 },
//         { product: "OPPO", price: 2000 },
//         { product: "SAMSUNG", price: 6000 },
//         { product: "VIVO", price: 30000 },
//     ]
//     const reduceprice = product.reduce((acc, cur) => (acc + cur.price), 0)
//     return (
//         <>
//             {reduceprice}
//         </>
//     )
// }
// export default App

//reduce() - in array of object v use filter and reduce
function App() {
    const products = [
        { product: "LG", price: 10000 },
        { product: "OPPO", price: 2000 },
        { product: "SAMSUNG", price: 6000 },
        { product: "LG", price: 30000 },
    ]
    const totalproduct = products.filter(pro => pro.product === "LG").reduce((acc, cur) => acc + cur.price, 0)
    return (
        <>
            {totalproduct}
        </>
    )
}
export default App