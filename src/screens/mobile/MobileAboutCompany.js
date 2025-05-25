import React, {useEffect, useState} from "react";
import COLORS from "../../assets/colors";
import phoneScreen1 from "../../assets/img/Screen1.png";
import Modal from "../../components/Modal";
import MobileModal from "../../components/MobileModal";
import axios from "axios";

const MobileAboutCompany = () => {
    const [userCount, setUserCount] = useState(null);

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

    useEffect(() => {
        const fetchUserCount = async () => {
            try {
                const response = await axios.get('https://api.joinix.info/landing/user-count');
                setUserCount(response.data.data);
            } catch (error) {
                console.error("Error fetching user count:", error);
                // alert("Failed to fetch user count.");
            }
        };

        fetchUserCount();
    }, []);

    return (
        <div id="about" style={styles.container}>
            <h2 style={styles.title}>
                About our app
            </h2>

            <div style={styles.infoBlock}>
                <p style={styles.subtitle}>
                    Collaborate with {userCount} other members!
                </p>
                <p style={styles.infoText}>
                    Join a thriving community of tech enthusiasts, developers, and innovators. Whether you're
                    looking to sharpen your skills, work on real-world projects, or build your portfolio, our
                    platform connects you with the right people. Start collaborating today and bring your ideas to
                    life!
                </p>
            </div>
            <div style={styles.infoBlock}>
                <p style={styles.subtitle}>
                    First experience of team-working
                </p>
                <p style={styles.infoText}>
                    Our platform helps individuals connect by tech stack, collaborate on projects, gain team
                    experience, and build portfolios, offering beginners hands-on opportunities to grow.
                </p>
            </div>

            <div style={styles.infoBlock}>
                <p style={styles.subtitle}>
                    Quick start
                </p>
                <p style={styles.infoText}>
                    Our platform helps users with ideas but no team find like-minded individuals and form dedicated
                    teams. Using our tools, they can collaborate to turn ideas into MVPs, paving the way for startup
                    growth.
                </p>
            </div>

            <div style={styles.infoBlock}>
                <p style={styles.subtitle}>
                    All-in-One Platform
                </p>
                <p style={styles.infoText}>
                    Many platforms offer communication, task management, and file sharing, but they are often
                    separate. Our platform unifies these features, allowing users to manage tasks, communicate, and
                    share files seamlessly in one place, boosting efficiency.
                </p>
            </div>
            <button style={styles.buttonStyles} onClick={handleDownload}>Download App</button>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "space-between",
        marginBottom: '100px'
    },
    infoBlock: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        marginBottom: "16px",
    },
    title: {
        color: COLORS.primaryText,
        fontFamily: 'Rubik, sans-serif',
        alignSelf: 'flex-start',
        fontSize: "20px",
        marginBottom: "16px",
    },
    subtitle: {
        fontSize: "15px",
        fontFamily: 'Rubik, sans-serif',
        fontWeight: "600",
        marginBottom: "0px",
        marginTop: "0px",
        color: COLORS.primaryText,
    },
    infoText: {
        fontSize: "15px",
        fontFamily: 'Rubik, sans-serif',
        fontWeight: "400",
        marginBottom: "0px",
        marginTop: "0px",
        color: COLORS.secondaryText,
    },
    buttonStyles: {
        backgroundColor: COLORS.accent,
        color: "#fff",
        padding: "12px",
        marginTop: '0px',
        border: "none",
        borderRadius: "30px",
        fontSize: "14px",
        fontWeight: "400",
        fontFamily: 'Rubik, sans-serif',
        cursor: "pointer",
        alignSelf: 'flex-start',
    },
};

export default MobileAboutCompany;
