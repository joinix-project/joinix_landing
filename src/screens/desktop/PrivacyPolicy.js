import COLORS from "../../assets/colors";
import backgroundImage from "../../assets/img/background.png";

const PrivacyPolicy = () => {
    return (
        <div style={styles.appContainerStyle}>
            <div style={styles.contentContainer}>
                <h1 style={styles.title}>Privacy Policy</h1>
                <p style={styles.date}>Effective Date: March 6, 2025</p>

                <h2 style={styles.sectionTitle}>1. Introduction</h2>
                <p style={styles.text}>
                    Welcome to Joinix ("we," "our," or "us"). This Privacy Policy explains how we collect, use,
                    disclose, and safeguard your information when you use our mobile application, Joinix. By using our
                    app, you agree to the terms outlined in this policy.
                </p>

                <h2 style={styles.sectionTitle}>2. Information We Collect</h2>
                <ul style={styles.list}>
                    <li>Name/Username</li>
                    <li>Email address</li>
                    <li>Password</li>
                    <li>Pictures (not obligatory)</li>
                    <li>Files (not obligatory)</li>
                    <li>Country</li>
                    <li>Analytics and crashlitics data</li>
                </ul>

                <h2 style={styles.sectionTitle}>3. How We Use Your Information</h2>
                <p style={styles.text}>
                    We use the information collected for the following purposes:
                </p>
                <ul style={styles.list}>
                    <li>To provide and maintain our services</li>
                    <li>To send emails and newsletters</li>
                    <li>To analyze app traffic using tracking solutions</li>
                    <li>To enhance user experience and app functionality</li>
                </ul>

                <h2 style={styles.sectionTitle}>4. Tracking Technologies</h2>
                <p style={styles.text}>
                    We use the following tracking technologies:
                </p>
                <ul style={styles.list}>
                    <li>Cookies</li>
                    <li>Local storage</li>
                    <li>Firebase Analytics</li>
                </ul>

                <h2 style={styles.sectionTitle}>5. Third-Party Services</h2>
                <p style={styles.text}>
                    We integrate with the following third-party social media providers:
                </p>
                <ul style={styles.list}>
                    <li>Google cloud, Firebase</li>
                    <li>Apple</li>
                </ul>

                <h2 style={styles.sectionTitle}>6. Data Sharing and Disclosure</h2>
                <p style={styles.text}>
                    We do not sell or share personal data with advertisers. However, we may share data in compliance
                    with legal obligations or to protect our rights.
                </p>

                <h2 style={styles.sectionTitle}>7. Children's Privacy</h2>
                <p style={styles.text}>
                    Joinix is not intended for users under the age of 13. We do not knowingly collect personal data from
                    children.
                </p>

                <h2 style={styles.sectionTitle}>8. Security Measures</h2>
                <p style={styles.text}>
                    We implement appropriate security measures to protect your information from unauthorized access or
                    disclosure.
                </p>

                <h2 style={styles.sectionTitle}>9. Access to Device Features</h2>
                <p style={styles.text}>
                    Joinix requires access to your photo gallery for certain functionalities, and internet.
                </p>

                <h2 style={styles.sectionTitle}>10. User Rights</h2>
                <p style={styles.text}>
                    Users have the right to:
                </p>
                <ul style={styles.list}>
                    <li>Access, update, or delete their personal data</li>
                    <li>Opt out of email communications</li>
                    <li>Disable tracking technologies in app settings</li>
                </ul>

                <h2 style={styles.sectionTitle}>11. Acceptance of Privacy Policy</h2>
                <p style={styles.text}>
                    By clicking "Login" or "Sign Up," you acknowledge and agree to the terms of this Privacy Policy and
                    our Terms of Use.
                </p>

                <h2 style={styles.sectionTitle}>12. Contact Information</h2>
                <p style={styles.text}>
                    For questions or concerns about this Privacy Policy, you may contact us:
                </p>
                <ul style={styles.list}>
                    <li>Email: <a href="mailto:joinixproject@gmail.com" style={styles.link}>joinixproject@gmail.com</a>
                    </li>
                    <li>Website: <a href="https://joinix.info" target="_blank" rel="noopener noreferrer"
                                    style={styles.link}>joinix.info</a></li>
                </ul>

                <h2 style={styles.sectionTitle}>13. Changes to This Policy</h2>
                <p style={styles.text}>
                    We may update this Privacy Policy from time to time. Any changes will be posted with an updated
                    effective date.
                </p>

                <p style={styles.text}>
                    By continuing to use Joinix, you acknowledge and accept this Privacy Policy.
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

export default PrivacyPolicy;
