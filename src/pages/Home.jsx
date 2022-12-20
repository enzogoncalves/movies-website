import React from 'react'
import { Section } from '../components/Section/styles'
import TrendingMovies from '../components/TrendingMovies'
import UpComingMovies from '../components/UpComingMovies'
import TopRatedMovies from '../components/TopRatedMovies'

const Home = () => {
  return (
    <Section style={{
      gridArea: 'movie-content',
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gridTemplateRows: 'auto 1fr',
      gridTemplateAreas: `'trending-movies upcoming-movies' 'top-rated-movies upcoming-movies'`
    }}>
      <TrendingMovies />
      <UpComingMovies />
      <TopRatedMovies />
    </Section>
  )
}

export default Home