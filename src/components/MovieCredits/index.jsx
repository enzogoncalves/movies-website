import React from 'react'
import { NavLink } from 'react-router-dom'
import Flickity from 'react-flickity-component'
import "../../assets/css/tailwind.css"
import { IoPerson } from 'react-icons/io5'

const flickityOptions = {
  cellAlign: "left",
  contain: true,
  pageDots: false,
  imagesLoaded: true,
  autoPlay: false,
  freeScroll: true,
}

const MovieCredits = ({ movieCredits, id }) => {
  return (
    <div className='mt-4 pb-4'>
      <h2 className='text-xl font-semibold mb-2'>Main Cast</h2>
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {movieCredits.cast.slice(0, 10).map((cast, index) => {
          return (
            <div className='flex flex-col rounded-md overflow-hidden shrink-0 max-w-[125px] mr-3' key={index}>
              {cast.profile_path
                ? <img src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`} alt="cast profile picture" />
                : <IoPerson className='w-[125px] h-[175px] p-[10px] rounded-md text-[#444] bg-[#efefef]' />
              }

              <div className='p-2'>
                <p className='font-semibold'>{cast.name}</p>
                <span className='text-sm'>{cast.character}</span>
              </div>
            </div>
          )
        })}
      </Flickity>
      <NavLink to={`/movie/${id}/cast`}>Full Cast & Crew</NavLink>
    </div>
  )
}

export default MovieCredits