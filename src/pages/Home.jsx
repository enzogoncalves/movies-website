import React, { useState, useEffect } from 'react'
import { Section } from '../components/Section/styles'
import SectionTitle from '../components/SectionTitle'
import { GiPopcorn } from 'react-icons/gi'
import UpcomingMovie from '../components/UpcomingMovie'
import Loading from '../components/Loading'
import MediaCarousel from '../components/MediaCarousel'
import { FaFireAlt, FaStar } from 'react-icons/fa'
import styled from "styled-components";

const MovieSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  grid-area: upcoming-movies;
`

const Home = () => {
  document.title = 'Home'

  const [trendingMovies, setTrendingMovies] = useState()
  const [upcomingMovies, setUpcomingMovies] = useState()
  const [topRatedMovies, setTopRatedMovies] = useState()

  useEffect(() => {
    const fetchMoviesData = async () => {
      const topRatedMoviesFetch = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=c2b569d95e4b2013348fb2f4430655a5&language=en-US&page=1&region=US')
      const topRatedMoviesData = await topRatedMoviesFetch.json()

      const upcomingMoviesFetch = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=c2b569d95e4b2013348fb2f4430655a5&region=US&page=1&per_page=5')
      let upcomingMoviesData = await upcomingMoviesFetch.json()

      upcomingMoviesData = upcomingMoviesData.results.filter((movie) => {
        return movie.backdrop_path !== null
      })

      const trendingMoviesFetch = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=c2b569d95e4b2013348fb2f4430655a5')
      const trendingMoviesData = await trendingMoviesFetch.json()

      setTrendingMovies(trendingMoviesData.results)
      setUpcomingMovies(upcomingMoviesData.slice(0, 5))
      setTopRatedMovies(topRatedMoviesData.results)
    }

    fetchMoviesData()
  }, [])

  return (
    <Section style={{
      gridArea: 'movie-content',
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gridTemplateRows: 'auto 1fr',
      gridTemplateAreas: `'trending-movies upcoming-movies' 'top-rated-movies upcoming-movies'`
    }}>
      {trendingMovies
        ? <MediaCarousel type="movie" option={"trending-movies"} data={trendingMovies} sectionTitle="Trending Movies" icon={<FaFireAlt size="1.25rem" style={{ marginLeft: '.75rem' }} color="orange" />} />
        : <Loading />
      }
      {topRatedMovies
        ? <MediaCarousel type="movie" option={"topRatedMovies"} data={topRatedMovies} sectionTitle="Top Rated Movies" icon={<FaStar size="1.25rem" style={{ marginLeft: '.75rem' }} color="orange" />} />
        : <Loading />
      }
      {upcomingMovies
        ? <MovieSection>
          <SectionTitle sectionTitle="Upcoming Movies" icon={<GiPopcorn size="1.25rem" style={{ marginLeft: '.75rem' }} />} />
          {upcomingMovies.map((upcomingMovie, index) => (
            <UpcomingMovie upcomingMovie={upcomingMovie} key={index} />
          ))}
        </MovieSection>
        : <Loading type='upcomingMovies' />
      }
    </Section>
  )
}

export default Home