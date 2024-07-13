import React from 'react'
import "./Hero.css"
import Carter from "./images/Carter.svg" 

function Hero() {
  return (
  <>
    <section className='hero'>
        <div className="content"> 
            <div className='header'>
                <h1>Moving your ideas to digital</h1>
                <p>The ultimate solutions for ERP systems, CRMs, mobile apps and web platforms</p>
            </div>
            <button className='contact-us-header-button'>contact us&nbsp;
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 9L9.5 1M9.5 1H1.5M9.5 1V9" stroke="black" strokeWidth="2" strokeLinecap="square"/>
                </svg>
            </button>
        </div>
        <img src={Carter} alt="" /> 
    </section>
  </>
    )
}

export default Hero