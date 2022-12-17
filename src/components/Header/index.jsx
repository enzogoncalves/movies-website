import React from 'react'
import * as C from './styles'

const Header = () => {
  return (
    <C.Header>
      <C.Logo>Movies</C.Logo>
      <C.HeaderList>
        <C.HeaderListItem>
          <C.HeaderListItemLink>
            Home
          </C.HeaderListItemLink>
        </C.HeaderListItem>
        <C.HeaderListItem>
          <C.HeaderListItemLink>
            Series
          </C.HeaderListItemLink>
        </C.HeaderListItem>
        <C.HeaderListItem>
          <C.HeaderListItemLink>
            TV Show
          </C.HeaderListItemLink>
        </C.HeaderListItem>
      </C.HeaderList>
    </C.Header>
  )
}

export default Header