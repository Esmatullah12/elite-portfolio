import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/about/About";
import Home from "./components/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/ContactPage";
import AboutDetail from "./components/about/AboutDetail";
import News from "./components/news/News";
import { useState } from "react";
import WaveAnimation from "./components/UI/WaveAnimation";

function App() {
  const [showAboutDetail, setShowAboutDetail] = useState(false);

  const handleLearnMoreClick = () => {
    setShowAboutDetail(true);
  };

  const handleCloseClick = () => {
    setShowAboutDetail(false);
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={<About onLearnMoreClick={handleLearnMoreClick} />}
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
        </Routes>
        {showAboutDetail && <AboutDetail onCloseClick={handleCloseClick} />}
      </div>
      <WaveAnimation className="wave-animation" />
    </div>
  );
}

export default App;
