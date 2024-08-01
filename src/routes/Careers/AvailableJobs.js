import React, { useState } from 'react'
import "./AvailableJobs.css"
import ListCareers from '../../components/ListCareers';


function AvailableJobs() {
    const [showsJobs, setShowJobs] = useState(true);

    const handleToggle = (event) => {
        // Update the state based on the checkbox's checked status
        setShowJobs(!event.target.checked);
    };
      
    const handleClick = () => {
        setShowJobs(!showsJobs);
    }

    const positions = [
        {
            freelance: true,
            title: "Test",
            country: "Test · Full-time",
            date: new Date("2024-07-21"),
        },
        {
            title: "Middle UX/UI Designer",
            country: "Moldova · Full-time",
            date: new Date("2024-07-21"),
        },
        {
            title: "Senior Python Developer",
            country: "Israel · Freelance",
            date: new Date("2024-07-21"),
        },
        {
            title: "Business Analyst",
            country: "Romania · Contract",
            date: new Date("2024-07-21"),
        },
        {
            title: "Business Analyst",
            country: "Moldova · Full-time",
            date: new Date("2024-07-21"),
        },
        {
            title: "Marketing Manager",
            country: "Israel · Full-time",
            date: new Date("2024-07-21"),
        },
        {
            title: "Senior Android Engineer",
            country: "Romania · Full-time",
            date: new Date("2024-07-21"),
        },
        {
            title: "Senior Blockchain Developer",
            country: "Remote · Full-time",
            date: new Date("2024-07-21"),
        },
        {
            title: "Senior Customer Growth",
            country: "Romania · Contract",
            date: new Date("2024-07-21"),
        },

    ]
    const jobOffers = positions.filter((element) => element.freelance !== true)
    const internshipOffers = positions.filter((element) => element.freelance)
  return (
    <section className='d-flex flex-column available-jobs-section width-100'>
        <div className='d-flex justify-content-between align-items-end'>
            <div id='available-jobs-text' className='d-flex align-items-start'>
                <h1 className='font-title'>Available positions</h1>
                <span id='count-positions'>{showsJobs ? jobOffers.length : internshipOffers.length}</span>
            </div>

            <div id='jobs-switcher' className='d-flex'>
                <span id='show-jobs' className={showsJobs ? '' : 'opacity-50'} onClick={handleClick}>Jobs</span>
                <label class="switch">
                    <input type="checkbox" id='input-jobs-switch'  onChange={handleToggle} checked={!showsJobs}/>
                    <span class="slider round"></span>
                </label>
                <span id='show-internships' className={!showsJobs ? '' : 'opacity-50'} onClick={handleClick}>Internships</span>
            </div>
        </div>

        {
            showsJobs ? 
            <ListCareers jobs={jobOffers}/>
            :
            <ListCareers jobs={internshipOffers}/>
        }
    </section>
  )
}

export default AvailableJobs