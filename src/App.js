import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import AboutCompany from "./screens/AboutCompany";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Potential from "./screens/Potential";
import Contacts from "./screens/Contacts";
import RoadMap from "./screens/RoadMap";


const App = () => {
  return (
      <Router>
        <AppContent />
      </Router>
  );
};

const AppContent = () => {

  return (
      <div style={appContainerStyle}>
        <Header />

        <main style={mainContentStyle}>
          {/*<Routes>*/}
          {/*  <Route path="/" element={<Home />} />*/}
          {/*  <Route path="/aboutcompany" element={<AboutCompany />} />*/}
          {/*  <Route path="/potential" element={<Potential />} />*/}
          {/*  <Route path="/contacts" element={<Contacts />} />*/}
          {/*  <Route path="/roadmap" element={<RoadMap />} />*/}
          {/*</Routes>*/}
            <Home/>
            <AboutCompany/>
            <Potential/>
            {/*<RoadMap/>*/}
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
