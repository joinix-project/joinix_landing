import COLORS from "../../assets/colors";
import React, { useState } from "react";
import arrowUp from "../../assets/svg/arrowUp.svg";
import arrowDown from "../../assets/svg/arrowDown.svg";

const Potential = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const items = [
        { title: "Bridging the Experience Gap", description: "Provides IT students with real-world project experience, bridging the gap between academics and industry demands." },
        { title: "Targeted Niche", description: "Focuses on a specific audience to ensure tailored and impactful solutions." },
        { title: "Global Appeal", description: "Offers a solution with universal relevance and adaptability." },
        { title: "Investor-Friendly Model", description: "Designed to attract and engage investors through scalable potential." },
        { title: "Scalability", description: "Built to grow and adapt with evolving market needs." },
        { title: "Future-Proof Features", description: "Includes functionalities that align with emerging trends and technologies." },
    ];

    const toggleIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div id="potential" style={styles.container}>
            <h2 style={styles.title}>
                Application potential
            </h2>
            <div style={styles.list}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.item,
                            borderBottom: index !== items.length - 1 ? `2px solid rgba(225, 225, 225, 0.3)` : "none",
                        }}
                    >
                        <div
                            style={styles.itemHeader}
                            onClick={() => toggleIndex(index)}
                        >
                            <span style={styles.itemNumber}>
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <span style={styles.itemTitle}>
                                {item.title}
                            </span>
                            {activeIndex === index ? (
                                <img src={arrowUp} alt="arrowUp" style={{ width: '32px', height: '32px' }} />
                            ) : (
                                <img src={arrowDown} alt="arrowDown" style={{ width: '32px', height: '32px' }} />
                            )}
                        </div>
                        {activeIndex === index && (
                            <div style={styles.itemDescription}>
                                {item.description}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "150px",
    },
    title: {
        color: COLORS.primaryText,
        fontFamily: "Rubik, sans-serif",
        fontSize: "clamp(20px, 2vw, 40px)",
        marginBottom: "40px",
    },
    list: {
        width: "80%",
        borderRadius: "20px",
        border: "1px solid rgba(225, 225, 225, 0.3)",
        paddingLeft: "16px",
        paddingRight: "16px",
    },
    item: {
        padding: "20px",
        marginLeft: "-16px",
        marginRight: "-16px",
        paddingLeft: "16px",
        paddingRight: "16px",
    },
    itemHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
    },
    itemNumber: {
        color: COLORS.primaryText,
        fontFamily: "Rubik, sans-serif",
        fontWeight: "bold",
        fontSize: "18px",
        marginRight: "15px",
    },
    itemTitle: {
        flex: 1,
        fontWeight: "600",
        color: COLORS.primaryText,
        fontFamily: "Rubik, sans-serif",
        fontSize: "clamp(14px, 1.25vw, 24px)",
    },
    itemDescription: {
        marginTop: "10px",
        color: COLORS.lightGrayText,
        fontFamily: "Rubik, sans-serif",
        fontSize: "clamp(12px, 1.1vw, 20px)",
    },
};

export default Potential;
