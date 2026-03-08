
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MealDetail from "./pages/MealDetail";



function App() {

  return (
    <Router>
      <div className="min-h-screen bg-gray-200">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal/:id" element={<MealDetail />} />
        </Routes>
      </div>

    </Router>
  )

}

export default App