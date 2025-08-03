function App() {
    const handleclick = () => {
        alert("button clicked")
    }
    return (
        <>
            <button onClick={handleclick}>click me</button>
            <button onClick={() => { alert("button-1 clicked") }}>click</button>
        </>
    )
}
export default App