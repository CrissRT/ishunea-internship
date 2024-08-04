import React from 'react'
import "./ListBLogs.css"
import NewsCards from "../../components/NewsCards"

function ListBlogs({blogs}) {
    const column1 = []
    const column2 = []
    const column3 = []
    const column4 = []

    const sizes = ["s", "m", "l", "xl"]

    let column1Size = sizes[1]
    let column2Size = sizes[3]
    let column3Size = sizes[2]
    let column4Size = sizes[0]
    

    for (let i = 0; i < blogs.length; i++) {
        if (i % 4 === 0) {
            column1.push(<NewsCards item={blogs[i]} key={i} height={column1Size}/>)
            column1Size = sizes[(sizes.indexOf(column1Size) + 1) % sizes.length]
        } else if (i % 4 === 1) {
            column2.push(<NewsCards item={blogs[i]} key={i} height={column2Size}/>)
            column2Size = sizes[(sizes.indexOf(column2Size) + 1) % sizes.length]
        } else if (i % 4 === 2) {
            column3.push(<NewsCards item={blogs[i]} key={i} height={column3Size}/>)
            column3Size = sizes[(sizes.indexOf(column3Size) + 1) % sizes.length]
        } else {
            column4.push(<NewsCards item={blogs[i]} key={i} height={column4Size}/>)
            column4Size = sizes[(sizes.indexOf(column4Size) + 1) % sizes.length]
        }
    }


  return (
    <section className='width-100'>
        <div className='d-flex width-100 justify-content-center' id='list-blogs'>
            <div className='d-flex flex-column row-blogs'>
                {column1.map((card) => (card))}
            </div>
            
            <div className='d-flex flex-column row-blogs'>
                {column2.map((card) => (card))}
            </div>

            <div className='d-flex flex-column row-blogs'>
                {column3.map((card) => (card))}
            </div>

            <div className='d-flex flex-column row-blogs'>
                {column4.map((card) => (card))}
            </div>
        </div>
        {blogs.length > 20 ? <div><div>left</div><div>right</div></div>: <></>}
    </section>
  )
}

export default ListBlogs