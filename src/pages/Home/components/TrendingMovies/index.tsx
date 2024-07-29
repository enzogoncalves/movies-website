import Flickity from 'react-flickity-component'
import { FaFireAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const flickityOptions = {
  cellAlign: "left",
  contain: true,
  pageDots: false,
  imagesLoaded: true,
  autoPlay: false,
  freeScroll: true,
}

import { MovieDetails } from '../../../../interfaces/Movie'
import { SectionTitle } from '../../../../components/SectionTitle'

const MoviePoster = styled.img`
  max-height: 200px;
  cursor: pointer;
`

export const TrendingMovies = ({ trendingMovies }: { trendingMovies: MovieDetails[] }) => {
  return (
    <div style={{ gridArea: 'trending-movies' }}>
      <SectionTitle sectionTitle="Trending Movies" icon={<FaFireAlt size="1.25rem" style={{ marginLeft: '.75rem' }} color="orange" />}></SectionTitle>
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {trendingMovies.map((trendingMovie, index) => (
          <NavLink key={index} to={`/movie/${trendingMovie.id}`} className='mr-2 cursor-pointer w-[133px] rounded-sm overflow-hidden'>
            <MoviePoster src={`https://image.tmdb.org/t/p/w300${trendingMovie.poster_path}`} />
            <p className='w-full p-2 bg-neutral-700'>{trendingMovie.title}</p>
          </NavLink>
        ))}
      </Flickity>
    </div>
  )
}