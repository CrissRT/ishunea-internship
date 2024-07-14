import React from 'react'
import "./Services.css"
import Mobile_Apps_Image from "./images/mobile-apps.png"
import UX_UI_Design_Image from "./images/ux-ui-design.png"
import Maintenance_Image from "./images/maintenance.png"
import Graphic_Design_Image from "./images/graphic-design.png"
import Row from '../../components/Row'

function Services() {
  const row_items = [
    {
      text: "Mobile Applications",
      link: "",
      image_src: Mobile_Apps_Image,
    },
    {
      text: "UX/UI Design",
      link: "",
      image_src: UX_UI_Design_Image,
    },
    {
      text: "Graphic Design",
      link: "",
      image_src: Graphic_Design_Image,
    },
    {
      text: "Maintenance",
      link: "",
      image_src: Maintenance_Image,
    },
  ];

  return (
    <section className='services'>
      <h2 id='service-title'>We help companies to grow digital</h2>
      <Row items={row_items} nameOfItem={"service"}/>
    </section>
  )
}

export default Services