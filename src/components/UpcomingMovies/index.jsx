import React from 'react'
import { MovieSection } from './styles'
import SectionTitle from '../SectionTitle'
import { GiPopcorn } from 'react-icons/gi'
import UpcomingMovie from '../UpcomingMovie'

const UpcomingMovies = ({ upcomingMovies }) => {
  return (
    <MovieSection>
      <SectionTitle sectionTitle="Upcoming Movies" icon={<GiPopcorn size="1.25rem" style={{ marginLeft: '.75rem' }} />} />
      {upcomingMovies.map((upcomingMovie, index) => (
        <UpcomingMovie upcomingMovie={upcomingMovie} key={index} />
      ))}
    </MovieSection>
  )
}

export default UpcomingMovies