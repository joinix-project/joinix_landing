import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import useIsMobile from "../hooks/useIsMobile";
import SoonSVG from "../assets/svg/time.svg";

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isMobile = useIsMobile();

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

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <header
                style={{
                    ...styles.header,
                    height: isMobile && "20px",
                    opacity: isVisible ? "1" : "0",
                    pointerEvents: isVisible ? "auto" : "none",
                    justifyContent: isMobile && "space-between",
                }}
            >
                <div style={styles.logo}>Joinix</div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                    {!isMobile && (
                        <nav>
                            <ul style={styles.nav}>
                                <ScrollLink to="home" smooth={true} duration={500} offset={-70} style={styles.buttonStyles}>
                                    Home
                                </ScrollLink>
                                <ScrollLink to="about" smooth={true} duration={500} offset={-70} style={styles.buttonStyles}>
                                    About
                                </ScrollLink>
                                <ScrollLink to="potential" smooth={true} duration={500} offset={-70} style={styles.buttonStyles}>
                                    Potential
                                </ScrollLink>
                                <ScrollLink to="roadmap" smooth={true} duration={500} offset={-70} style={styles.buttonStyles}>
                                    Roadmap
                                </ScrollLink>
                                <ScrollLink to="contacts" smooth={true} duration={500} offset={-70} style={styles.buttonStyles}>
                                    Contacts
                                </ScrollLink>
                            </ul>
                        </nav>
                    )}
                    <button style={isMobile ? styles.buttonMob : styles.button} onClick={openModal}>
                        DOWNLOAD APP
                    </button>
                </div>
            </header>

            {isModalOpen && (
                <div style={styles.modalOverlay} onClick={closeModal}>
                    <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <img src={SoonSVG} alt="Coming Soon Icon" style={styles.modalIcon} />
                        <p style={styles.modalText}>Coming Soon!</p>
                        <div style={styles.buttonsWrapper}>
                            <button style={styles.modalButton} onClick={closeModal}>
                                Back
                            </button>
                            <button style={styles.modalButton} onClick={closeModal}>
                                Contact us
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
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
    buttonMob: {
        backgroundColor: "black",
        color: "white",
        padding: "10px 10px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "10px",
    },
    modalOverlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    },
    modalContent: {
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        width: "80%",
        maxWidth: "300px",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    },
    modalIcon: {
        width: "50px",
        height: "50px",
        marginBottom: "15px",
    },
    modalText: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#333333",
        marginBottom: "15px",
    },
    buttonsWrapper: {
        display: "flex",
        gap: "10px",
        width: "100%",
        marginTop: "15px",
    },
    modalButton: {
        flex: 1,
        padding: "10px",
        backgroundColor: "black",
        color: "#ffffff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
    },
};

export default Header;
