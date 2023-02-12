import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Flickity from 'react-flickity-component'
import "../../assets/css/tailwind.css"
import '../../assets/css/flickity.css'
import { transformReleaseDate } from '../UpcomingMovie'

const Div = styled.div`
  grid-area: ${props => { if (props.option == "trending-movies") { return "trending-movies" } else if (props.option == "top-rated-movies") { return "top-rated-movies" } else if (props.option == "upcoming-movies") { return "upcoming-movies" } }};
`

const flickityOptions = {
  cellAlign: "left",
  contain: true,
  pageDots: false,
  imagesLoaded: true,
  autoPlay: false,
  freeScroll: true,
}

import SectionTitle from '../SectionTitle'

const MediaPoster = styled.img`
  cursor: pointer;
`

const MediaCarousel = ({ type, data, sectionTitle, icon, option }) => {
  if (type === "movie") {
    return (
      <Div className='mb-4' option={option}>
        <SectionTitle sectionTitle={sectionTitle} icon={icon}></SectionTitle>
        <Flickity
          className={'carousel'}
          elementType={'div'}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          {data.map((movie, index) => (
            <Link key={index} to={`/movie/${movie.id}`} className='mr-2 w-24 md:w-[132px] cursor-pointer rounded-sm overflow-hidden'>
              <MediaPoster src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} className='h-36 md:h-[199px]' />
              <p className='w-full p-1 md:p-2 text-sm md:text-base min-h-[88px]'>{movie.title}</p>
            </Link>
          ))}
        </Flickity>
      </Div>
    )
  } else if (type === "tv-show") {
    return (
      <div className='mb-4'>
        <SectionTitle sectionTitle={sectionTitle} icon={icon}></SectionTitle>
        <Flickity
          className={'carousel'}
          elementType={'div'}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          {data.map((tvShow, index) => (
            <Link key={index} to={`/tv-show/${tvShow.id}`} className='mr-2 cursor-pointer w-[100px] md:w-[133px] rounded-sm overflow-hidden '>
              <MediaPoster src={`https://image.tmdb.org/t/p/w300${tvShow.poster_path}`} className='h-36 md:h-[199px]' />
              <p className='w-full p-1 md:p-2 text-sm md:text-base min-h-[88px]'>{tvShow.name}</p>
            </Link>
          ))}
        </Flickity>
      </div>
    )
  } else if (type == "upcoming-movies") {
    return (
      <Div className='mb-4'>
        <SectionTitle sectionTitle={sectionTitle} icon={icon}></SectionTitle>
        <Flickity
          className={'carousel'}
          elementType={'div'}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          {data.map((movie, index) => (
            <Link key={index} to={`/movie/${movie.id}`} className='mr-2 w-24 md:w-[132px] cursor-pointer rounded-sm overflow-hidden'>
              <MediaPoster src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} className='h-36 md:h-[199px]' />
              <p className='w-full p-1 md:p-2 text-sm md:text-base min-h-[88px]'>{movie.title}<span className='block text-gray-300'>{transformReleaseDate(movie.release_date)}</span></p>
            </Link>
          ))}
        </Flickity>
      </Div>
    )
  }
}

export default MediaCarousel