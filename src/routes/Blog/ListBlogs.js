import React, { useState } from 'react'
import "./ListBLogs.css"
import NewsCards from "../../components/NewsCards"

function ListBlogs({blogs}) {
    const numberOfBlocksPerPage = 4
    const blogsEachPage = [];
    for (let i = 0; i < blogs.length; i += numberOfBlocksPerPage) {
        blogsEachPage.push(blogs.slice(i, i + numberOfBlocksPerPage));
    }
    const [currentPage, setCurrentPage] = useState(0);

    const handlePage = (e) => {
        if (e.target.id === "left-page" && blogsEachPage[currentPage - 1])
            setCurrentPage(currentPage - 1)
        else if (e.target.id === "right-page" && blogsEachPage[currentPage + 1])
            setCurrentPage(currentPage + 1)
    }

    const column1 = []
    const column2 = []
    const column3 = []
    const column4 = []

    const sizes = ["s", "m", "l", "xl"]
    const sizesLength = sizes.length

    let column1Size = sizes[1]
    let column2Size = sizes[3]
    let column3Size = sizes[2]
    let column4Size = sizes[0]
    
    const currentPageContent = blogsEachPage[currentPage];


    for (let i = 0; i < currentPageContent.length; i++) {
        const blog = currentPageContent[i]
        if (i % 4 === 0) {
            column1.push(<NewsCards item={blog} key={i} height={column1Size}/>)
            column1Size = sizes[(sizes.indexOf(column1Size) + 1) % sizesLength]
        } else if (i % 4 === 1) {
            column2.push(<NewsCards item={blog} key={i} height={column2Size}/>)
            column2Size = sizes[(sizes.indexOf(column2Size) + 1) % sizesLength]
        } else if (i % 4 === 2) {
            column3.push(<NewsCards item={blog} key={i} height={column3Size}/>)
            column3Size = sizes[(sizes.indexOf(column3Size) + 1) % sizesLength]
        } else {
            column4.push(<NewsCards item={blog} key={i} height={column4Size}/>)
            column4Size = sizes[(sizes.indexOf(column4Size) + 1) % sizesLength]
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
        
        <div className='width-100 d-flex justify-content-center'>
            <div class="pagination wid">
                <div id="left-page" onClick={(e) => handlePage(e)}>❮</div>
                <div id='right-page' onClick={(e) => handlePage(e)}>❯</div>
            </div>
        </div>
    </section>
  )
}

export default ListBlogs