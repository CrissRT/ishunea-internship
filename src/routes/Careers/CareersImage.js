import React from 'react'
import "./CareersImage.css"

import icon1 from "./images/icon1.svg"
import icon2 from "./images/icon2.svg"
import icon3 from "./images/icon3.svg"
import icon4 from "./images/icon4.svg"
import icon5 from "./images/icon5.svg"
import icon6 from "./images/icon6.svg"

function CareersImage() {
    const gridElements = [
        {
            imageSrc: icon1,
            title: "top of the market salaries",
        },
        {
            imageSrc: icon2,
            title: "health & wellness insurance",
        },
        {
            imageSrc: icon3,
            title: "flexwork just as you need it",
        },
        {
            imageSrc: icon4,
            title: "opportunities for students",
        },
        {
            imageSrc: icon5,
            title: "yearly learning stipend",
        },
        {
            imageSrc: icon6,
            title: "company recharge & team building days",
        },
        
    ]
  return (
    <section className='width-100 d-flex justify-content-center' id='careers-image'>
        <div className='width-100 height-100 position-relative' id='careers-image-1440px'>
            <h2 className='font-title text-white position-absolute m-0' id='careers-image-title'>Why join 
            iShunea</h2>

            <div className="d-flex flex-column position-absolute" id="grid-careers-image">
                <div className="width-100 d-flex">
                    {gridElements.slice(0, 3).map((element, index) => (
                        <div className="d-flex flex-column careers-element-wrapper" key={`second-${index}`}>
                            <img
                                className="careers-image-element"
                                src={element.imageSrc}
                                alt="image"
                                />
                            <h4 className="text-white font-size-16 m-0">{element.title}</h4>
                        </div>
                    ))}
                </div>

                <div className="width-100 d-flex">
                    {gridElements.slice(3).map((element, index) => (
                        <div className="d-flex flex-column careers-element-wrapper" key={`second-${index}`}>    
                            <img
                                className="careers-image-element"
                                src={element.imageSrc}
                                alt="image"
                            />
                            <h4 className="text-white font-size-16 m-0">{element.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default CareersImage