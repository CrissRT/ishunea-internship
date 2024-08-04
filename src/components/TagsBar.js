import React, { useState, useImperativeHandle, forwardRef } from 'react'
import "../styles/TagsBar.css"

// Forward the ref to access methods via useImperativeHandle
const TagsBar = forwardRef(({ tags }, ref) => {
  const [buttonSelected, setButtonSelected] = useState(tags[0]);

  // Expose methods to parent component using ref
  useImperativeHandle(ref, () => ({
    getSelectedTag: () => buttonSelected,
  }));

  return (
    <div className='tags-flex-wrapper d-inline-flex justify-content-center'>
      {tags.map((tag) => (
        <button
          key={tag}
          type='button'
          role='button'
          onClick={() => setButtonSelected(tag)}
          className={`tag-item m-0${buttonSelected !== tag ? " default-tag-item-color" : ""}`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
});

export default TagsBar;
