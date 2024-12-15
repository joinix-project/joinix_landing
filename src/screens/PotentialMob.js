import { useState, useEffect, useRef } from 'react';
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
import useIsMobile from "../hooks/useIsMobile";
import COLORS from "../assets/colors";

const PotentialMob = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionsRef = useRef([]);
    const isMobile = useIsMobile();

    useEffect(() => {
        const scrollContainer = sectionsRef.current[0]?.parentElement;

        const handleScroll = (event) => {
            const scrollPosition = event.target.scrollLeft;
            const sectionWidth = event.target.offsetWidth;
            const newIndex = Math.round(scrollPosition / sectionWidth);

            if (newIndex !== activeIndex) {
                setActiveIndex(newIndex);
            }
        };

        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener("scroll", handleScroll);
            }
        };
    }, [activeIndex]);

    const handleToggle = (index) => {
        setActiveIndex(index);
    };

    const sections = [
        {
            title: "Bridging the Experience Gap",
            content: "Gives IT students real-world project experience, bridging the gap between academics and industry.",
            image: firstImg,
            icon: expGap,
        },
        {
            title: "Targeted Niche",
            content: "Focused on IT students and non-commercial projects, with potential for expansion to other fields.",
            image: secondImg,
            icon: targeted,
        },
        {
            title: "Global Appeal",
            content: "Relevant for students, universities, and businesses, with scalability across regions and markets.",
            image: thirdImg,
            icon: global,
        },
        {
            title: "Investor-Friendly Model",
            content: "Monetization through subscriptions, premium features, and partnerships with educational institutions.",
            image: forthImg,
            icon: money,
        },
        {
            title: "Scalability",
            content: "Adaptable for global expansion, non-IT sectors, and AI-driven features like matching and mentoring.",
            image: fifthImg,
            icon: scalability,
        },
        {
            title: "Future-Proof Features",
            content: "Potential for integrating AI, video collaboration, and analytics to meet evolving industry needs.",
            image: sixImg,
            icon: features,
        },
    ];

    return (
        <div id="potential" style={styles.container}>
            <h1 style={styles.title}>Application potential</h1>
            <p style={styles.description}>
                Our platform connects academic learning with real-world IT experience. Students gain skills and build
                portfolios through non-commercial projects
            </p>

            <div style={{ ...styles.sectionsContainer }}>
                {sections.map((section, index) => (
                    <div
                        key={index}
                        onClick={() => handleToggle(index)}
                        ref={(el) => (sectionsRef.current[index] = el)}
                        style={{
                            ...styles.sectionCard,
                            marginLeft: index === 0 && '24px',
                            backgroundColor: activeIndex === index ? COLORS.accent : COLORS.background,
                        }}
                    >
                        <div>
                            <div style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                                <img
                                    src={section.icon}
                                    style={styles.icon}
                                    alt={`${section.title} icon`}
                                />
                                <h2 style={styles.sectionTitle}>{section.title}</h2>
                            </div>
                            <p style={styles.sectionContent}>{section.content}</p>
                        </div>
                    </div>
                ))}
                <div style={{ marginRight: 24 }}>
                    <p style={{ color: COLORS.background }}>.</p>
                </div>
            </div>

            <div style={styles.content}>
                <img
                    src={sections[activeIndex].image}
                    style={activeIndex === 4 ? styles.mainImageFifth : styles.mainImage}
                    alt="Main Screen"
                />
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        paddingBottom: '50px',
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: COLORS.background,
    },
    title: {
        fontSize: "clamp(24px, 4vw, 52px)",
        marginBottom: "10px",
        color: COLORS.primaryText,
    },
    description: {
        color: COLORS.secondaryText,
        fontSize: "clamp(12px, 2.5vw, 18px)",
        textAlign: "center",
        fontWeight: "bold",
        maxWidth: "70%",
        marginBottom: "30px",
    },
    content: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: "20px",
    },
    mainImage: {
        height: "clamp(20vh, 40vh, 85vh)",
        width: "auto",
        filter: "grayscale(100%)",
    },
    mainImageFifth: {
        height: "clamp(16vh, 30vh, 70vh)",
        width: "auto",
        filter: "grayscale(100%)",
    },
    sectionsContainer: {
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        overflowX: "auto",
        width: "100%",
        paddingBottom: "20px",
        paddingTop: "10px",
        scrollSnapType: "x mandatory",
        scrollBehavior: "smooth",
    },
    sectionCard: {
        borderRadius: "16px",
        marginRight: '-12px',
        display: "flex",
        flexDirection: "row",
        boxShadow: `0 2px 4px rgba(0, 0, 0, 0.2), 0 6px 12px rgba(0, 0, 0, 0.15)`,

        padding: "clamp(10px, 2vw, 20px)",
        width: "85%",
        flexShrink: 0,
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        scrollSnapAlign: "center",
    },
    icon: {
        width: "clamp(20px, 2.5vw, 40px)",
        height: "auto",
        marginRight: "10px",
    },
    sectionTitle: {
        fontSize: "clamp(14px, 2.5vw, 18px)",
        color: COLORS.primaryText,
    },
    sectionContent: {
        fontSize: "clamp(12px, 2.5vw, 16px)",
        color: COLORS.secondaryText,
        marginTop: '0px',
    },
};

export default PotentialMob;
