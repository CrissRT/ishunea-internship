import React from 'react'
import "./Progress.css"

function Progress() {
    const card_info = [
        {
            title: "Analysis, Discussion & Offer",
            description: "We analyse your objectives and expectations going through all the requirements. Then we have an estimation of the price & time for product development.",
            icon_src: "",
        },
        {
            title: "Research & Wireframing",
            description: "We set up a wireframe to establish the architecture of the product. This will give everyone the insight on the ‘big picture’ of your risks and opportunities.",
            icon_src: "",
        },
        {
            title: "Product Design",
            description: "Our design team create high-quality prototype of your solution based on the wireframes and going through all the screens and elements. Here we have an iterative process where we design a target blueprint of how your product should look like. We create engaging, user-friendly and stunning designs that will seamlessly communicate with end-users and make you stand out among your competitors.",
            icon_src: "",
        },
        {
            title: "Solution Development",
            description: "Our team of developers build your product using modern coding standards and proven technologies to ensure that it is quickly, secure and scalable.",
            icon_src: "",
        },
        {
            title: "Testing & Quality Assurance",
            description: "The product goes through several testing phases to ensure that there are no bugs or lags and the product itself provides a good user experience. At this stage we prepare you with the documentation on how to manage and update the product. By leveraging a dedicated pool of professional QA engineers, we manage all aspects of testing to meet your objectives, improve quality, and increase release velocity.",
            icon_src: "",
        },
        {
            title: "Product Launch",
            description: "This is not the end of our commitment. We provide technical support for a period of time so you will not be on your own once the work is completed.",
            icon_src: "",
        },
    ]

    return (
        <section className='progress'>
            <div className='content'>
                <div className='heading'>
                    <h3>How it works</h3>
                    <p id="intro">
                        Our processes are transparent so you will know what we are working on, and why
                    </p>
                </div>

                <div className='grid'>
                    {card_info.map((item, index) => {
                        return (
                            <div className='card' key={item.title} id={"card" + (index + 1) }>
                                <div className='card-content'>
                                    <h4>
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default Progress