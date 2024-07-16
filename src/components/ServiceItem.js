import React from 'react'
import "./ServiceItem.css"

function ServiceItem({height = "default", item}) {

    const Icon = () => (
        <svg width="8" height="8" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 9L9.5 1M9.5 1H1.5M9.5 1V9" stroke="black" strokeWidth="2" strokeLinecap="square"/>
        </svg>
    )

    const ItemFooter = () => (
        <div className='service-item-footer'>
            <div className='service-item-footer-title'>
                <p className='service-item-p'>
                {item.text}
                </p>
                <button type='button' className='button-service-item'>
                    <Icon/>
                </button>
            </div>
        </div>
    )

    if (height !== "default") {
        return (
            <div className="service-item-minimized" >
                <img className='image-service-item' src={item.image_src}/>
                <ItemFooter/>
            </div>
        )
    }
    
  return (
        <div className="service-item-default" >
            <ItemFooter/>
            <img className='image-service-item' src={item.image_src}/>
        </div>
  )
}

export default ServiceItem