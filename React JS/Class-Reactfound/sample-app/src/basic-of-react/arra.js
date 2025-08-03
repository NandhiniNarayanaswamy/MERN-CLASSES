function App() {
    const names = ["nandhu", "shiv", "ganesh", "muruga", "niharika"]
    return (
        <>
            <ul>
                {names.map((name) => (< li > {name}</li>))}
            </ul >
        </>
    )
}
export default App