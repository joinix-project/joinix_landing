import React from "react";
import COLORS from "../assets/colors";

const PhaseTitleBlock = ({phaseTitle}) => {
    return (
        <div style={styles.mainBlock}>
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
        padding: "30px",
        borderRadius: "10px",
        maxWidth: '22vw',
        marginBottom: "36px",
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
