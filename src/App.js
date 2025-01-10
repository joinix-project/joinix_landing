import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/desktop/Home";
import AboutCompany from "./screens/desktop/AboutCompany";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Potential from "./screens/desktop/Potential";
import Contacts from "./screens/desktop/Contacts";
import RoadMap from "./screens/desktop/RoadMap";
import MobileRoadMap from "./screens/mobile/MobileRoadMap";
import useIsMobile from "./hooks/useIsMobile";
import COLORS from "./assets/colors";
import backgroundImage from "./assets/img/background.png";
import MobileHome from "./screens/mobile/MobileHome";
import MobileAboutCompany from "./screens/mobile/MobileAboutCompany";
import MobilePotential from "./screens/mobile/MobilePotential";
import MobileContacts from "./screens/mobile/MobileContacts";
import FooterMobile from "./components/FooterMobile";

const App = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

const AppContent = () => {
    const isMobile = useIsMobile();

    return (
        <div style={styles.appContainerStyle}>
            <Header />

            <main style={isMobile ? styles.mainContainerMobile : styles.mainContainer}>
                {isMobile ? <MobileHome/> : <Home/>}
                {isMobile ? <MobileAboutCompany/> : <AboutCompany/>}
                {isMobile ? <MobilePotential/> : <Potential/>}
                {isMobile ? <MobileRoadMap/> : <RoadMap/>}
                {isMobile ? <MobileContacts/> : <Contacts/>}
            </main>

            {isMobile ? <FooterMobile/> : <Footer/>}
        </div>
    );
};

const styles = {
    mainContainer: {
        marginRight: "10vw",
        marginLeft: "10vw",
    },
    mainContainerMobile: {
        marginRight: "24px",
        marginLeft: "24px",
    },
    appContainerStyle: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: COLORS.background,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundPosition: "center top",
        minHeight: "100vh",
    },
};


export default App;
