import React, { useEffect, useState } from "react";
import COLORS from "../assets/colors";
import logo from "../assets/svg/logoSvg.svg";
import useIsMobile from "../hooks/useIsMobile";
import Modal from "./Modal";
import MobileModal from "./MobileModal";

const Header = () => {
    const isMobile = useIsMobile();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const handleDownload = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        const ua = userAgent.toLowerCase();
    
        const isIOS = /iphone|ipad|ipod/.test(ua);
        const isAndroid = /android/.test(ua);
    
        if (isIOS) {
            window.open("https://apps.apple.com/ua/app/joinix/id6743486379", "_blank");
        } else if (isAndroid) {
            window.open("https://play.google.com/store/apps/details?id=com.joinix", "_blank");
        } else {
            window.open("https://apps.apple.com/ua/app/joinix/id6743486379", "_blank");
        }
    };
    
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isModalOpen]);

    return (
        <header style={styles.header}>
            <div style={styles.logoContainer}>
                <img src={logo} alt="Joinix Logo" style={styles.logo} />
                <span style={styles.logoText}>Joinix</span>
            </div>
            {!isMobile && (
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
            )}
            <button style={styles.downloadButton} onClick={handleDownload}>
                Download App
            </button>
            {/* {isMobile ? (
                <MobileModal isOpen={isModalOpen} onClose={closeModal} />
            ) : (
                <Modal isOpen={isModalOpen} onClose={closeModal} />
            )} */}
        </header>
    );
};

const styles = {
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "clamp(10px, 1.5vw, 20px) clamp(20px, 3vw, 40px)",
        backgroundColor: "transparent",
    },
    logoContainer: {
        display: "flex",
        alignItems: "center",
    },
    logo: {
        height: "clamp(24px, 3vw, 48px)",
        marginRight: "clamp(5px, 0.5vw, 10px)",
    },
    logoText: {
        fontSize: "clamp(12px, 1.5vw, 20px)",
        fontWeight: "400",
        fontFamily: "Rubik, sans-serif",
        color: "#fff",
    },
    nav: {
        display: "flex",
        gap: "clamp(10px, 1.5vw, 20px)",
    },
    navLink: {
        background: "none",
        border: "none",
        color: "#fff",
        fontSize: "clamp(12px, 1.2vw, 15px)",
        fontWeight: "400",
        fontFamily: "Rubik, sans-serif",
        textDecoration: "none",
        cursor: "pointer",
    },
    downloadButton: {
        backgroundColor: COLORS.secondaryBackground,
        color: "#fff",
        padding: "clamp(8px, 1vw, 16px) clamp(12px, 1.5vw, 28px)",
        border: "none",
        borderRadius: "clamp(15px, 2vw, 30px)",
        fontSize: "clamp(12px, 1vw, 15px)",
        fontWeight: "400",
        fontFamily: "Rubik, sans-serif",
        cursor: "pointer",
    },
};

export default Header;
