import logo from "../assets/svg/logoSvg.svg";
import COLORS from "../assets/colors";
import React from "react";
import emailCircle from "../assets/svg/mail.svg";
import telegramCircle from "../assets/svg/Telegram.svg";
import instagramCircle from "../assets/svg/instagram.svg";

const Footer = () => {
    return (
        <header style={styles.footer}>
            <div>
                <img src={emailCircle} alt="emailCircle" style={styles.contactLogo}/>
                <img src={telegramCircle} alt="telegramCircle" style={styles.contactLogo}/>
                <img src={instagramCircle} alt="instagramCircle" style={styles.contactLogo}/>
            </div>
            <div style={styles.logoContainer}>
                <img src={logo} alt="Joinix Logo" style={styles.logo}/>
                <span style={styles.logoText}>Joinix</span>
            </div>
            <nav style={styles.nav}>
                <a href="#home" style={styles.navLink}>Home</a>
                <a href="#about" style={styles.navLink}>About</a>
                <a href="#potential" style={styles.navLink}>Potential</a>
                <a href="#roadmap" style={styles.navLink}>Roadmap</a>
                <a href="#contacts" style={styles.navLink}>Contacts</a>
            </nav>
        </header>
    );
};

const styles = {
    footer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        backgroundColor: 'transparent',
    },
    contactLogo:{
        width: 'clamp(20px, 3vw, 40px)',
        height: 'clamp(20px, 3vw, 40px)'
    },
    logoContainer: {
        display: "flex",
        alignItems: "center",
    },
    logo: {
        height: "30px",
        marginRight: "10px",
    },
    logoText: {
        fontSize: "20px",
        fontWeight: "400",
        fontFamily: 'Rubik, sans-serif',
        color: "#fff",
    },
    nav: {
        display: "flex",
        gap: "20px",
    },
    navLink: {
        color: "#fff",
        textDecoration: "none",
        fontSize: "15px",
        fontWeight: "400",
        fontFamily: 'Rubik, sans-serif',
    },
    downloadButton: {
        backgroundColor: COLORS.secondaryBackground,
        color: "#fff",
        padding: "16px 28px",
        border: "none",
        borderRadius: "30px",
        fontSize: "15px",
        fontWeight: "400",
        fontFamily: 'Rubik, sans-serif',
        cursor: "pointer",

    },
};

export default Footer
