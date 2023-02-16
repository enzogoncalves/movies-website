import React, { useEffect, useState } from 'react'
import {
  RouterProvider, createBrowserRouter
} from "react-router-dom";

import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Movie from './pages/Movie';
import Cast from './pages/Cast';
import Search from './pages/Search';
import LateralNavBar from './components/LateralNavBar'
import Header from './components/Header'
import Tv from './pages/TvShow';
import TvShows from './pages/TvShows';

import './index.css'

function App() {
  const [lateralNavBarItems, setLateralNavBarItems] = useState([])
  const [headerLinks, setHeaderLinks] = useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth)
  })

  useEffect(() => {
    setHeaderLinks([{ link: 'Home', linkTo: '/' }, { link: 'TV Shows', linkTo: '/tv-shows' }, { link: 'Search', linkTo: '/search' }])

    setLateralNavBarItems([{ title: 'Home', linkTo: '/' }, { title: 'Tv Shows', linkTo: '/tv-shows' }, { title: 'Search', linkTo: '/search' }])
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home windowWidth={windowWidth} /><Header links={headerLinks} />
        <LateralNavBar items={lateralNavBarItems} /></>,
      errorElement: <ErrorPage />,
    },
    {
      path: "movie/:id",
      element: <><Movie windowWidth={windowWidth} /><Header links={headerLinks} />
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
    },
    {
      path: "tv-shows",
      element: <><TvShows /><Header links={headerLinks} />
        <LateralNavBar items={lateralNavBarItems} /></>
    },
    {
      path: "tv-show/:id",
      element: <><Tv windowWidth={windowWidth} /><Header links={headerLinks} />
        <LateralNavBar items={lateralNavBarItems} /></>,
      errorElement: <ErrorPage />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
