import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/'>Click Here to go to the Homepage</Link>
    </div>
  )
}

export default ErrorPage