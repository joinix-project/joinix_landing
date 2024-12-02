import React from "react";
import screen1 from "../assets/img/Screenshot1.png";
import screen2 from "../assets/img/Screenshot2.png";
import screen3 from "../assets/img/Screenshot3.png";

const AboutCompany = () => {
    return (
        <div id="about" style={styles.container}>
            <h1 style={styles.title}>About our app</h1>

            <div style={styles.rowContent}>
                <div style={{display: 'flex', flexDirection: "column", alignItems: "center"}}>
                    <img
                        src={screen1}
                        alt="Smart Home"
                        style={styles.image}
                    />
                    <div style={styles.mobileUI}/>
                </div>
                <div style={styles.textSection}>
                    <h2 style={styles.subtitle}>Smart Home's Smart Services</h2>
                    <p style={styles.description}>
                        Ye am depending propriety sweetness distrusts belonging collected.
                        Smiling mention he in thought equally musical.Ye am depending propriety sweetness distrusts
                        belonging collected.
                        Smiling mention he in thought equally musical. Wisdom new and
                        valley answer. Contented it so is discourse recommend.
                    </p>
                </div>
            </div>

            <div style={styles.rowContent}>
                <div style={styles.textSection}>
                    <h2 style={styles.subtitle}>Smart Home's Smart Services</h2>
                    <p style={styles.description}>
                        Ye am depending propriety sweetness distrusts belonging collected.
                        Smiling mention he in thought equally musical.Ye am depending propriety sweetness distrusts
                        belonging collected.
                        Smiling mention he in thought equally musical. Wisdom new and
                        valley answer. Contented it so is discourse recommend.
                    </p>
                </div>
                <div style={{display: 'flex', flexDirection: "column", alignItems: "center"}}>
                    <img
                        src={screen2}
                        alt="Smart Home"
                        style={styles.image}
                    />
                    <div style={styles.mobileUI}/>
                </div>
            </div>

            <div style={styles.rowContent}>
                <div style={{display: 'flex', flexDirection: "column", alignItems: "center"}}>
                    <img
                        src={screen3}
                        alt="Smart Home"
                        style={styles.image}
                    />
                    <div style={styles.mobileUI}/>
                </div>
                <div style={styles.textSection}>
                    <h2 style={styles.subtitle}>Smart Home's Smart Services</h2>
                    <p style={styles.description}>
                        Ye am depending propriety sweetness distrusts belonging collected.
                        Smiling mention he in thought equally musical.Ye am depending propriety sweetness distrusts
                        belonging collected.
                        Smiling mention he in thought equally musical. Wisdom new and
                        valley answer. Contented it so is discourse recommend.
                    </p>
                </div>
            </div>
            <div style={{padding: 50}}/>
        </div>
    );
};
const styles = {
    container: {
        padding: "20px",
        paddingTop: '100px',
        backgroundColor: "#f9f9f9",
    },
    title: {
        textAlign: "center",
        marginBottom: "30px",
        fontSize: "52px",
        color: "#000",
    },
    rowContent: {
        display: "flex",
        position: "relative",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "70px",
    },
    mobileUI: {
        backgroundColor: "#fff",
        width: "65vh",
        height: "40vh",
        borderRadius: "16px",
        boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)",
        zIndex: 0,
        marginTop: '-50vh'
    },
    image: {
        position: "relative",
        width: "40vh",
        height: "auto",
        borderRadius: "34px",
        zIndex: 1,
        boxShadow: "0 20px 30px rgba(0, 0, 0, 0.5)",
    },

    textSection: {
        maxWidth: "500px",
    },
    subtitle: {
        fontSize: "28px",
        marginBottom: "20px",
        color: "#000",
    },
    description: {
        fontSize: "14px",
        marginBottom: "20px",
        lineHeight: "1.6",
        fontWeight: '600',
        color: "#555",
    },
    button: {
        padding: "10px 20px",
        backgroundColor: "#4a90e2",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};


export default AboutCompany;
