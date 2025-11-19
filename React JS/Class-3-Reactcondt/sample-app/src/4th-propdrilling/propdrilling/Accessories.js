import Kidswear from "./Kidswear"
function Accessories({ user }) {
    return (
        <>
            <h3>Accessories page</h3>
            user is {user}
            <Kidswear user={user} />
        </>
    )
}
export default Accessories