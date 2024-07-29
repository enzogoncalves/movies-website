import { IoSearchOutline } from 'react-icons/io5'
import { MdOndemandVideo, MdOutlineVideoLibrary } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import * as C from '../LateralNavBar/styles'

function returnIcons(i: number) {
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

interface LateralNavBarItemProps {
	item: {
		title: string
		linkTo: string;
	}
	index: number
}

export const LateralNavBarItem = ({ item, index }: LateralNavBarItemProps) => {
return (
    <C.ListItem>
      <NavLink to={item.linkTo} className="link">
        {returnIcons(index)}
        <C.ListSpan>{item.title}</C.ListSpan>
      </NavLink>
    </C.ListItem>
  )
}