import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import Discovery from './pages/Discovery';
import ErrorPage from './pages/ErrorPage';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/discovery',
    element: <Discovery />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
