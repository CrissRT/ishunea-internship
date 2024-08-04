import React from 'react';
import "../styles/SendButton.css";

function SendButton({ text, arrowPosition = "right", color = "default" }) {
    return (
        <button className={`send-button ${color !== "default" ? 'white-send-button' : ''}`}>
            {text}
            {color === "default" && arrowPosition && (
                <svg className={`send-button-arrow ${arrowPosition === 'right' ? 'right' : undefined}`} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 9L9.5 1M9.5 1H1.5M9.5 1V9" stroke="black" strokeWidth="2" strokeLinecap="square"/>
                </svg>
            )}
        </button>
    );
}

export default SendButton;
