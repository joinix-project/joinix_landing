import React, { useState } from "react";
import connectImg from '../assets/svg/ConnectorArrow.svg'
import connectImgSecond from '../assets/svg/Connector.svg'
import connectImgTwo from '../assets/svg/ConnectorTwo.svg'


const RoadMap = () => {

    return (
        <div id="roadmap" style={styles.container}>
            <h1 style={{fontSize: '52px', marginBottom: '1px'}}>Roadmap</h1>
            <p style={{
                color: 'gray',
                fontSize: '18px',
                width: '70%',
                textAlign: 'center',
                fontWeight: 'bold',
                marginBottom: '80px'
            }}>
                This roadmap outlines our startup's key stages, from MVP to global scaling. We aim to bridge academic learning with real-world experience, offering IT students a platform to collaborate on projects, build skills, and create portfolios. Follow our progress as we shape the future of education and technology.
            </p>
            <div style={styles.row}>
                <div style={styles.leftColumn}>
                    <div style={styles.mainBlock}>
                        <p style={styles.mainStageText}>MVP Stage</p>
                    </div>

                    <div style={{position: 'relative'}}>
                        <div
                            key={0}
                            style={{
                                ...styles.secondaryBlock,
                            }}
                        >
                            <p style={styles.stageText}>Core Features</p>
                            <p style={styles.aboutStageText}>
                                Enable users to create/join projects, manage teams, and track progress (no backend for
                                MVP).
                            </p>
                        </div>
                        <img src={connectImgTwo}
                             style={{
                                 width: '10vh',
                                 height: 'auto',
                                 position: 'absolute',
                                 right: '-10vh',
                                 bottom: '15%',
                             }}/>
                    </div>
                    <div
                        key={1}
                        style={{
                            ...styles.secondaryBlock,
                        }}
                    >
                        <p style={styles.stageText}>Landing Page</p>
                        <p style={styles.aboutStageText}>
                            Create a website explaining the app, showcasing MVP features, and targeting early users.
                        </p>
                    </div>

                    <div
                        key={2}
                        style={{
                            ...styles.secondaryBlock,
                        }}
                    >
                        <p style={styles.stageText}>Showcase MVP</p>
                        <p style={styles.aboutStageText}>
                            Present MVP to target audiences (students, universities, small businesses).
                        </p>
                    </div>

                    <div style={{position: 'relative'}}>
                        <div
                            key={3}
                            style={{
                                ...styles.secondaryBlock,
                                marginBottom: '0px'
                            }}
                        >
                            <p style={styles.stageText}>Search for Investors</p>
                            <p style={styles.aboutStageText}>
                                Start investor outreach immediately with a pitch deck and MVP
                            </p>
                        </div>
                        <img src={connectImgSecond}
                             style={{
                                 width: '10vh',
                                 height: 'auto',
                                 position: 'absolute',
                                 right: '-10vh',
                                 bottom: '55px'
                             }}/>
                    </div>
                </div>
                <div style={styles.rightColumn}>
                    <div
                        style={{
                            ...styles.secondaryBlockGray,
                            position: 'absolute',
                            left: '-12vh',
                            bottom: '-195px'
                        }}
                    >
                        <p style={styles.stageText}>Search for Investors</p>
                        <p style={styles.aboutStageText}>
                            Start investor outreach immediately with a pitch deck and MVP
                        </p>
                    </div>

                    <div
                        style={{
                            ...styles.secondaryBlockGray,
                            position: 'absolute',
                            left: '-13vh',
                            bottom: '20px'
                        }}
                    >
                        <p style={styles.stageText}>Search for Investors</p>
                        <p style={styles.aboutStageText}>
                            Start investor outreach immediately with a pitch deck and MVP
                        </p>
                    </div>

                    <div
                        style={{
                            ...styles.secondaryBlockGray,
                            position: 'absolute',
                            left: '-13vh',
                            bottom: '130px'
                        }}
                    >
                        <p style={styles.stageText}>Search for Investors</p>
                        <p style={styles.aboutStageText}>
                            Start investor outreach immediately with a pitch deck and MVP
                        </p>
                    </div>
                </div>
            </div>
            <img src={connectImg} style={styles.iconRow}/>
            <div style={styles.row}>
                <div style={styles.rightColumn}>
                    <div
                        style={{
                            ...styles.secondaryBlockGray,
                            position: 'absolute',
                            right: '-12vh',
                            bottom: '-75px'
                        }}
                    >
                        <p style={styles.stageText}>Search for Investors</p>
                        <p style={styles.aboutStageText}>
                            Start investor outreach immediately with a pitch deck and MVP
                        </p>
                    </div>
                </div>
                <div style={styles.leftColumn}>
                    <div style={styles.mainBlock}>
                        <p style={styles.mainStageText}>Post-MVP Development</p>
                    </div>
                    <div
                        style={{
                            ...styles.secondaryBlock,
                        }}
                    >
                        <p style={styles.stageText}>Backend Implementation</p>
                        <p style={styles.aboutStageText}>
                            Add authentication, user data storage, and project management.
                        </p>
                    </div>
                    <div style={{position: 'relative'}}>
                        <div
                            style={{
                                ...styles.secondaryBlock,
                                marginBottom: '0px'
                            }}
                        >
                            <p style={styles.stageText}>Feedback Iteration</p>
                            <p style={styles.aboutStageText}>
                                Integrate user feedback to refine features and workflows.
                            </p>
                        </div>
                        <img src={connectImgSecond}
                             style={{
                                 width: '10vh',
                                 height: 'auto',
                                 position: 'absolute',
                                 left: '-10vh',
                                 bottom: '55px',
                                 transform: 'scaleX(-1)'
                             }}/>
                    </div>
                </div>
            </div>
            <img src={connectImg} style={styles.iconRow}/>
            <div style={styles.row}>
                <div style={styles.leftColumn}>
                    <div style={styles.mainBlock}>
                        <p style={styles.mainStageText}>Feature Expansion</p>
                    </div>
                    {/* Блок 1 */}
                    <div style={{position: 'relative'}}>
                        <div
                            style={{
                                ...styles.secondaryBlock,
                            }}
                        >
                            <p style={styles.stageText}>Task Manager</p>
                            <p style={styles.aboutStageText}>
                                Add advanced task creation, assignment, and tracking tools.
                            </p>
                        </div>
                        <img src={connectImgSecond}
                             style={{
                                 width: '10vh',
                                 height: 'auto',
                                 position: 'absolute',
                                 right: '-10vh',
                                 bottom: '55px',
                             }}/>
                    </div>
                    <div
                        style={{
                            ...styles.secondaryBlock,
                        }}
                    >
                        <p style={styles.stageText}>File Sharing</p>
                        <p style={styles.aboutStageText}>
                            Allow project teams to upload and share files.
                        </p>
                    </div>
                    <div
                        style={{
                            ...styles.secondaryBlock,
                        }}
                    >
                        <p style={styles.stageText}>Chat System</p>
                        <p style={styles.aboutStageText}>
                            Introduce real-time messaging for team collaboration.
                        </p>
                    </div>
                    <div
                        style={{
                            ...styles.secondaryBlock,
                        }}
                    >
                        <p style={styles.stageText}>Audio/Video Calls</p>
                        <p style={styles.aboutStageText}>
                            Add group communication tools for projects.
                        </p>
                    </div>
                    <div style={{position: 'relative'}}>
                        <div
                            style={{
                                ...styles.secondaryBlock,
                            }}
                        >
                            <p style={styles.stageText}>AI Integration</p>
                            <p style={styles.aboutStageText}>
                                Implement AI-driven project.
                            </p>
                        </div>
                        <img src={connectImgTwo}
                             style={{
                                 width: '10vh',
                                 height: 'auto',
                                 position: 'absolute',
                                 right: '-10vh',
                                 bottom: '0px',
                             }}/>
                    </div>
                    <div
                        style={{
                            ...styles.secondaryBlock,
                        }}
                    >
                        <p style={styles.stageText}>Web Client</p>
                        <p style={styles.aboutStageText}>
                            Develop a full-featured web version of the app.
                        </p>
                    </div>
                    <div style={{position: 'relative'}}>
                        <div
                            style={{
                                ...styles.secondaryBlock,
                                marginBottom: '0px'
                            }}
                        >
                            <p style={styles.stageText}>Payments and Subscriptions</p>
                            <p style={styles.aboutStageText}>
                                Enable monetization with premium features and subscription plans.
                            </p>
                        </div>
                        <div style={{position: 'absolute', bottom: '55px', right: '-100px', width: '100px', height: '2.5px', backgroundColor: '#000',}}/>
                    </div>

                </div>
                <div style={styles.rightColumn}>
                    <div
                        style={{
                            ...styles.secondaryBlockGray,
                            position: 'absolute',
                            left: '-13vh',
                            bottom: '257px'
                        }}
                    >
                        <p style={styles.stageText}>Search for Investors</p>
                        <p style={styles.aboutStageText}>
                            Start investor outreach immediately with a pitch deck and MVP
                        </p>
                    </div>
                    <div
                        style={{
                            ...styles.secondaryBlockGray,
                            position: 'absolute',
                            left: '-13vh',
                            bottom: '-130px'
                        }}
                    >
                        <p style={styles.stageText}>Search for Investors</p>
                        <p style={styles.aboutStageText}>
                            Start investor outreach immediately with a pitch deck and MVP
                        </p>
                    </div>
                    <div
                        style={{
                            ...styles.secondaryBlockGray,
                            position: 'absolute',
                            left: '-13vh',
                            bottom: '-245px'
                        }}
                    >
                        <p style={styles.stageText}>Search for Investors</p>
                        <p style={styles.aboutStageText}>
                            Start investor outreach immediately with a pitch deck and MVP
                        </p>
                    </div>

                    <div
                        style={{
                            ...styles.secondaryBlockGray,
                            position: 'absolute',
                            left: '-13vh',
                            bottom: '-380px'
                        }}
                    >
                        <p style={styles.stageText}>Search for Investors</p>
                        <p style={styles.aboutStageText}>
                            Start investor outreach immediately with a pitch deck and MVP
                        </p>
                    </div>

                </div>
            </div>
            <img src={connectImg} style={styles.iconRow}/>
            <div style={styles.row}>
                <div style={styles.rightColumn}>
                    <div
                        style={{
                            ...styles.secondaryBlockGray,
                            position: 'absolute',
                            right: '-13vh',
                            bottom: '10px'
                        }}
                    >
                        <p style={styles.stageText}>Search for Investors</p>
                        <p style={styles.aboutStageText}>
                            Start investor outreach immediately with a pitch deck and MVP
                        </p>
                    </div>
                    <div
                        style={{
                            ...styles.secondaryBlockGray,
                            position: 'absolute',
                            right: '-13vh',
                            bottom: '-100px'
                        }}
                    >
                        <p style={styles.stageText}>Search for Investors</p>
                        <p style={styles.aboutStageText}>
                            Start investor outreach immediately with a pitch deck and MVP
                        </p>
                    </div>
                </div>
                <div style={styles.leftColumn}>
                    <div style={styles.mainBlock}>
                        <p style={styles.mainStageText}>Growth and Scaling</p>
                    </div>
                    <div style={{position: 'relative'}}>
                        <div
                            style={{
                                ...styles.secondaryBlock,
                            }}
                        >
                            <p style={styles.stageText}>Global Scaling</p>
                            <p style={styles.aboutStageText}>
                                Expand to international markets with localized content.
                            </p>
                        </div>
                        <img src={connectImgTwo}
                             style={{
                                 width: '10vh',
                                 height: 'auto',
                                 position: 'absolute',
                                 left: '-10vh',
                                 bottom: '0px',
                                 transform: 'scaleX(-1)',
                             }}/>
                    </div>
                    <div
                        style={{
                            ...styles.secondaryBlock,
                            marginBottom: '0px'
                        }}
                    >
                        <p style={styles.stageText}>Non-IT Fields</p>
                        <p style={styles.aboutStageText}>
                            Extend support to fields beyond IT, such as design and marketing.
                        </p>
                    </div>
                </div>
            </div>
            <img src={connectImg} style={styles.iconRow}/>
            <div style={styles.col}>
                <div style={{
                    width: "100%",
                    padding: "10px",
                    position: "relative",
                }}>
                    <div style={styles.mainBlock}>
                        <p style={styles.mainStageText}>Final Stages</p>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    padding: "10px",
                }}>
                    {["Core Features", "Landing Page", "Showcase MVP"].map((text, index) => (
                        <div
                            key={index}
                            style={{
                                ...styles.secondaryBlock,
                                marginBottom: text !== "Showcase MVP" && "20px",
                            }}
                        >
                            <p style={styles.stageText}>{text}</p>
                            <p style={styles.aboutStageText}>
                                {index === 0 && "Combine all features into an all-in-one platform."}
                                {index === 1 && "Develop polished native Android and iOS apps."}
                                {index === 2 && "Provide users with insights into skills, contributions, and project impact."}
                            </p>
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
        justifyContent:
            "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        padding: "20px",
    },
    iconRow: {
        alignSelf: 'center',
        width: '3vh',
        height: 'auto'
    },
    mainStageText: {
        color: '#fff',
        fontSize: "20px",
        fontWeight: 'bold'
    },
    stageText: {
        color: '#000',
        fontSize: "16px",
        fontWeight: 'bold',
        marginBottom: "0px",
    },
    completedStage: {
        opacity: 0.5,
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        padding: "20px",
        borderRadius: "20px",
        width: "100%",
        maxWidth: "1200px",
        gap: "20vh",
    },
    aboutStageText: {
        fontSize: "14px",
        color: "gray",
        marginTop: '6px'
    },
    col: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "40%",
        // maxWidth: "00px",
        backgroundColor: "#f0f0f0",
        padding: "20px",
        borderRadius: "20px",
        // gap: "40px",
        // marginBottom: '30px',
    },
    leftColumn: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: "50%",
        padding: "10px",
    },
    rightColumn: {
        display: "flex",
        flexDirection: "column",
        // backgroundColor: "red",
        width: "50%",
        padding: "10px",
        position: "relative",
    },
    mainBlock: {
        backgroundColor: "#000",
        borderRadius: "16px",
        justifyContent: 'center',
        display: "flex",
        flexDirection: "row",
        boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)",
        padding: "12px",
        marginBottom: "20px",
        transition: "background-color 0.3s ease",
    },
    secondaryBlock: {
        backgroundColor: "#f9f9f9",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)",
        padding: "2px",
        paddingLeft: "20px",
        marginBottom: "20px",
        transition: "transform 0.3s ease, margin 0.3s ease, z-index 0.3s ease",
        zIndex: 1
    },
    secondaryBlockGray: {
        backgroundColor: "#e3e3e3",
        display: "flex",
        width: "110%",
        flexDirection: "column",
        boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)",
        padding: "2px",
        paddingLeft: "20px",
        paddingRight: "20px",
        marginBottom: "20px",
        transition: "transform 0.3s ease, margin 0.3s ease, z-index 0.3s ease",
        zIndex: 1,
        border: "2px dashed #000",
        borderRadius: "16px",
    },
    secondaryBlockHover: {
        transform: "scale(1.1)",
        marginTop: "10px",
        marginBottom: "30px",
        zIndex: 10,
    }
};

export default RoadMap
