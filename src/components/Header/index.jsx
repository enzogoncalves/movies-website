import React from 'react'
import * as C from './styles'
import { NavLink } from 'react-router-dom'

const Header = ({ links }) => {
  return (
    <C.Header>
      <C.Div>
        <C.Logo>MediaFy</C.Logo>
        <C.HeaderList>
          {links.map((link, index) => (
            <NavLink key={index} to={link.linkTo} className='header-link' style={({ isActive }) => {
              return isActive
                ? { padding: '.75rem .5rem', fontWeight: 500, color: "#efefef", }
                : { padding: '.75rem .5rem', fontWeight: 500, color: "#999" }
            }}>
              {link.link}
            </NavLink>
          ))}
        </C.HeaderList>
      </C.Div>
    </C.Header>
  )
}

export default Header