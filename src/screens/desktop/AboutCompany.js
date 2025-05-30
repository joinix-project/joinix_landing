import React, {useEffect, useState} from "react";
import COLORS from "../../assets/colors";
import phoneScreen1 from "../../assets/img/Screen1.png";
import axios from "axios";

const AboutCompany = () => {
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
            <div style={styles.leftSide}>
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
            <div style={styles.phoneMockup}>
                <img src={phoneScreen1} alt="Phone Mockup 1" style={styles.phone}/>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: '150px'
    },
    leftSide: {
        display: "flex",
        flexDirection: "column",
        width: "50%",
    },
    phoneMockup: {
        borderRadius: "80px",
        border: "1px solid rgba(217, 45, 32, 0.2)",
    },
    infoBlock: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        marginBottom: "40px",
    },
    title: {
        color: COLORS.primaryText,
        fontFamily: 'Rubik, sans-serif',
        fontSize: "clamp(20px, 2vw, 40px)",
        marginBottom: "40px",
    },
    subtitle: {
        fontSize: "clamp(14px, 1.25vw, 24px)",
        fontFamily: 'Rubik, sans-serif',
        fontWeight: "600",
        marginBottom: "0px",
        marginTop: "0px",
        color: COLORS.primaryText,
    },
    infoText: {
        fontSize: "clamp(12px, 1.1vw, 20px)",
        fontFamily: 'Rubik, sans-serif',
        fontWeight: "400",
        marginBottom: "0px",
        marginTop: "0px",
        color: COLORS.secondaryText,
    },
    phone: {
        height: "clamp(300px, 30vw, 547px)",
        paddingTop: "80px",
        paddingRight: "80px",
        paddingLeft: "80px",
        marginBottom: '-4px'
    },
    buttonStyles: {
        backgroundColor: COLORS.accent,
        color: "#fff",
        padding: "clamp(10px, 0.8vw, 18px) clamp(16px, 1.5vw, 28px)",
        marginTop: '0px',
        border: "none",
        borderRadius: "30px",
        fontSize: "clamp(10px, 1vw, 18px)",
        fontWeight: "400",
        fontFamily: 'Rubik, sans-serif',
        cursor: "pointer",
        alignSelf: 'flex-start',
    },
};

export default AboutCompany;
