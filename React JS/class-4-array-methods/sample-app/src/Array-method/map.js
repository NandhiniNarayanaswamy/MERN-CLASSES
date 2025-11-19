// rendering the list of array strings
// function App() {
//     const mobiles = ["OPPO", "VIVO", "MI", "SAMSUNG"]
//     return (
//         <>
//             <ul>
//                 {
//                     mobiles.map((mobile) => <li>{mobile}</li>)
//                 }
//             </ul>

//         </>
//     )
// }
// export default App

//rendering the list of array objects
// function App() {
//     const users = [
//         { id: 1, name: "nandhu", age: 10 },
//         { id: 2, name: "guna", age: 12 },
//         { id: 3, name: "rana", age: 21 },
//         { id: 4, name: "sindhu", age: 22 }
//     ]
//     return (
//         <>
//             <ul>
//                 {
//                     users.map((user) => <li>{user.name}</li>)
//                 }
//             </ul>

//         </>
//     )
// }
// export default App

// tranforming data with map
// function App() {
//     const numbers = [1, 2, 3, 4, 5]
//     const multiple = numbers.map((num) => num * 2)
//     return (
//         <>
//             <div>
//                 {multiple.map((numb) => <p>{numb}</p>)}
//             </div>
//         </>
//     )
// }
// export default App

//sending as a prop
// import User from "./User"
// function App() {
//     const users = [
//         { id: 1, name: "nandhu", age: 10 },
//         { id: 2, name: "guna", age: 12 },
//         { id: 3, name: "rana", age: 21 },
//         { id: 4, name: "sindhu", age: 22 }
//     ]
//     return (
//         <>
//             {
//                 users.map((user) => (
//                     <p><User name={user.name} age={user.age}></User></p>
//                 ))
//             }


//         </>
//     )
// }
// export default App

//using condition styling

function App() {
    const numbers = [1, 2, 3, 4, 5]
    return (
        <>
            <ul>
                {numbers.map((num) => (
                    <li style={{ color: num % 2 === 0 ? "green" : "red" }}
                    >{num}</li>
                ))}
            </ul>

        </>
    )
}
export default App