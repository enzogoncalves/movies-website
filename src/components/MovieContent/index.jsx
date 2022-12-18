import React from 'react'
import { Section } from './styles'
import TrendingMovies from '../TrendingMovies'
import UpComingMovies from '../UpComingMovies'
import TopRatedMovies from '../TopRatedMovies'

const MovieContent = () => {
  return (
    <Section>
      <TrendingMovies />
      <UpComingMovies />
      <TopRatedMovies />
    </Section>
  )
}

export default MovieContent