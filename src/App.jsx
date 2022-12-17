import React, { useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header'
import LateralNavBar from './components/LateralNavBar'
import MovieContent from './components/MovieContent'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieContent />,
  },
]);

function App() {
  const [lateralNavBarItems, setLateralNavBarItems] = useState([])

  useEffect(() => {
    setLateralNavBarItems([{ title: 'Home', active: true }, { title: 'Discovery', active: false }, { title: 'Community', active: false }, { title: 'Search', active: false }])
  }, [])

  return (
    <>
      <Header />
      <LateralNavBar items={lateralNavBarItems} />
      <RouterProvider router={router} />
    </>
  )
}

export default App
