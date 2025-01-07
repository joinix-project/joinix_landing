import React from "react";
import COLORS from "../assets/colors";
import phoneScreen1 from "../assets/img/Screen1.png"
import phoneScreen2 from "../assets/img/Screen2.png"
import phoneScreen3 from "../assets/img/Screen3.png"

const Home = () => {
    return (
        <div style={styles.container}>
                <h1 style={styles.title}>Join with your Friends</h1>
                <p style={styles.secondaryText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morem ipsum dolor sit amet, adipiscing.
                </p>
                <div style={styles.buttonsContainer}>
                    <button style={styles.buttonStyles}>Download App</button>
                    <button style={{...styles.buttonStyles, backgroundColor: COLORS.secondaryBackground}}>Learn More</button>
                </div>
                <div style={styles.phoneMockups}>
                    <img src={phoneScreen1} alt="Phone Mockup 1" style={styles.phone} />
                    <img src={phoneScreen2} alt="Phone Mockup 2" style={styles.phoneMiddle} />
                    <img src={phoneScreen3} alt="Phone Mockup 3" style={styles.phone} />
                </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
    },
    title: {
        fontSize: "clamp(48px, 6vw, 96px)", // Адаптивный размер шрифта
        fontFamily: 'Rubik, sans-serif',
        fontWeight: "400",
        marginBottom: "28px",
        color: COLORS.primaryText,
    },
    secondaryText: {
        fontSize: "clamp(16px, 2vw, 20px)", // Адаптивный размер текста
        fontFamily: 'Rubik, sans-serif',
        fontWeight: "400",
        color: COLORS.secondaryText,
    },
    buttonsContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "24px",
        marginTop: "40px",
    },
    buttonStyles: {
        backgroundColor: COLORS.accent,
        color: "#fff",
        padding: "16px 28px",
        border: "none",
        borderRadius: "30px",
        fontSize: "clamp(14px, 2vw, 18px)", // Адаптивный размер кнопки
        fontWeight: "400",
        fontFamily: 'Rubik, sans-serif',
        cursor: "pointer",
    },
    phoneMockups: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "-28px",
    },
    phone: {
        height: "clamp(300px, 30vw, 547px)", // Адаптивная высота изображения
    },
    phoneMiddle: {
        height: "clamp(250px, 25vw, 437px)", // Адаптивная высота для среднего изображения
        alignSelf: 'flex-end',
    },
};

export default Home;
