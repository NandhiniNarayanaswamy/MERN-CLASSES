import { memo } from "react"
function Agebtn({ handleage }) {
    console.log("3.Agebtn")
    return (
        <>
            <button onClick={handleage}>Age Increament</button>
        </>
    )
}
export default memo(Agebtn)