import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import AboutCompany from "./screens/AboutCompany";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Potential from "./screens/Potential";
import Contacts from "./screens/Contacts";
import RoadMap from "./screens/RoadMap";
import RoadMapMobile from "./screens/RoadMapMobile";
import useIsMobile from "./hooks/useIsMobile";
import PotentialMob from "./screens/PotentialMob";


const App = () => {
  return (
      <Router>
        <AppContent />
      </Router>
  );
};

const AppContent = () => {
    const isMobile = useIsMobile()

  return (
      <div style={appContainerStyle}>
        <Header />

        <main style={mainContentStyle}>
            <Home/>
            <AboutCompany/>
            {!isMobile ? <Potential/> : <PotentialMob/>}
            {isMobile ? <RoadMapMobile/> : <RoadMap/>}
            <Contacts/>
        </main>

        <Footer />
      </div>
  );
};

const appContainerStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

const mainContentStyle = {
  flex: 1,
    marginTop: '80px'
};

export default App;
