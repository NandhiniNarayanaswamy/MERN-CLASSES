// function App() {
//     const isLoggedIn = true;
//     const user = "nandhini"
//     return (
//         <>
//             {isLoggedIn && <p>Welcome to the dashboars {user}</p>}
//             {/* 🧠 Why use && in JSX?
// It's a short, clean way to show something only if a condition is true — instead of writing an if statement or using a ternary like ? :. */}
//             <p>{user || "guest"}</p>
//         </>

//     )
// }
function App() {
    const greet = (name) => `name is  ${name}`
    return (
        <>
            {greet("manu")}
        </>
    )
}

export default App