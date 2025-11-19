import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import KidsWear from "./components/Category/KidsWear";
import BoyBabyWear from "./components/Category/BoyBabyWear";
import GirlBabyWear from "./components/Category/GirlBabyWear";
import Toys from "./components/Category/Toys";
const AppRoutes = () => {
    return (

        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/KidsWear">KidsWear</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/kidsWear" element={<KidsWear />} >
                    <Route path="boyBabyWear" element={<BoyBabyWear />} />
                    <Route path="girlBabyWear" element={<GirlBabyWear />} />
                    <Route path="toys" element={<Toys />} />
                </Route>
            </Routes>
        </Router>

    )
}
export default AppRoutes