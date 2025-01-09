import React, { useState } from "react";
import COLORS from "../assets/colors";
import lineConnection from "../assets/svg/ConnectorTwo.svg";
import lineSingleConnection from "../assets/svg/Connector.svg";
import PhaseBlock from "../components/PhaseBlock";
import PhaseTitleBlock from "../components/PhaseTitleBlock";
import AboutPhaseBlock from "../components/AboutPhaseBlock";
import phoneScreen1 from "../assets/img/Screen1.png";

const RoadMap = () => {
    return (
        <div id="roadmap" style={styles.container}>
            <h2 style={styles.title}>Roadmap</h2>
            <p style={styles.screenInfoText}>
                This roadmap outlines our startup's key stages, from MVP to global scaling. We aim to bridge academic
                learning with real-world experience, offering IT students a platform to collaborate on projects, build
                skills, and create portfolios. Follow our progress as we shape the future of education and technology.
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
                    <div style={{height: 72}}></div>
                    <AboutPhaseBlock title='Creating and Implementing UI/UX'
                                     infoText='Design and develop user-friendly interfaces to enhance the overall user experience'/>
                    <AboutPhaseBlock title='Planning and Creating App Architecture'
                                     infoText='Develop a robust and scalable architecture for seamless app functionality'/>
                    <div style={{flex: 1}}></div>
                    <AboutPhaseBlock title='Prepare for Presenting App'
                                     infoText='Set up demo-ready projects to showcase project creation, team management, and progress tracking.'/>

                </div>
            </div>


            <div style={styles.row}>
                <div style={styles.col}>
                    <div style={{flex: 1}}></div>
                    <AboutPhaseBlock title='Improving App After User Feedback'
                                     infoText='Refine project creation and team management features based on user suggestions'/>
                </div>
                <div style={styles.col}>
                    <PhaseTitleBlock phaseTitle='Post-MVP Development' style={{alignSelf: 'flex-end',}}/>
                    <PhaseBlock title='Backend Implementation'
                                style={{alignSelf: 'flex-end',}}
                                infoText='Add authentication, user data storage, and project management'/>

                    <div style={styles.blockWithConnection}>
                        <img src={lineSingleConnection} style={{...styles.lines, marginBottom: '36px'}}/>
                        <PhaseBlock title='Feedback Iteration'
                                    infoText='Integrate user feedback to refine features and workflows'/>
                    </div>
                </div>
            </div>


            <div style={styles.row}>
                <div style={styles.col}>
                    <PhaseTitleBlock phaseTitle='Feature Expansions'/>
                    <div style={styles.blockWithConnection}>
                        <PhaseBlock title='Task Manager'
                                    infoText='Add advanced task creation, assignment, and tracking tools'/>
                        <img src={lineSingleConnection} style={{...styles.lines, marginBottom: '36px'}}/>
                    </div>
                    <PhaseBlock title='File Sharing'
                                infoText='Allow project teams to upload and share files'/>
                    <PhaseBlock title='Chat System'
                                infoText='Introduce real-time messaging for team collaboration'/>
                    <PhaseBlock title='Audio/Video Calls'
                                infoText='Add group communication tools for projects'/>
                    <div style={styles.blockWithConnection}>
                        <PhaseBlock title='AI Integration'
                                    infoText='Implement AI-driven project'/>
                        <img src={lineConnection} style={{...styles.lines, marginBottom: '36px'}}/>
                    </div>
                    <PhaseBlock title='Web Client'
                                infoText='Develop a full-featured web version of the app'/>
                    <div style={styles.blockWithConnection}>
                        <PhaseBlock title='Payments and Subscriptions'
                                    infoText='Enable monetization with premium features and subscription plans'/>
                        <img src={lineSingleConnection} style={{...styles.lines, marginBottom: '36px'}}/>
                    </div>

                </div>
                <div style={styles.col}>
                    <div style={{height: 132}}></div>
                    <AboutPhaseBlock title='Task Creation, Assignment, and Tracking Tools'
                                     infoText='Enable users to create tasks with titles, descriptions, and deadlines.  Allow team leads to assign tasks to specific team members'/>
                    <div style={{height: 320}}></div>
                    <AboutPhaseBlock title='AI Integration for Tasks'
                                     infoText='Recommend task assignments based on  skills and availability, and prioritize tasks to focus on critical  activities'/>
                    <AboutPhaseBlock title='1. AI Integration for Projects'
                                     infoText='Use AI to generate project plans with milestones, predict risks,  recommend mitigations, and provide insights to optimize workflows'/>
                    <div style={{flex: 1}}></div>
                    <AboutPhaseBlock title='2. AI Integration for Projects'
                                     infoText='Implement premium subscription plans with  advanced features like unlimited projects, analytics, and task  management'/>
                </div>
            </div>


            <div style={styles.row}>
                <div style={styles.col}>
                    <div style={{height: 74}}></div>
                    <AboutPhaseBlock title='Scaling to Other Countries'
                                     infoText='Localized Marketing Campaigns Run region-specific marketing campaigns  using local influencers, language-targeted ads, and partnerships with  educational institutions'/>
                    <AboutPhaseBlock title='Diverse Community Building'
                                     infoText='Foster a global community by showcasing projects with cross-country  teams, promoting international networking, and highlighting diverse  skills'/>
                </div>
                <div style={styles.col}>
                    <PhaseTitleBlock phaseTitle='Growth and Scaling' style={{alignSelf: 'flex-end',}}/>
                    <div style={styles.blockWithConnection}>
                        <img src={lineConnection}
                             style={{...styles.lines, marginBottom: '36px', transform: 'scaleX(-1)'}}/>
                        <PhaseBlock title='Global Scaling'
                                    style={{alignSelf: 'flex-end',}}
                                    infoText='Expand to international markets with localized content'/>
                    </div>
                    <PhaseBlock title='Non-IT Fields'
                                style={{alignSelf: 'flex-end',}}
                                infoText='Extend support to fields beyond IT, such as design and marketing'/>
                </div>
            </div>


            <div style={styles.row}>
                <div style={styles.col}>
                    <PhaseTitleBlock style={{width: '30vw',}} phaseTitle='Final Stages'/>

                    <PhaseBlock title='Core Features'
                                style={{width: '30vw',}}
                                infoText='Combine all features into an all-in-one platform'/>
                    <PhaseBlock title='Landing Page'
                                style={{width: '30vw',}}
                                infoText='Develop polished native Android and iOS apps'/>
                    <PhaseBlock title='Showcase MVP'
                                style={{width: '30vw',}}
                                infoText='Provide users with insights into skills, contributions, and project impact'/>

                </div>
                <div style={{width: '10vw'}}/>
                <div style={styles.phoneMockup}>
                    <img src={phoneScreen1} alt="Phone Mockup 1" style={styles.phone}/>
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
    screenInfoText: {
        color: COLORS.lightGrayText,
        fontSize: "clamp(12px, 1.1vw, 20px)",
        fontFamily: "Rubik, sans-serif",
        textAlign: 'center',
        marginBottom: "40px",
    },
    phoneMockup: {
        borderRadius: "80px",
        border: "1px solid rgba(217, 45, 32, 0.2)",
        display: "flex",
        height: "clamp(240px, 25vw, 480px)",
        alignSelf: 'center'
    },
    phone: {
        height: "clamp(200px, 20vw, 430px)",
        paddingRight: "70px",
        paddingLeft: "70px",
        alignSelf: "flex-end",
        // marginBottom: '-4px'
    },
    blockWithConnection: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    row: {
        display: "flex",
        flexDirection: "row",
        marginBottom: '80px'
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
