import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { TokenProvider } from "./context/tokens/TokensContext";
function App() {
  return (
    <TokenProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen bg-slate-200 text-gray-800">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </TokenProvider>
  );
}

export default App;
