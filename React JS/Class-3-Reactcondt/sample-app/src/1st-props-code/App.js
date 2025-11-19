
//eg-1
// import Child from "./components/Child.js"
// function App() {

//   return (
//     <>
//       <Child name="nandhu" isstudent={true} />    {/*The return statement tells React what to render on screen.
//       Render the Child component.
//       Pass it a prop name="nandhu". 
//       to sent boolean value as a prop use flower bracket*/}


//     </>
//   )
// }
// export default App

//eg-2 -> sending object as a prop
import Child from "./components/Child.js"
function App() {
    const user = {
        name: "rama",
        age: 90,
        city: "palani",
        country: "India"
    }

    return (
        <>
            <Child obj={user} />
        </>
    )
}
export default App