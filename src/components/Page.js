import React from 'react'
import Hero from '../routes/Home/Hero'
import "./Page.css"


function Page({contentComponents, paddingTop = "0px"}) {
  return (
  <main id='page-content' style={{paddingTop: paddingTop}}>
    {contentComponents.map((component) => component)}
  </main>
)
}

export default Page