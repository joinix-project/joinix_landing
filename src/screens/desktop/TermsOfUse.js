import COLORS from "../../assets/colors";
import backgroundImage from "../../assets/img/background.png";

const TermsOfUse = () => {
    return (
        <div style={styles.appContainerStyle}>
            <div style={styles.contentContainer}>
                <h1 style={styles.title}>Terms of Use</h1>
                <p style={styles.date}>Effective Date: March 6, 2025</p>

                <h2 style={styles.sectionTitle}>1. Introduction</h2>
                <p style={styles.text}>
                    Welcome to Joinix ("we," "our," or "us"). By using our mobile application, Joinix ("App"), you agree to abide by these Terms of Use. If you do not agree, please do not use the App.
                </p>

                <h2 style={styles.sectionTitle}>2. Eligibility</h2>
                <p style={styles.text}>
                    You must be at least 13 years old to use Joinix. By using the App, you confirm that you meet this requirement.
                </p>

                <h2 style={styles.sectionTitle}>3. User Accounts</h2>
                <ul style={styles.list}>
                    <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                    <li>We reserve the right to suspend or terminate accounts that violate these terms.</li>
                </ul>

                <h2 style={styles.sectionTitle}>4. Permitted Use</h2>
                <p style={styles.text}>
                    You agree to use the App only for lawful purposes. You shall not:
                </p>
                <ul style={styles.list}>
                    <li>Engage in fraudulent, illegal, or harmful activities.</li>
                    <li>Interfere with the App’s functionality.</li>
                    <li>Attempt to access unauthorized features or data.</li>
                </ul>

                <h2 style={styles.sectionTitle}>5. Privacy Policy</h2>
                <p style={styles.text}>
                    Your use of Joinix is also governed by our <a href="/privacy-policy" style={styles.link}>Privacy Policy</a> which outlines how we collect and handle your data.
                </p>

                <h2 style={styles.sectionTitle}>6. Intellectual Property</h2>
                <p style={styles.text}>
                    All content, trademarks, and intellectual property in the App belong to Joinix or its licensors. You may not copy, modify, or distribute any part of the App without our permission.
                </p>

                <h2 style={styles.sectionTitle}>7. Limitation of Liability</h2>
                <ul style={styles.list}>
                    <li>We provide the App "as is" without warranties of any kind.</li>
                    <li>We are not responsible for any damages arising from your use of the App.</li>
                </ul>

                <h2 style={styles.sectionTitle}>8. Third-Party Services</h2>
                <p style={styles.text}>
                    Joinix integrates with third-party platforms like Google cloud, Firebase, Apple, LinkedIn, and GitHub. We are not responsible for their services or policies.
                </p>

                <h2 style={styles.sectionTitle}>9. Termination</h2>
                <p style={styles.text}>
                    We reserve the right to suspend or terminate your access to the App at our discretion, with or without notice, if you violate these Terms of Use.
                </p>

                <h2 style={styles.sectionTitle}>10. Changes to Terms</h2>
                <p style={styles.text}>
                    We may update these Terms from time to time. Continued use of the App after updates constitutes acceptance of the revised Terms.
                </p>

                <h2 style={styles.sectionTitle}>11. Contact Information</h2>
                <ul style={styles.list}>
                    <li>Email: <a href="mailto:joinixproject@gmail.com" style={styles.link}>joinixproject@gmail.com</a></li>
                    <li>Website: <a href="https://joinix.info" target="_blank" rel="noopener noreferrer" style={styles.link}>joinix.info</a></li>
                </ul>

                <p style={styles.text}>
                    By using Joinix, you acknowledge and agree to these Terms of Use.
                </p>
            </div>
        </div>
    );
};

const styles = {
    appContainerStyle: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: COLORS.background,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundPosition: "center top",
        minHeight: "100vh",
        padding: "20px",
        boxSizing: "border-box",
    },
    contentContainer: {
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
        borderRadius: "8px",
        // backgroundColor: "rgba(255, 255, 255, 0.8)",  // немного прозрачный фон для текста
    },
    title: {
        textAlign: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        fontFamily: "Rubik, sans-serif",
        color: COLORS.primaryText,
        marginBottom: "20px",
    },
    date: {
        textAlign: "center",
        fontFamily: "Rubik, sans-serif",
        fontSize: "1rem",
        color: COLORS.primaryText,
        fontStyle: "italic",
        marginBottom: "20px",
    },
    sectionTitle: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginTop: "20px",
        color: COLORS.primaryText,
        fontFamily: "Rubik, sans-serif",
    },
    link: {
        color: COLORS.accent,
        textDecoration: "none",
    },
    text: {
        fontSize: "1rem",
        lineHeight: "1.6",
        fontFamily: "Rubik, sans-serif",
        color: COLORS.primaryText,
    },
    list: {
        listStyleType: "disc",
        color: COLORS.primaryText,
        paddingLeft: "20px",
        fontFamily: "Rubik, sans-serif",
        marginBottom: "15px",
    },
};

export default TermsOfUse;
