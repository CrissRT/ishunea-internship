import React from 'react'
import "./Header.css"
import IconIshunea from './IconIshunea.js'
import MenuNav from './MenuNav.js'
import { NavLink } from 'react-router-dom'

function Header({textColor = "white"}) {
  return (
    <>
      <header>
        <NavLink to="/">
          <IconIshunea/>
        </NavLink>
        <div id='header-menu'>
          <MenuNav textColor={textColor} title="company" itemsDroplist={["about","career", "blog"]}/>
          <ul className='navigation-list'>
            <li >
              <NavLink to="/services"
                className={({ isActive }) =>isActive ? "nav-link-active" : textColor !== "white" ? "black" : undefined}
              >
                services
              </NavLink>
            </li>
            <li>
              <NavLink to="/works"
                className={({ isActive }) =>isActive ? "nav-link-active" : textColor !== "white" ? "black" : undefined}
              >
                works
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts"
                className={({ isActive }) =>isActive ? "nav-link-active" : textColor !== "white" ? "black" : undefined}
              >
                contacts
              </NavLink>
            </li>

            <MenuNav textColor={textColor} title="english" itemsDroplist={["russian", "romanian", "israilean"]}/>
          </ul>
        </div>
        <hr className={textColor !== "white" ? "black": undefined}></hr>
      </header>
    </>
  )
}

export default Header