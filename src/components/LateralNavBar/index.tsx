import { useContext } from 'react'
import { LateralNavBarItem } from '../LateralNavBarListItem'
import "./style.css"
import * as C from './styles'
import { AppContext } from '../../contexts/AppContext'

export function LateralNavBar() {
	const { lateralNavBarItems } = useContext(AppContext)

  return (
    <C.NavBar>
      <C.List>
        {lateralNavBarItems.map((item, index) => (
          <LateralNavBarItem key={index} item={item} index={index} />
        ))}
      </C.List>
    </C.NavBar>
  )
}