import { useState } from 'react';
import firstImg from "../assets/img/pngwing.png";
import secondImg from "../assets/img/pngwing2.png";
import thirdImg from "../assets/img/global.svg"
import forthImg from "../assets/img/investor.svg"
import fifthImg from "../assets/img/scale.svg"
import sixImg from "../assets/img/future.svg"
import expGap from "../assets/svg/git-network.svg";
import targeted from "../assets/svg/school.svg";
import global from "../assets/svg/earth.svg";
import money from "../assets/svg/cash.svg";
import scalability from "../assets/svg/scan.svg";
import features from "../assets/svg/construct.svg";
import COLORS from "../assets/colors";

const Potential = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex(index);
    };

    const sections = [
        {
            title: "Bridging the Experience Gap",
            content: "Provides IT students with real-world project experience, bridging the gap between academics and industry demands",
            image: firstImg,
            icon: expGap,
        },
        {
            title: "Targeted Niche",
            content: "Focused on IT students and non-commercial projects, ensuring clear market positioning with room for future expansion to other fields",
            image: secondImg,
            icon: targeted,
        },
        {
            title: "Global Appeal",
            content: "Universally relevant for students, universities, and businesses, with scalability to diverse regions and markets.",
            image: thirdImg,
            icon: global,
        },
        {
            title: "Investor-Friendly Model",
            content: "Monetization through subscriptions, premium features, and partnerships with educational institutions and businesses",
            image: forthImg,
            icon: money,
        },
        {
            title: "Scalability",
            content: "Easily adaptable for global expansion, non-IT sectors, and advanced features like AI-driven matching and mentoring",
            image: fifthImg,
            icon: scalability,
        },
        {
            title: "Future-Proof Features",
            content: "Potential for integration with cutting-edge technologies (AI, video collaboration, analytics) and evolving industry needs.",
            image: sixImg,
            icon: features,
        },
    ];

    return (
        <div id="potential" style={styles.container}>
            <h1 style={styles.title}>Application potential</h1>
            <p style={styles.description}>
                Our platform connects academic learning with real-world IT experience. Students gain skills and build
                portfolios through non-commercial projects. Scalable and global, it supports various industries with
                subscription-based monetization and plans for AI integration.
            </p>
            <div style={styles.content}>
                <img
                    src={sections[activeIndex].image}
                    style={styles.mainImage}
                    alt="Main Screen"
                />
                <div style={styles.sectionsContainer}>
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            onClick={() => handleToggle(index)}
                            style={{
                                ...styles.sectionCard,
                                backgroundColor: activeIndex === index ? COLORS.primaryText : COLORS.accent,
                                color: activeIndex === index ? "#fff" : COLORS.primaryText,
                                paddingLeft: activeIndex === index ? '20px' : '10px',
                                borderColor: COLORS.border,
                            }}
                        >
                            {activeIndex !== index && (
                                <img
                                    src={section.icon}
                                    style={styles.icon}
                                    alt={`${section.title} icon`}
                                />
                            )}
                            <div>
                                <h2 style={styles.sectionTitle}>{section.title}</h2>
                                {activeIndex === index && (
                                    <p style={styles.sectionContent}>{section.content}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "clamp(20px, 5vw, 80px)",
        backgroundColor: COLORS.background,
        marginTop: 100
    },
    title: {
        fontSize: "clamp(24px, 4vw, 52px)",
        marginBottom: "10px",
        color: COLORS.primaryText,
    },
    description: {
        color: COLORS.secondaryText,
        fontSize: "clamp(14px, 2.5vw, 18px)",
        textAlign: "center",
        fontWeight: "bold",
        maxWidth: "70%",
        marginBottom: "30px",
    },
    content: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        gap: "20px",
    },
    mainImage: {
        height: "clamp(40vh, 60vh, 85vh)",
        width: "auto",
        borderRadius: "24px",
        // boxShadow: "0 20px 30px rgba(0, 0, 0, 0.5)",
        filter: "grayscale(100%)",
    },
    sectionsContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    },
    sectionCard: {
        borderRadius: "16px",
        display: "flex",
        flexDirection: "row",
        boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)",
        padding: "clamp(10px, 2vw, 20px)",
        width: "500px",
        margin: "0 auto",
        cursor: "pointer",
        transition: "background-color 0.3s ease, color 0.3s ease",
        borderWidth: "1px",
        borderStyle: "solid",
    },
    icon: {
        width: "clamp(20px, 2.5vw, 40px)",
        height: "auto",
        marginRight: "10px",
    },
    sectionTitle: {
        fontSize: "clamp(16px, 2.5vw, 18px)",
    },
    sectionContent: {
        fontSize: "clamp(14px, 2.5vw, 16px)",
        color: COLORS.secondaryText,
    },
};

export default Potential;
