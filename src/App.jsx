import React, { useEffect, useState } from 'react'
import {
  RouterProvider, createBrowserRouter
} from "react-router-dom";

import Home from './pages/Home';
import Discovery from './pages/Discovery';
import ErrorPage from './pages/ErrorPage';
import Movie from './pages/Movie';
import Cast from './pages/Cast';
import Search from './pages/Search';
import LateralNavBar from './components/LateralNavBar'
import Header from './components/Header'

import './index.css'

function App() {
  const [lateralNavBarItems, setLateralNavBarItems] = useState([])
  const [headerLinks, setHeaderLinks] = useState([])

  useEffect(() => {
    setLateralNavBarItems([{ title: 'Home', active: true, linkTo: '/' }, { title: 'Discovery', active: false, linkTo: '/discovery' }, { title: 'Community', active: false, linkTo: '/community' }, { title: 'Search', active: false, linkTo: '/search' }])

    setHeaderLinks([{ link: 'Home', linkTo: '/', active: true }, { link: 'Series', linkTo: '/series', active: false }, { link: 'TV Show', linkTo: '/tv-shows', active: false }])
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home /><Header links={headerLinks} />
        <LateralNavBar items={lateralNavBarItems} /></>,
      errorElement: <ErrorPage />,
    },
    {
      path: "discovery",
      element: <><Discovery /><Header links={headerLinks} />
        <LateralNavBar items={lateralNavBarItems} /></>,
    },
    {
      path: "movie/:id",
      element: <><Movie /><Header links={headerLinks} />
        <LateralNavBar items={lateralNavBarItems} /></>,
    },
    {
      path: "movie/:id/cast",
      element: <><Cast /><Header links={headerLinks} />
        <LateralNavBar items={lateralNavBarItems} /></>,
    },
    {
      path: "search",
      element: <><Search /><Header links={headerLinks} />
        <LateralNavBar items={lateralNavBarItems} /></>
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
