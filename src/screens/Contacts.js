import React, { useState } from "react";
import COLORS from "../assets/colors";
import useIsMobile from "../hooks/useIsMobile";
import axios from "axios";
import InputFieldComponent from "../components/InputFieldComponent";
import telegramIcon from "../assets/svg/telegramIcon.svg";
import emailIcon from "../assets/svg/mailIcon.svg";
import phoneIcon from "../assets/svg/phoneIcon.svg";
import emailCircle from "../assets/svg/mail.svg"
import telegramCircle from "../assets/svg/Telegram.svg"
import instagramCircle from "../assets/svg/instagram.svg"

import phoneScreen1 from "../assets/img/Screen1.png";

const Contacts = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
        contactType: "EMAIL",
    });

    const isMobile = useIsMobile();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const [firstName, ...lastNameParts] = formData.fullName.split(" ");
        const lastName = lastNameParts.join(" ") || "";

        const payload = {
            firstName: firstName || "Unknown",
            lastName: lastName,
            contact: formData.email || formData.phone,
            message: formData.message,
            contactType: formData.contactType,
        };

        try {
            await axios.post("https://api.joinix.info/forms/landing/contact", payload);
            alert("Message sent successfully!");
        } catch (error) {
            console.error("Error sending message", error);
            alert("Failed to send message.");
        }

        setFormData({
            fullName: "",
            email: "",
            phone: "",
            message: "",
            contactType: "EMAIL",
        });
    };

    return (
        <div id="contacts" style={styles.container}>
            <h2 style={styles.title}>
                Get in Touch
            </h2>
            <div style={styles.form}>

                <div style={styles.formBlock}>
                    <div style={{display: "flex", flexDirection: "row", marginBottom: '26px', gap: '24px'}}>
                        <InputFieldComponent placeholder='Full name' inputTitle='Your name'/>
                        <InputFieldComponent placeholder='000 000 000' inputTitle='Your phone'/>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", gap: '24px'}}>
                        <InputFieldComponent placeholder='example@gmail.com' inputTitle='Your email'/>
                        <InputFieldComponent placeholder='How can we help?' inputTitle='Comment'/>
                    </div>

                    <div style={{marginTop: '32px'}}>
                        <h4 style={styles.methodTitle}>
                            Choose a communication method
                        </h4>

                        <div style={{display: "flex", flexDirection: "row", gap: '24px'}}>
                            <div style={styles.contactButton}>
                                <img src={telegramIcon} alt="telegramIcon" style={styles.contactTypeLogo}/>
                                <p style={styles.buttonText}>
                                    Telegram
                                </p>
                            </div>

                            <div style={styles.contactButton}>
                                <img src={emailIcon} alt="e-mail" style={styles.contactTypeLogo}/>
                                <p style={styles.buttonText}>
                                    E-mail
                                </p>
                            </div>

                            <div style={styles.contactButton}>
                                <img src={phoneIcon} alt="phone" style={styles.contactTypeLogo}/>
                                <p style={styles.buttonText}>
                                    Phone
                                </p>
                            </div>
                        </div>
                    </div>
                    <button style={styles.buttonStyles}>Submit</button>
                </div>
                <div style={styles.divider}></div>
                <div style={styles.textBlock}>
                    <p style={styles.infoText}>
                        We value your feedback and are continuously working to improve Joinix. Your input is crucial in
                        shaping the future of Joinix.
                    </p>
                    <div style={{marginTop: '32px'}}>
                        <p style={styles.infoText}>
                            Write to us:
                        </p>
                        <h3 style={styles.emailText}>
                            joinixproject@gmail.com
                        </h3>
                    </div>
                    <div>
                        <img src={emailCircle} alt="emailCircle" style={styles.contactLogo}/>
                        <img src={telegramCircle} alt="telegramCircle" style={styles.contactLogo}/>
                        <img src={instagramCircle} alt="instagramCircle" style={styles.contactLogo}/>
                    </div>
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
        marginBottom: '150px'
    },
    contactTypeLogo: {
        width: 'clamp(14px, 1.25vw, 24px)',
        height: 'clamp(14px, 1.25vw, 24px)'
    },
    contactButton: {
        border: "1px solid rgba(225, 225, 225, 0.3)",
        borderRadius: "10px",
        display: "flex",
        paddingLeft: "12px",
        paddingRight: "12px",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonStyles: {
        backgroundColor: COLORS.accent,
        color: "#fff",
        width: '100%',
        padding: "clamp(8px, 0.6vw, 16px)",
        marginTop: '32px',
        border: "none",
        borderRadius: "20px",
        fontSize: "clamp(10px, 1vw, 18px)",
        fontWeight: "400",
        fontFamily: 'Rubik, sans-serif',
        cursor: "pointer",
        alignSelf: 'flex-start',
    },
    methodTitle: {
        color: COLORS.lightGrayText,
        fontSize: "clamp(12px, 1.1vw, 20px)",
        fontFamily: "Rubik, sans-serif",
        textAlign: 'center',
        marginBottom: "16px",
        display: "flex",
        alignSelf: 'flex-start',
        marginTop: '0px'
    },
    buttonText: {
        fontSize: "clamp(10px, 0.8vw, 18px)",
        color: COLORS.lightGrayText,
        fontFamily: "Rubik, sans-serif", marginLeft: '2px',
        marginTop: '5px',
        marginBottom: '5px',
    },
    divider: {
        width: "1px",
        backgroundColor: 'rgb(217, 45, 32, 0.4)',
        marginLeft: '5%',
        marginRight: '5%',
    },
    form: {
        display: "flex",
        flexDirection: "row",
    },
    fieldName: {
        display: "flex",
        flexDirection: "row"
    },
    inputStyle: {
        display: "flex",
        flexDirection: "column",
    },
    contactLogo:{
        width: 'clamp(20px, 3vw, 40px)',
        height: 'clamp(20px, 3vw, 40px)'
    },
    inputField:{
        backgroundColor: "transparent",
        border: "1px solid rgba(225, 225, 225, 0.3)",
        borderRadius: "clamp(12px, 1.1vw, 20px)",
        padding: "clamp(8px, 1.3vw, 12px)",
        marginTop: '12px'
    },
    title: {
        color: COLORS.primaryText,
        fontFamily: 'Rubik, sans-serif',
        fontSize: "clamp(20px, 2vw, 40px)",
        marginBottom: "20px",
        alignSelf: 'flex-start',
    },
    infoText: {
        color: COLORS.lightGrayText,
        fontSize: "clamp(12px, 1.1vw, 20px)",
        fontFamily: "Rubik, sans-serif",
        marginBottom: "0px",
        marginTop: '0px'
    },
    emailText: {
        color: COLORS.lightGrayText,
        fontSize: "clamp(14px, 1.2vw, 24px)",
        fontFamily: "Rubik, sans-serif",
        marginBottom: "0px",
        marginTop: '8px'
    },
    formBlock: {
        display: "flex",
        flex: 2,
        flexDirection: "column",
    },
    textBlock: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
    }
};

export default Contacts;
