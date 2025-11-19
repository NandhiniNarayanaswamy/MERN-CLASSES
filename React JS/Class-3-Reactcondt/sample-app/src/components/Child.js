
function Child({ name = "bolu", children }) {
    return (
        <>
            {name} <br></br>
            {children}
        </>
    )
}
export default Child