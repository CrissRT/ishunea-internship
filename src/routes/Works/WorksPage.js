// WorksPage.js
import React, { useRef } from 'react'
import Header from '../../components/Header'
import Projects from '../../components/Projects'
import Footer from '../../components/Footer'
import CallToAction from '../../components/CallToAction'
import Page from '../../components/Page'
import './WorksPage.css'
import TagsBar from '../../components/TagsBar'

function WorksPage() {
  // Ref to access TagsBar methods
  const tagsBarRef = useRef(null);

  const tags = [
    "all",
    "software development",
    "mobile applications",
    "graphic design",
    "maintenance",
    "seo",
    "video security",
    "enterprise systems"
  ];

  const filterFunction = (project) => {
    // Safely access the ref and handle case where it's not ready
    const selectedTag = tagsBarRef.current ? tagsBarRef.current.getSelectedTag() : "all";

    // If 'all' is selected, show all projects
    if (selectedTag === "all") {
      return true;
    }

    // Check if the project's tags include the selectedTag
    return project.tags && project.tags.includes(selectedTag);
  };

  const caseStudies = () => {
    return (
      <section id='case-studies-wrapper'>
        <div id='case-studies'>
          <h3 id='case-studies-h3'>Case studies</h3>
          <TagsBar tags={tags} ref={tagsBarRef} />
        </div>
      </section>
    );
  };

  const pageContentComponents = [
    caseStudies(),
    <Projects
      backgroundColor='white'
      paddingTopBottom='0px'
      filterFunction={filterFunction}
    />,
    <CallToAction />,
  ];

  return (
    <>
      <Header textColor="black" />
      <Page contentComponents={pageContentComponents} />
      <Footer />
    </>
  );
}

export default WorksPage;
