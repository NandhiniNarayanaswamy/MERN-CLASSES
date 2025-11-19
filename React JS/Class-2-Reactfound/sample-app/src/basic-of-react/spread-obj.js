function App() {
    const obj = {
        name: "nandhu",
        age: 28,
        city: "Bangalore",
        ocupation: "Software Engineer"
    }
    const update = { ...obj, city: "London" }

    //create new object using spread 
    const obj1 = { name: "Nandhini", age: 25 };

    // Create a new object
    const newObj = { ...obj1 };

    console.log(newObj); // { name: "Nandhini", age: 25 }
    //Now newObj is a copy of obj. If you change one, the other won't be affected.

    //create array
    const arr = [1, 2, 3];
    const newArr = [...arr];

    console.log(newArr); // [1, 2, 3]
    //Now arr and newArr are separate — changing one won’t affect the other.
    //✏️ Add elements while copying

    const arr1 = [2, 3];
    const extendedArr = [1, ...arr1, 4];

    console.log(extendedArr); // [1, 2, 3, 4]


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