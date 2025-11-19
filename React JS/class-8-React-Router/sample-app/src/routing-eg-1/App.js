import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css"
function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          {/* BrowserRouter (Router) uses the browser’s address bar to know which page to show. 
          Routes is like a container that holds all the possible paths in your app.
          Route is a rule that says:
          “If the path matches the current URL → render this component.”
          It has two main props:
          path → the URL to match ("/about")
          element → the component to show (<About />)
          
          Link is a special React Router component used for navigation between pages.
          It replaces the normal HTML <a> tag (<a href="...">) because in a React Single Page Application (SPA):
          <a> would reload the whole page (bad for SPAs).
          Link changes the URL without refreshing and tells the Router to show the correct component.*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

      </Router>
    </>
  )
}
export default App