import React from 'react'

function HeadOfPage({title, description, buttonComponents = null}) {
    const heading = {
        padding: "0px 80px 0px 80px",
        gap: "8px",
        maxWidth: "1440px",
    };
  
    const headP = {
        fontSize: "20px",
        lineHeight: "30px",
        opacity: "50%",
        width: "628px",
    };

    const headH = {
        fontWeight: "500",
        lineHeight: "67.2px",
        fontWeight: "56px",
    };

    const headButtons = {
        paddingTop: "32px", 
        gap: "24px",
    }
  return (
    <section className='d-flex flex-column width-100' style={heading}>
        <h1 className='text-dark' style={headH}>{title}</h1>
        <p className='font-inter text-dark font-weight-400' style={headP}>{description}</p>
        {buttonComponents && 
            <div className='d-flex' style={headButtons}>
                {buttonComponents.map((button, index) => {
                    return (
                        <div key={index}>
                            {button}
                        </div>
                    ); 
                })}
            </div>
        }

    </section>
  )
}

export default HeadOfPage