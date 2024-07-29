import styled from 'styled-components'

interface HomeSectionType {
	display?: "grid"
}

export const HomeSection = styled.section<HomeSectionType>`
  padding-right: .5rem;
  padding-left: .5rem;
  padding-top: 78px;
  padding-bottom: 1rem;
  display: ${props => props.display || 'block'};
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas: 'trending-movies' 'top-rated-movies' 'upcoming-movies';

  @media (min-width: 640px) {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }

  @media (min-width: 1189px) {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr;
    grid-template-areas: 'trending-movies upcoming-movies' 'top-rated-movies upcoming-movies';
  }
`