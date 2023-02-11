import React from 'react'
import SectionTitle from '../SectionTitle'
import { GiPopcorn } from 'react-icons/gi'
import UpcomingMovie from '../UpcomingMovie'
import styled from "styled-components";

const MovieSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  grid-area: upcoming-movies;
`

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