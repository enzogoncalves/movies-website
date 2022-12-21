import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'

import Flickity from 'react-flickity-component'

import '../../assets/css/flickity.css'

const flickityOptions = {
  cellAlign: "left",
  contain: true,
  pageDots: false,
  imagesLoaded: true,
  autoPlay: false,
  freeScroll: true,
}

import SectionTitle from '../SectionTitle'

const MoviePoster = styled.img`
  max-height: 200px;
  margin-right: .5rem;
  cursor: pointer;
`

const TopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([])

  useEffect(() => {
    const getTopRatedMovies = async () => {
      const movieData = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=c2b569d95e4b2013348fb2f4430655a5&language=en-US&page=1&region=US')
      const movies = await movieData.json()

      setTopRatedMovies(movies.results)
    }

    getTopRatedMovies()
  }, [])

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
        {topRatedMovies.map((trendingMovie, index) => (
          <Link key={index} to={`/movie/${trendingMovie.id}`} onClick={() => console.log(index)}>
            <MoviePoster src={`https://image.tmdb.org/t/p/w300${trendingMovie.poster_path}`} />
          </Link>
        ))}
      </Flickity>
    </div>
  )
}

export default TopRatedMovies