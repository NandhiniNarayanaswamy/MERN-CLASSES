import { useUser } from "../context/UserContext"

function LevelFive() {
    const user = useUser()  //using this we can access the data anywhere(within userprovider)
    return (
        <>
            <h2>Level Five</h2>

            {user.name}<br />
            {user.password}
        </>
    )
}
export default LevelFive
/*
const user = useUser() invokes your small wrapper that internally calls useContext(UserContext).
user is the same object you put into value in the provider.
If you try to call useUser() outside of a provider, useContext returns undefined and user.
name will throw — so always render consumers under the provider (or handle missing value).
*/
