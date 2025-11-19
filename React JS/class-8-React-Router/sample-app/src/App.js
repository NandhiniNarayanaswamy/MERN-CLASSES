import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Portfolio from "./components/Protfolio";
import "./App.css"
function App() {
  return (
    <>

      <Router>
        {/*global navbar for all pages */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />

      </Router>

    </>
  )
}
export default App