import React from 'react'
import "./Hero.css"
import Carter from "./images/Carter.svg" 
import RequestButton from '../../components/RequestButton'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Hero() {
  return (
  <>
    <section className='hero'>
        <div className="content"> 
            <div className='header'>
                <h1>Moving your ideas to digital</h1>
                <p>The ultimate solutions for ERP systems, CRMs, mobile apps and web platforms</p>
            </div>
            <RequestButton text="contact us"/>
        </div>
        <LazyLoadImage effect="blur" src={Carter}/>
    </section>
  </>
    )
}

export default Hero