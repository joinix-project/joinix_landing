import React, {Component} from "react";
import COLORS from "../assets/colors";

const InputFieldComponent = ({inputTitle, placeholder}) => {
    return (
        <div style={styles.inputStyle}>
            <div style={styles.fieldName}>
                <h4 style={styles.infoText}>
                    {inputTitle}
                </h4>
                <h4 style={{...styles.infoText, color: COLORS.accent,}}>
                    *
                </h4>
            </div>
            <input
                type='text'
                placeholder={placeholder}
                style={styles.inputField}
            />
        </div>
    )
}

const styles = {
    inputStyle: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    fieldName: {
        display: "flex",
        flexDirection: "row"
    },
    inputField:{
        backgroundColor: "transparent",
        border: "1px solid rgba(225, 225, 225, 0.3)",
        borderRadius: "clamp(12px, 1.1vw, 20px)",
        padding: "clamp(8px, 1.3vw, 12px)",
        marginTop: '12px'
    },
    infoText: {
        color: COLORS.lightGrayText,
        fontSize: "clamp(12px, 1.1vw, 20px)",
        fontFamily: "Rubik, sans-serif",
        textAlign: 'center',
        marginBottom: "0px",
        marginTop: '0px'
    },
}

export default InputFieldComponent
