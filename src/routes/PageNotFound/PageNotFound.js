import React from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Page from "../../components/Page"
import "./PageNotFound.css"
import magnifier from "../../images/magnifier.png"
import SendButton from '../../components/SendButton'

function PageNotFound() {
    const content = [
        <section id='page-not-found-box'>
            <div id="page-not-found-heading">
                <img src={magnifier}/>
                <div id='page-not-found-text-wrapper'>
                    <h1 id="page-not-found-title">Page not found</h1>
                    <p id="page-not-found-paragraph">
                        Return to homepage or send a message to let usknow about a link that doesn’t work properly
                    </p>
                </div>

                <div id="page-not-found-action">
                    <SendButton text="send message" arrowPosition='right'/>
                    <SendButton text="go to homepage" color='white'/>
                </div>
            </div>
        </section>
    ]
  return (
    <>
        <Header textColor='black'/>
        <Page contentComponents={content} paddingLeft='80px' paddingRight='80px' paddingTop='88px' backgroundColor='white'/>
        <Footer/>
    </>
  )
}

export default PageNotFound