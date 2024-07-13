import React from 'react'
import Hero from './Hero'
import "./Page.css"
import Services from './Services'
import Advantage from './Advantage'
import Projects from './Projects'
import Progress from './Progress'

function Page() {
  return (
  <main id='page-content'>
    <Hero />
    <Services/>
    <Advantage/>
    <Projects/>
    <Progress/>
  </main>
)
}

export default Page