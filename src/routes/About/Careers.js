import React from 'react'
import "./Careers.css"
import RequestButton from "../../components/RequestButton"
import ListCareers from '../../components/ListCareers'

function Careers() {
    const jobs = [
        {
            title: "Middle UX/UI Designer",
            country: "Moldova · Full-time",
            date: new Date("2024-07-21"),
            link: "#",
        },
        {
            title: "Senior Python Developer",
            country: "Israel · Freelance",
            date: new Date("2024-07-21"),
            link: "#",
        },
        {
            title: "Business Analyst",
            country: "Romania · Contract",
            date: new Date("2024-07-21"),
            link: "#",
        },
        {
            title: "Business Analyst",
            country: "Moldova · Full-time",
            date: new Date("2024-07-21"),
            link: "#",
        },
        {
            title: "Marketing Manager",
            country: "Israel · Full-time",
            date: new Date("2024-07-21"),
            link: "#",
        },
    ]
  return (
    <section className='about-careers d-flex flex-column justify-content-center align-items-start'>
        <div className='about-careers-head d-flex justify-content-center align-items-center'>
            <h4 className='about-careers-title text-dark m-0'>
                Be a part 
                of our crew
            </h4>
            <p className='opacity-50 font-inter about-careers-paragraph text-dark m-0'>
                Learn, make impact, have fun. We always support initiative, awareness, quality, spirit, creativity and eternal passion to learn new things. We love challenges. We say interesting instead of complicated, challenging instead of impossible.
            </p>
        </div>
        <ListCareers jobs={jobs}/>
        <div className='careers-action d-flex justify-content-center'>
            <RequestButton text="open positions"/>
            <RequestButton text="available internships" color='white' borderColor="black"/>
        </div>
    </section>
  )
}

export default Careers