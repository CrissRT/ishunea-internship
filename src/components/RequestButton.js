import React from 'react'
import "../styles/RequestButton.css"

function RequestButton({color = "default", text, borderColor = null}) {
    if (color !== "default")
        return(
        <button className='request-button non-default-button-color' style={borderColor && {borderColor: borderColor}}>
            {text}
            &nbsp;
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 9L9.5 1M9.5 1H1.5M9.5 1V9" stroke="black" strokeWidth="2" strokeLinecap="square"/>
            </svg>
        </button>
        )
  return (
    <button className='request-button default-button-color'>
    {text}
    &nbsp;
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 9L9.5 1M9.5 1H1.5M9.5 1V9" stroke="black" strokeWidth="2" strokeLinecap="square"/>
        </svg>
    </button>
  )
}

export default RequestButton