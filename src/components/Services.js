import React from 'react'
import "../styles/Services.css"
import Row from './Row'

function Services({rowItems, paddingTopBottom = "100px"}) { 
  const rows = [];
  for (let i = 0; i < rowItems.length; i += 4) {
      rows.push(<Row key={i} items={rowItems.slice(i, i + 4)} nameOfItem={"service"} />);
  }
  return (
    <section className='services' style={{paddingTop: paddingTopBottom, paddingBottom: paddingTopBottom}}>
      <h2 id='service-title'>We help companies to grow digital</h2>
      {rows}
    </section>
  )
}

export default Services