//eg-1 -> another way of sending props
// import Child from "./components/Child";
// function App() {

//   return (
//     <>
//       <Child name="nandhini" />
//     </>
//   )
// }
// export default App

//---Normal way without spread operator
// function App() {
//   const person = { name: "Nandhu", age: 25, city: "Hosur" };

//   return (
//     <Child name={person.name} age={person.age} city={person.city} />  // in child you can use like this person.name because directly you declared name={person.name}
//     (or you can give like this also)
//      <Child data={person} // in child you need to use like this {props.data.name}
//   );
// }

// 2. Using Spread Operator
// Instead of writing each prop, you can spread the object:
// function App() {
//   const person = { name: "Nandhu", age: 25, city: "Hosur" };

//   return (
//     <Child {...person} />
//   );
// }
// 👉 React will automatically expand person into:

// <Child name="Nandhu" age={25} city="Hosur" />


//eg-2 object has send throgh spread operator
// import Child from "./components/Child";
// function App() {
//   const user = {
//     name: "rama",
//     age: 90,
//     city: "palani",
//     country: "India"
//   }
//   return (
//     <>
//       <Child {...user} />
//     </>
//   )
// }
// export default App

//eg-3 composition
import Child from "./components/Child";
function App() {

  return (
    <Child name="manu">
      i am coming  {/* in react this is like writing <Child children="I am coming" />
                   🔸 That's how React interprets it internally
                   ✅ Why Must the Name Be children?
                     React automatically assigns the content between tags to a prop named children.
              If you try to rename it to something else, React won’t recognize it, and the value will be undefined.*/ }
    </Child>


  )
}
export default App