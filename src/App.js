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
import COLORS from "./assets/colors";


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
      <div style={styles.appContainerStyle}>
        <Header />

        <main style={styles.mainContainer}>
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
const styles = {
    mainContainer:{
        marginRight: "10vw",
        marginLeft: "10vw",
    },
    appContainerStyle: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: COLORS.background,
    }
}



export default App;
