// Projects.js
import React, { useState, useEffect } from 'react'
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

function Projects({ thereAreTitleAndClients = false, backgroundColor = "black", paddingTopBottom = "100px", filterFunction = undefined }) {
  const [rowsProjects, setRowsProjects] = useState([])

  // Define row items with their respective tags
  const row_items = [
    {
      text: "Carter",
      link: "",
      imageSrc: carter_project_image,
      tags: ["software development", "maintenance"], // Add appropriate tags
    },
    {
      text: "Lusiton TL",
      link: "",
      imageSrc: lusiton_tl_image,
      tags: ["graphic design", "seo"], // Add appropriate tags
    },
    {
      text: "ALO.MD",
      link: "",
      imageSrc: alo_md_image,
      tags: ["mobile applications", "enterprise systems"], // Add appropriate tags
    },
    {
      text: "Tesla",
      link: "",
      imageSrc: tesla_image,
      tags: ["video security"], // Add appropriate tags
    },
    {
      text: "Xiaomi Store",
      link: "",
      imageSrc: xiaomi_store_image,
      tags: ["enterprise systems", "seo"], // Add appropriate tags
    },
    {
      text: "PV - Smart Hydroisolation",
      link: "",
      imageSrc: smart_hydro_image,
      tags: ["maintenance"], // Add appropriate tags
    },
    {
      text: "Apple",
      link: "",
      imageSrc: apple_image,
      tags: ["software development"], // Add appropriate tags
    },
    {
      text: "USMF",
      link: "",
      imageSrc: usmf_image,
      tags: ["graphic design"], // Add appropriate tags
    },
    {
      text: "Darwin",
      link: "",
      imageSrc: darwin_image,
      tags: ["mobile applications", "maintenance"], // Add appropriate tags
    },
    {
      text: "Samsung",
      link: "",
      imageSrc: samsung_image,
      tags: ["video security", "enterprise systems"], // Add appropriate tags
    },
    {
      text: "Agro Conex",
      link: "",
      imageSrc: agro_conex_image,
      tags: ["software development", "seo"], // Add appropriate tags
    },
    {
      text: "Enter",
      link: "",
      imageSrc: enter_image,
      tags: ["graphic design"], // Add appropriate tags
    },
  ];

  useEffect(() => {
    // Apply the filter function if provided
    const filteredItems = filterFunction ? row_items.filter(filterFunction) : row_items;

    // Group items into rows
    const rows = [];
    for (let i = 0; i < filteredItems.length; i += 4) {
      rows.push(
        <Row
          key={i}
          items={filteredItems.slice(i, i + 4)}
          height={rows.length % 2 === 0 ? undefined : "non-default"}
          nameOfItem={"service"}
        />
      );
    }

    // Update state with the computed rows
    setRowsProjects(rows);
  }, [filterFunction, row_items]); // Dependency array to update when filterFunction or row_items change

  return (
    <section
      className='projects'
      style={{
        backgroundColor: backgroundColor,
        paddingTop: paddingTopBottom,
        paddingBottom: paddingTopBottom,
      }}
    >
      {thereAreTitleAndClients && <h2>Projects highlights</h2>}
      {rowsProjects}
      {thereAreTitleAndClients && <Clients />}
    </section>
  );
}

export default Projects;
