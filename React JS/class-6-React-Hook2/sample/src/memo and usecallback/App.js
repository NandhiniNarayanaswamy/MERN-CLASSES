
import { useState, useCallback } from "react"
import Age from "./components/Age"
import Title from "./components/Title"
import Agebtn from "./components/Agebtn"
import Count from "./components/Count"
import Countbtn from "./components/Countbtn"

function App() {
  const [count, setcount] = useState(0)
  const [age, setage] = useState(10)

  let handleCount = useCallback(() => {
    setcount(count + 1)
  }, [count])
  let handleage = useCallback(() => {
    setage(age + 1)
  }, [age])
  return (
    <>
      <Title />
      <Age age={age} />
      <Agebtn handleage={handleage} />
      <Count count={count} />
      <Countbtn handleCount={handleCount} />
    </>
  )
}
export default App