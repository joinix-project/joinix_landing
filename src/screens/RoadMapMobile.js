import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GrayInfoIcon from "../assets/svg/GrayInfo.svg";
import AccentDownArrow from '../assets/svg/ConnectorArrow.svg';
import COLORS from "../assets/colors";

const chapters = [
    {
        id: 1,
        title: "MVP Stage",
        phases: [
            {
                title: "Core Features",
                description: "Enable users to create/join projects, manage teams, and track progress (no backend for MVP).",
            },
            {
                title: "Landing Page",
                description: "Create a website explaining the app, showcasing MVP features, and targeting early users.",
            },
            {
                title: "Showcase MVP",
                description: "Present MVP to target audiences (students, universities, small businesses).",
            },
            {
                title: "Search for Investors",
                description: "Start investor outreach immediately with a pitch deck and MVP",
            },
        ],
    },
    {
        id: 2,
        title: "Post-MVP Development",
        phases: [
            {
                title: "Backend Implementation",
                description: "Add authentication, user data storage, and project management.",
            },
            {
                title: "Feedback Iteration",
                description: "Integrate user feedback to refine features and workflows.",
            },
        ],
    },
    {
        id: 3,
        title: "Feature Expansion",
        phases: [
            {
                title: "Task Manager",
                description: "Add advanced task creation, assignment, and tracking tools.",
            },
            {
                title: "File Sharing",
                description: "Allow project teams to upload and share files.",
            },
            {
                title: "Chat System",
                description: "Introduce real-time messaging for team collaboration.",
            },
            {
                title: "Audio/Video Calls",
                description: "Add group communication tools for projects.",
            },
            {
                title: "AI Integration",
                description: "Implement AI-driven project.",
            },
            {
                title: "Web Client",
                description: "Develop a full-featured web version of the app.",
            },
            {
                title: "Payments and Subscriptions",
                description: "Enable monetization with premium features and subscription plans.",
            },
        ],
    },
    {
        id: 4,
        title: "Growth and Scaling",
        phases: [
            {
                title: "Global Scaling",
                description: "Expand to international markets with localized content.",
            },
            {
                title: "Non-IT Fields",
                description: "Extend support to fields beyond IT, such as design and marketing.",
            },
        ],
    },
    {
        id: 5,
        title: "Final Stages",
        phases: [
            {
                title: "Core Features",
                description: "Combine all features into an all-in-one platform.",
            },
            {
                title: "Landing Page",
                description: "Develop polished native Android and iOS apps.",
            },
            {
                title: "Showcase MVP",
                description: "Provide users with insights into skills, contributions, and project impact.",
            },
        ],
    },
];


const RoadMapMobile = () => {
    const { taskId } = useParams();
    const [expandedIndex, setExpandedIndex] = useState(null);

    useEffect(() => {
        const index = chapters.findIndex(chapter => chapter.id === parseInt(taskId));
        if (index !== -1) {
            setExpandedIndex(index);
        }
    }, [taskId]);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div style={styles.container} id="roadmap">
            <h1 style={styles.title}>Roadmap</h1>
            <div style={styles.infoContainer}>
                <img src={GrayInfoIcon} style={styles.iconInfo} />
                <p style={styles.infoText}>
                    From MVP to global scaling, connecting academics with real-world experience
                </p>
            </div>

            <div style={styles.chaptersContainer}>
                {chapters.map((chapter, index) => (
                    <div key={index} style={styles.chapterWrapper}>
                        <button
                            style={{
                                ...styles.chapterButton,
                                ...(expandedIndex === index ? styles.expandedChapterButton : {}),
                            }}
                            onClick={() => toggleExpand(index)}
                        >
                            <div style={styles.chapterHeader}>
                                <p style={{
                                    ...styles.chapterIndexText,
                                    ...(expandedIndex === index ? styles.expandedChapterText : {}),
                                }}>
                                    Chapter {index + 1}
                                </p>
                                {expandedIndex !== index && (
                                    <div style={styles.phaseInfo}>
                                        <p style={styles.phaseText}>
                                            {chapter.phases.length} {chapter.phases.length === 1 ? 'phase' : 'phases'}
                                        </p>
                                    </div>

                                )}
                            </div>

                            <p style={{
                                ...styles.chapterTitle,
                                ...(expandedIndex === index ? styles.expandedChapterText : {}),
                            }}>
                                {chapter.title}
                            </p>
                            <p style={{
                                ...styles.chapterDescription,
                                ...(expandedIndex === index ? styles.expandedChapterText : {}),
                            }}>
                                {chapter.description}
                            </p>

                            {expandedIndex === index && (
                                <>
                                    {chapter.phases.map((phase, phaseIndex) => (
                                        <div key={phaseIndex} style={styles.phaseItem}>
                                            <p style={styles.phaseTitle}>{phase.title}</p>
                                            <p style={styles.phaseDescription}>{phase.description}</p>
                                        </div>
                                    ))}
                                </>
                            )}

                        </button>
                        {chapters.length - 1 !== index ? (
                            <div style={styles.iconWrapper}>
                                <img src={AccentDownArrow} style={styles.iconRow} />
                            </div>
                        ) : (
                            <div style={styles.bottomSpacing} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: COLORS.background,
        padding: "clamp(10px, 2vw, 20px)",
    },
    iconRow: {
        width: "clamp(3vh, 5vw, 6vh)",
        height: "auto",
    },
    iconInfo: {
        width: "clamp(5vh, 10vw, 12vh)",
        height: "auto",
        alignSelf: "center",
    },
    iconWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    title: {
        fontSize: "clamp(24px, 4vw, 52px)",
        color: COLORS.primaryText,
        marginBottom: "10px",
    },
    phaseTitle: {
        color: COLORS.primaryText,
        fontSize: "clamp(16px, 2.5vw, 18px)",
        fontWeight: "bold",
        marginBottom: "clamp(5px, 0.5vw, 8px)",
    },

    infoContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: "clamp(10px, 1.5vw, 20px)",
    },
    infoText: {
        color: COLORS.secondaryText,
        fontSize: "clamp(12px, 2.5vw, 18px)",
        width: "70%",
        textAlign: "center",
        fontWeight: "bold",
        flex: 1,
    },
    chaptersContainer: {
        marginTop: "clamp(15px, 3vw, 30px)",
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    chapterWrapper: {
        width: "100%",
    },
    chapterButton: {
        backgroundColor: "#ffffff",
        padding: "clamp(12px, 2vw, 20px)",
        borderRadius: "clamp(8px, 1.5vw, 10px)",
        width: "100%",
        textAlign: "left",
        transition: "box-shadow 0.3s ease, background-color 0.3s ease",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        border: "none",
    },
    expandedChapterButton: {
        backgroundColor: COLORS.accent,
        boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.15)",
    },
    chapterHeader: {
        display: "flex",
        justifyContent: "space-between",
    },
    chapterIndexText: {
        color: COLORS.secondaryText,
        fontSize: "clamp(14px, 2.5vw, 16px)",
        marginBottom: "clamp(5px, 0.5vw, 8px)",
    },
    expandedChapterText: {
        color: COLORS.primaryText,
    },
    phaseInfo: {
        backgroundColor: '#f0f0f0',
        paddingLeft: "clamp(8px, 1.5vw, 12px)",
        paddingRight: "clamp(8px, 1.5vw, 12px)",
        borderRadius: "clamp(6px, 1vw, 8px)",
    },
    phaseText: {
        color: COLORS.primaryText,
        fontSize: "clamp(14px, 2.5vw, 16px)",
    },
    chapterTitle: {
        color: COLORS.primaryText,
        fontSize: "clamp(16px, 2.5vw, 20px)",
        fontWeight: "bold",
        marginBottom: "clamp(5px, 1vw, 10px)",
    },
    chapterDescription: {
        color: COLORS.secondaryText,
        fontSize: "clamp(14px, 2vw, 16px)",
    },
    phaseItem: {
        backgroundColor: "#ffffff",
        padding: "clamp(15px, 2vw, 20px)",
        borderRadius: "clamp(8px, 1.5vw, 10px)",
        marginTop: "clamp(10px, 1vw, 20px)",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        border: "none",
    },
    phaseDescription: {
        color: COLORS.primaryText,
        fontSize: "clamp(14px, 2.5vw, 16px)",
    },
    bottomSpacing: {
        marginBottom: "clamp(30px, 4vw, 50px)",
    },
};

export default RoadMapMobile;
