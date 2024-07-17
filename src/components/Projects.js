import React from 'react'
import "./Projects.css"
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
import Clients from '../routes/Home/Clients.js'

function Projects({thereAreTitleAndClients = false, backgroundColor = "black", paddingTopBottom = "100px"}) {
  const row_items = [
    {
      text: "Carter",
      link: "",
      image_src: carter_project_image,
    },
    {
      text: "Lusiton TL",
      link: "",
      image_src: lusiton_tl_image,
    },
    {
      text: "ALO.MD",
      link: "",
      image_src: alo_md_image,
    },
    {
      text: "Tesla",
      link: "",
      image_src: tesla_image,
    },
    {
      text: "Xiaomi Store",
      link: "",
      image_src: xiaomi_store_image,
    },
    {
      text: "PV - Smart Hydroisolation",
      link: "",
      image_src: smart_hydro_image,
    },
    {
      text: "Apple",
      link: "",
      image_src: apple_image,
    },
    {
      text: "USMF",
      link: "",
      image_src: usmf_image,
    },
    {
      text: "Darwin",
      link: "",
      image_src: darwin_image,
    },
    {
      text: "Samsung",
      link: "",
      image_src: samsung_image,
    },
    {
      text: "Agro Conex",
      link: "",
      image_src: agro_conex_image,
    },
    {
      text: "Enter",
      link: "",
      image_src: enter_image,
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