import Child from "./components/Child"
function App() {
  const handlechild = (data) => {
    alert("Data from child :" + data) //This prints the received data from the child into the browser's developer console.
  }
  return (
    <>
      <Child tochild={handlechild} />  {/* 👉 This line renders the Child component inside the parent and passes handleChildData as a prop called sendDataToParent.*/}
    </>
  )
}
export default App