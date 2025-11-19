import Menswear from "./Menswear"
function Kidswear({ user }) {
    return (
        <>
            <h3>Kidwear page</h3>
            <p>user is {user}</p>
            <Menswear user={user} />
        </>
    )
}
export default Kidswear