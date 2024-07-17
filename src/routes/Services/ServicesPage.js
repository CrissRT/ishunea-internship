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
            image_src: mobileAppsImage,
        },
        {
            text: "UX/UI Design",
            link: "",
            image_src: uxUiDesignImage,
        },
        {
            text: "Graphic Design",
            link: "",
            image_src: graphicDesignImage,
        },
        {
            text: "Maintenance",
            link: "",
            image_src: maintenanceImage,
        },
        {
            text: "Software Development",
            link: "",
            image_src: softwareDevelopmentImage,
        },
        {
            text: "SEO",
            link: "",
            image_src: seoImage,
        },
        {
            text: "Video Security",
            link: "",
            image_src: videoSecurityImage,
        },
        {
            text: "Enterprise Systems",
            link: "",
            image_src: enterpriseSystemsImage,
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