import React, { useState, useEffect } from 'react'
import { Section } from '../components/Section/styles'
import TrendingMovies from '../components/TrendingMovies'
import UpComingMovies from '../components/UpComingMovies'
import TopRatedMovies from '../components/TopRatedMovies'
import Loading from '../components/Loading'


const Home = () => {
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
        ? <TrendingMovies trendingMovies={trendingMovies} />
        : <Loading />
      }
      {upcomingMovies
        ? <UpComingMovies upcomingMovies={upcomingMovies} />
        : <Loading type='upcomingMovies' />
      }
      {topRatedMovies
        ? <TopRatedMovies topRatedMovies={topRatedMovies} />
        : <Loading />
      }
    </Section>
  )
}

export default Home