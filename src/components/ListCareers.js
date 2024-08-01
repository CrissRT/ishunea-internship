import React from 'react'
import "./ListCareers.css"

function ListCareers({jobs}) {

    const getDateDifference = (date) => {
        let differenceInTime = new Date().getTime() - date.getTime();
        const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24))
        if (differenceInDays === 1) return `${differenceInDays} day ago`
        else if (differenceInDays < 1) return "a few hours ago"
        else if (differenceInDays > 1 && differenceInDays <= 7) return `${differenceInDays} days ago`
        else return `${Math.round(differenceInDays / 7)} weeks ago`
    }

  return (
        <div className='d-flex flex-column justify-content-center align-items-center about-careers-list'>
            {jobs.map((job, index) => {
                return (
                    <div className='job-item' key={index}>
                        <div className='job-content d-flex justify-content-start align-items-center'>
                            <div className='job-offer-title text-dark text-start'>{job.title}</div>
                            <div className='job-description text-dark text-start job-country'>{job.country}</div>
                            <div className='job-description text-dark text-start job-date'>{getDateDifference(job.date)}</div>
                        </div>
                        <a className='d-flex justify-content-center align-items-center button-for-jobs' href={job.link}>
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 9L9.5 1M9.5 1H1.5M9.5 1V9" stroke="black" strokeWidth="2" strokeLinecap="square"/>
                            </svg>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default ListCareers