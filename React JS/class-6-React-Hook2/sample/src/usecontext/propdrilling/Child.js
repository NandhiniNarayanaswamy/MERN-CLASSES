import MessageContext from "../../context/MessageContext"
import { useContext } from "react"
function Child() {
    const message = useContext(MessageContext)
    return (
        <>
            <h4>{message}</h4>
        </>
    )
}
export default Child