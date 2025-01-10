import React, { useState } from "react";
import COLORS from "../../assets/colors";

const roadmapData = [
    {
        chapter: "Chapter 1",
        title: "MVP Stage",
        phases: [
            { title: "Core Features", infoText: "Enable users to create/join projects, manage teams, and track progress." },
            { title: "Landing Page", infoText: "Explaining the app, showcasing MVP features, and targeting early users." },
            { title: "Showcase MVP", infoText: "Present MVP to target audiences (students, universities, small businesses)." },
            { title: "Search for Investors", infoText: "Start investor outreach immediately with a pitch deck and MVP." },
        ],
    },
    {
        chapter: "Chapter 2",
        title: "Post-MVP Development",
        phases: [
            { title: "Backend Implementation", infoText: "Add authentication, user data storage, and project management." },
            { title: "Feedback Iteration", infoText: "Integrate user feedback to refine features and workflows." },
        ],
    },
    {
        chapter: "Chapter 3",
        title: "Feature Expansions",
        phases: [
            { title: "Task Manager", infoText: "Add advanced task creation, assignment, and tracking tools." },
            { title: "File Sharing", infoText: "Allow project teams to upload and share files." },
            { title: "Chat System", infoText: "Introduce real-time messaging for team collaboration." },
            { title: "Audio/Video Calls", infoText: "Add group communication tools for projects." },
            { title: "AI Integration", infoText: "Implement AI-driven project recommendations and task assignments." },
            { title: "Web Client", infoText: "Develop a full-featured web version of the app." },
            { title: "Payments and Subscriptions", infoText: "Enable monetization with premium features and subscription plans." },
        ],
    },
    {
        chapter: "Chapter 4",
        title: "Growth and Scaling",
        phases: [
            { title: "Global Scaling", infoText: "Expand to international markets with localized content." },
            { title: "Non-IT Fields", infoText: "Extend support to fields beyond IT, such as design and marketing." },
        ],
    },
    {
        chapter: "Chapter 5",
        title: "Final Stages",
        phases: [
            { title: "Core Features", infoText: "Combine all features into an all-in-one platform." },
            { title: "Landing Page", infoText: "Develop polished native Android and iOS apps." },
            { title: "Showcase MVP", infoText: "Provide users with insights into skills, contributions, and project impact." },
        ],
    },
];

const MobileRoadMap = () => {
    const [openPhase, setOpenPhase] = useState(null);

    const togglePhase = (phase) => {
        setOpenPhase(openPhase === phase ? null : phase);
    };

    return (
        <div style={styles.container} id="roadmap">
            <h2 style={styles.title}>Roadmap</h2>
            <p style={styles.screenInfoText}>
                From MVP to global scaling, connecting academics with real-world experience
            </p>

            {roadmapData.map((chapter, index) => (
                <div style={{width: "100%", display: "flex", flexDirection: "column"}}>
                    {openPhase !== index ? (<div key={index} style={styles.phaseBlock} onClick={() => togglePhase(index)}>
                        <p style={styles.phaseChapter}>
                            {chapter.chapter}
                        </p>
                        <h2 style={styles.phaseTitle}>
                            {chapter.title}
                        </h2>
                        <p style={styles.countPhase}>
                            {chapter.phases.length} phases
                        </p>
                    </div>) : (
                        <h2 style={{...styles.phaseTitle, marginBottom: '12px', marginTop: '16px'}}>
                            {chapter.title}
                        </h2>
                    )}
                    {openPhase === index && (
                        <div style={styles.details}>
                            {chapter.phases.map((phase, i) => (
                                <div key={i} style={styles.phaseDetail}>
                                    <h3 style={styles.detailTitle}>{phase.title}</h3>
                                    <p style={styles.detailInfo}>{phase.infoText}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "80px",
    },
    phaseChapter: {
        position: "absolute",
        top: -4,
        left: 4,
        fontSize: 10,
        color: "gray",
        fontFamily: "Rubik, sans-serif",
    },
    title: {
        color: COLORS.primaryText,
        fontFamily: "Rubik, sans-serif",
        fontSize: "20px",
        marginBottom: "8px",
        marginTop: "0px",
    },
    countPhase: {
        color: COLORS.lightGrayText,
        fontSize: "12px",
        fontFamily: "Rubik, sans-serif",
        marginTop: "0px",
        marginBottom: "0px",
    },
    phaseTitle: {
        color: COLORS.lightGrayText,
        fontSize: "15px",
        fontFamily: "Rubik, sans-serif",
        marginTop: "0px",
        marginBottom: "2px",
        alignSelf: "center",
    },
    screenInfoText: {
        color: COLORS.lightGrayText,
        fontSize: "15px",
        fontFamily: "Rubik, sans-serif",
        textAlign: "center",
        marginTop: "0px",
        marginBottom: "16px",
    },
    phaseBlock: {
        borderRadius: "10px",
        border: "1px solid rgba(217, 45, 32, 0.2)",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        marginBottom: "16px",
        cursor: "pointer",
    },
    details: {
        marginBottom: '16px'
    },
    phaseDetail: {
        marginBottom: "12px",
        padding: '12px 24px',
        border: "1px solid rgba(225, 225, 225, 0.4)",
        borderRadius: "10px",
    },
    detailTitle: {
        color: COLORS.lightGrayText,
        fontSize: "15px",
        fontFamily: "Rubik, sans-serif",
        marginBottom: "4px",
        marginTop: '0px'
    },
    detailInfo: {
        color: COLORS.lightGrayText,
        fontSize: "15px",
        fontFamily: "Rubik, sans-serif",
        marginBottom: "0px",
        marginTop: '0px'
    },
};

export default MobileRoadMap;
