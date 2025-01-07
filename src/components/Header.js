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
        padding: "20px 40px",
        backgroundColor: COLORS.background,
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
        fontSize: "15px", // Адаптивный размер кнопки
        fontWeight: "400",
        fontFamily: 'Rubik, sans-serif',
        cursor: "pointer",

    },
};

export default Header;
