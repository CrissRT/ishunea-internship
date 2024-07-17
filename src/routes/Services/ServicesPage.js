import React from 'react'
import Header from '../../components/Header'
import Page from '../../components/Page'
import Footer from '../../components/Footer'
import CallToAction from '../../components/CallToAction'

function ServicesPage() {
    const pageContentComponents = [
        <CallToAction/>,
      ]
      return (
      <>
        <Header textColor="black"/>
        <Page contentComponents={pageContentComponents} paddingTop='168px'/>
        <Footer/>   
      </>
    )
}

export default ServicesPage