
//eg-1
/*function App()
{
  const a=10;
  const b=20;
  return(
    <>
    {a+b}
    </>
  )
} */

//eg-2
/*function App() {
  const welcome = () => {
    return "hello nandhu"
  }
  return (
    <>
      {welcome()}
    </>
  )
}*/

//eg-3
/*function Welcome() {
  return "nandhini welcome to react@@"
}
function App() {
  return (
    <>
      <Welcome />
    </>
  )
}*/

//eg-4
// import React from "react"
// const Welcome = () => {
//   return <h2>Heyy Nandhini welcome to react!!</h2>
// }

// function App() {

//   return (
//     <React.Fragment>
//       <Welcome />
//     </React.Fragment >


//   )
// }

//eg-5 - styling
import "./App.css"
function App() {
  const buttonstyle = { //like object we need to  create here
    color: "orange",
    padding: "10px",
    backgroundColor: "black"

  }
  return (
    <>
      <button style={buttonstyle}>Internal Click</button> {/*Internal style*/}
      <button style={{ color: "red", padding: "10px", backgroundColor: "green" }}>Inline Click</button>  {/*Inline style*/}
      <button className="buttonstyle">External Click</button> {/*External style*/}
    </>
  )
}
export default App