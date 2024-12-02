import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header
            style={{
                ...styles.header,
                opacity: isVisible ? "1" : "0",
                pointerEvents: isVisible ? "auto" : "none",
            }}
        >
            <div style={styles.logo}>UNIRISE</div>
            <div style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                <nav>
                    <ul style={styles.nav}>
                        <ScrollLink to="home" smooth={true} duration={500} offset={-70} style={styles.buttonStyles}>
                            Home
                        </ScrollLink>
                        <ScrollLink to="about" smooth={true} duration={500} offset={-70} style={styles.buttonStyles}>
                            About
                        </ScrollLink>
                        <ScrollLink
                            to="potential"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            style={styles.buttonStyles}
                        >
                            Potential
                        </ScrollLink>
                        <ScrollLink
                            to="contacts"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            style={styles.buttonStyles}
                        >
                            Contacts
                        </ScrollLink>
                    </ul>
                </nav>
                <button style={styles.button}>DOWNLOAD APP</button>
            </div>
        </header>
    );
};

const styles = {
    header: {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        height: "50px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        transition: "opacity 0.5s ease-in-out",
    },
    buttonStyles: {
        textDecoration: "none",
        color: "black",
        fontWeight: "bold",
        cursor: "pointer",
    },
    logo: {
        fontSize: "1.5rem",
        fontWeight: "bold",
    },
    nav: {
        display: "flex",
        listStyle: "none",
        gap: "1rem",
    },
    button: {
        backgroundColor: "black",
        color: "white",
        padding: "1rem 1rem",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        marginLeft: "30px",
    },
};

export default Header;
