import { memo } from "react"
function Age({ age }) {
    console.log("2.Age")
    return (
        <>
            <h4> Age is:  {age}</h4>
        </>
    )
}
export default memo(Age)