import React from "react";
import COLORS from "../assets/colors";
import logo from "../assets/svg/logoSvg.svg";

const Header = () => {
    return (
        <header style={styles.header}>
            <div style={styles.logoContainer}>
                <img src={logo} alt="Joinix Logo" style={styles.logo} />
                <span style={styles.logoText}>Joinix</span>
            </div>
            <nav style={styles.nav}>
                <a href="#home" style={styles.navLink}>Home</a>
                <a href="#about" style={styles.navLink}>About</a>
                <a href="#potential" style={styles.navLink}>Potential</a>
                <a href="#roadmap" style={styles.navLink}>Roadmap</a>
                <a href="#contacts" style={styles.navLink}>Contacts</a>
            </nav>
            <button style={styles.downloadButton}>Download App</button>
        </header>
    );
};

const styles = {
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "clamp(10px, 1.5vw, 20px) clamp(20px, 3vw, 40px)", // Уменьшенное центральное значение
        backgroundColor: 'transparent',
    },
    logoContainer: {
        display: "flex",
        alignItems: "center",
    },
    logo: {
        height: "clamp(24px, 3vw, 48px)", // Уменьшенное центральное значение
        marginRight: "clamp(5px, 0.5vw, 10px)",
    },
    logoText: {
        fontSize: "clamp(12px, 1.5vw, 20px)", // Уменьшенное центральное значение
        fontWeight: "400",
        fontFamily: 'Rubik, sans-serif',
        color: "#fff",
    },
    nav: {
        display: "flex",
        gap: "clamp(10px, 1.5vw, 20px)", // Уменьшенное центральное значение
    },
    navLink: {
        color: "#fff",
        textDecoration: "none",
        fontSize: "clamp(12px, 1.2vw, 15px)", // Уменьшенное центральное значение
        fontWeight: "400",
        fontFamily: 'Rubik, sans-serif',
    },
    downloadButton: {
        backgroundColor: COLORS.secondaryBackground,
        color: "#fff",
        padding: "clamp(8px, 1vw, 16px) clamp(12px, 1.5vw, 28px)", // Уменьшенное центральное значение
        border: "none",
        borderRadius: "clamp(15px, 2vw, 30px)", // Уменьшенное центральное значение
        fontSize: "clamp(12px, 1vw, 15px)", // Уменьшенное центральное значение
        fontWeight: "400",
        fontFamily: 'Rubik, sans-serif',
        cursor: "pointer",
    },
};

export default Header;
