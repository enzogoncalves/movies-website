import React from 'react'
import * as C from '../LateralNavBar/styles'
import { NavLink } from 'react-router-dom'
import { IoHomeOutline, IoCompassOutline, IoPeopleOutline, IoSearchOutline } from 'react-icons/io5'

const LateralNavBarItem = ({ item, index }) => {
  function returnIcons(i) {
    switch (i) {
      case 0:
        return (
          <IoHomeOutline className='list-item-icon' />
        )
      case 1:
        return (
          <IoCompassOutline className='list-item-icon' />
        )
      case 2:
        return (
          <IoPeopleOutline className='list-item-icon' />
        )
      case 3:
        return (
          <IoSearchOutline className='list-item-icon' />
        )
    }
  }

  return (
    <C.ListItem active={item.active}>
      <NavLink to={item.linkTo} className="link">
        {returnIcons(index, item.active)}
        <C.ListSpan>{item.title}</C.ListSpan>
      </NavLink>
    </C.ListItem>
  )
}

export default LateralNavBarItem