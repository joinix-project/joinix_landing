import logo from "../assets/svg/logoSvg.svg";
import COLORS from "../assets/colors";
import React, {useEffect, useState} from "react";
import githubCircle from "../assets/svg/githubCircle.svg";
import instagramCircle from "../assets/svg/instagram.svg";
import linkedinCircle from "../assets/svg/linkedinCircle.svg";

const Footer = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <footer style={styles.footer}>
            <div style={{display: "flex",
                justifyContent: "space-between",
                alignItems: "center",flexDirection: "row",}}>
                <div style={{display: "flex", gap: '14px'}}>
                    <button
                        onClick={() => window.open("https://www.instagram.com/joinixteam/?igsh=MXh2bTAzZXViNDVuMA%3D%3D&utm_source=qr", "_blank", "noopener,noreferrer")}
                        style={{...styles.iconButton}}
                    >
                        <img src={instagramCircle} alt="instagramCircle" style={styles.contactLogo}/>
                    </button>

                    <button
                        onClick={() => window.open("https://github.com/joinix-project", "_blank", "noopener,noreferrer")}
                        style={{...styles.iconButton}}
                    >
                        <img src={githubCircle} alt="githubCircle" style={styles.contactLogo}/>
                    </button>

                    <button
                        onClick={() => window.open("www.linkedin.com/in/joinix-project-645326346", "_blank", "noopener,noreferrer")}
                        style={{...styles.iconButton}}
                    >
                    <img src={linkedinCircle} alt="linkedinCircle" style={styles.contactLogo}/>
                    </button>
                </div>
                <div style={styles.logoContainer}>
                    <img src={logo} alt="Joinix Logo" style={styles.logo}/>
                    <span style={styles.logoText}>Joinix</span>
                </div>
                <nav style={styles.nav}>
                    <button
                        style={styles.navLink}
                        onClick={() => handleScroll("home")}
                    >
                        Home
                    </button>
                    <button
                        style={styles.navLink}
                        onClick={() => handleScroll("about")}
                    >
                        About
                    </button>
                    <button
                        style={styles.navLink}
                        onClick={() => handleScroll("potential")}
                    >
                        Potential
                    </button>
                    <button
                        style={styles.navLink}
                        onClick={() => handleScroll("roadmap")}
                    >
                        Roadmap
                    </button>
                    <button
                        style={styles.navLink}
                        onClick={() => handleScroll("contacts")}
                    >
                        Contacts
                    </button>
                </nav>
            </div>

            <div style={{...styles.line, width: '100%'}}></div>
            <p style={{
                display: 'flex',
                alignSelf: "flex-end",
                color: 'rgb(225, 225, 225, 0.7)',
                fontSize: "clamp(12px, 1.5vw, 15px)",
                fontWeight: "400",
                fontFamily: 'Rubik, sans-serif',
                marginTop: '10px'
            }}>All rights reserved 2024</p>
        </footer>
    );
};

const styles = {
    footer: {
        display: "flex",
        justifyContent: "space-between",
        // alignItems: "center",
        flexDirection: "column",
        padding: "clamp(10px, 2vw, 20px) clamp(20px, 4vw, 40px)",
        backgroundColor: 'transparent',
    },
    iconButton: {
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    contactLogo: {
        width: 'clamp(20px, 3vw, 40px)',
        height: 'clamp(20px, 3vw, 40px)',
    },
    logoContainer: {
        display: "flex",
        alignItems: "center",
    },
    logo: {
        height: "clamp(56px, 5vw, 112px)",
        marginRight: "clamp(4px, 0.5vw, 8px)",
    },
    logoText: {
        fontSize: "clamp(24px, 2.7vw, 46px)",
        fontWeight: "400",
        fontFamily: 'Rubik, sans-serif',
        color: "#fff",
    },
    nav: {
        display: "flex",
        gap: "clamp(10px, 2vw, 20px)",
    },
    line: {
        marginTop: '10px',
        height: '1px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    navLink: {
        color: "#fff",
        textDecoration: "none",
        fontSize: "clamp(12px, 1.6vw, 20px)",
        fontWeight: "400",
        fontFamily: 'Rubik, sans-serif',
        background: "none",
        border: "none",
        cursor: "pointer",
    },
    downloadButton: {
        backgroundColor: COLORS.secondaryBackground,
        color: "#fff",
        padding: "clamp(8px, 1.5vw, 16px) clamp(14px, 2vw, 28px)",
        border: "none",
        borderRadius: "clamp(15px, 3vw, 30px)",
        fontSize: "clamp(12px, 1.5vw, 15px)",
        fontWeight: "400",
        fontFamily: 'Rubik, sans-serif',
        cursor: "pointer",
    },
};

export default Footer;
