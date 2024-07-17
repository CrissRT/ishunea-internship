import React from 'react'
import Footer from '../../components/Footer.js';
import Header from '../../components/Header.js';
import Hero from './Hero.js';
import Advantage from './Advantage.js';
import Projects from '../../components/Projects.js';
import CallToAction from '../../components/CallToAction.js';
import Page from '../../components/Page.js';
import Blog from "./Blog.js"
import Progress from "./Progress.js"


import mobileAppsImage from "../../images/mobile-apps.png"
import uxUiDesignImage from "../../images/ux-ui-design.png"
import maintenanceImage from "../../images/maintenance.png"
import graphicDesignImage from "../../images/graphic-design.png"
import Services from '../../components/Services.js';

function HomePage() {
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
  ];
  
  const pageContentComponents = [
    <Hero/>,
    <Services rowItems={servicesItems}/>,
    <Advantage/>,
    <Projects thereAreTitleAndClients={true}/>,
    <Progress/>,
    <CallToAction/>,
    <Blog/>
  ]
  return (
  <>
    <Header/>
    <Page contentComponents={pageContentComponents}/>
    <Footer/>   
  </>
)
}

export default HomePage;