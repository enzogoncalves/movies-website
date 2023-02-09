import React from 'react'
import { Section } from './styles'
import SectionTitle from '../SectionTitle'
import { GiPopcorn } from 'react-icons/gi'
import UpcomingMovie from '../UpcomingMovie'

const UpcomingMovies = ({ upcomingMovies }) => {
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