import React, { useState, useEffect } from 'react'
import { Section } from './styles'
import SectionTitle from '../SectionTitle'
import { GiPopcorn } from 'react-icons/gi'
import UpcomingMovie from '../UpcomingMovie'

const UpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([])

  useEffect(() => {
    const getUpcomingMovies = async () => {
      const movieData = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=c2b569d95e4b2013348fb2f4430655a5&region=US&page=1&per_page=5')
      let movies = await movieData.json()
      movies = movies.results.filter((movie) => {
        return movie.backdrop_path !== null
      })

      setUpcomingMovies(movies.slice(0, 5))
    }

    getUpcomingMovies()
  }, [])

  return (
    <Section>
      <SectionTitle sectionTitle="Upcoming Movies" icon={<GiPopcorn size="1.25rem" style={{ marginLeft: '.75rem' }} />} />
      {upcomingMovies.map((upcomingMovie, index) => (
        <UpcomingMovie upcomingMovie={upcomingMovie} key={index} />
      ))}
    </Section>
  )
}

export default UpcomingMovies