import { memo } from "react"
function Count({ count }) {
    console.log("4.Count");

    return (
        <>
            <h4>The count is :{count}</h4>
        </>
    )
}
export default memo(Count)