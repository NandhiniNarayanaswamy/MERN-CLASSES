import { useRef } from "react";
function App() {
  const nameref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault(); //when v submit page vl automatically refresh so to prevent that v use this line
    console.log("Name: ", nameref.current.value);

  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" ref={nameref} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
export default App