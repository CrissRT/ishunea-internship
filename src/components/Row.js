import React from 'react'
import "./Row.css"
import ServiceItem from './ServiceItem'
import CoverForNewsCard from './CoverForNewsCard'

function Row({items, nameOfItem, height = "default"}) {

    const newsCardsPattern = (height) => {
        <div className={`row-wrapper`}>
            <div className={`row`}>
                {items.map((item) => 
                    <CoverForNewsCard item={item} height={height}/>
                )}
            </div>
        </div>
    }
    
    const heightInLowerCase = height.toLowerCase();
    switch (nameOfItem.toLowerCase()) {
        case "service":
            // "minim" case
            if (heightInLowerCase !== "default"){
                return (
                    <div className={`row-wrapper-minimized-service-item row-wrapper`}>
                        <div className={`row-service-item row`}>
                            {items.map((item) => 
                                <ServiceItem item={item} height="non-default"/>
                            )}
                        </div>
                    </div>
                )
            }
            // "default" service-item case
            return (
                <div className={`row-wrapper-default-service-item row-wrapper`}>
                    <div className={`row-service-item row`}>
                        {items.map((item) => 
                            <ServiceItem item={item} height="default"/>
                        )}
                    </div>
                </div>
            )

        case "news-cards":
            if (heightInLowerCase === "l") return newsCardsPattern(heightInLowerCase)
            else if (heightInLowerCase === "m") newsCardsPattern(heightInLowerCase)
            else if (heightInLowerCase === "s") newsCardsPattern(heightInLowerCase)
            else newsCardsPattern(heightInLowerCase)

        // case "project":
        //     return (
        //         <div className={`row-wrapper`}>
        //         <div className={`row`}>
        //             {items.map((item) => 
        //                 <ServiceItem item={item} height='non-default'/>
        //             )}
        //         </div>
        //         </div>
        //     )
        // case "client":
        //     return (
        //         <div className={`row-wrapper`}>
        //         <div className={`row`}>
        //             {items.map((item) => 
        //                 <ServiceItem item={item} height='non-default'/>
        //             )}
        //         </div>
        //         </div>
        //     )
        default:
            break;
    }
}

export default Row