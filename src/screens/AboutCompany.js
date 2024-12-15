import React from "react";
import screen1 from "../assets/img/Screen5.png";
import screen2 from "../assets/img/Screen4.png";
import screen3 from "../assets/img/Screenshot1.png";
import useIsMobile from "../hooks/useIsMobile";
import COLORS from "../assets/colors";

const AboutCompany = () => {
    const isMobile = useIsMobile();

    return (
        <div id="about" style={styles.container}>
            <h1 style={styles.title}>About our app</h1>
            {!isMobile ? (
                <div style={styles.rowContent}>
                    <div style={styles.imageWrapper}>
                        <img src={screen1} style={styles.image} alt="First Experience" />
                        <div style={styles.mobileUI} />
                    </div>
                    <div style={styles.textSection}>
                        <h2 style={styles.subtitle}>First experience of team-working</h2>
                        <p style={styles.description}>
                            Our platform helps individuals connect by tech stack, collaborate on projects, gain team
                            experience, and build portfolios, offering beginners hands-on opportunities to grow.
                        </p>
                    </div>
                </div>
            ) : (
                <div style={styles.colContent}>
                    <h2 style={styles.subtitleMob}>First experience of team working</h2>
                    <div style={styles.rowContentMob}>
                        <div style={styles.imageWrapper}>
                            <img
                                src={screen1}
                                style={styles.imageMob}
                                alt="First Experience"
                            />
                        </div>
                        <div style={styles.textSection}>
                            <p style={styles.descriptionMob}>
                                Our platform helps individuals connect by tech stack, collaborate on projects, gain team
                                experience, and build portfolios, offering beginners hands-on opportunities to grow.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {!isMobile ? (
                <div style={styles.rowContent}>
                    <div style={styles.textSection}>
                        <h2 style={styles.subtitle}>Quick start</h2>
                        <p style={styles.description}>
                            Our platform helps users with ideas but no team find like-minded individuals and form
                            dedicated teams. Using our tools, they can collaborate to turn ideas into MVPs, paving the
                            way for startup growth.
                        </p>
                    </div>
                    <div style={styles.imageWrapper}>
                        <img src={screen2} style={styles.image} alt="Quick Start" />
                        <div style={styles.mobileUI} />
                    </div>
                </div>
            ) : (
                <div style={styles.colContent}>
                    <h2 style={styles.subtitleMob}>Quick start</h2>
                    <div style={styles.rowContentMob}>
                        <div style={styles.textSection}>
                            <p style={styles.descriptionMob}>
                                Our platform helps users with ideas but no team find like-minded individuals and form
                                dedicated teams. Using our tools, they can collaborate to turn ideas into MVPs, paving
                                the way for startup growth.
                            </p>
                        </div>
                        <div style={styles.imageWrapper}>
                            <img
                                src={screen2}
                                style={styles.imageMob}
                                alt="Quick Start"
                            />
                        </div>
                    </div>
                </div>
            )}

            {!isMobile ? (
                <div style={styles.rowContent}>
                    <div style={styles.imageWrapper}>
                        <img
                            src={screen3}
                            style={styles.image}
                            alt="All-in-One Platform"
                        />
                        <div style={styles.mobileUI} />
                    </div>
                    <div style={styles.textSection}>
                        <h2 style={styles.subtitle}>All-in-One Platform</h2>
                        <p style={styles.description}>
                            Many platforms offer communication, task management, and file sharing, but they are often
                            separate. Our platform unifies these features, allowing users to manage tasks, communicate,
                            and share files seamlessly in one place, boosting efficiency.
                        </p>
                    </div>
                </div>
            ) : (
                <div style={styles.colContent}>
                    <h2 style={styles.subtitleMob}>All-in-One Platform</h2>
                    <div style={styles.rowContentMob}>
                        <div style={styles.imageWrapper}>
                            <img
                                src={screen3}
                                style={styles.imageMob}
                                alt="All-in-One Platform"
                            />
                        </div>
                        <div style={styles.textSection}>
                            <p style={styles.descriptionMob}>
                                Many platforms offer communication, task management, and file sharing, but they are often
                                separate. Our platform unifies these features, allowing users to manage tasks,
                                communicate, and share files seamlessly in one place, boosting efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: "16px",
        backgroundColor: COLORS.background,
    },
    title: {
        textAlign: "center",
        fontSize: "clamp(24px, 4vw, 52px)",
        color: COLORS.primaryText,
    },
    rowContent: {
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "70px",
    },
    rowContentMob: {
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: "50px",
    },
    colContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    imageWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    mobileUI: {
        backgroundColor: COLORS.background,
        width: "clamp(50vh, 10vw, 65vh)",
        height: "clamp(30vh, 5vw, 40vh)",
        borderRadius: "16px",
        boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)",
        zIndex: 0,
        marginTop: "-50vh",
    },
    image: {
        width: "clamp(30vh, 10vw, 40vh)",
        height: "auto",
        backgroundColor: 'transparent',
        zIndex: 1,
        // boxShadow: "0 20px 30px rgba(0, 0, 0, 0.3)",
    },
    imageMob: {
        width: "40vw",
        height: "auto",
        backgroundColor: 'transparent',
        zIndex: 1,
        // boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
    },
    textSection: {
        maxWidth: "600px",
    },
    subtitle: {
        fontSize: "clamp(24px, 3vw, 32px)",
        marginBottom: "20px",
        color: COLORS.primaryText,
    },
    subtitleMob: {
        fontSize: "clamp(16px, 3vw, 26px)",
        color: COLORS.primaryText,
        textAlign: "center",
    },
    description: {
        fontSize: "clamp(14px, 2vw, 18px)",
        marginBottom: "20px",
        lineHeight: "1.6",
        fontWeight: "600",
        color: COLORS.secondaryText,
    },
    descriptionMob: {
        fontSize: "clamp(12px, 2vw, 18px)",
        marginBottom: "20px",
        padding: "10px",
        lineHeight: "1.6",
        fontWeight: "600",
        color: COLORS.secondaryText,
    },
};

export default AboutCompany;
