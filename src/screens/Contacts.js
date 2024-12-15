// import React, { useState } from "react";
//
// const Contacts = () => {
//     const [formData, setFormData] = useState({
//         fullName: "",
//         email: "",
//         phone: "",
//         message: "",
//     });
//
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Form Data Submitted:", formData);
//     };
//
//     return (
//         <div id="contacts" style={styles.container}>
//             <div style={styles.contactInfo}>
//                 <h1 style={styles.title}>Contact Us</h1>
//                 <p style={styles.subtext}>
//                     Email, call, or complete the form to contact us directly.
//                 </p>
//                 <p style={styles.infoText}>info@snappy.io</p>
//                 <p style={styles.infoText}>321-221-231</p>
//                 <div style={styles.feedbackSection}>
//                     <h2 style={styles.subtitle}>Feedback and Suggestions</h2>
//                     <p style={styles.subtext}>
//                         We value your feedback and are continuously working to improve
//                         Joinix. Your input is crucial in shaping the future of Joinix.
//                     </p>
//                 </div>
//             </div>
//             <div style={styles.mobileUI}>
//                 <h1 style={styles.title}>Get in Touch</h1>
//                 <p style={styles.subtext}>You can reach us anytime</p>
//                 <form style={styles.form} onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         name="fullName"
//                         placeholder="Full Name"
//                         value={formData.fullName}
//                         onChange={handleChange}
//                         style={styles.input}
//                         required
//                     />
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         style={styles.input}
//                         required
//                     />
//                     <input
//                         type="tel"
//                         name="phone"
//                         placeholder="Phone Number"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         style={styles.input}
//                     />
//                     <textarea
//                         name="message"
//                         placeholder="How can we help?"
//                         value={formData.message}
//                         onChange={handleChange}
//                         style={styles.textarea}
//                         maxLength="120"
//                         required
//                     />
//                     <button type="submit" style={styles.button}>
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };
//
// const styles = {
//     container: {
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         gap: "40px",
//         padding: "clamp(40px, 5vw, 80px)",
//         backgroundColor: "#f9f9f9",
//     },
//     contactInfo: {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "flex-start",
//         maxWidth: "600px",
//     },
//     title: {
//         fontSize: "clamp(24px, 4vw, 36px)",
//         marginBottom: "10px",
//     },
//     subtitle: {
//         fontSize: "clamp(18px, 3vw, 24px)",
//         marginBottom: "10px",
//     },
//     subtext: {
//         fontSize: "clamp(12px, 2.5vw, 14px)",
//         color: "gray",
//         marginBottom: "10px",
//     },
//     infoText: {
//         fontSize: "clamp(14px, 2.5vw, 16px)",
//         color: "gray",
//         marginBottom: "5px",
//     },
//     feedbackSection: {
//         marginTop: "20px",
//     },
//     mobileUI: {
//         backgroundColor: "#fff",
//         borderRadius: "16px",
//         boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)",
//         padding: "20px",
//         width: "100%",
//         maxWidth: "800px",
//         margin: "0 auto",
//     },
//     form: {
//         display: "flex",
//         flexDirection: "column",
//         gap: "15px",
//     },
//     input: {
//         padding: "clamp(8px, 2vw, 10px)",
//         borderRadius: "12px",
//         border: "1px solid #ccc",
//         fontSize: "clamp(14px, 2.5vw, 16px)",
//     },
//     textarea: {
//         padding: "clamp(8px, 2vw, 10px)",
//         borderRadius: "12px",
//         border: "1px solid #ccc",
//         fontSize: "clamp(14px, 2.5vw, 16px)",
//         resize: "none",
//         height: "clamp(80px, 10vw, 120px)",
//     },
//     button: {
//         padding: "clamp(8px, 2vw, 10px) clamp(15px, 4vw, 20px)",
//         borderRadius: "8px",
//         border: "none",
//         backgroundColor: "#000",
//         color: "#fff",
//         fontSize: "clamp(14px, 2.5vw, 16px)",
//         cursor: "pointer",
//     },
// };
//
// export default Contacts;

import React, { useState } from "react";
import COLORS from "../assets/colors";
import useIsMobile from "../hooks/useIsMobile";

const Contacts = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
    });

    const isMobile = useIsMobile();

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
        <div id="contacts" style={isMobile ? styles.containerMob : styles.container}>
            <div style={styles.contactInfo}>
                <h1 style={styles.title}>Contact Us</h1>
                <p style={styles.subtext}>
                    Email, call, or complete the form to contact us directly.
                </p>
                <p style={styles.infoText}>info@snappy.io</p>
                <p style={styles.infoText}>321-221-231</p>
                <div style={styles.feedbackSection}>
                    <h2 style={styles.subtitle}>Feedback and Suggestions</h2>
                    <p style={styles.subtext}>
                        We value your feedback and are continuously working to improve
                        Joinix. Your input is crucial in shaping the future of Joinix.
                    </p>
                </div>
            </div>
            <div style={styles.mobileUI}>
                <h1 style={styles.title}>Get in Touch</h1>
                <p style={styles.subtext}>You can reach us anytime</p>
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
                        placeholder="How can we help?"
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
    containerMob: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // gap: "40px",
        backgroundColor: COLORS.background
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        // gap: "40px",
        marginTop: '50px',
        marginRight: 16,
        marginLeft: 16,
        backgroundColor: COLORS.background
    },
    contactInfo: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        maxWidth: "600px",
        padding: "clamp(40px, 5vw, 80px)",
    },
    title: {
        fontSize: "clamp(24px, 4vw, 36px)",
        marginBottom: "10px",
    },
    subtitle: {
        fontSize: "clamp(18px, 3vw, 24px)",
        marginBottom: "10px",
    },
    subtext: {
        fontSize: "clamp(12px, 2.5vw, 14px)",
        color: "gray",
        marginBottom: "10px",
    },
    infoText: {
        fontSize: "clamp(14px, 2.5vw, 16px)",
        color: "gray",
        marginBottom: "5px",
    },
    feedbackSection: {
        marginTop: "20px",
    },
    mobileUI: {
        backgroundColor: "#fff",
        borderRadius: "16px",
        boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)",
        padding: "20px",
        width: "70%",
        margin: "0 auto",
        marginBottom: '50px'
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    input: {
        padding: "clamp(8px, 2vw, 10px)",
        borderRadius: "12px",
        border: "1px solid #ccc",
        fontSize: "clamp(14px, 2.5vw, 16px)",
    },
    textarea: {
        padding: "clamp(8px, 2vw, 10px)",
        borderRadius: "12px",
        border: "1px solid #ccc",
        fontSize: "clamp(14px, 2.5vw, 16px)",
        resize: "none",
        height: "clamp(80px, 10vw, 120px)",
    },
    button: {
        padding: "clamp(8px, 2vw, 10px) clamp(15px, 4vw, 20px)",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#000",
        color: "#fff",
        fontSize: "clamp(14px, 2.5vw, 16px)",
        cursor: "pointer",
    },
};

export default Contacts;
