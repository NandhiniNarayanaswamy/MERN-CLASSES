import { useUser } from "../context/UserContext"

function LevelFive() {
    const user = useUser()
    return (
        <>
            <h2>Level Five</h2>

            {user.name}<br />
            {user.password}
        </>
    )
}
export default LevelFive

