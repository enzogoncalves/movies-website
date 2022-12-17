import React, { useState, useEffect } from 'react'
import { Section } from './styles'
import SectionTitle from '../SectionTitle'
import { GiPopcorn } from 'react-icons/gi'
import NowPlayingMovie from '../NowPlayingMovie'

const NowPlayingMovies = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const movieData = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=c2b569d95e4b2013348fb2f4430655a5&language=en-US&page=1&per_page=5')
      const movies = await movieData.json()

      setNowPlayingMovies(movies.results.slice(0, 5))
    }

    getNowPlayingMovies()
  }, [])

  return (
    <Section>
      <SectionTitle sectionTitle="Now Playing" icon={<GiPopcorn size="1.25rem" style={{ marginLeft: '.75rem' }} />} />
      {nowPlayingMovies.map((nowPlayingMovie, index) => (
        <NowPlayingMovie nowPlayingMovie={nowPlayingMovie} key={index} />
      ))}
    </Section>
  )
}

export default NowPlayingMovies