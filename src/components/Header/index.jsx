import React from 'react'
import * as C from './styles'
import { NavLink } from 'react-router-dom'

const Header = ({ links, logoTitle }) => {
  return (
    <C.Header>
      <C.Logo>{logoTitle}</C.Logo>
      <C.HeaderList>
        {links.map((link, index) => (
          <NavLink key={index} to={link.linkTo} style={({ isActive }) => {

            return isActive
              ? { padding: '.75rem .5rem', fontWeight: 500, color: "#efefef" }
              : { padding: '.75rem .5rem', fontWeight: 500, color: "#999" }
          }}>
            {link.link}
          </NavLink>
        ))}
      </C.HeaderList>
    </C.Header>
  )
}

export default Header