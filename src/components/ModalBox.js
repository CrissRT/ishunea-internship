import React from 'react'
import "./ModalBox.css"

function ModalBox({imageSrc, title, mainText, buttonComponent, width = "436px"}) {
  return (
    <div className='modal-box' style={{width: width}}>
        <img src={imageSrc}/>
        <div className='modal-box-heading'>
            <h4 className='modal-box-title'>
                {title}
            </h4>

            <p className='modal-box-text'>
                {mainText}
            </p>
        </div>

        <div className='modal-box-action'>
            {buttonComponent}
        </div>
    </div>
  )
}

export default ModalBox