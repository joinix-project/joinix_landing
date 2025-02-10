import React, {useEffect, useState} from "react";
import COLORS from "../../assets/colors";
import phoneScreen1 from "../../assets/img/Screen1.png";
import Modal from "../../components/Modal";
import MobileModal from "../../components/MobileModal";
import axios from "axios";

const MobileAboutCompany = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userCount, setUserCount] = useState(null);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        const fetchUserCount = async () => {
            try {
                const response = await axios.get('https://api.joinix.info/landing/user-count');
                setUserCount(response.data);
            } catch (error) {
                console.error("Error fetching user count:", error);
                alert("Failed to fetch user count.");
            }
        };

        fetchUserCount();
    }, []);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isModalOpen]);

    return (
        <div id="about" style={styles.container}>
                <h2 style={styles.title}>
                    Collaborate with {userCount} other members!
                </h2>

                <div style={styles.infoBlock}>
                    <p style={styles.subtitle}>
                        First experience of team-working
                    </p>
                    <p style={styles.infoText}>
                        Our platform helps individuals connect by tech stack, collaborate on projects, gain team
                        experience, and build portfolios, offering beginners hands-on opportunities to grow.
                    </p>
                </div>

                <div style={styles.infoBlock}>
                    <p style={styles.subtitle}>
                        Quick start
                    </p>
                    <p style={styles.infoText}>
                        Our platform helps users with ideas but no team find like-minded individuals and form dedicated
                        teams. Using our tools, they can collaborate to turn ideas into MVPs, paving the way for startup
                        growth.
                    </p>
                </div>

                <div style={styles.infoBlock}>
                    <p style={styles.subtitle}>
                        All-in-One Platform
                    </p>
                    <p style={styles.infoText}>
                        Many platforms offer communication, task management, and file sharing, but they are often
                        separate. Our platform unifies these features, allowing users to manage tasks, communicate, and
                        share files seamlessly in one place, boosting efficiency.
                    </p>
                </div>
                <button style={styles.buttonStyles} onClick={openModal}>Download App</button>
            <MobileModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "space-between",
        marginBottom: '100px'
    },
    infoBlock: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        marginBottom: "16px",
    },
    title: {
        color: COLORS.primaryText,
        fontFamily: 'Rubik, sans-serif',
        alignSelf: 'flex-start',
        fontSize: "20px",
        marginBottom: "16px",
    },
    subtitle: {
        fontSize: "15px",
        fontFamily: 'Rubik, sans-serif',
        fontWeight: "600",
        marginBottom: "0px",
        marginTop: "0px",
        color: COLORS.primaryText,
    },
    infoText: {
        fontSize: "15px",
        fontFamily: 'Rubik, sans-serif',
        fontWeight: "400",
        marginBottom: "0px",
        marginTop: "0px",
        color: COLORS.secondaryText,
    },
    buttonStyles: {
        backgroundColor: COLORS.accent,
        color: "#fff",
        padding: "12px",
        marginTop: '0px',
        border: "none",
        borderRadius: "30px",
        fontSize: "14px",
        fontWeight: "400",
        fontFamily: 'Rubik, sans-serif',
        cursor: "pointer",
        alignSelf: 'flex-start',
    },
};

export default MobileAboutCompany;
