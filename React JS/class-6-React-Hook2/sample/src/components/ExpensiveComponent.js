import React, { useMemo } from "react"


const ExpensiveComponent = React.memo(({ numbers }) => {
    console.log("expensive component rendered")

    const sortedNumbers = useMemo(() => {
        console.log("sorting numbers....")
        return numbers.sort((a, b) => a - b)

    }, [numbers])

    return (
        <>
            <h3>Large Number: {sortedNumbers[sortedNumbers.length - 1]}</h3>
        </>
    )

})

export default ExpensiveComponent