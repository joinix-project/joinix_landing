import React, { useState } from "react";
import COLORS from "../assets/colors";
import useIsMobile from "../hooks/useIsMobile";
import axios from "axios";
import InputFieldComponent from "../components/InputFieldComponent";
import telegramIcon from "../assets/svg/telegramIcon.svg";
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
                    <div style={{display: "flex", flexDirection: "row",}}>
                        <InputFieldComponent placeholder='Full name' inputTitle='Your name'/>
                        <InputFieldComponent placeholder='Full name' inputTitle='Your name'/>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",}}>
                        <InputFieldComponent placeholder='Full name' inputTitle='Your name'/>
                        <InputFieldComponent placeholder='Full name' inputTitle='Your name'/>
                    </div>

                    <div>
                        <h4>
                            Choose a communication method
                        </h4>
                        <div style={{
                            border: "1px solid rgba(225, 225, 225, 0.3)",
                            borderRadius: "10px",
                            display: "flex",
                            paddingLeft: "12px",
                            paddingRight: "12px",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <img src={telegramIcon} alt="telegramIcon" style={{width: 'clamp(14px, 1.25vw, 24px)', height: 'clamp(14px, 1.25vw, 24px)'}}/>
                            <p style={{fontSize: "clamp(10px, 0.8vw, 18px)", color: COLORS.lightGrayText, fontFamily: "Rubik, sans-serif", marginLeft: '2px'}}>
                                Telegram
                            </p>
                        </div>
                    </div>
                </div>


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
    },
    infoText: {
        color: COLORS.lightGrayText,
        fontSize: "clamp(12px, 1.1vw, 20px)",
        fontFamily: "Rubik, sans-serif",
        textAlign: 'center',
        marginBottom: "0px",
        marginTop: '0px'
    },
    emailText: {
        color: COLORS.lightGrayText,
        fontSize: "clamp(14px, 1.2vw, 24px)",
        fontFamily: "Rubik, sans-serif",
        textAlign: 'center',
        marginBottom: "0px",
        marginTop: '8px'
    },
    formBlock: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    textBlock: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    }
};

export default Contacts;
