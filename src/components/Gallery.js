import React from 'react'
import "./Gallery.css"
import { LazyLoadImage } from 'react-lazy-load-image-component'
function Gallery({paddingTop = null, padddingLeft = null, padddingRight = null, paddingBottom = null, height = null, photos}) {
    const galleryStyle = {
        padddingLeft: padddingLeft ? padddingLeft : "",
        padddingRight: padddingRight ? padddingRight : "",
        paddingTop: paddingTop ? paddingTop : "",
        paddingBottom: paddingBottom ? paddingBottom : "",
        minHeight: height ? "986px" : "", 
    }
  return (
    <section className='gallery d-flex justify-content-center' style={galleryStyle}>
        <div className='gallery-grid height-100 position-relative'>
            {photos.map((photo, index) => {
                return (
                    <div key={index} 
                        className='gallery-item position-absolute d-flex align-items-end' id={`gallery-item-${index+1}`}
                        style={{
                            top: height && index + 1 === 3 ? "-266px" : "",
                            height: height && index + 1 === 3 ? "704px" : "",
                        }}
                    >
                        <LazyLoadImage effect='blur' src={photo.imageSrc} alt='gallery-image'/>
                        {photo.description ? 
                        <p className='font-inter font-weight-400 text-white m-0'>
                            {photo.description}
                        </p>
                        : undefined}
                    </div>
                )
            })}
        </div>
        
    </section>
  )
}

export default Gallery