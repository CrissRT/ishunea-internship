import React from 'react'
import Header from '../../components/Header'
import Projects from '../../components/Projects'
import Footer from '../../components/Footer'
import CallToAction from '../../components/CallToAction'
import Page from '../../components/Page'
import CaseStudies from './CaseStudies'
function WorksPage() {
  const pageContentComponents = [
    <CaseStudies/>,
    <Projects backgroundColor='white'paddingTopBottom='0px'/>,
    <CallToAction/>,
  ]
  return (
  <>
    <Header textColor="black"/>
    <Page contentComponents={pageContentComponents}/>
    <Footer/>   
  </>
)
}


export default WorksPage