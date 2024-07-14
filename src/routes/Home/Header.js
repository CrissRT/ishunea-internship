import React from 'react'
import "./Header.css"
import IconIshunea from '../../components/IconIshunea.js'
import MenuNav from '../../components/MenuNav.js'

function Header() {
  return (
    <>
      <header>
        <IconIshunea/>
        <div id='header-menu'>
          <MenuNav textColor='white' title="company" itemsDroplist={["about","career", "blog"]}/>
          <ul className='navigation-list'>
            <li>
              services
            </li>
            <li>
              works
            </li>
            <li>
              contacts
            </li>
            <li>
              services
            </li>
            <MenuNav textColor='white' title="english" itemsDroplist={["russian", "romanian", "israilean"]}/>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header