import React from 'react'
import "./Clients.css"

import centrica_image from "./images/centrica.png"
import unlock_image from "./images/unlock.png"
import pallet_image from "./images/pallet.svg"
import skydio_image from "./images/skydio.svg"
import aesop_image from "./images/aesop.png"
import xccelerate_image from "./images/xccelerate.png"
import kinship_image from "./images/kinship.png"


import carter_company_image from "./images/carter-company.png"
import arrow_company_image from "./images/arrow-company.png"
import xiaomi_company_image from "./images/xiaomi-company.png"
import allo_image from "./images/allo.png"
import tesla_company_image from "./images/tesla_company.png"
import agro_conex_company_image from "./images/agro_conex_company.png"
import apple_company_image from "./images/apple_company.png"
import enter_company_image from "./images/enter_company.png"
import darwin_company_image from "./images/darwin_company.png"
import umsf_company_image from "./images/usmf_company.png"


function Clients() {
    const companies_first_row = [
        centrica_image, unlock_image, pallet_image, skydio_image,
        aesop_image, xccelerate_image, kinship_image
    ]

    const companies_second_row = [
        carter_company_image, arrow_company_image, xiaomi_company_image, 
        allo_image, tesla_company_image, agro_conex_company_image, apple_company_image, 
        enter_company_image, darwin_company_image, umsf_company_image
    ]


  return (
    <section className='clients'>
        <div className='content'>
            <div className='heading'>
                <h3>20+</h3>
                <p>companies already onboard</p>
            </div>
        </div>
        <div className='company-list'>
            <div className='company-row'>
                {companies_first_row.map((company, index) => (
                    <img src={company} key={index} />
                ))}
            </div>

            <div className='company-row'>
                {companies_second_row.map((company, index) => (
                    <img src={company} key={index} />
                ))}
            </div>
        </div>


    </section>
  )
}

export default Clients