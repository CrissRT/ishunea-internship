import React from 'react'
import "./Row.css"

function Row({items, height = "default"}) {
    // height = default - 320px
    // height = !DEFAULT = 240px container
  return (
    <div className='row-wrapper'>
    <div className={`row ${height !== "default"? "height-240px-container" : "" }`}>
        {items.map((item) => 
        <div key={item.text} className={`column ${height !== "default"? "height-240px-container" : "" }`}>
            <div style={{ backgroundImage: `url(${item.image_src})`}} className={`item ${height !== "default"? "height-240px-container" : "" }`}>
            <div className='item-footer'>
                <div className='item-footer-title'>
                <p>
                    {item.text}
                </p>
                <button>
                    <svg width="8" height="8" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 9L9.5 1M9.5 1H1.5M9.5 1V9" stroke="black" strokeWidth="2" strokeLinecap="square"/>
                    </svg>
                </button>
                </div>
            </div>
            </div>
        </div>
        )}
    </div>
    </div>
  )
}

export default Row