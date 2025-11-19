import Checkout from "./Checkout"
function Mobiles({ user }) {
    return (
        <>
            <h3>Mobiles page</h3>
            <p>user is  {user}</p>
            <Checkout user={user} />
        </>
    )
}
export default Mobiles