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
import COLORS from "./assets/colors";
import backgroundImage from "./assets/img/background.png";

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

            <main style={styles.mainContainer}>
                <Home/>
                <AboutCompany/>
                <Potential/>
                {isMobile ? <RoadMapMobile/> : <RoadMap/>}
                <Contacts/>
            </main>

            <Footer />
        </div>
    );
};

const styles = {
    mainContainer: {
        marginRight: "10vw",
        marginLeft: "10vw",
    },
    appContainerStyle: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: COLORS.background,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover", // Масштабирует изображение, чтобы покрыть весь контейнер
        backgroundRepeat: "repeat", // Не повторяет изображение
        backgroundPosition: "center top", // Позиционирует изображение сверху по центру
        minHeight: "100vh", // Устанавливает минимальную высоту в 100% от высоты экрана
    },
};


export default App;
