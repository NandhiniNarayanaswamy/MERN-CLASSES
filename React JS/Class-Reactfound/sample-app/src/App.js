function App() {
    const obj = {
        name: "nandhu",
        age: 28,
        city: "Bangalore",
        ocupation: "Software Engineer"
    }
    const update = { ...obj, city: "London" }
    return (
        <>
            {JSON.stringify(update)}
            {/*🔍 What does JSON.stringify(updatedPerson) do?
In React, you can't just directly render objects like this:

{updatedPerson} // ❌ This will cause an error or show [object Object]
React can only directly render:

Strings

Numbers

JSX elements (like <p>, <div>, etc.)

Since updatedPerson is an object, we must convert it to a string to show it on the screen.

That’s why we use:

JSON.stringify(updatedPerson) 
JSON.stringify() converts a JavaScript object into a string.*/}
        </>
    )
}
export default App