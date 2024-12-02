import React, { useState } from "react";

const Contacts = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div id="contacts" style={styles.container}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <h1>Contact Us</h1>
                <p style={{color: 'gray', fontSize: '14px', width: '50%'}}>
                    Email, call, or complete the form to learn how Snappy can solve your messaging problem.
                </p>
                <p style={{color: 'gray', fontSize: '14px'}}>
                    info@snappy.io
                </p>
                <p style={{color: 'gray', fontSize: '14px'}}>
                    321-221-231
                </p>
                <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
                    <div style={{display: "flex", flexDirection: "column", flex: 1}}>
                        <h1 style={{fontSize: "18px"}}>Feedback and Suggestions</h1>
                        <p style={{color: "gray", fontSize: "14px"}}>
                            We value your feedback and are continuously working to improve
                            Snappy. Your input is crucial in shaping the future of Snappy.
                        </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", flex: 1}}>
                        <h1 style={{fontSize: "18px"}}>Media Inquiries</h1>
                        <p style={{color: "gray", fontSize: "14px"}}>
                            For media-related questions or press inquiries, please contact us at media@snappyapp.com.
                        </p>
                    </div>
                </div>
            </div>
            <div style={styles.mobileUI}>
                <h1>Get in Touch</h1>
                <p style={{color: 'gray', fontSize: '14px',}}>
                    You can reach us anytime
                </p>
                <form style={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    <textarea
                        name="message"
                        placeholder="How can we help? (max 120 characters)"
                        value={formData.message}
                        onChange={handleChange}
                        style={styles.textarea}
                        maxLength="120"
                        required
                    />
                    <button type="submit" style={styles.button}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        padding: "80px",
        // paddingTop: "100px",
        backgroundColor: "#f9f9f9",
    },
    mobileUI: {
        backgroundColor: "#fff",
        borderRadius: "16px",
        boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)",
        padding: "20px",
        width: "100%",
        maxWidth: "400px",
        margin: "0 auto",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    input: {
        padding: "10px",
        borderRadius: "12px",
        border: "1px solid #ccc",
        fontSize: "16px",
    },
    textarea: {
        padding: "10px",
        borderRadius: "12px",
        border: "1px solid #ccc",
        fontSize: "16px",
        resize: "none",
        height: "100px",
    },
    button: {
        padding: "10px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#000",
        color: "#fff",
        fontSize: "16px",
        cursor: "pointer",
    },
};

export default Contacts;
