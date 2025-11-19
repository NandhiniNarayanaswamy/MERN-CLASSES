
import { useState } from "react";
import ExpensiveComponent from "./components/ExpensiveComponent";

function App() {
  const [count, setCount] = useState(0);

  // large array of numbers to sort

  const numbers = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 10000));


  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ExpensiveComponent numbers={numbers} />
    </div>
  )

}

export default App