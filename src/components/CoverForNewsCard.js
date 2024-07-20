import React from 'react'
import "./CoverForNewsCard.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function CoverForNewsCard({item}, size = "xl") {
  const classnameForSize = () => {
    switch (size.toLowerCase) {        
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
          {item.label}
        </p>
      </div>
      <LazyLoadImage effect="blur" wrapperClassName='card-cover-image' src={item.imageSrc}/>
    </div>
  )
}

export default CoverForNewsCard