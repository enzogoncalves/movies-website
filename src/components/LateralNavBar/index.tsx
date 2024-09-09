import { useContext } from 'react'
import { LateralNavBarItem } from '../LateralNavBarListItem'
import "./style.css"
import * as C from './styles'
import { AppContext } from '../../contexts/AppContext'

export function LateralNavBar() {
	const { navigationItems } = useContext(AppContext)

  return (
    <C.NavBar>
      <C.List>
        {navigationItems.map((item, index) => (
          <LateralNavBarItem key={index} item={item} index={index} />
        ))}
      </C.List>
    </C.NavBar>
  )
}