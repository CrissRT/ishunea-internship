import React from 'react'
import Header from '../../components/Header'
import Page from '../../components/Page'
import Footer from '../../components/Footer'
import CallToAction from '../../components/CallToAction'
import Services from "../../components/Services.js"

import mobileAppsImage from "../../images/mobile-apps.png"
import uxUiDesignImage from "../../images/ux-ui-design.png"
import maintenanceImage from "../../images/maintenance.png"
import graphicDesignImage from "../../images/graphic-design.png"
import softwareDevelopmentImage from "../../images/software-development.png"
import seoImage from "../../images/seo.png"
import videoSecurityImage from "../../images/video-security.png"
import enterpriseSystemsImage from "../../images/enterprise-systems.png"

function ServicesPage() {

    const servicesItems = [
        {
            text: "Mobile Applications",
            link: "",
            imageSrc: mobileAppsImage,
        },
        {
            text: "UX/UI Design",
            link: "",
            imageSrc: uxUiDesignImage,
        },
        {
            text: "Graphic Design",
            link: "",
            imageSrc: graphicDesignImage,
        },
        {
            text: "Maintenance",
            link: "",
            imageSrc: maintenanceImage,
        },
        {
            text: "Software Development",
            link: "",
            imageSrc: softwareDevelopmentImage,
        },
        {
            text: "SEO",
            link: "",
            imageSrc: seoImage,
        },
        {
            text: "Video Security",
            link: "",
            imageSrc: videoSecurityImage,
        },
        {
            text: "Enterprise Systems",
            link: "",
            imageSrc: enterpriseSystemsImage,
        },

    ];

    const pageContentComponents = [
        <Services rowItems={servicesItems} paddingTopBottom='0px'/>,
        <CallToAction/>,
      ]
      return (
      <>
        <Header textColor="black"/>
        <Page contentComponents={pageContentComponents} paddingTop='168px' backgroundColor='white'/>
        <Footer/>   
      </>
    )
}

export default ServicesPage