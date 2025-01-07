import React, { useState } from "react";
import COLORS from "../assets/colors";
import lineConnection from "../assets/svg/ConnectorTwo.svg";
import lineSingleConnection from "../assets/svg/Connector.svg";
import PhaseBlock from "../components/PhaseBlock";
import PhaseTitleBlock from "../components/PhaseTitleBlock";
import AboutPhaseBlock from "../components/AboutPhaseBlock";

const RoadMap = () => {
    return (
        <div id="roadmap" style={styles.container}>
            <h2 style={styles.title}>Roadmap</h2>
            <p style={styles.screenInfoText}>
                This roadmap outlines our startup's key stages, from MVP to global scaling. We aim to bridge academic learning with real-world experience, offering IT students a platform to collaborate on projects, build skills, and create portfolios. Follow our progress as we shape the future of education and technology.
            </p>

            <div style={styles.row}>
                <div style={styles.col}>
                    <PhaseTitleBlock phaseTitle='MVP Stage'/>
                    <div style={styles.blockWithConnection}>
                        <PhaseBlock title='Core Features'
                                    infoText='Enable users to create/join projects, manage teams, and track progress (no backend for MVP)'/>
                        <img src={lineConnection} style={{...styles.lines, marginBottom: '36px'}}/>
                    </div>
                    <PhaseBlock title='Landing Page'
                                infoText='Explaining the app, showcasing MVP features, and targeting early users'/>
                    <PhaseBlock title='Showcase MVP'
                                infoText='Present MVP to target audiences (students, universities, small businesses)'/>
                    <div style={styles.blockWithConnection}>
                        <PhaseBlock title='Search for Investors'
                                    infoText='Start investor outreach immediately with a pitch deck and MVP'/>
                        <img src={lineSingleConnection} style={{...styles.lines, marginBottom: '36px'}}/>
                    </div>
                </div>
                <div style={styles.col}>
                    <AboutPhaseBlock title='Creating and Implementing UI/UX'
                                    infoText='Design and develop user-friendly interfaces to enhance the overall user experience'/>
                    <AboutPhaseBlock title='Planning and Creating App Architecture'
                                infoText='Develop a robust and scalable architecture for seamless app functionality'/>
                    <AboutPhaseBlock title='Prepare for Presenting App'
                                infoText='Set up demo-ready projects to showcase project creation, team management, and progress tracking.'/>

                </div>
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
    },
    title: {
        color: COLORS.primaryText,
        fontFamily: 'Rubik, sans-serif',
        fontSize: "clamp(20px, 2vw, 40px)",
        marginBottom: "20px",
    },
    screenInfoText:{
        color: COLORS.lightGrayText,
        fontSize: "clamp(12px, 1.1vw, 20px)",
        fontFamily: "Rubik, sans-serif",
        textAlign: 'center',
        marginBottom: "40px",
    },
    blockWithConnection: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    row: {
        display: "flex",
        flexDirection: "row",
    },
    col: {
        display: "flex",
        flexDirection: "column",
    },
    mainBlock: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.accent,
        padding: "30px",
        borderRadius: "10px",
        maxWidth: '22vw',
        marginBottom: "36px",
    },
    phaseBlock: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        border: "1px solid rgba(225, 225, 225, 0.3)",
        borderRadius: "10px",
        padding: "30px",
        maxWidth: '22vw',
        marginBottom: "36px",
    },
    titleText: {
        color: COLORS.primaryText,
        fontFamily: "Rubik, sans-serif",
        fontSize: "clamp(14px, 1.25vw, 24px)",
        marginBottom: "0px",
        marginTop: "0px",
    },
    phaseText: {
        color: COLORS.primaryText,
        fontFamily: "Rubik, sans-serif",
        fontSize: "clamp(12px, 1.1vw, 20px)",
        marginBottom: "8px",
        marginTop: "0px",
    },
    phaseInfoText: {
        color: COLORS.lightGrayText,
        fontFamily: "Rubik, sans-serif",
        fontSize: "clamp(8px, 0.9vw, 14px)",
        // fontSize: "14px",
        marginBottom: "0px",
        marginTop: "0px",
    },
    lines: {
        width: "118px",
    }
};

export default RoadMap
