import { useUser } from "../context/UserContext"
function LevelFive() {
    const user = useUser()
    return (
        <>
            <p>LevelFive</p>
            {user.name}
            {user.Password}
        </>
    )
}
export default LevelFive