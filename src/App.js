import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Resources from "./components/Resources";
import NavBar from "./components/NavBar"

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/resources" element={<Resources/>}/>
      </Routes>
    </Router>
  );
}

export default App;
