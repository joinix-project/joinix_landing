import React, { useState, useEffect } from "react";
import COLORS from "../../assets/colors";
import phoneScreen1 from "../../assets/img/Screen1.png"
import phoneScreen2 from "../../assets/img/Screen2.png"
import phoneScreen3 from "../../assets/img/Screen3.png"
import Modal from "../../components/Modal";

const Home = () => {
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

    return (
        <div style={styles.container}  id="home">
            <div style={{ marginBottom: "28px" }}>
                <p style={styles.title}>Join with</p>
                <p style={styles.title}>your Friends</p>
            </div>
            <p style={styles.secondaryText}>
                Find the perfect team for your project, start building today, gain real-world experience, and turn your ideas into reality
            </p>
            <div style={styles.buttonsContainer}>
                <button style={styles.buttonStyles} onClick={handleDownload}>
                    Download App
                </button>
                <button style={{ ...styles.buttonStyles, backgroundColor: COLORS.secondaryBackground }}>
                    Learn More
                </button>
            </div>
            <div style={styles.phoneMockups}>
                <img src={phoneScreen1} alt="Phone Mockup 1" style={styles.phone} />
                <img src={phoneScreen2} alt="Phone Mockup 2" style={styles.phoneMiddle} />
                <img src={phoneScreen3} alt="Phone Mockup 3" style={styles.phone} />
            </div>
            <div style={{ ...styles.redLine, width: "100%" }}></div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        marginBottom: '150px'
    },
    title: {
        fontSize: "clamp(48px, 5vw, 96px)",
        fontFamily: 'Rubik, sans-serif',
        fontWeight: "400",
        marginBottom: "0px",
        marginTop: "0px",
        color: COLORS.primaryText,
    },
    secondaryText: {
        fontSize: "clamp(16px, 1.2vw, 20px)",
        fontFamily: 'Rubik, sans-serif',
        fontWeight: "400",
        color: COLORS.secondaryText,
    },
    buttonsContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "24px",
        marginTop: "40px",
        marginBottom: "-30px",
    },
    buttonStyles: {
        backgroundColor: COLORS.accent,
        color: "#fff",
        padding: "16px 28px",
        border: "none",
        borderRadius: "30px",
        fontSize: "clamp(10px, 1vw, 18px)",
        fontWeight: "400",
        fontFamily: 'Rubik, sans-serif',
        cursor: "pointer",
    },
    phoneMockups: {
        display: "flex",
        justifyContent: "space-between",
    },
    phone: {
        height: "clamp(300px, 30vw, 547px)",
    },
    phoneMiddle: {
        height: "clamp(250px, 25vw, 437px)",
        alignSelf: 'flex-end',
    },
    redLine: {
        height: "1px",
        backgroundColor: 'rgba(217, 45, 32, 0.2)',
    },
};

export default Home;
