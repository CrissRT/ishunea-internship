import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Page from '../../components/Page'
import HeadOfPage from '../../components/HeadOfPage'
import RequestButton from '../../components/RequestButton'
import Gallery from '../../components/Gallery'

import ishunea1Image from "./images/ishunea1.png"
import ishunea2Image from "./images/ishunea2.png"
import ishunea3Image from "./images/ishunea3.png"
import ishunea4Image from "./images/ishunea4.png"
import ishunea5Image from "./images/ishunea5.png"
import ishunea6Image from "./images/ishunea6.png"

function Careers() {
    const photos = [
        {
            imageSrc: ishunea1Image,
        },
        {
            imageSrc: ishunea2Image,
        },
        {
            imageSrc: ishunea3Image,
        },
        {
            imageSrc: ishunea4Image,
        },
        {
            imageSrc: ishunea5Image,
        },
        {
            imageSrc: ishunea6Image,
        },
    ]

    const buttonsHeadOfPage = [
        <RequestButton text="open positions"/>,
        <RequestButton text="available internships" color='white' borderColor="black"/>
    ]
    const pageContent = [
        <HeadOfPage 
            title="The heart of iShunea" 
            description="The future of our world is digital. There are plenty of great opportunities and we want you to be a part of something new"
            buttonComponents={buttonsHeadOfPage}
        />,
        <Gallery padddingLeft="80px"        padddingRight="80px"
            paddingBottom="100px" paddingTop="64px" photos={photos}
            height="big"
        />
    ]
  return (
    <>
        <Header textColor='black'/>
        <Page contentComponents={pageContent} paddingTop='152px' backgroundColor='white'/>
        <Footer/>
    </>
  )
}

export default Careers