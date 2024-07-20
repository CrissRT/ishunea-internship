import React from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Page from "../../components/Page"
import Advantage from '../../components/Advantage'
import Clients from '../../components/Clients'

function AboutPage() {
    const pageContent = [
        <Clients/>,
        <Advantage/>
    ]
  return (
    <>
        <Header textColor='black'/>
        <Page contentComponents={pageContent} paddingTop='168px'/>
        <Footer/>
    </>
  )
}

export default AboutPage