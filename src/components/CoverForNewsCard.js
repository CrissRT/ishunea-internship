import React from 'react'
import "./CoverForNewsCard"

function CoverForNewsCard(item, size = "xl") {
  const classnameForSize = () => {
    switch (size.toLowerCase()) {        
      case "l":
        return "card-cover-l-size";
      case "m":
        return "card-cover-m-size";
      case "s":
        return "card-cover-s-size";
      
      default:
        return "card-cover-xl-size";
    }
  }
  return (
    <div className={`card-cover ${classnameForSize()}`}>
      <div className='card-cover-tag'>
        <p>
          insight
        </p>
      </div>
      <img className='card-cover-image' src={item.image_src}/>
    </div>
  )
}

export default CoverForNewsCard