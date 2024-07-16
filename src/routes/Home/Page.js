import React from 'react'
import Hero from './Hero'
import "./Page.css"
import Services from './Services'
import Advantage from './Advantage'
import Projects from './Projects'
import Progress from './Progress'
import CallToAction from './CallToAction'
import Blog from './Blog'

function Page() {
  return (
  <main id='page-content'>
    <Hero />
    <Services/>
    <Advantage/>
    <Projects/>
    <Progress/>
    <CallToAction/>
    <Blog/>
  </main>
)
}

export default Page