import React, { useEffect, useState } from 'react'
import { Section } from '../components/Section/styles'
import UpComingMovies from '../components/UpComingMovies'
import Loading from '../components/Loading'
import MovieCarousel from '../components/MovieCarousel'
import { FaFireAlt, FaStar } from 'react-icons/fa'

import "../assets/css/tailwind.css"
const TvShows = () => {
  document.title = 'Tv Shows'

  const [trendingTvShows, setTrendingTvShows] = useState()
  const [topRatedTvShows, setTopRatedTvShows] = useState()

  useEffect(() => {
    const fetchMoviesData = async () => {
      const topRatedTvShowsFetch = await fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=c2b569d95e4b2013348fb2f4430655a5&language=en-US&page=1&region=US')
      const topRatedTvShowsData = await topRatedTvShowsFetch.json()

      const trendingTvShowsFetch = await fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=c2b569d95e4b2013348fb2f4430655a5')
      const trendingTvShowsData = await trendingTvShowsFetch.json()

      console.log(trendingTvShowsData)

      setTrendingTvShows(trendingTvShowsData.results)
      setTopRatedTvShows(topRatedTvShowsData.results)
    }

    fetchMoviesData()
  }, [])

  return (
    <Section style={{
      gridArea: 'movie-content',
    }}>
      {trendingTvShows
        ? <MovieCarousel type="tv-show" data={trendingTvShows} sectionTitle="Trending Tv Shows" icon={<FaFireAlt size="1.25rem" style={{ marginLeft: '.75rem' }} color="orange" />} />
        : <Loading />
      }
      {topRatedTvShows
        ? <MovieCarousel type="tv-show" data={topRatedTvShows} sectionTitle="Top Rated Tv Shows" icon={<FaStar size="1.25rem" style={{ marginLeft: '.75rem' }} color="orange" />} />
        : <Loading />
      }
    </Section>
  )
}

export default TvShows