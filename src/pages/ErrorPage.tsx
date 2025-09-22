import { NavLink, /* useRouteError */ } from 'react-router-dom';
import "../assets/css/tailwind.css";
import { Helmet } from "@dr.pogodin/react-helmet";

export const ErrorPage = () => {
  // const error = useRouteError();
  return (
		<>
			<Helmet title="Error"/>

			<div id="error-page" className='flex flex-col justify-around items-center h-screen'>
				<p>Sorry, an unexpected error has occured</p>
				<h1 className='text-5xl sm:text-9xl text-sky-800'>Oops!</h1>
				<p>
					{/* <i>{error.statusText || error.message}</i> */}
				</p>
				<NavLink to='/' className='font-black hover:underline text-xl'>Click Here to go to the Homepage</NavLink>
    	</div>
		</>
  )
}