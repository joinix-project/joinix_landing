import React, { useState } from "react";
import Screenshots from "../assets/img/Screenshots.png";
import AppleLogo from "../assets/svg/logo-apple.svg";
import AndroidLogo from "../assets/svg/logo-android.svg";
import SoonSVG from "../assets/svg/time.svg";
import useIsMobile from "../hooks/useIsMobile";
import COLORS from "../assets/colors";

const Home = () => {
    const isMobile = useIsMobile();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div
            id="home"
            style={{
                ...styles.container,
                paddingLeft: isMobile && "16px",
                paddingRight: isMobile && "10px",
                marginTop: isMobile && "-28px",
            }}
        >
            <section style={styles.hero}>
                <div style={styles.textContainer}>
                    <h1 style={styles.heroTitle}>Join with your Friends</h1>
                    <div style={styles.buttonsContainer}>
                        {[AppleLogo, AndroidLogo].map((logo, index) => (
                            <button
                                key={index}
                                style={styles.storeButton}
                                onClick={handleButtonClick}
                            >
                                <img
                                    src={logo}
                                    style={styles.logoImg}
                                    alt={`Logo ${index}`}
                                />
                                <div style={styles.textWrapper}>
                                    <p style={styles.downloadText}>Download</p>
                                    <p style={styles.subText}>
                                        {index === 0 ? "via App Store" : "via Play Store"}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
                {!isMobile && (
                    <div style={styles.imageContainer}>
                        <img
                            src={Screenshots}
                            alt="Mobile Screens"
                            style={styles.image}
                        />
                    </div>
                )}
            </section>
            {isMobile && (
                <div style={styles.imageContainer}>
                    <img
                        src={Screenshots}
                        alt="Mobile Screens"
                        style={styles.imageMob}
                    />
                </div>
            )}
            <section
                style={isMobile ? styles.statsSectionMob : styles.statsSection}
            >
                {stats.map(({ number, label }) => (
                    <div key={label} style={styles.statItem}>
                        <h3 style={styles.statNumber}>{number}</h3>
                        <p style={styles.statLabel}>{label}</p>
                    </div>
                ))}
            </section>

            {isModalOpen && (
                <div style={styles.modalOverlay} onClick={closeModal}>
                    <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <img src={SoonSVG} alt="Soon Icon" style={styles.modalIcon} />
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
        </div>
    );
};

const stats = [
    { number: "-", label: "Active Users" },
    { number: "-", label: "Total Downloads" },
    { number: "2", label: "Team Members" },
];

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "90vh",
        backgroundColor: COLORS.background,
        paddingBottom: "50px",
    },
    hero: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
        flex: 1,
    },
    textContainer: {
        flex: 1,
    },
    heroTitle: {
        fontSize: "clamp(32px, 5vw, 58px)",
        fontWeight: "bold",
        marginBottom: "20px",
        color: COLORS.primaryText,
    },
    buttonsContainer: {
        display: "flex",
        gap: "20px",
    },
    storeButton: {
        padding: "8px 10px",
        border: `1px solid ${COLORS.border}`,
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        backgroundColor: COLORS.accent,
        cursor: "pointer",
    },
    textWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "0px",
    },
    downloadText: {
        fontSize: "clamp(12px, 2vw, 14px)",
        fontWeight: "bold",
        margin: 0,
        color: COLORS.primaryText,
    },
    subText: {
        fontSize: "clamp(10px, 1.5vw, 12px)",
        margin: 0,
        color: COLORS.secondaryText,
    },
    imageContainer: {
        flex: 1,
        textAlign: "center",
    },
    image: {
        width: "55vh",
        height: "auto",
    },
    imageMob: {
        width: "40vh",
        height: "auto",
    },
    logoImg: {
        width: "3vh",
        height: "auto",
        marginRight: "1vh",
    },
    statsSection: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: "10px 20px",
        backgroundColor: COLORS.background,
        borderRadius: "24px",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
        border: `1px solid ${COLORS.border}`,
        marginBottom: "20px",
    },
    statsSectionMob: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: "10px 0px",
        backgroundColor: COLORS.background,
        borderRadius: "24px",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
        border: `1px solid ${COLORS.border}`,
        marginBottom: "20px",
    },
    statItem: {
        textAlign: "center",
        margin: "0 20px",
    },
    statNumber: {
        fontSize: "clamp(20px, 3vw, 32px)",
        fontWeight: "bold",
        margin: 0,
        color: COLORS.primaryText,
    },
    statLabel: {
        fontSize: "clamp(10px, 2vw, 16px)",
        color: COLORS.secondaryText,
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
        color: COLORS.primaryText,
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
        backgroundColor: '#000',
        color: "#ffffff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
    },
};

export default Home;
