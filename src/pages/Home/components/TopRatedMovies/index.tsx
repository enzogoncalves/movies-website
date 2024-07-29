import Flickity from 'react-flickity-component'
import { FaStar } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { MovieDetails } from '../../../../interfaces/Movie'
import { SectionTitle } from '../../../../components/SectionTitle'

const flickityOptions = {
  cellAlign: "left",
  contain: true,
  pageDots: false,
  imagesLoaded: true,
  autoPlay: false,
  freeScroll: true,
}


const MoviePoster = styled.img`
  max-height: 200px;
  cursor: pointer;
`

export const TopRatedMovies = ({ topRatedMovies }: { topRatedMovies: MovieDetails[] }) => {
  return (
    <div style={{ gridArea: 'top-rated-movies', marginTop: '2rem' }}>
      <SectionTitle sectionTitle="Top Rated Movies" icon={<FaStar size="1.25rem" style={{ marginLeft: '.75rem' }} color="orange" />}></SectionTitle>
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {topRatedMovies.map((topRatedMovie, index) => (
          <NavLink key={index} to={`/movie/${topRatedMovie.id}`} className='mr-2 cursor-pointer w-[133px] h-max rounded-sm overflow-hidden'>
            <MoviePoster src={`https://image.tmdb.org/t/p/w300${topRatedMovie.poster_path}`} />
            <p className='w-full p-2 bg-neutral-700'>{topRatedMovie.title}</p>
          </NavLink>
        ))}
      </Flickity>
    </div>
  )
}