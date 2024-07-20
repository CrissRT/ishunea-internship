import React from 'react'
import "./Row.css"
import ServiceItem from './ServiceItem'
import CoverForNewsCard from './CoverForNewsCard'
import MemberItem from "./MemberItem"

function Row({items, nameOfItem, height = "default"}) {

    const newsCardsPattern = (height) => {
        return(
            <div className={`row-wrapper`}>
                <div className={`row`}>
                    {items.map((item, index) => 
                        <div className='news-cards-wrapper' key={index}>
                            <CoverForNewsCard item={item} height={height}/>
                            <div className='content-news-cards'>
                                <p className='title-content-news-cards'>
                                    {item.title}
                                </p>
                                <p className='date-news-cards'>
                                    {item.date}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
    
    const heightInLowerCase = height.toLowerCase();
    switch (nameOfItem.toLowerCase()) {
        case "service":
            // "minim" case
            if (heightInLowerCase !== "default"){
                return (
                    <div className={`row-wrapper-minimized-service-item row-wrapper`}>
                        <div className={`row-service-item row`}>
                            {items.map((item, index) => 
                                <ServiceItem item={item} height="non-default" key={index}/>
                            )}
                        </div>
                    </div>
                )
            }
            // "default" service-item case
            return (
                <div className={`row-wrapper-default-service-item row-wrapper`}>
                    <div className={`row-service-item row`}>
                        {items.map((item,index) => 
                            <ServiceItem item={item} height="default" key={index}/>
                        )}
                    </div>
                </div>
            )

        case "news-cards":
            if (heightInLowerCase === "l") return newsCardsPattern(heightInLowerCase)
            else if (heightInLowerCase === "m") return newsCardsPattern(heightInLowerCase)
            else if (heightInLowerCase === "s") return newsCardsPattern(heightInLowerCase)
            else return newsCardsPattern("xl")

        case "members":
            return (
                <div className={`row-wrapper row-wrapper-members`}>
                    <div className={`row row-members`}>
                        {items.map(member => {
                            return (
                                <MemberItem member={member} key={member.fullName}/>
                            )
                        })}
                    </div>
                </div>
            )

        default:
            break;
    }
}

export default Row