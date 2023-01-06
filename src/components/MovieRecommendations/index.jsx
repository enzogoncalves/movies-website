import React from 'react'
import { NavLink } from 'react-router-dom'
import Flickity from 'react-flickity-component'
import "../../assets/css/tailwind.css"

const flickityOptions = {
  cellAlign: "left",
  contain: true,
  pageDots: false,
  imagesLoaded: true,
  autoPlay: false,
  freeScroll: true,
}

const MovieRecommendations = ({ movieRecommendations }) => {
  return (
    <div className='mt-4'>
      <h2 className='text-xl font-semibold mb-2'>Recommendations</h2>
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {movieRecommendations.map((recommendationMovie, index) => {
          return (
            <div key={index} className='flex flex-col rounded-md overflow-hidden shrink-0 max-w-[125px] mr-3'>
              <NavLink to={`/movie/${recommendationMovie.id}`} reloadDocument>
                <img src={`https://image.tmdb.org/t/p/original/${recommendationMovie.poster_path}`} alt="movie poster" />
              </NavLink>
              <div className='p-2'>
                <p className='font-semibold'>{recommendationMovie.title}</p>
              </div>
            </div>
          )
        })}
      </Flickity>
    </div>
  )
}

export default MovieRecommendations