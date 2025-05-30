import logo from "../assets/svg/logoMobile.svg";
import COLORS from "../assets/colors";
import React, {useEffect, useState} from "react";
import githubCircle from "../assets/svg/githubCircle.svg";
import instagramCircle from "../assets/svg/instagram.svg";
import linkedinCircle from "../assets/svg/linkedinCircle.svg";
import emailCircle from "../assets/svg/mail.svg";
import telegramCircle from "../assets/svg/Telegram.svg";
import whatsappCircle from "../assets/svg/whatsappsmall.svg";
import PP from "../assets/svg/PP.svg";
import TOU from "../assets/svg/tou.svg";

const FooterMobile = () => {
    return (
        <footer style={styles.footer}>

            <img src={logo} alt="Joinix Logo" style={styles.logo}/>
            <div style={{marginTop: '16px', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <p style={styles.infoText}>
                    Write to us:
                </p>
                <h3 style={styles.emailText}>
                    joinixproject@gmail.com
                </h3>
            </div>

            <div style={{display: "flex", gap: '14px', alignSelf: 'center', marginTop: '16px', marginBottom: '16px'}}>
                <button
                    onClick={() => window.location.href = "mailto:joinixproject@gmail.com"}
                    style={{...styles.iconButton}}
                >
                    <img src={emailCircle} alt="emailCircle" style={styles.contactLogo}/>
                </button>

                <button
                    onClick={() => window.open("https://www.instagram.com/joinixteam/?igsh=MXh2bTAzZXViNDVuMA%3D%3D&utm_source=qr", "_blank", "noopener,noreferrer")}
                    style={{...styles.iconButton}}
                >
                    <img src={instagramCircle} alt="instagramCircle" style={styles.contactLogo}/>
                </button>

                <button
                    onClick={() => window.open("https://github.com/joinix-project", "_blank", "noopener,noreferrer")}
                    style={{...styles.iconButton}}
                >
                    <img src={githubCircle} alt="githubCircle" style={styles.contactLogo}/>
                </button>
                {/*<button*/}
                {/*    onClick={() => alert("Email button clicked")}*/}
                {/*    style={{...styles.iconButton}}*/}
                {/*>*/}
                {/*    <img src={telegramCircle} alt="telegramCircle" style={styles.contactLogo}/>*/}
                {/*</button>*/}

                {/*<button*/}
                {/*    onClick={() => alert("Email button clicked")}*/}
                {/*    style={{...styles.iconButton}}*/}
                {/*>*/}
                {/*    <img src={whatsappCircle} alt="whatsappCircle" style={styles.contactLogo}/>*/}
                {/*</button>*/}

                <button
                    onClick={() => window.open("www.linkedin.com/in/joinix-project-645326346", "_blank", "noopener,noreferrer")}
                    style={{...styles.iconButton}}
                >
                    <img src={linkedinCircle} alt="linkedinCircle" style={styles.contactLogo}/>
                </button>
            </div>


            <div style={{...styles.line, width: '100%'}}></div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 8,
                marginTop: 12
            }}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <img src={PP} alt="Privacy Policy" style={styles.logoPP}/>
                    <a href="/privacy-policy" style={styles.navLinkPP}>Privacy Policy</a>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <img src={TOU} alt="Privacy Policy" style={styles.logoPP}/>
                    <a href="/terms-of-use" style={styles.navLinkPP}> Terms of Use</a>
                </div>
            </div>
            <p style={{
                display: 'flex',
                alignSelf: "center",
                color: 'rgb(225, 225, 225, 0.7)',
                fontSize: "clamp(12px, 1.5vw, 15px)",
                fontWeight: "400",
                fontFamily: 'Rubik, sans-serif',
                marginTop: '10px'
            }}>All rights reserved {new Date().getFullYear()}</p>
        </footer>
    );
};

const styles = {
    footer: {
        display: "flex",
        justifyContent: "space-between",
        // alignItems: "center",
        flexDirection: "column",
        padding: "clamp(10px, 2vw, 20px) clamp(20px, 4vw, 40px)",
        backgroundColor: 'transparent',
    },
    iconButton: {
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    contactLogo: {
        width: '30px',
        height: '30px',
    },
    logoContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },
    logoPP: {
        height: "clamp(20px, 1.7vw, 30px)",
        marginRight: "clamp(4px, 0.5vw, 8px)",
    },
    navLinkPP: {
        color: COLORS.primaryText,
        textDecoration: "none",
        fontSize: "clamp(12px, 1.6vw, 20px)",
        fontWeight: "500",
        fontFamily: 'Rubik, sans-serif',
        background: "none",
        border: "none",
        cursor: "pointer",
    },
    logo: {
        height: "72px",
    },
    infoText: {
        color: COLORS.lightGrayText,
        fontSize: "clamp(12px, 1.1vw, 20px)",
        fontFamily: "Rubik, sans-serif",
        marginBottom: "0px",
        marginTop: '0px'
    },
    logoText: {
        fontSize: "15px",
        fontWeight: "400",
        fontFamily: 'Rubik, sans-serif',
        color: "#fff",
        marginBottom: "0px",
        marginTop: '0px'
    },
    emailText: {
        color: COLORS.lightGrayText,
        fontSize: "15px",
        fontFamily: "Rubik, sans-serif",
        marginBottom: "0px",
        marginTop: '8px'
    },
    nav: {
        display: "flex",
        gap: "clamp(10px, 2vw, 20px)",
    },
    line: {
        marginTop: '10px',
        height: '1px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    navLink: {
        color: "#fff",
        textDecoration: "none",
        fontSize: "clamp(12px, 1.6vw, 20px)",
        fontWeight: "400",
        fontFamily: 'Rubik, sans-serif',
    },
    downloadButton: {
        backgroundColor: COLORS.secondaryBackground,
        color: "#fff",
        padding: "clamp(8px, 1.5vw, 16px) clamp(14px, 2vw, 28px)",
        border: "none",
        borderRadius: "clamp(15px, 3vw, 30px)",
        fontSize: "clamp(12px, 1.5vw, 15px)",
        fontWeight: "400",
        fontFamily: 'Rubik, sans-serif',
        cursor: "pointer",
    },
};

export default FooterMobile;
