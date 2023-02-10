import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Flickity from 'react-flickity-component'
import "../../assets/css/tailwind.css"
import '../../assets/css/flickity.css'

const Div = styled.div`
  grid-area: ${props => props.option ? "trending-movies" : "top-rated-movies"};
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
  height: 199px;
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
            <Link key={index} to={`/movie/${movie.id}`} className='mr-2 cursor-pointer w-[133px] rounded-sm overflow-hidden '>
              <MediaPoster src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
              <p className='w-full p-2 bg-neutral-700 min-h-[88px]'>{movie.title}</p>
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
            <Link key={index} to={`/tv-show/${tvShow.id}`} className='mr-2 cursor-pointer w-[133px] rounded-sm overflow-hidden '>
              <MediaPoster src={`https://image.tmdb.org/t/p/w300${tvShow.poster_path}`} />
              <p className='w-full p-2 bg-neutral-700 min-h-[88px]'>{tvShow.name}</p>
            </Link>
          ))}
        </Flickity>
      </div>
    )
  }
}

export default MediaCarousel