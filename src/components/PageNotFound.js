import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Page from "./Page"
import "./PageNotFound.css"
import pageNotFoundImage from "../images/page-not-found-icon.png"

function PageNotFound() {
    const content = [
        <section id='page-not-found-box'>
            <div id="page-not-found-heading">
                <img src={pageNotFoundImage}/>
                <div id='page-not-found-text-wrapper'>
                    <h1 id="page-not-found-title">Page not found</h1>
                    <p id="page-not-found-paragraph">
                        Return to homepage or send a message to let usknow about a link that doesn’t work properly
                    </p>
                </div>

                <div id="page-not-found-action">

                </div>
            </div>
        </section>
    ]
  return (
    <>
        <Header textColor='black'/>
        <Page contentComponents={content} height='862px' paddingLeft='80px' paddingRight='80px' paddingTop='88px' backgroundColor='white'/>
        <Footer/>
    </>
  )
}

export default PageNotFound