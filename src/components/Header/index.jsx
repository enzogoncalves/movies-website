import React from 'react'
import * as C from './styles'
import { Link } from 'react-router-dom'

const Header = ({ links }) => {
  return (
    <C.Header>
      <C.Logo>Movies</C.Logo>
      <C.HeaderList>
        {links.map((link, index) => (
          <Link key={index} to={link.linkTo}>
            <C.HeaderListItem>
              <C.HeaderListItemLink active={link.active}>
                {link.link}
              </C.HeaderListItemLink>
            </C.HeaderListItem>
          </Link>
        ))}
      </C.HeaderList>
    </C.Header>
  )
}

export default Header