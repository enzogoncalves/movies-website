import React from 'react'
import * as C from '../LateralNavBar/styles'
import { NavLink } from 'react-router-dom'
import { IoSearchOutline } from 'react-icons/io5'
import { MdOndemandVideo, MdOutlineVideoLibrary } from 'react-icons/md'

const LateralNavBarItem = ({ item, index }) => {
  function returnIcons(i) {
    switch (i) {
      case 0:
        return (
          <MdOndemandVideo className='list-item-icon' />
        )
      case 1:
        return (
          <MdOutlineVideoLibrary className='list-item-icon' />
        )
      case 2:
        return (
          <IoSearchOutline className='list-item-icon' />
        )
    }
  }

  return (
    <C.ListItem>
      <NavLink to={item.linkTo} className="link">
        {returnIcons(index)}
        <C.ListSpan>{item.title}</C.ListSpan>
      </NavLink>
    </C.ListItem>
  )
}

export default LateralNavBarItem