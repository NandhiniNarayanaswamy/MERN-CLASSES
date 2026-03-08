import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import CheckOut from "./pages/CheckOut"
import ProductDetails from "./pages/ProductDetails"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ContextProvider } from "./context/CartContext"
const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>

    </ContextProvider>
  )
}
export default App