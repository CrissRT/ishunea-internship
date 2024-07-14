import React from 'react'
import "./Row.css"
import ServiceItem from './ServiceItem'

function Row({items, nameOfItem, height = "default"}) {
    switch (nameOfItem.toLowerCase()) {
        case "service":
            // "minim" case
            if (height.toLowerCase() !== "default"){
                return (
                    <div className={`row-wrapper-minimized-service-item`}>
                    <div className={`row`}>
                        {items.map((item) => 
                            <ServiceItem item={item} height="non-default"/>
                        )}
                    </div>
                    </div>
                )
            }
            // "default" service-item case
            return (
                <div className={`row-wrapper-default-service-item`}>
                <div className={`row`}>
                    {items.map((item) => 
                        <ServiceItem item={item} height="default"/>
                    )}
                </div>
                </div>
            )

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