import React from 'react'
import "./CaseStudies.css"

function CaseStudies() {


    const caseStudies = () => {
       return [
            "software development",
            "mobile applications",
            "graphic design",
            "maintenance",
            "seo",
            "video security",
            "enterprise systems"
         ].map((item) => {
            return(
                <div className='tag-item default-tag-item-color'>
                    <p className='tag-p'>
                        {item}
                    </p>
                </div>
            )
         })
    }
    

  return (
    <section id='case-studies-wrapper'>
        <div id='case-studies'>
            <h3 id='case-studies-h3'>
                Case studies
            </h3>
            <div id='list-case-studies' className='d-inline-flex justify-content-center'>
                <div className='tag-item'>
                    <p id='tag-all'>
                        all
                    </p>
                </div>
                {caseStudies()}

            </div>
        </div>

    </section>

  )
}

export default CaseStudies