import { memo } from "react"
function Countbtn({ handleCount }) {
    console.log("5.Countbtn");
    return (
        <>
            <button onClick={handleCount}>Increament Age</button>
        </>
    )
}
export default memo(Countbtn)