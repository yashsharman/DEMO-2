import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Studio from "./pages/Studio";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="bg-background-light dark:bg-background-dark text-charcoal dark:text-cream transition-colors duration-300">
        <div className="fixed inset-0 grain-overlay z-50"></div>
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
