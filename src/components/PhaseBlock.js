import React from "react";
import COLORS from "../assets/colors";

const PhaseBlock = ({title, infoText, style}) => {
    return (
        <div style={{...styles.phaseBlock, ...style}}>
            <h4 style={styles.phaseText}>
                {title}
            </h4>
            <p style={styles.phaseInfoText}>
                {infoText}
            </p>
        </div>
    )
}

const  styles = {
    phaseBlock: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        border: "1px solid rgba(225, 225, 225, 0.3)",
        borderRadius: "10px",
        // paddingTop: "12px",
        // paddingBottom: "12px",
        paddingLeft: "26px",
        paddingRight: "26px",
        width: '22vw',
        marginBottom: "24px",
        height: "100px",
    },
    phaseText: {
        color: COLORS.primaryText,
        fontFamily: "Rubik, sans-serif",
        fontSize: "clamp(12px, 1.1vw, 20px)",
        marginBottom: "8px",
        marginTop: "0px",
    },
    phaseInfoText: {
        color: COLORS.lightGrayText,
        fontFamily: "Rubik, sans-serif",
        fontSize: "clamp(8px, 0.9vw, 14px)",
        // fontSize: "14px",
        marginBottom: "0px",
        marginTop: "0px",
    },
}

export default PhaseBlock;
