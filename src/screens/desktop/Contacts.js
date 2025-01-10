import React, { useState } from "react";
import COLORS from "../../assets/colors";
import useIsMobile from "../../hooks/useIsMobile";
import axios from "axios";
import InputFieldComponent from "../../components/InputFieldComponent";
import telegramIcon from "../../assets/svg/telegramIcon.svg";
import emailIcon from "../../assets/svg/mailIcon.svg";
import phoneIcon from "../../assets/svg/phoneIcon.svg";
import emailCircle from "../../assets/svg/mail.svg"
import telegramCircle from "../../assets/svg/Telegram.svg"
import linkedinIcon from "../../assets/svg/linkedinSmall.svg"
import whatsappIcon from "../../assets/svg/whatsappsmall.svg"
import emailIconDark from "../../assets/svg/mailDark.svg"
import phoneIconDark from "../../assets/svg/phoneDark.svg"
import telegramIconDark from "../../assets/svg/telegramDark.svg"
import linkedinIconDark from "../../assets/svg/linkedinDark.svg"
import whatsappIconDark from "../../assets/svg/whatsappDark.svg"
import whatsappCircle from "../../assets/svg/whatsappsmall.svg";

const Contacts = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contact: "",
        message: "",
        contactType: "",
    });
    const ContactMethods = {
        TELEGRAM: 'TELEGRAM',
        EMAIL: 'EMAIL',
        PHONE: 'PHONE',
        WHATSAPP: 'WHATSAPP',
        LINKEDIN: 'LINKEDIN',
    };
    const [method, setMethod] = useState("email");

    const handleMethodChange = (newMethod) => {
        setMethod(newMethod);
        setFormData({
            ...formData,
            contactType: ContactMethods[newMethod.toUpperCase()],
        });
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            firstName: formData.firstName || "Unknown",
            lastName: formData.lastName || "",
            contact: formData.contact,
            message: formData.message,
            contactType: ContactMethods[method.toUpperCase()],
        };
        console.log(payload);

        try {
            await axios.post("https://api.joinix.info/forms/landing/contact", payload);
            alert("Message sent successfully!");
        } catch (error) {
            console.error("Error sending message", error);
            alert("Failed to send message.");
        }

        setFormData({
            firstName: "",
            lastName: "",
            contact: "",
            message: "",
            contactType: "",
        });
    };

    return (
        <div id="contacts" style={styles.container}>
            <h2 style={styles.title}>Get in Touch</h2>
            <div style={styles.form}>
                <div style={styles.formBlock}>
                    <div style={{display: "flex", flexDirection: "row", marginBottom: "26px", gap: "24px"}}>
                        <InputFieldComponent
                            inputTitle="First name"
                            placeholder="Tymur"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <InputFieldComponent
                            inputTitle="Last name"
                            placeholder="Latush"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />

                    </div>
                    <div style={{display: "flex", flexDirection: "row", gap: "24px"}}>
                        {method === "email" ? (
                            <InputFieldComponent
                                placeholder="example@gmail.com"
                                inputTitle="Your email"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                            />
                        ) : method === "phone" || method === "whatsapp" ? (
                            <InputFieldComponent
                                placeholder="000 000 000"
                                inputTitle="Your phone"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                            />
                        ) : method === "telegram" ? (
                            <InputFieldComponent
                                placeholder="@somename"
                                inputTitle="Your Telegram username"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                            />
                        ) : method === "linkedin" ? (
                            <InputFieldComponent
                                placeholder="LinkedIn profile URL"
                                inputTitle="Your LinkedIn URL"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                            />
                        ) : null}

                        <InputFieldComponent
                            placeholder="How can we help?"
                            inputTitle="Comment"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>

                    <div style={{marginTop: "32px"}}>
                        <h4 style={styles.methodTitle}>Choose a communication method</h4>
                        <div style={{display: "flex", flexDirection: "row", gap: "24px"}}>
                            <div
                                style={{
                                    ...styles.contactButton,
                                    borderColor: method === "email" ? '#fff' : "rgba(225, 225, 225, 0.3)",
                                    backgroundColor: method === "email" ? '#fff' : "transparent",
                                }}
                                onClick={() => handleMethodChange("email")}
                            >
                                {method === "email" ?
                                    <img src={emailIconDark} alt="e-mail" style={styles.contactTypeLogo}/> :
                                    <img src={emailIcon} alt="e-mail" style={styles.contactTypeLogo}/>}
                                <p style={{
                                    ...styles.buttonText,
                                    color: method === "email" ? '#000' : COLORS.lightGrayText,
                                }}>E-mail</p>
                            </div>
                            <div
                                style={{
                                    ...styles.contactButton,
                                    borderColor: method === "phone" ? '#fff' : "rgba(225, 225, 225, 0.3)",
                                    backgroundColor: method === "phone" ? '#fff' : "transparent",
                                }}
                                onClick={() => handleMethodChange("phone")}
                            >
                                {method === "phone" ?
                                    <img src={phoneIconDark} alt="phone" style={styles.contactTypeLogo}/> :
                                    <img src={phoneIcon} alt="phone" style={styles.contactTypeLogo}/>}
                                <p style={{
                                    ...styles.buttonText,
                                    color: method === "phone" ? '#000' : COLORS.lightGrayText,
                                }}>Phone</p>
                            </div>
                            <div
                                style={{
                                    ...styles.contactButton,
                                    borderColor: method === "telegram" ? '#fff' : "rgba(225, 225, 225, 0.3)",
                                    backgroundColor: method === "telegram" ? '#fff' : "transparent",
                                }}
                                onClick={() => handleMethodChange("telegram")}
                            >
                                {method === "telegram" ?
                                    <img src={telegramIconDark} alt="telegramIcon" style={styles.contactTypeLogo}/> :
                                    <img src={telegramIcon} alt="telegramIcon" style={styles.contactTypeLogo}/>}
                                <p
                                    style={{
                                        ...styles.buttonText,
                                        color: method === "telegram" ? '#000' : COLORS.lightGrayText,
                                    }}
                                >
                                    Telegram
                                </p>
                            </div>
                            <div
                                style={{
                                    ...styles.contactButton,
                                    borderColor: method === "linkedin" ? '#fff' : "rgba(225, 225, 225, 0.3)",
                                    backgroundColor: method === "linkedin" ? '#fff' : "transparent",
                                }}
                                onClick={() => handleMethodChange("linkedin")}
                            >
                                {method === "linkedin" ?
                                    <img src={linkedinIconDark} alt="linkedinIcon" style={styles.contactTypeLogo}/> :
                                    <img src={linkedinIcon} alt="linkedinIcon" style={styles.contactTypeLogo}/>}
                                <p
                                    style={{
                                        ...styles.buttonText,
                                        color: method === "linkedin" ? '#000' : COLORS.lightGrayText,
                                    }}
                                >
                                    LinkedIn
                                </p>
                            </div>
                            <div
                                style={{
                                    ...styles.contactButton,
                                    borderColor: method === "whatsapp" ? '#fff' : "rgba(225, 225, 225, 0.3)",
                                    backgroundColor: method === "whatsapp" ? '#fff' : "transparent",
                                }}
                                onClick={() => handleMethodChange("whatsapp")}
                            >
                                {method === "whatsapp" ?
                                    <img src={whatsappIconDark} alt="whatsappIcon" style={styles.contactTypeLogo}/> :
                                    <img src={whatsappIcon} alt="whatsappIcon" style={styles.contactTypeLogo}/>}
                                <p
                                    style={{
                                        ...styles.buttonText,
                                        color: method === "whatsapp" ? '#000' : COLORS.lightGrayText,
                                    }}
                                >
                                    WhatsApp
                                </p>
                            </div>
                        </div>

                    </div>
                    <button style={styles.buttonStyles} onClick={handleSubmit}>Submit</button>
                </div>
                <div style={styles.divider}></div>
                <div style={styles.textBlock}>
                    <p style={styles.infoText}>
                        We value your feedback and are continuously working to improve Joinix. Your input is crucial in
                        shaping the future of Joinix.
                    </p>
                    <div style={{marginTop: "32px"}}>
                        <p style={styles.infoText}>Write to us:</p>
                        <h3 style={styles.emailText}>joinixproject@gmail.com</h3>
                    </div>
                    <div style={{display: "flex", gap: "14px"}}>
                        <button
                            onClick={() => window.location.href = "mailto:joinixproject@gmail.com"}
                            style={{...styles.iconButton}}
                        >
                            <img src={emailCircle} alt="emailCircle" style={styles.contactLogo}/>
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
    iconButton: {
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
