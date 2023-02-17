import React from 'react'
import { useRouteError, Link } from 'react-router-dom'
import "../assets/css/tailwind.css"

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error)

  return (
    <div id="error-page" className='flex flex-col justify-around items-center h-screen'>
      <p>Sorry, an unexpected error has occured</p>
      <h1 className='text-5xl sm:text-9xl text-sky-800'>Oops!</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/' className='font-black hover:underline text-xl'>Click Here to go to the Homepage</Link>
    </div>
  )
}

export default ErrorPage