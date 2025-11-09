import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import siteConfig from "./config/siteConfig";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
        <nav className="fixed top-0 left-0 w-full bg-gray-100 p-4 flex justify-center gap-8 shadow">
          <Link to="/">Home</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        <div className="flex-grow flex items-center justify-center w-full mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <footer className="py-4 text-sm text-gray-500">© {new Date().getFullYear()} {siteConfig.companyName}</footer>
      </div>
    </Router>
  );
}
