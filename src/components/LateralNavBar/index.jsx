import React from 'react'
import * as C from './styles'
import ListItem from '../LateralNavBarListItem'

const LateralNavBar = ({ items }) => {
  return (
    <C.NavBar>
      <C.List>
        {items.map((item, index) => (
          <ListItem key={index} item={item} index={index} />
        ))}
      </C.List>
    </C.NavBar>
  )
}

export default LateralNavBar