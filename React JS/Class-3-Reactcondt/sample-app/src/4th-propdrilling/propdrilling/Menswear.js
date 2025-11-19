import Mobiles from "./Mobiles"
function Menswear({ user }) {
    return (
        <>
            <h3>Menswear Page</h3>
            <p>user is {user}</p>
            <Mobiles user={user} />
        </>
    )
}
export default Menswear