import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import pages
import Navbar from "./pages/Navbar";
import MainSection from "./pages/MainSection";
import HallChampions from "./pages/HallChampions";
import MiniBosses from "./pages/MiniBosses";
import Staking from "./pages/Staking";
import Footer from "./pages/Footer";

// import style
import "./App.scss";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="app-section">
          <Navbar />
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/hall-of-champions" element={<HallChampions />} />
            <Route path="/mini-bosses" element={<MiniBosses />} />
            <Route path="/staking" element={<Staking />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
