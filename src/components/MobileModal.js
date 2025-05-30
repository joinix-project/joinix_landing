import React from "react";
import timer from "../assets/svg/timer.svg";
import COLORS from "../assets/colors";

const MobileModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <img src={timer} alt="Modal Content" style={styles.modalImage}/>
                <p style={styles.modalText}>Coming Soon!</p>

                <div style={{display: "flex", gap: '8px'}}>
                    <button style={styles.button} onClick={onClose}>
                        <a href="#contacts" style={{textDecoration: "none", color: "inherit"}}>
                            Contact Us
                        </a>
                    </button>
                    <button style={{...styles.button, backgroundColor: 'rgb(37, 37, 37,0.4)'}} onClick={onClose}>Back
                    </button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
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
    modal: {
        backgroundColor: "#232323",
        paddingTop: "25px",
        paddingBottom: "25px",
        paddingLeft: "40px",
        paddingRight: "40px",
        borderRadius: "30px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        maxWidth: "90%",
        maxHeight: "90%",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    modalImage: {
        maxWidth: "100%",
        marginBottom: "8px",
    },
    modalText: {
        fontSize: "20px",
        fontWeight: "400",
        fontFamily: "Rubik, sans-serif",
        marginTop: '0px',
        marginBottom: "12px",
        color: "#fff",
    },
    button: {
        backgroundColor: COLORS.accent,
        color: "#fff",
        padding: "10px 20px",
        fontFamily: "Rubik, sans-serif",
        fontSize: "clamp(8px, 0.9vw, 14px)",
        border: "none",
        borderRadius: "30px",
        cursor: "pointer",
    },
};

export default MobileModal;
