import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Page from '../../components/Page'
import HeadOfPage from '../../components/HeadOfPage'
import RequestButton from '../../components/RequestButton'
import Gallery from '../../components/Gallery'
import News from './News'
import AvailableJobs from './AvailableJobs'
import ModalBox from "../../components/ModalBox"

import news1Image from "./images/news1.png"
import news2Image from "./images/news2.png"
import news3Image from "./images/news3.png"

import ishunea1Image from "./images/ishunea1.png"
import ishunea2Image from "./images/ishunea2.png"
import ishunea3Image from "./images/ishunea3.png"
import ishunea4Image from "./images/ishunea4.png"
import ishunea5Image from "./images/ishunea5.png"
import ishunea6Image from "./images/ishunea6.png"
import CareersImage from './CareersImage'

import magnifier from "../../images/magnifier.png"
import SendButton from '../../components/SendButton'

function CareersPage() {
    const newsItems = [
        {
            imageSrc: news1Image,
            title: "Workshops, Meetups & Hackatons",
            description: "Learn, make impact, have fun. We always support initiative, creativity and passion to learn new things. ",
        },
        {
            imageSrc: news2Image,
            title: "Company Gathering Parties",
            description: "Twice a year there’s a company-wide meeting where all teams enjoy celebrating milestones and success.",
        },
        {
            imageSrc: news3Image,
            title: "Work Without Borders",
            description: "Whether you want to work at home with your family or travel the world and work along the way.",
        },
    ]
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
        />,
        <CareersImage/>,
        <News newsItems={newsItems}/>,
        <AvailableJobs/>,

        <div className='blue-box-container-no-border-radius'>
            <ModalBox buttonComponent={<SendButton text="contact us now"/>} width="503px" mainText="Message us and we will get back as soon as possible" title="Didn't find an open job for you?" imageSrc={magnifier}/>
        </div>,
        
    ]
  return (
    <>
        <Header textColor='black'/>
        <Page contentComponents={pageContent} paddingTop='152px' backgroundColor='white'/>
        <Footer/>
    </>
  )
}

export default CareersPage