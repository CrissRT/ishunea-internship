import React from 'react'
import Header from '../../components/Header'
import Projects from '../../components/Projects'
import Footer from '../../components/Footer'
import CallToAction from '../../components/CallToAction'
import Page from '../../components/Page'
import './WorksPage.css'
import TagsBar from '../../components/TagsBar'
function WorksPage() {
  const caseStudies = () => {
    const tags = [
      "all",
      "software development",
      "mobile applications",
      "graphic design",
      "maintenance",
      "seo",
      "video security",
      "enterprise systems"
    ]

    return (<section id='case-studies-wrapper'>
      <div id='case-studies'>
          <h3 id='case-studies-h3'>
              Case studies
          </h3>
          <TagsBar tags={tags}/>
      </div>
    </section>)
  }
  const pageContentComponents = [
    caseStudies(),
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