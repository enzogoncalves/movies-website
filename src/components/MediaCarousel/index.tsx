import { ReactElement } from 'react'
import Flickity from 'react-flickity-component'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { MovieDetails } from '../../interfaces/Movie'
import { TvShowDetails } from '../../interfaces/TvShow'
import { SectionTitle } from '../SectionTitle'
import { transformReleaseDate } from '../../utils/functions'
import '../../assets/css/flickity.css'
import "../../assets/css/tailwind.css"

interface DivProps {
	option: 'top-rated-movies' | 'upcoming-movies' | 'trending-movies'
}

const Div = styled.div<DivProps>`
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

const MediaPoster = styled.img`
  cursor: pointer;
`

interface MediaCarouselProps {
	type: 'movie' | 'upcoming-movies' | 'tv-show'
	data: MovieDetails[] | TvShowDetails[]
	sectionTitle: string
	icon: ReactElement
	option?: 'top-rated-movies' | 'upcoming-movies' | 'trending-movies'
}

export const MediaCarousel = ({ type, data, sectionTitle, icon, option }: MediaCarouselProps) => {
  if (type === "movie") {
    return (
      <Div className='mb-4' option={option!}>
        <SectionTitle sectionTitle={sectionTitle} icon={icon}></SectionTitle>
        <Flickity
          className={'carousel'}
          elementType={'div'}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          {(data as MovieDetails[]).map((movie, index) => (
            <NavLink key={index} to={`/movie/${movie.id}`} className='mr-2 w-24 md:w-[132px] cursor-pointer rounded-sm overflow-hidden'>
              <MediaPoster src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} className='h-36 md:h-[199px]' />
              <p className='w-full p-1 md:p-2 text-sm md:text-base min-h-[88px]'>{movie.title}</p>
            </NavLink>
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
          {(data as TvShowDetails[]).map((tvShow, index) => (
            <NavLink key={index} to={`/tv-show/${tvShow.id}`} className='mr-2 cursor-pointer w-[100px] md:w-[133px] rounded-sm overflow-hidden '>
              <MediaPoster src={`https://image.tmdb.org/t/p/w300${tvShow.poster_path}`} className='h-36 md:h-[199px]' />
              <p className='w-full p-1 md:p-2 text-sm md:text-base min-h-[88px]'>{tvShow.name}</p>
            </NavLink>
          ))}
        </Flickity>
      </div>
    )
  } else if (type == "upcoming-movies") {
    return (
      <Div className='mb-4' option={option!}>
        <SectionTitle sectionTitle={sectionTitle} icon={icon}></SectionTitle>
        <Flickity
          className={'carousel'}
          elementType={'div'}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          {(data as MovieDetails[]).map((movie, index) => (
            <NavLink key={index} to={`/movie/${movie.id}`} className='mr-2 w-24 md:w-[132px] cursor-pointer rounded-sm overflow-hidden'>
              <MediaPoster src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} className='h-36 md:h-[199px]' />
              <p className='w-full p-1 md:p-2 text-sm md:text-base min-h-[88px]'>{movie.title}<span className='block text-gray-300'>{transformReleaseDate(movie.release_date)}</span></p>
            </NavLink>
          ))}
        </Flickity>
      </Div>
    )
  } else {
		return (
			<h1>
				'Não assinado qual o tipo dos dados'
			</h1>
		)
	}
}