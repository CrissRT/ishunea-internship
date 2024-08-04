import React from 'react'
import Header from "../../components/Header"
import Page from "../../components/Page"
import Footer from "../../components/Footer"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ModalBox from "../../components/ModalBox"
import SendButton from "../../components/SendButton"

import "./ContactsPage.css"
import 'react-lazy-load-image-component/src/effects/blur.css';

import moldovaLocationPage from "../../images/moldova-location.png"

import chatIcon from "../../images/chat.png"

function Contacts() {
    const pageContent = [
        <section className='contacts-location'>
            <div className='location-item'>
                <div className='location-content'>
                    <p className='location-country'>
                        Moldova
                    </p>
                    <p className='location-address'>
                        Sarmizegetusa 53 Street, MD-2032
                        Monday – Friday, 09:00 – 18:00
                    </p>
                    <p className='location-contacts-phones'>
                        +373 (78) 158 337
                    </p>
                </div>
                <LazyLoadImage src={moldovaLocationPage} effect='blur' className="contacts-image"/>
            </div>

            <div className='location-item'>
                <div className='location-content'>
                    <p className='location-country'>
                        Israel
                    </p>
                    <p className='location-address'>
                        Nachal Zohar St 4, Bet Shemesh
                        Monday – Friday, 09:00 – 18:00
                    </p>
                    <p className='location-contacts-phones'>
                        +972 558-5556-42
                    </p>
                </div>
                <LazyLoadImage src={moldovaLocationPage} effect='blur' className="contacts-image"/>
            </div>
        </section>,
        <div className='blue-box-container'>
            <ModalBox width='436px' imageSrc={chatIcon} title="Request a call" mainText="Ready for lift-off? Ping, tweet, message or poke and we will get back as soon as possible" buttonComponent={<SendButton text="send message"/>}/>
        </div>
        
        
    ]
  return (
    <>
        <Header textColor='black'/>
        <Page contentComponents={pageContent} paddingBottom='100px' paddingLeft='80px' paddingRight='80px' paddingTop="128px" backgroundColor='white'/>
        <Footer/>
    </>
  )
}

export default Contacts