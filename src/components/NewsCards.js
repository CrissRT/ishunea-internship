import React from 'react'
import "../styles/NewsCards.css"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';


function NewsCards({height = "xl", item}) {
    const classnameForSize = () => {
        switch (height.toLowerCase()) {        
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
    <div className='news-cards-wrapper'>
        <div className={`card-cover ${classnameForSize()}`}>
            <div className='card-cover-tag'>
                <p>
                    {item.label}
                </p>
            </div>
            <LazyLoadImage effect="blur" className='card-cover-image' src={item.imageSrc}/>
        </div>
        <div className='content-news-cards'>
            <p className='title-content-news-cards'>
                {item.title}
            </p>
            <p className='date-news-cards'>
                {item.date}
            </p>
        </div>
    </div>
)
}

export default NewsCards