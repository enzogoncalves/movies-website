import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../contexts/AppContext'
import * as C from './styles'

export const Header = () => {
	const { headerLinks } = useContext(AppContext)

  return (
    <C.Header>
      <C.Div>
        <C.Logo>MediaFy</C.Logo>
        <C.HeaderList>
          {headerLinks.map((link, index) => (
            <NavLink key={index} to={link.linkTo} className='header-link' style={({ isActive }) => {
              return isActive
                ? { padding: '.75rem .5rem', fontWeight: 500, color: "#efefef", }
                : { padding: '.75rem .5rem', fontWeight: 500, color: "#999" }
            }}>
              {link.title}
            </NavLink>
          ))}
        </C.HeaderList>
      </C.Div>
    </C.Header>
  )
}