import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ThankYou from "./pages/Greet";
import "./App.css";

function Navbar() {
  return (
    <nav>
      <h2>My Simple Site</h2>

      <div>
        <Link to="/">Home</Link>{" "}
        <Link to="/about">About</Link>{" "}
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/greet" element={<ThankYou />} />
        </Routes>
      </main>
    </>
  );
}

export default App;