import React from 'react'
import "./Page.css"


function Page({contentComponents, height = "auto", paddingTop = "0px", backgroundColor = "black", paddingBottom = "0px", paddingLeft = "0px", paddingRight = "0px"}) {
  return (
  <main id='page-content' 
    style={
      {
        paddingTop: paddingTop, paddingBottom: paddingBottom, 
        paddingLeft: paddingLeft, paddingRight: paddingRight, 
        backgroundColor: backgroundColor, height: height,
      }
    }
  >
    {contentComponents.map((component) => component)}
  </main>
)
}

export default Page