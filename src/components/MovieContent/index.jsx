import React from 'react'
import { Section } from './styles'
import TrendingMovies from '../TrendingMovies'
import NowPlayingMovies from '../NowPlayingMovies'

const MovieContent = () => {
  return (
    <Section>
      <TrendingMovies />
      <NowPlayingMovies />
    </Section>
  )
}

export default MovieContent