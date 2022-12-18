import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import LateralNavBar from '../components/LateralNavBar'
import MovieContent from '../components/MovieContent'


const Home = () => {
  const [lateralNavBarItems, setLateralNavBarItems] = useState([])
  const [headerLinks, setHeaderLinks] = useState([])

  useEffect(() => {
    setLateralNavBarItems([{ title: 'Home', active: true, linkTo: '/' }, { title: 'Discovery', active: false, linkTo: '/discovery' }, { title: 'Community', active: false, linkTo: 'community' }, { title: 'Search', active: false, linkTo: 'search' }])
    setHeaderLinks([{ link: 'Home', linkTo: '/', active: true }, { link: 'Series', linkTo: '/series', active: false }, { link: 'TV Show', linkTo: '/tv-shows', active: false }])
  }, [])

  return (
    <>
      <Header links={headerLinks} />
      <LateralNavBar items={lateralNavBarItems} />
      <MovieContent />
    </>
  )
}

export default Home