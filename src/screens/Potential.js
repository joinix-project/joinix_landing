import { useState } from 'react';
import firstImg from "../assets/img/Screenshot1.png";
import secondImg from "../assets/img/Screenshot2.png";
import thirdImg from "../assets/img/Screenshot3.png";
import expGap from "../assets/svg/git-network.svg";
import targeted from "../assets/svg/school.svg";
import global from "../assets/svg/earth.svg";
import money from "../assets/svg/cash.svg";
import scalability from "../assets/svg/scan.svg";
import features from "../assets/svg/construct.svg";


const Potential = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex(index);
    };

    const sections = [
        {
            title: "Bridging the Experience Gap",
            content: "Provides IT students with real-world project experience, bridging the gap between academics and industry demands",
            image: firstImg,
            icon: expGap,
        },
        {
            title: "Targeted Niche",
            content: "Focused on IT students and non-commercial projects, ensuring clear market positioning with room for future expansion to other fields",
            image: secondImg,
            icon: targeted,
        },
        {
            title: "Global Appeal",
            content: "Universally relevant for students, universities, and businesses, with scalability to diverse regions and markets.",
            image: thirdImg,
            icon: global,
        },
        {
            title: "Investor-Friendly Model",
            content: "Monetization through subscriptions, premium features, and partnerships with educational institutions and businesses",
            image: firstImg,
            icon: money,
        },
        {
            title: "Scalability",
            content: "Easily adaptable for global expansion, non-IT sectors, and advanced features like AI-driven matching and mentoring",
            image: thirdImg,
            icon: scalability,
        },
        {
            title: "Future-Proof Features",
            content: "Potential for integration with cutting-edge technologies (AI, video collaboration, analytics) and evolving industry needs.)",
            image: firstImg,
            icon: features
        }
    ];

    return (
        <div id="potential" style={styles.container}>
            <h1 style={{fontSize: '52px', marginBottom: '1px'}}>Application potential</h1>
            <p style={{color: 'gray', fontSize: '18px', width: '70%', textAlign: 'center', fontWeight: 'bold'}}>
                Our platform connects academic learning with real-world IT experience. Students gain skills and build
                portfolios through non-commercial projects. Scalable and global, it supports various industries with
                subscription-based monetization and plans for AI integration.
            </p>
            <div style={{
                display: 'flex',
                justifyContent: "space-around",
                alignItems: "center",
                width: '80%',
                marginTop: '30px'
            }}>
                <img
                    src={sections[activeIndex].image}
                    style={{
                        height: '85vh',
                        width: 'auto',
                        borderRadius: '24px',
                        boxShadow: "0 20px 30px rgba(0, 0, 0, 0.5)"
                    }}
                    alt="Main Screen"
                />
                <div style={{display: 'flex', flexDirection: "column", gap: '20px'}}>
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            onClick={() => handleToggle(index)}
                            style={{
                                ...styles.mobileUI,
                                backgroundColor: activeIndex === index ? '#000' : '#fff',
                                color: activeIndex === index ? '#fff' : '#000',
                                cursor: 'pointer',
                                paddingLeft: activeIndex === index ? '20px' : '10px',
                            }}
                        >
                            {activeIndex !== index &&
                                <img src={section.icon} style={{width: '3vh', height: 'auto', marginRight: '10px'}}/>}
                            <div>
                                <h1 style={{fontSize: '18px'}}>{section.title}</h1>
                                {activeIndex === index && (
                                    <p style={{fontSize: '16px', color: 'gray'}}>
                                        {section.content}
                                    </p>
                                )}
                            </div>
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
        flexDirection: "column",
        alignItems: 'center',
        padding: "20px",
        backgroundColor: "#f9f9f9",
    },
    mobileUI: {
        backgroundColor: "#fff",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "row",
        boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)",
        padding: "10px",
        width: "100%",
        maxWidth: "500px",
        margin: "0 auto",
        transition: "background-color 0.3s ease",
    },
};

export default Potential;
