import React from "react";
import Screenshots from "../assets/img/Screenshots.png";
import AppleLogo from "../assets/svg/logo-apple.svg";
import AndroidLogo from "../assets/svg/logo-android.svg";


const Home = () => {
    return (
        <div id="home" style={styles.container}>
            <section style={styles.hero}>
                <div style={styles.textContainer}>
                    <h1 style={styles.heroTitle}>Join with your Friends</h1>
                    <p style={styles.heroSubtitle}>
                        We <span style={styles.highlight}>record</span> users and sales on websites and in mobile apps
                    </p>
                    <div style={styles.buttonsContainer}>
                        <button style={styles.storeButton}>
                            <img src={AppleLogo} style={styles.logoImg}/>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                gap: "0px"
                            }}>
                                <p style={styles.downloadText}>Download</p>
                                <p style={styles.subText}>on the App Store</p>
                            </div>
                        </button>
                        <button style={styles.storeButton}>
                            <img src={AndroidLogo} style={styles.logoImg}/>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                gap: "0px"
                            }}>
                                <p style={styles.downloadText}>Download</p>
                                <p style={styles.subText}>on the Play Store</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div style={styles.imageContainer}>
                    <img
                        src={Screenshots}
                        alt="Mobile Screens"
                        style={styles.image}
                    />
                </div>
            </section>
            <section style={styles.statsSection}>
                <div style={styles.statItem}>
                <h3 style={styles.statNumber}>22k</h3>
                    <p style={styles.statLabel}>Active Users</p>
                </div>
                <div style={styles.statItem}>
                    <h3 style={styles.statNumber}>32k</h3>
                    <p style={styles.statLabel}>Total Downloads</p>
                </div>
                <div style={styles.statItem}>
                    <h3 style={styles.statNumber}>17k</h3>
                    <p style={styles.statLabel}>Customers</p>
                </div>
                <div style={styles.statItem}>
                    <h3 style={styles.statNumber}>130</h3>
                    <p style={styles.statLabel}>Team Members</p>
                </div>
            </section>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "90vh",
        backgroundColor: "#f9f9f9",
    },
    hero: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
        flex: 1,
    },
    downloadText: {
        fontSize: "14px",
        fontWeight: "bold",
        margin: "0",
        lineHeight: "1",
    },
    subText: {
        fontSize: "12px",
        margin: "0",
        lineHeight: "1",
    },
    textContainer: {
        flex: 1,
    },
    heroTitle: {
        fontSize: "58px",
        fontWeight: "bold",
        marginBottom: "20px",
    },
    heroSubtitle: {
        fontSize: "18px",
        marginBottom: "30px",
    },
    highlight: {
        fontWeight: "bold",
        color: "#000",
    },
    buttonsContainer: {
        display: "flex",
        gap: "20px",
    },
    storeButton: {
        padding: "10px 20px",
        border: "1px solid #000",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "transparent",
        cursor: "pointer",
    },
    imageContainer: {
        flex: 1,
        textAlign: "center",
    },
    image: {
        width: "55vh",
        height: "auto",
    },
    logoImg: {
        width: "4vh",
        height: "auto",
        marginRight: '1vh'
    },
    statsSection: {
        display: "flex",
        // position: "absolute",
        // bottom: -50,
        marginBottom: '20px',
        flexDirection: "row",
        justifyContent: "center",
        padding: "10px 20px",
        backgroundColor: "#fff",
        borderRadius: "24px",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(0, 0, 0, 0.05)",
    },
    statItem: {
        textAlign: "center",
        marginLeft: "30px",
        marginRight: "30px",
    },
    statNumber: {
        fontSize: "32px",
        fontWeight: "bold",
        margin: 0,
    },
    statLabel: {
        fontSize: "16px",
        color: "#666",
    },
};

export default Home;
