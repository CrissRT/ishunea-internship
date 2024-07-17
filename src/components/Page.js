import React from 'react'
import Hero from '../routes/Home/Hero'
import "./Page.css"


function Page({contentComponents, paddingTop = "0px", backgroundColor = "black"}) {
  return (
  <main id='page-content' style={{paddingTop: paddingTop, backgroundColor: backgroundColor}}>
    {contentComponents.map((component) => component)}
  </main>
)
}

export default Page