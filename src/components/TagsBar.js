import React, { useState } from 'react'
import "../styles/TagsBar.css"
function TagsBar({tags}) {
    const [buttonSelected, setButtonSelected] = useState(tags[0]) 

  return (
    <div className='tags-flex-wrapper d-inline-flex justify-content-center'>
        {tags.map((tag) => (
            <button type='button' role='button' onClick={() => setButtonSelected(tag)} className={`tag-item m-0${buttonSelected !== tag ? " default-tag-item-color" : ""}`}>
                {tag}
            </button>
        ))}
    </div>
  )
}

export default TagsBar