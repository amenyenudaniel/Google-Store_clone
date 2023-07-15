import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing page/LandingPage";
import Navbar from "./components/navbar/Navbar";
import Store from "./pages/store/Store";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
