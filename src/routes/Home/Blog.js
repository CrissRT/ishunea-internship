import React from 'react'
import "./Blog.css"
import Row from '../../components/Row'

import impactCustumersImage from "../../images/impact-custumers.png"
import blackFridayImage from "../../images/black-friday.png"
import computerRoleImage from "../../images/role-computer.png"
import partnershipImage from "../../images/new-partnership.png"

function Blog() {
  const items = [
    {
      title : "The Impact We Have on Our Customers and Our Community",
      date : "November 27, 2022",
      label : "insight",
      imageSrc : impactCustumersImage,
    },
    {
      title : "Don't Forget to Catch Black Friday Free Consultation",
      date : "November 24, 2022",
      label : "discount",
      imageSrc : blackFridayImage,
    },
    {
      title : "What is The Role of Computer in Information Technology?",
      date : "November 03, 2022",
      label : "insight",
      imageSrc : computerRoleImage,
    },
    {
      title : "New Partnership with Nicolae Testemițanu State University of Medicine and Pharmacy",
      date : "October 07, 2022",
      label : "partnership",
      imageSrc : partnershipImage,
    },
  ]
  return (
    <section className='blog'>
        <h3>Latest articles</h3>
        <div className='wrapper-blog'>
          <Row  items={items} nameOfItem={"news-cards"}/>
        </div>
    </section>
  )
}

export default Blog