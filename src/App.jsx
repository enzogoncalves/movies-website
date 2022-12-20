import React, { useEffect, useState } from 'react'
import {
  Route, Routes
} from "react-router-dom";

import Home from './pages/Home';
import Discovery from './pages/Discovery';
import ErrorPage from './pages/ErrorPage';
import Movie from './pages/Movie';
import LateralNavBar from './components/LateralNavBar'
import Header from './components/Header'

import './index.css'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: '/discovery',
//     element: <Discovery />,
//   }
// ]);

function App() {
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
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/discovery' element={<Discovery />} />
        <Route path='/movie/:id' element={<Movie />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
