import './App.css';
import Child from './component/Child'
function App() {
  const mobiles = ["LG", "OPPO", "VIVO"]
  const user = {
    name: "nandhu",
    city: "Hosur",
    country: "India"
  }
  return (
    <>
      <div className="App">
        <Child message="Hello from the parent" value={25} isActive={true} items={mobiles} user={user} />
      </div>
    </>
  )
}
export default App