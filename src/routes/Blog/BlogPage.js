import React, { useState } from 'react'
import Header from "../../components/Header"
import Page from '../../components/Page'
import Footer from '../../components/Footer'
import TagsBar from '../../components/TagsBar'
import ListBlogs from './ListBlogs'

import impactCustumersImage from "../../images/impact-custumers.png"
import blackFridayImage from "../../images/black-friday.png"
import computerRoleImage from "../../images/role-computer.png"
import partnershipImage from "../../images/new-partnership.png"

import "./BlogPage.css"

function BlogPage() {
  const [sortButton, setSortButton] = useState("from new publications to old")
  
  const blogs = [
    {
      title: "The Impact We Have on Our Customers and Our Community",
      label: "insight",
      imageSrc: impactCustumersImage,
      date: "November 27, 2022",
    },
    {
      title: "Don't Forget to Catch Black Friday Free Consultation",
      label: "discount",
      imageSrc: blackFridayImage,
      date: "November 24, 2022",
    },
    {
      title: "What is The Role of Computer in Information Technology?",
      label: "insight",
      imageSrc: computerRoleImage,
      date: "November 03, 2022",
    },
    {
      title: "New Partnership with Nicolae Testemițanu State University of Medicine and Pharmacy",
      label: "partnership",
      imageSrc: partnershipImage,
      date: "October 07, 2022",
    },
    {
      title: "What is The Role of Computer in Information Technology?",
      label: "insight",
      imageSrc: computerRoleImage,
      date: "November 03, 2022",
    },
    {
      title: "New Partnership with Nicolae Testemițanu State University of Medicine and Pharmacy",
      label: "partnership",
      imageSrc: partnershipImage,
      date: "October 07, 2022",
    },
    {
      title: "The Impact We Have on Our Customers and Our Community",
      label: "insight",
      imageSrc: impactCustumersImage,
      date: "November 27, 2022",
    },
  ]

  const tags = [
    "all articles",
    "insight",
    "discount",
    "partnership"
  ]
  const heading = <>
    <div className='d-flex width-100 justify-content-between align-items-center'>
      <h1 className='font-title m-0'>Blog</h1>

      <div className='d-flex gap-16 justify-content-center align-items-center'>
        <span className='font-size-16 line-height-24 opacity-40 text-dark font-weight-500'>
          show
        </span>
        <TagsBar tags={tags}/>
      </div>

      <div id='blogs' className='gap-16 d-flex justify-content-center align-items-center'>
        <span className='text-dark opacity-40 line-height-24 font-size-16 font-weight-500'>sort</span>
        <div class="dropdown">
          <button class="text-dark btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {sortButton} <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 9L9.5 1M9.5 1H1.5M9.5 1V9" stroke="black" strokeWidth="2" strokeLinecap="square"/>
                            </svg>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#" onClick={() => setSortButton("new to old")}>new to old</a></li>
            <li><a class="dropdown-item" href="#" onClick={() => setSortButton("old to new")}>old to new</a></li>
          </ul>
        </div>
      </div>
    </div>

  </>

  const pageContent = [
    heading,
    <ListBlogs blogs={blogs}/>
  ]
  return (
    <>
      <Header textColor='black'/>,
      <Page contentComponents={pageContent} paddingBottom='100px' 
            paddingLeft='80px' paddingRight='80px' paddingTop='168px'
            backgroundColor='white' gap="64px"/>
      <Footer/>
    </>
  )
}

export default BlogPage