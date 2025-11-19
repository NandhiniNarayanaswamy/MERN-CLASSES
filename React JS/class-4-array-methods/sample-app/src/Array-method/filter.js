//filter method -> filtering the no. which is divide by 2(i,e) odd number
// function App() {
//     const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     const evenumbers = numbers.filter((num =>
//         num % 2 === 0
//     ))
//     return (
//         <>
//             <ul>
//                 {evenumbers.map((numb) => (
//                     <li>{numb}</li>
//                 ))}
//             </ul>

//         </>
//     )
// }
// export default App

//filter() - string based on the length
// function App() {
//     const str = ["VIVO", "OPPO", "LG", "SAMSUNG"]
//     const strlength = str.filter(num => num.length > 5)
//     return (
//         <>
//             <ul>
//                 {strlength.map((str) => <li>{str}</li>)}
//             </ul>

//         </>
//     )
// }
// export default App

//filer()-filter based on true
function App() {
    const product = [
        { id: 1, name: "LG", available: 'true' },
        { id: 2, name: "OPPO", available: 'true' },
        { id: 3, name: "VIVO", available: 'false' },
        { id: 4, name: "SAMSUNG", available: 'true' },
    ]
    const avail = product.filter(pro => pro.available === "true")
    return (
        <>
            <ul>
                {avail.map((prod) => <li>{prod.name}</li>)}
            </ul>
        </>
    )
}
export default App