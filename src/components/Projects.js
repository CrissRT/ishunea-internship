import React from 'react'
import "../styles/Projects.css"
import Row from "./Row.js"


import carter_project_image from "../images/Carter-project-image.png"
import lusiton_tl_image from "../images/lusiton-tl.png"
import alo_md_image from "../images/alo-md.png"
import tesla_image from "../images/tesla.png"
import xiaomi_store_image from "../images/xiaomi-store.png"
import smart_hydro_image from "../images/smart-hydroisolation.png"
import apple_image from "../images/apple.png"
import usmf_image from "../images/usmf.png"
import darwin_image from "../images/darwin.png"
import samsung_image from "../images/samsung.png"
import agro_conex_image from "../images/agro_conex.png"
import enter_image from "../images/enter.png"
import Clients from './Clients.js'

function Projects({thereAreTitleAndClients = false, backgroundColor = "black", paddingTopBottom = "100px"}) {
  const row_items = [
    {
      text: "Carter",
      link: "",
      imageSrc: carter_project_image,
    },
    {
      text: "Lusiton TL",
      link: "",
      imageSrc: lusiton_tl_image,
    },
    {
      text: "ALO.MD",
      link: "",
      imageSrc: alo_md_image,
    },
    {
      text: "Tesla",
      link: "",
      imageSrc: tesla_image,
    },
    {
      text: "Xiaomi Store",
      link: "",
      imageSrc: xiaomi_store_image,
    },
    {
      text: "PV - Smart Hydroisolation",
      link: "",
      imageSrc: smart_hydro_image,
    },
    {
      text: "Apple",
      link: "",
      imageSrc: apple_image,
    },
    {
      text: "USMF",
      link: "",
      imageSrc: usmf_image,
    },
    {
      text: "Darwin",
      link: "",
      imageSrc: darwin_image,
    },
    {
      text: "Samsung",
      link: "",
      imageSrc: samsung_image,
    },
    {
      text: "Agro Conex",
      link: "",
      imageSrc: agro_conex_image,
    },
    {
      text: "Enter",
      link: "",
      imageSrc: enter_image,
    },
  ]
  const rows = [];
  for (let i = 0; i < row_items.length; i += 4) {
    if(rows.length % 2 === 0)
      rows.push(<Row key={i} items={row_items.slice(i, i + 4)} nameOfItem={"service"} />);
    else
      rows.push(<Row key={i} items={row_items.slice(i, i + 4)} height={"non-default"} nameOfItem={"service"} />);
  }

  return (
    <section className='projects' style={{backgroundColor: backgroundColor, paddingTop: paddingTopBottom, paddingBottom: paddingTopBottom}}>
        {thereAreTitleAndClients === true &&  <h2>Projects highlights</h2>}
        {rows}
        {thereAreTitleAndClients === true && <Clients/>}
    </section>
  );
}

export default Projects