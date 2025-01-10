import React from "react";
import COLORS from "../assets/colors";

const PhaseTitleBlock = ({phaseTitle, style}) => {
    return (
        <div style={{...styles.mainBlock, ...style}}>
            <h3 style={styles.titleText}>
                {phaseTitle}
            </h3>
        </div>
    )
}

const  styles = {
    mainBlock: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.accent,
        paddingLeft: "30px",
        paddingRight: "30px",
        borderRadius: "10px",
        width: '22vw',
        marginBottom: "32px",
        height: "100px",
    },
    titleText: {
        color: COLORS.primaryText,
        fontFamily: "Rubik, sans-serif",
        fontSize: "clamp(14px, 1.25vw, 24px)",
        marginBottom: "0px",
        marginTop: "0px",
    },
}

export default PhaseTitleBlock
