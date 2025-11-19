
import Child from "./component/Child"
function App() {
    const handleReceiveMessage = (user) => {
        alert(`Name: ${user.name},city:${user.city},country:${user.country}`)
    }
    return (
        <>
            <Child sendMessage={handleReceiveMessage} />
        </>
    )
}
export default App