function Child({ sendMessage }) {
    const user = {
        name: "Venkat",
        city: "Hosur",
        country: "India"
    }
    const send = () => {
        sendMessage(user)
    }
    return (
        <>
            <button onClick={send}>click</button>
        </>
    )
}
export default Child