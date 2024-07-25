import React from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Page from "../../components/Page"
import Advantage from '../../components/Advantage'
import Clients from '../../components/Clients'
import Team from './Team'
import AboutImage from './AboutImage'
import Careers from './Careers'

function AboutPage() {
    const pageContent = [
        <Clients textColor='non-default' paddingLeftRight="80px" paddingTop="40px" paddingBottom="64px"/>,
        <Advantage paddingBottom="0px"/>,
        <Team/>,
        <AboutImage/>,
        <Careers/>
    ]
  return (
    <>
        <Header textColor='black'/>
        <Page contentComponents={pageContent} paddingTop='168px' backgroundColor='white'/>
        <Footer/>
    </>
  )
}

export default AboutPage