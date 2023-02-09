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
import TvShows from './pages/TvShows';

function App() {
  const [lateralNavBarItems, setLateralNavBarItems] = useState([])
  const [headerLinks, setHeaderLinks] = useState([])

  useEffect(() => {
    setLateralNavBarItems([{ title: 'Home', active: true, linkTo: '/' }, { title: 'Discovery', active: false, linkTo: '/discovery' }, { title: 'Community', active: false, linkTo: '/community' }, { title: 'Search', active: false, linkTo: '/search' }])

    setHeaderLinks([{ link: 'Home', linkTo: '/', active: true }, { link: 'TV Shows', linkTo: '/tv-shows', active: false }])
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home /><Header links={headerLinks} logoTitle="Home" />
        <LateralNavBar items={lateralNavBarItems} /></>,
      errorElement: <ErrorPage />,
    },
    {
      path: "discovery",
      element: <><Discovery /><Header links={headerLinks} logoTitle="Discovery" />
        <LateralNavBar items={lateralNavBarItems} /></>,
    },
    {
      path: "movie/:id",
      element: <><Movie /><Header links={headerLinks} logoTitle="Movie" />
        <LateralNavBar items={lateralNavBarItems} /></>,
    },
    {
      path: "movie/:id/cast",
      element: <><Cast /><Header links={headerLinks} logoTitle="Movie Cast" />
        <LateralNavBar items={lateralNavBarItems} /></>,
    },
    {
      path: "search",
      element: <><Search /><Header links={headerLinks} logoTitle="Search" />
        <LateralNavBar items={lateralNavBarItems} /></>
    },
    {
      path: "tv-shows",
      element: <><TvShows /><Header links={headerLinks} logoTitle="Tv Shows" />
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
