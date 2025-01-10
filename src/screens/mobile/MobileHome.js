import React, { useState, useEffect } from "react";
import COLORS from "../../assets/colors";
import phoneScreen1 from "../../assets/img/Screen4.png"
import phoneScreen2 from "../../assets/img/Screen5.png"
import phoneScreen3 from "../../assets/img/Screenshot1.png"
import Modal from "../../components/Modal";
import MobileModal from "../../components/MobileModal";

const MobileHome = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
        <div style={styles.container} id="home">
            <div style={{marginBottom: "28px",}}>
                <p style={styles.title}>Join with</p>
                <p style={styles.title}>your Friends</p>
            </div>
            <p style={styles.secondaryText}>
                Find the perfect team for your project, start building today, gain real-world experience, and turn your ideas into reality

            </p>
            <div style={styles.buttonsContainer}>
                <button style={styles.buttonStyles} onClick={openModal}>Download App</button>
            </div>
            <div style={styles.phoneMockups}>
                <img src={phoneScreen1} alt="Phone Mockup 1" style={styles.phone}/>
                <img src={phoneScreen2} alt="Phone Mockup 2" style={styles.phoneMiddle}/>
                <img src={phoneScreen3} alt="Phone Mockup 3" style={styles.phone}/>
            </div>
            <MobileModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        marginBottom: '100px'
    },
    title: {
        fontSize: "34px",
        fontFamily: 'Rubik, sans-serif',
        fontWeight: "400",
        marginBottom: "0px",
        marginTop: "0px",
        color: COLORS.primaryText,
    },
    secondaryText: {
        fontSize: "15px",
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
        padding: "12px 12px",
        border: "none",
        borderRadius: "30px",
        fontSize: "14px",
        fontWeight: "400",
        fontFamily: 'Rubik, sans-serif',
        cursor: "pointer",
    },
    phoneMockups: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: '20px'
    },
    phone: {
        height: "clamp(150px, 27vh, 400px)"
    },
    phoneMiddle: {
        height: "clamp(150px, 27vh, 400px)",
        marginTop: '24px',
    },
    redLine: {
        height: "1px",
        backgroundColor: 'rgba(217, 45, 32, 0.2)',
    },
};

export default MobileHome;
