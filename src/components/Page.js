import React from 'react'
import "./Page.css"


function Page({contentComponents, backgroundColor = "black", paddingBottom = "0px", paddingLeft = "0px", paddingRight = "0px", paddingTop = "0px"}) {
  return (
  <main id='page-content' 
    style={
      {
        paddingTop: paddingTop, paddingBottom: paddingBottom, 
        paddingLeft: paddingLeft, paddingRight: paddingRight, 
        backgroundColor: backgroundColor,
      }
    }
  >
    {contentComponents.map((component, index) =>
      React.cloneElement(component, { key: index })
    )}

  </main>
)
}

export default Page