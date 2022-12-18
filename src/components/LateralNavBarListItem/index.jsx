import React from 'react'
import * as C from './styles'
import { Link } from 'react-router-dom'
import { IoHomeOutline, IoCompassOutline, IoPeopleOutline, IoSearchOutline } from 'react-icons/io5'

const LateralNavBarItem = ({ item, index }) => {
  function returnIcons(i, active) {
    switch (i) {
      case 0:
        return (
          <IoHomeOutline className='list-item-icon' color={active ? '#6680C0' : '#999'} />
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
    <Link to={item.linkTo}>
      <C.ListItem active={item.active}>
        {returnIcons(index, item.active)}
        <C.ListLink>{item.title}</C.ListLink>
      </C.ListItem>
    </Link>
  )
}

export default LateralNavBarItem